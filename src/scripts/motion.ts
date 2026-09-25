import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const root = document.documentElement;
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Single source of truth for the sticky-header clearance, in px.
 * `scroll-padding-top: 6rem` in global.css must stay in sync with this value.
 */
const HEADER_OFFSET = 96;

root.dataset.motion = 'ready';

/* ------------------------------------------------------------------ *
 * Smooth scroll — Lenis. Disabled entirely under reduced motion so the
 * native (instant) scroll behaviour is respected.
 * ------------------------------------------------------------------ */
let lenis: Lenis | null = null;

if (!prefersReduced) {
  lenis = new Lenis({
    duration: 1.05,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 1.6,
  });

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis?.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const hash = link.getAttribute('href');
      if (!hash || hash.length < 2) return;
      const target = document.querySelector<HTMLElement>(hash);
      if (!target) return;

      event.preventDefault();

      // The skip link must also move focus into <main>; cancelling the default
      // fragment navigation would otherwise strand keyboard focus in the header.
      if (link.classList.contains('skip-link')) {
        if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }

      lenis?.scrollTo(target, { offset: -HEADER_OFFSET });
    });
  });
}

/* ------------------------------------------------------------------ *
 * Header scrolled state
 * ------------------------------------------------------------------ */
const header = document.querySelector<HTMLElement>('[data-header]');

if (header) {
  const sync = () => header.classList.toggle('is-scrolled', window.scrollY > 40);
  window.addEventListener('scroll', sync, { passive: true });
  sync();
}

/* ------------------------------------------------------------------ *
 * In-page deep links (#slug). Lenis replaces the native fragment scroll,
 * so an incoming hash on first load has to be honoured manually.
 * ------------------------------------------------------------------ */
const honorInitialHash = () => {
  if (!lenis) return;
  const hash = window.location.hash;
  if (hash.length < 2) return;
  const target = document.querySelector<HTMLElement>(hash);
  if (!target) return;
  lenis.scrollTo(target, { offset: -HEADER_OFFSET, immediate: true });
};

/* ------------------------------------------------------------------ *
 * Pause perpetual animations while their element is off screen.
 * ------------------------------------------------------------------ */
const animateOnlyWhileVisible = (el: Element, animation: gsap.core.Animation) => {
  animation.pause();
  new IntersectionObserver(
    ([entry]) => (entry.isIntersecting ? animation.play() : animation.pause()),
    { rootMargin: '160px' },
  ).observe(el);
};

/* ------------------------------------------------------------------ *
 * Seal ring — slow perpetual rotation
 * ------------------------------------------------------------------ */
const sealRing = document.querySelector('[data-seal-ring]');

if (sealRing && !prefersReduced) {
  animateOnlyWhileVisible(
    sealRing,
    gsap.to(sealRing, {
      rotation: 360,
      duration: 110,
      repeat: -1,
      ease: 'none',
      svgOrigin: '100 100',
    }),
  );
}

/* ------------------------------------------------------------------ *
 * Scales of justice — line draw, then a gentle perpetual balance.
 * ------------------------------------------------------------------ */
const scales = document.querySelector('[data-scales]');

if (scales) {
  const drawn = scales.querySelectorAll<SVGGeometryElement>('[data-draw]');
  const beam = scales.querySelector('[data-scales-beam]');
  const leftPan = scales.querySelector('[data-scales-pan="left"]');
  const rightPan = scales.querySelector('[data-scales-pan="right"]');

  if (prefersReduced) {
    gsap.set(drawn, { strokeDashoffset: 0 });
  } else {
    gsap.timeline({ scrollTrigger: { trigger: scales, start: 'top 82%', once: true } }).to(drawn, {
      strokeDashoffset: 0,
      duration: 1.3,
      stagger: 0.055,
      ease: 'power2.inOut',
    });

    if (beam && leftPan && rightPan) {
      animateOnlyWhileVisible(
        scales,
        gsap
          .timeline({
            repeat: -1,
            yoyo: true,
            delay: 1.5,
            defaults: { duration: 3.6, ease: 'sine.inOut' },
          })
          .to(beam, { rotation: 2.1, svgOrigin: '160 80' }, 0)
          .to(leftPan, { rotation: -2.1, svgOrigin: '52 84' }, 0)
          .to(rightPan, { rotation: -2.1, svgOrigin: '268 84' }, 0),
      );
    }
  }
}

/* ------------------------------------------------------------------ *
 * Scroll reveals. Above-the-fold content uses the CSS entrance
 * animations in global.css instead, so it never waits on this bundle.
 * ------------------------------------------------------------------ */
if (!prefersReduced) {
  ScrollTrigger.batch('[data-reveal]', {
    start: 'top 86%',
    once: true,
    onEnter: (batch) =>
      gsap.fromTo(
        batch,
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.085, ease: 'power3.out', overwrite: true },
      ),
  });
}

/* ------------------------------------------------------------------ *
 * Desktop-only parallax.
 * ------------------------------------------------------------------ */
const mm = gsap.matchMedia();

mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
    const speed = Number(el.dataset.parallax ?? 0.12) || 0.12;
    const trigger = el.closest('section') ?? el;

    gsap.fromTo(
      el,
      { yPercent: -speed * 60 },
      {
        yPercent: speed * 60,
        ease: 'none',
        scrollTrigger: { trigger, start: 'top bottom', end: 'bottom top', scrub: true },
      },
    );
  });

  return () => {};
});

/* Recalculate trigger positions once fonts and images have settled, then
   honour any incoming #slug deep link. */
if (document.fonts) {
  document.fonts.ready.then(() => ScrollTrigger.refresh());
}

window.addEventListener('load', () => {
  ScrollTrigger.refresh();
  honorInitialHash();
});
