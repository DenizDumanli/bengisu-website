# Third-Party Credits

Every external template, layout, component, font, icon set, image, or library used in this site must
be recorded here **before** it is integrated. Unlicensed assets must not ship.

Add a row per asset. Keep the source URL so the license can be re-verified later.

## Assets

| Asset                  | Type       | Source URL                                   | Author                   | License                      | Attribution required | Integrated in                                                                             |
| :--------------------- | :--------- | :------------------------------------------- | :----------------------- | :--------------------------- | :------------------- | :---------------------------------------------------------------------------------------- |
| Cinzel (variable)      | Font       | https://fontsource.org/fonts/cinzel          | Natanael Gama            | OFL-1.1                      | No                   | `@fontsource-variable/cinzel`                                                             |
| EB Garamond (variable) | Font       | https://fontsource.org/fonts/eb-garamond     | Georg Duffner / O. Pardo | OFL-1.1                      | No                   | `@fontsource-variable/eb-garamond`                                                        |
| GSAP 3 + ScrollTrigger | JS library | https://gsap.com                             | GreenSock (Webflow)      | Standard "No Charge" License | No                   | `src/scripts/motion.ts`                                                                   |
| Lenis                  | JS library | https://github.com/darkroomengineering/lenis | Darkroom Engineering     | MIT                          | No                   | `src/scripts/motion.ts`                                                                   |
| BA monogram logo       | Image      | Supplied by client (`logo.png`)              | Client (Bengisu Arslan)  | Client-owned                 | Not applicable       | Generated derivatives `logo-seal.webp`, `logo-mark.webp`, `logo-mark.png`, `og-image.png` |

Both fonts are self-hosted; no Google Fonts or other font CDN request is made at runtime.

## License reference

| License                 | Commercial use | Attribution        | Share-alike  | Notes                                   |
| :---------------------- | :------------- | :----------------- | :----------- | :-------------------------------------- |
| MIT                     | Yes            | Yes (license text) | No           | Safe default for code.                  |
| Apache-2.0              | Yes            | Yes (NOTICE)       | No           | Patent grant included.                  |
| GPL-2.0 / GPL-3.0       | Yes            | Yes                | Yes (source) | Copyleft — risky for proprietary sites. |
| CC0 / Public domain     | Yes            | No                 | No           | Safest for assets.                      |
| CC-BY-4.0               | Yes            | Yes                | No           | Common for photos/icons.                |
| CC-BY-SA-4.0            | Yes            | Yes                | Yes          | Share-alike applies to derivatives.     |
| "Free for personal use" | No             | Varies             | Varies       | Not usable for client/commercial work.  |

Fonts need their own license check (most Google Fonts are OFL/Apache-2.0, which is fine).
