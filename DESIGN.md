# DAKAWA — desktop redesign

## Current authority, 2026-09-05

The latest user instruction supersedes the Acuas template direction below: redesign the PC interface and do not preserve the GitHub source UI. Mobile receives only a basic usable fallback.

The active homepage in `app/page.tsx` uses an independent composition: full-width photographic hero, five-column filterable product catalog, production story, audience panels, and contact section. `components/acuas-shell.tsx` now supplies a custom header, footer and interior page heading. `app/studio.css` controls the visual system: Be Vietnam Pro, warm white, muted blue-green surfaces, dark blue text, square image frames and restrained borders.

Legacy Bootstrap and Acuas CSS remain loaded for compatibility with existing inner-page utilities; upstream source and license attribution remain available. The raw template HTML is no longer used by the homepage. Existing forms remain demos without a submission backend. Real DAKAWA assets are retained; the hero water photo is labeled illustrative.

## Historical direction (superseded)

# DAKAWA, sử dụng trực tiếp template Acuas

## Current authority

The user rejected the authored layout and requested copying source from existing water-sector websites/templates. The design authority is now the actual Acuas distribution by HTML Codex, not the former Impeccable direction. The original source is preserved under `vendor/acuas-original` at upstream revision `652c7312f29f82732f97a2026d47ce3843314591`.

## Implementation

- `public/acuas/css/style.css` is byte-identical to upstream Acuas CSS.
- `public/acuas/css/bootstrap.min.css` supplies the original layout grid and utility classes.
- `components/template/acuas-home.html` retains original carousel, feature, about, service, product and blog markup.
- `components/template/acuas-nav.html` and `acuas-footer.html` retain upstream structure with DAKAWA labels and destinations.
- `components/acuas-content.ts` imports these readable HTML files using Vite's raw loader.
- `scripts/adapt-acuas.cjs` regenerates the localized markup with `npm run template:adapt`.
- `app/template-brand.css` contains the brand/content adapter and retained form compatibility styles. `app/redesign.css` is not loaded.

## Appearance

Preserve the Acuas full-width image carousel, overlay navigation, right/left hero caption alternation, serif display typography, pill controls, centered headings, feature cards, framed about image, central product/service composition, three-column product grid and dark footer.

Display: Playfair Display, 42–78px hero, 34–54px section headings. Body: Open Sans. Palette: primary cyan #008cb5, deep DAKAWA blue #005b8f, dark #082e4a, light #f2f9fb; red #d62546 for the navigation order action and mobile order action.

All layout changes beyond the source are confined to Vietnamese copy fit, brand identity, actual content, accessibility, and existing-page compatibility. Do not restore the former split lifestyle hero, product picker or Impeccable layout without user direction.

## Content and media

Acuas stock water hero photographs are explicitly illustrative. They are not evidence of DAKAWA's water source. Real DAKAWA photos replace the about, service and news content. Product images use CSS windows into the supplied brand catalog; higher-resolution original packshots remain desirable. Do not replace the real labels with generated packaging.

Unverified upstream counters, prices, testimonials, staff names and delivery promises are excluded. Buttons lead to real existing routes, telephone and email. Existing contact forms remain explicitly labeled demos.

## Behavior and accessibility

Carousel arrows change slides; no autoplay. Inactive slides are inert and aria-hidden. Mobile navigation uses native buttons and expanded state; Escape closes it. Existing product filtering works. Preserve visible focus, reduced motion, image alternatives and skip navigation.

## Attribution

Keep HTML Codex credit and original LICENSE.txt. Aguapure, Acuasafe and Uaques were visual comparisons, not code sources copied into the site. See docs/TEMPLATE-SOURCES.md.

## Refinement after template integration

The homepage keeps Acuas sections but surfaces product browsing earlier: carousel, local contact strip, compact customer paths, five-format product grid, about, service and stories. Display type is reduced to 67px desktop hero and 39px mobile hero, with 32–45px section titles. Product cards use Open Sans labels, 14px corners and real catalog photo windows with soft edges. Desktop uses five product columns; tablet three; mobile two. Mobile customer paths and service content use two columns to reduce excessive page length. The order action retains DAKAWA red. Current screenshots and runtime checks are under qa-refinement/.
