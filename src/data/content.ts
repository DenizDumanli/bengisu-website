/**
 * TEK MERKEZİ İÇERİK DOSYASI
 * ==========================
 * Sitedeki tüm okunabilir metinler burada tutulur: sayfa başlıkları,
 * açıklamalar, buton yazıları, etiketler, menü, iletişim bilgileri, büro
 * kimliği, özgeçmiş listeleri ve faaliyet alanları.
 *
 * Metin değiştirmek için sayfalara veya bileşenlere dokunmanız gerekmez;
 * yalnızca bu dosyayı düzenleyin.
 *
 * Düzenleme notları
 * -----------------
 * - `identity` / `contact`: büro kimliği ve iletişim bilgileri. Bundan türeyen
 *   büyük harfli yazımlar (üst menü flaması, mühür halkası, JSON-LD) otomatik
 *   oluşturulur; ayrıca yazmanıza gerek yoktur.
 * - `nav`: üst ve alt menü. `href` değerlerinde sondaki eğik çizgi korunmalıdır.
 * - `ui`: her sayfada tekrar eden ortak yazılar (butonlar, aria etiketleri, notlar).
 * - `home` / `about` / `practiceAreas` / `contact` / `notFound`: sayfa sayfa metinler.
 *   İçindeki `id` alanları sayfa içi bağlantı çapalarıdır; birini değiştirirseniz
 *   o çapaya verilen bağlantıları da güncelleyin.
 * - `cv`: özgeçmiş verileri. `bio` anahtarları, hangi paragrafın nerede
 *   görüneceğini belirtmek için kullanılır.
 * - `practiceAreas.areas[].slug`: faaliyet alanı çapasıdır; değiştirmeyin.
 *
 * Tüm ağaç `as const` ile dondurulduğu için yazım hataları `npm.cmd run check`
 * ile yakalanır.
 */

const LOCALE = 'tr' as const;

const NAME = 'Bengisu Arslan';
const FULL_NAME = 'Av. Bengisu Arslan';
const ROLE = 'Avukat';
const NAV_ROLE_LABEL = 'Avukatlık & Hukuki Danışmanlık';
const OFFICE = 'Hukuk Bürosu';
const CITY = 'Ankara';
const LOCATION = 'Ankara, Türkiye';
const TAGLINE = 'Mevzuata uygunluk, yasal risk analizi ve uyuşmazlık çözümü.';
const STARTED = 'Ocak 2024’ten beri';
const FOUNDED = 2024;

const PHONE = '+90 542 494 55 41';
const PHONE_HREF = '+905424945541';
const EMAIL = 'bengisuarslan006@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/bengisu-arslan-09b933199';
const LINKEDIN_LABEL = 'linkedin.com/in/bengisu-arslan-09b933199';

const SITE_TITLE = `Ankara Avukat | ${FULL_NAME}`;
const SITE_DESCRIPTION =
  'Ankara’da serbest avukat Av. Bengisu Arslan: dava takibi, hukuki danışmanlık, sözleşme yönetimi ve uyuşmazlık çözümü. Randevu için iletişime geçin.';

const upper = (value: string) => value.toLocaleUpperCase('tr-TR');

export const CONTENT = {
  locale: LOCALE,

  /* ------------------------------------------------------------------ *
   * BÜRO KİMLİĞİ
   * ------------------------------------------------------------------ */
  identity: {
    name: NAME,
    fullName: FULL_NAME,
    role: ROLE,
    office: OFFICE,
    tagline: TAGLINE,
    founded: FOUNDED,
    startedLabel: STARTED,
    /** Otomatik türetilen yazımlar — elle değiştirmeyin. */
    wordmark: upper(NAME),
    roleLabel: upper(NAV_ROLE_LABEL),
    officeLabel: upper(OFFICE),
    /** Mühür halkasında dönen yazı. */
    sealRing: `${[ROLE, NAME, OFFICE, CITY].map(upper).join(' · ')} ·`,
    /** Dekoratif logo görselinin alternatif metni. */
    sealAlt: `${NAME} — avukatlık monogramı`,
    /** Logo bağlantısının ekran okuyucu etiketi. */
    homeLabel: `${FULL_NAME} ana sayfa`,
  },

  /* ------------------------------------------------------------------ *
   * İLETİŞİM
   * ------------------------------------------------------------------ */
  contact: {
    phone: PHONE,
    phoneHref: PHONE_HREF,
    email: EMAIL,
    linkedin: LINKEDIN,
    linkedinLabel: LINKEDIN_LABEL,
    city: CITY,
    location: LOCATION,
    country: 'Türkiye',
    countryCode: 'TR',
  },

  /* ------------------------------------------------------------------ *
   * ARAMA MOTORU / SOSYAL MEDYA
   * ------------------------------------------------------------------ */
  seo: {
    /** Ana sayfa başlığı (tarayıcı sekmesi + paylaşım kartı). */
    siteTitle: SITE_TITLE,
    siteDescription: SITE_DESCRIPTION,
    /** Yapılandırılmış veride (JSON-LD) görünen büro adı. */
    schemaName: `${NAME} — ${OFFICE}`,
    schemaLanguages: ['tr', 'en'],
    ogType: 'website',
    ogLocale: 'tr_TR',
    twitterCard: 'summary_large_image',
    ogImageAlt: 'Av. Bengisu Arslan — Ankara’da serbest avukat, hukuk bürosu.',
    robotsNoindex: 'noindex, nofollow',
  },

  /* ------------------------------------------------------------------ *
   * MENÜ
   * ------------------------------------------------------------------ */
  nav: [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'Hakkımda', href: '/hakkimda/' },
    { label: 'Faaliyet Alanları', href: '/faaliyet-alanlari/' },
    { label: 'İletişim', href: '/iletisim/' },
  ],

  /* ------------------------------------------------------------------ *
   * ORTAK ARAYÜZ YAZILARI
   * ------------------------------------------------------------------ */
  ui: {
    skipToContent: 'İçeriğe geç',
    menuOpen: 'Menüyü aç',
    menuClose: 'Menüyü kapat',
    buttons: {
      appointment: 'Randevu Talebi',
      practiceAreas: 'Faaliyet Alanları',
      about: 'Hakkımda',
      contact: 'İletişim',
      home: 'Ana Sayfa',
    },
    aria: {
      mainNav: 'Ana menü',
      mobileNav: 'Mobil menü',
      footerNav: 'Alt menü',
    },
    labels: {
      education: 'Eğitim',
      experience: 'Deneyim',
      internship: 'Staj',
      allResume: 'Tüm özgeçmiş',
      menuHeading: 'Menü',
      contactHeading: 'İletişim',
      linkedinLink: 'LinkedIn',
      details: 'Detaylı bilgi',
    },
    notes: {
      practice:
        'Faaliyet alanları, büro tarafından yürütülen çalışmaların kapsamını tanımlar; her uyuşmazlık kendi koşulları içinde değerlendirilir. Bu sayfadaki bilgiler tanıtım amaçlıdır ve hukuki mütalaa niteliği taşımaz.',
      confidentiality:
        'Paylaşacağınız bilgiler, avukat–müvekkil ilişkisi kurulmadan önce de gizlilik içinde değerlendirilir. Ancak iletilen bir mesaj tek başına vekâlet ilişkisi doğurmaz.',
      footerDisclaimer:
        'Bu site tanıtım ve bilgilendirme amaçlıdır; hukuki mütalaa niteliği taşımaz.',
      license: 'Tüm hakları saklıdır.',
    },
  },

  /* ------------------------------------------------------------------ *
   * ÖZGEÇMİŞ VERİLERİ
   * ------------------------------------------------------------------ */
  cv: {
    /** Biyografi paragrafları. `home`/`about` bölümleri bu anahtarlara atıf yapar. */
    bio: {
      graduation:
        '2018 yılında Tuzluçayır Anadolu Lisesi’nden okul birinciliği ile mezun olduktan sonra hukuk eğitimimi 2022 yılında Kırıkkale Üniversitesi Hukuk Fakültesi’nde tamamladım.',
      publicLaw:
        'Lisans sürecimde T.C. Anayasa Mahkemesi ve Türkiye Büyük Millet Meclisi bünyesinde gerçekleştirdiğim stajlar sayesinde kamu hukuku, yasama teknikleri ve idari işleyiş konularında derinlemesine yetkinlik kazandım.',
      practice:
        'Ocak 2024’ten bu yana Ankara’da serbest avukat olarak; mevzuata uygunluk, yasal risk analizi ve uyuşmazlık çözümü alanlarında faaliyet gösteriyorum.',
      academic:
        'Akademik gelişimimi İstanbul Üniversitesi Açıköğretim Fakültesi Siyaset Bilimi ve Kamu Yönetimi bölümünde sürdürerek hukuki bilgimi idari yönetim perspektifiyle güçlendirmeyi hedefliyor, çözüm odaklı bir yaklaşımla çalışıyorum.',
    },

    education: [
      {
        degree: 'Siyaset Bilimi ve Kamu Yönetimi',
        school: 'İstanbul Üniversitesi Açıköğretim Fakültesi',
        period: '2023 — Halen',
        note: 'Hukuki bilgiyi idari yönetim perspektifiyle güçlendirme',
      },
      {
        degree: 'Hukuk Fakültesi',
        school: 'Kırıkkale Üniversitesi',
        period: '2018 — 2022',
        note: '',
      },
      {
        degree: 'Lise',
        school: 'Tuzluçayır Anadolu Lisesi',
        period: '2018',
        note: 'Okul birinciliği ile mezuniyet',
      },
    ],

    experience: [
      {
        role: 'Avukat',
        org: 'Serbest Avukatlık — Ankara',
        period: 'Ocak 2024 — Halen',
        items: [
          'Dava takibi ve yargılama süreçlerinin yürütülmesi',
          'Hukuki danışmanlık ve mevzuat değişikliklerinin takibi',
          'Dava dilekçelerinin ve hukuki metinlerin hazırlanması',
          'Uyuşmazlık çözümü ve müzakere süreçlerinin yönetimi',
          'Sözleşme yönetimi ve yasal risk analizleri ile olası ihtilafların önlenmesi',
        ],
      },
    ],

    internships: [
      {
        org: 'Türkiye Büyük Millet Meclisi',
        period: 'Temmuz 2022',
        items: [
          'Yasama süreçlerinin takibi ve kamu hukuku uygulamalarının incelenmesi',
          'Kurumsal işleyiş protokolleri ve bürokratik yazışma usulleri üzerine deneyim',
        ],
      },
      {
        org: 'T.C. Anayasa Mahkemesi',
        period: 'Şubat 2022',
        items: [
          'Bireysel başvuru dosyalarının ve hukuki metinlerin mevzuat yönünden tetkiki',
          'Hukuki araştırma, raporlama ve üst kurula sunulacak değerlendirme taslaklarının hazırlanması',
        ],
      },
    ],

    memberships: [
      { org: 'ELSA Ankara', role: 'Aktif Üye', period: 'Eylül 2019 — Halen' },
      {
        org: 'Genç Hukukçular Derneği',
        role: 'Yönetim Kurulu Üyesi',
        period: 'Mart 2021 — Nisan 2024',
      },
      {
        org: 'Hukuki Bakış Topluluğu',
        role: 'Topluluk Kurucu Başkanı',
        period: 'Nisan 2019 — Eylül 2022',
      },
    ],

    certifications: [
      { title: 'Kripto Para Düzenlemeleri ve THODEX Olayı', org: 'Hukuk Atölyesi Kulübü' },
      { title: 'Ülkemizde Para ve Kripto Para Eğitimi', org: 'Ankara Hukuk Parlamento Kulübü' },
      { title: 'Yapay Zekâya Giriş Eğitimi', org: 'TOBB × Global AI Hub' },
      {
        title: 'Bilişim Hukuku Semineri',
        org: 'Ankara Barosu — Hukuk Fakülteleri ile İletişim ve İşbirliği Kurulu',
      },
      { title: 'Gündemin Boyutu, Dijitalin Hukuku', org: 'Hukuk ve Etik Topluluğu' },
      { title: 'Uluslararası Tahkim Sempozyumu', org: 'Ankara Yıldırım Beyazıt Üniversitesi' },
      { title: 'Kadın Hakları Çalıştayı', org: 'Girişimci Hukukçular Derneği' },
    ],

    skills: [
      {
        title: 'Teknik & Mesleki Yetkinlikler',
        items: [
          'Duruşma ve müvekkil yönetimi',
          'Hukuki araştırma ve mevzuat analizi',
          'Dijital hukuk araçları — UYAP Avukat Portalı, E-İmza, mevzuat ve içtihat bankaları',
          'Hukuki yazım teknikleri',
        ],
      },
      {
        title: 'Kişisel & Sosyal Beceriler',
        items: [
          'Analitik muhakeme ve strateji geliştirme',
          'Zaman ve süre yönetimi',
          'Takım çalışmasına yatkınlık',
          'Etkili yazılı ve sözlü iletişim',
          'Microsoft Office programları',
        ],
      },
    ],

    languages: [
      { name: 'Türkçe', level: 'Ana dil' },
      { name: 'İngilizce', level: 'Mesleki yeterlilik' },
    ],
  },

  /* ------------------------------------------------------------------ *
   * ANA SAYFA
   * ------------------------------------------------------------------ */
  home: {
    seo: { title: SITE_TITLE, description: SITE_DESCRIPTION },
    hero: {
      eyebrow: `Serbest Avukatlık · ${CITY}`,
      /** Sayfanın sol kenarındaki dikey şerit. */
      rail: `${CITY} · ${OFFICE} · ${FOUNDED}`,
      /** Büyük isim: her satır ayrı maskelenir. */
      nameLines: ['BENGİSU', 'ARSLAN'],
      lead: `${TAGLINE} Ankara’da serbest avukat olarak dava takibi, hukuki danışmanlık ve sözleşme yönetimi alanlarında hizmet veriyorum.`,
      caption: STARTED,
      meta: [
        { label: 'Konum', value: LOCATION },
        { label: 'Faaliyet', value: 'Mevzuat uyumu · Risk analizi · Uyuşmazlık çözümü' },
        { label: 'Diller', value: 'Türkçe · İngilizce' },
      ],
    },
    intro: {
      id: 'tanitim',
      numeral: 'I',
      eyebrow: 'Tanıtım',
      statement:
        'Dosyayı bütünüyle okuyan, mevzuatı güncel haliyle tarayan ve süreci baştan öngörülebilir kılan bir hukuki yaklaşım.',
      /** Gösterilecek biyografi paragrafları, sırasıyla (cv.bio anahtarları). */
      paragraphs: ['practice', 'graduation', 'academic'],
    },
    practice: {
      id: 'alanlar',
      numeral: 'II',
      eyebrow: 'Faaliyet Alanları',
      title: 'Yürütülen çalışma alanları',
      lead: 'Büroda yürütülen işler; mevzuata uygunluk, yasal risk analizi ve uyuşmazlık çözümü başlıkları altında toplanır.',
    },
    approach: {
      id: 'yaklasim',
      numeral: 'III',
      eyebrow: 'Yaklaşım',
      title: 'Çözüm odaklı, öngörülebilir bir yöntem',
      principles: [
        {
          numeral: 'I',
          title: 'Mevzuata Uygunluk',
          text: 'Her dosyada güncel mevzuat ve içtihat taranır; hukuki zemin netleşmeden adım atılmaz.',
        },
        {
          numeral: 'II',
          title: 'Yasal Risk Analizi',
          text: 'İhtilaf doğmadan önce sözleşme ve süreçler incelenerek olası riskler öngörülür ve sınırlandırılır.',
        },
        {
          numeral: 'III',
          title: 'Uyuşmazlık Çözümü',
          text: 'Öncelik müzakere ve sulh yoluyla çözümdedir; yargılama gerektiğinde süreç titizlikle takip edilir.',
        },
      ],
    },
    credentials: {
      id: 'deneyim',
      numeral: 'IV',
      eyebrow: 'Eğitim & Deneyim',
      title: 'Kamu hukukundan serbest avukatlığa',
      /** Deneyim maddelerinden kaç tanesi ana sayfada gösterilsin. */
      highlightCount: 3,
    },
    quote: {
      text: 'Hukuki bilgiyi idari yönetim perspektifiyle güçlendiren, çözüm odaklı bir yaklaşım.',
      attribution: FULL_NAME,
    },
    cta: {
      eyebrow: 'Görüşme',
      title: 'Dosyanızı birlikte değerlendirelim.',
      text: 'İlk görüşme talebiniz için telefon veya e-posta ile ulaşabilir; kısa bir ön bilgilendirme ile randevu oluşturabilirsiniz.',
    },
  },

  /* ------------------------------------------------------------------ *
   * HAKKIMDA
   * ------------------------------------------------------------------ */
  about: {
    seo: {
      title: 'Ankara Avukat Hakkında',
      description:
        'Ankara’da serbest avukat Av. Bengisu Arslan’ın eğitimi, mesleki deneyimi, stajları, üyelikleri, sertifikaları ve yetkinlikleri.',
    },
    hero: {
      numeral: 'I',
      eyebrow: 'Özgeçmiş',
      title: 'Hakkımda',
      lead: `Kırıkkale Üniversitesi Hukuk Fakültesi mezunu; Anayasa Mahkemesi ve TBMM stajlarının ardından ${STARTED} Ankara’da serbest avukat.`,
    },
    biography: {
      id: 'biyografi',
      numeral: 'II',
      eyebrow: 'Biyografi',
      title: 'Hukuki yaklaşımım',
      /** Tüm biyografi paragrafları, sırasıyla (cv.bio anahtarları). */
      paragraphs: ['graduation', 'publicLaw', 'practice', 'academic'],
    },
    card: {
      aria: 'Künye',
      labels: {
        name: 'Ad',
        location: 'Konum',
        activity: 'Faaliyet',
        languages: 'Diller',
        link: 'Bağlantı',
      },
      activityValue: `Serbest avukatlık · ${STARTED}`,
    },
    education: { id: 'egitim', numeral: 'III', eyebrow: 'Eğitim', title: 'Akademik geçmiş' },
    experience: { id: 'deneyim', numeral: 'IV', eyebrow: 'İş Deneyimi', title: 'Mesleki deneyim' },
    internships: { numeral: 'V', eyebrow: 'Staj Deneyimi', title: 'Kurumsal stajlar' },
    memberships: {
      id: 'uyelikler',
      numeral: 'VI',
      eyebrow: 'Üyelikler ve Faaliyetler',
      title: 'Mesleki topluluklarda yer almak',
    },
    certifications: {
      id: 'sertifikalar',
      numeral: 'VII',
      eyebrow: 'Eğitim ve Nitelikler',
      title: 'Sertifika ve programlar',
    },
    skills: {
      id: 'yetkinlikler',
      numeral: 'VIII',
      eyebrow: 'Yetkinlikler',
      title: 'Teknik ve kişisel beceriler',
      lead: 'Duruşma yönetiminden hukuki yazıma, dijital hukuk araçlarından müzakereye uzanan bir beceri seti.',
    },
    cta: {
      aria: 'İletişim çağrısı',
      title: 'Hukuki bir sorunuz için görüşme talep edin.',
    },
  },

  /* ------------------------------------------------------------------ *
   * FAALİYET ALANLARI SAYFASI
   * ------------------------------------------------------------------ */
  /* ------------------------------------------------------------------ *
   * FAALİYET ALANI DETAY SAYFALARI — SEO META (slug ile eşleşir)
   * ------------------------------------------------------------------ */
  practiceAreaSeo: {
    'dava-takibi': {
      title: 'Dava Takibi ve Yargılama',
      description:
        'Ankara’da dava takibi: dilekçe hazırlığı, duruşma ve süre yönetimi, müvekkil temsili. Av. Bengisu Arslan ile değerlendirin.',
    },
    'hukuki-danismanlik': {
      title: 'Hukuki Danışmanlık ve Uyum',
      description:
        'Ankara’da hukuki danışmanlık ve mevzuat uyumu: değişikliklerin takibi, uyum değerlendirmesi ve yazılı hukuki görüş.',
    },
    'sozlesme-yonetimi': {
      title: 'Sözleşme ve Yasal Risk Analizi',
      description:
        'Ankara’da sözleşme yönetimi ve yasal risk analizi: sözleşme hazırlama, inceleme ve olası ihtilafların önlenmesi.',
    },
    'uyusmazlik-cozumu': {
      title: 'Uyuşmazlık Çözümü ve Müzakere',
      description:
        'Ankara’da uyuşmazlık çözümü: müzakere ve sulh öncelikli yaklaşım, gerektiğinde yargı yolunun etkin kullanımı.',
    },
    'bilisim-hukuku': {
      title: 'Bilişim ve Teknoloji Hukuku',
      description:
        'Ankara’da bilişim hukuku: dijital uyuşmazlıklar, kripto varlık düzenlemeleri ve yapay zekânın hukuki etkileri.',
    },
    'kamu-hukuku': {
      title: 'Kamu Hukuku ve İdari Süreçler',
      description:
        'Ankara’da kamu hukuku ve idari süreçler: idari işleyiş, yazışma usulleri ve mevzuat incelemesi.',
    },
  },

  practiceAreas: {
    seo: {
      title: 'Avukatlık Faaliyet Alanları',
      description:
        'Ankara’da avukatlık hizmetleri: dava takibi, hukuki danışmanlık, sözleşme yönetimi, uyuşmazlık çözümü, bilişim ve kamu hukuku.',
    },
    hero: {
      numeral: 'II',
      eyebrow: 'Çalışma Alanları',
      title: 'Faaliyet Alanları',
      lead: 'Büroda yürütülen işler altı başlık altında toplanır. Her başlık, dosyanın başlangıcından sonuçlandırılmasına kadar aynı titizlikle ele alınır.',
    },
    listAria: 'Faaliyet alanları listesi',
    cta: {
      aria: 'Görüşme çağrısı',
      eyebrow: 'Sonraki Adım',
      title: 'Uyuşmazlığınızı kısaca anlatın.',
      text: 'Dosyanızın kapsamını değerlendirmek ve izlenecek yolu belirlemek için ilk görüşmeyi planlayalım.',
    },
    /** `slug` sayfa içi bağlantı çapasıdır — değiştirmeyin. */
    areas: [
      {
        slug: 'dava-takibi',
        numeral: 'I',
        title: 'Dava Takibi ve Yargılama Süreçleri',
        summary:
          'Dava açılışından kararın icrasına kadar tüm yargılama sürecinin düzenli takibi ve müvekkil bilgilendirmesi.',
        items: [
          'Dava dilekçelerinin ve hukuki metinlerin hazırlanması',
          'Duruşmaların takibi ve müvekkil temsili',
          'Dosya ve süre yönetimi ile usul güvenliğinin sağlanması',
        ],
      },
      {
        slug: 'hukuki-danismanlik',
        numeral: 'II',
        title: 'Hukuki Danışmanlık ve Mevzuat Uyumu',
        summary:
          'Değişen mevzuatın takibi, uyum değerlendirmesi ve gündelik hukuki sorulara yazılı danışmanlık.',
        items: [
          'Mevzuat değişikliklerinin izlenmesi ve etki değerlendirmesi',
          'Hukuki araştırma, raporlama ve görüş hazırlanması',
          'Kurum içi süreçlerin mevzuata uygunluk yönünden incelenmesi',
        ],
      },
      {
        slug: 'sozlesme-yonetimi',
        numeral: 'III',
        title: 'Sözleşme Yönetimi ve Yasal Risk Analizi',
        summary:
          'Sözleşmelerin hazırlanması, incelenmesi ve ihtilaf doğmadan risklerin öngörülerek sınırlandırılması.',
        items: [
          'Sözleşme taslağı hazırlanması ve revizyonu',
          'Yasal risk analizi ve olası ihtilafların önlenmesi',
          'Sözleşmesel yükümlülüklerin takibi',
        ],
      },
      {
        slug: 'uyusmazlik-cozumu',
        numeral: 'IV',
        title: 'Uyuşmazlık Çözümü ve Müzakere',
        summary:
          'Öncelikli hedef, müzakere ve sulh yoluyla çözüm; gerektiğinde yargı yolunun etkin kullanımı.',
        items: [
          'Müzakere ve sulh görüşmelerinin yürütülmesi',
          'Uyuşmazlık stratejisinin kurgulanması',
          'Alternatif çözüm yollarının değerlendirilmesi',
        ],
      },
      {
        slug: 'bilisim-hukuku',
        numeral: 'V',
        title: 'Bilişim ve Teknoloji Hukuku',
        summary:
          'Dijitalleşen ticari ve kişisel ilişkilerde bilişim hukuku, kripto varlıklar ve yapay zekâ gündeminin hukuki boyutu.',
        items: [
          'Bilişim hukuku kapsamındaki uyuşmazlıklar',
          'Kripto para düzenlemeleri ve dijital varlıklara ilişkin değerlendirme',
          'Yapay zekâ uygulamalarının hukuki etkilerinin izlenmesi',
        ],
      },
      {
        slug: 'kamu-hukuku',
        numeral: 'VI',
        title: 'Kamu Hukuku ve İdari Süreçler',
        summary:
          'Anayasa Mahkemesi ve TBMM deneyimiyle kamu hukuku, yasama teknikleri ve idari işleyiş alanlarında yetkinlik.',
        items: [
          'İdari süreçlerin ve yazışma usullerinin takibi',
          'Mevzuat ve hukuki metinlerin incelenmesi',
          'Kamu hukuku uygulamalarının değerlendirilmesi',
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ *
   * İLETİŞİM SAYFASI
   * ------------------------------------------------------------------ */
  contactPage: {
    seo: {
      title: 'İletişim ve Randevu',
      description:
        'Ankara’daki hukuk büromuzla iletişime geçin: telefon, e-posta, LinkedIn ve randevu talebi.',
    },
    hero: {
      numeral: 'III',
      eyebrow: 'İletişim',
      title: 'İletişim',
      lead: 'Dosyanıza ilişkin kısa bir ön bilgilendirme ile iletişime geçebilirsiniz. İlk değerlendirme sonrası izlenecek yol birlikte belirlenir.',
    },
    channelsHeading: 'İletişim kanalları',
    /** `id`, iletişim bilgisinin hangi alandan beslendiğini belirtir. */
    channels: [
      { id: 'phone', label: 'Telefon', note: 'Hafta içi mesai saatlerinde' },
      { id: 'email', label: 'E-posta', note: '24 saat içinde dönüş hedeflenir' },
      { id: 'linkedin', label: 'LinkedIn', note: LINKEDIN_LABEL },
      { id: 'location', label: 'Konum', note: 'Görüşmeler randevu ile planlanır' },
    ],
    linkedinValue: 'Profil',
    details: {
      phone: 'Telefon',
      email: 'E-posta',
      location: 'Konum',
    },
    form: {
      id: 'form',
      eyebrow: 'Randevu Talebi',
      title: 'Talebinizi yazın',
      text: 'Aşağıdaki alanları doldurduğunuzda e-posta uygulamanızda hazır bir mesaj oluşturulur. Dilerseniz doğrudan telefonla da ulaşabilirsiniz.',
      labels: {
        name: 'Ad Soyad',
        phone: 'Telefon',
        email: 'E-posta',
        subject: 'Konu',
        message: 'Mesajınız',
      },
      consent:
        'Paylaştığım bilgilerin yalnızca talebimin yanıtlanması amacıyla işlenmesine onay veriyorum.',
      submit: 'Talebi Gönder',
      hint: 'Form, e-posta uygulamanızda bir mesaj taslağı oluşturur.',
      status: 'E-posta uygulamanız açılıyor. Açılmazsa doğrudan e-posta gönderebilirsiniz.',
      /** Oluşturulan e-posta taslağının başlığı ve alan adları. */
      mailSubjectPrefix: 'Web sitesi talebi',
      mailFields: {
        name: 'Ad Soyad',
        phone: 'Telefon',
        email: 'E-posta',
      },
    },
  },

  /* ------------------------------------------------------------------ *
   * 404
   * ------------------------------------------------------------------ */
  notFound: {
    seo: { title: 'Sayfa bulunamadı' },
    code: '404',
    title: 'Sayfa bulunamadı',
    text: 'Aradığınız sayfa taşınmış veya hiç var olmamış olabilir. Aşağıdaki bağlantılardan devam edebilirsiniz.',
  },
} as const;
