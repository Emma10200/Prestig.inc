# Prestige, Inc. Web Architecture

Static website scaffold for a transportation and logistics company with Astro, Tailwind CSS, TypeScript, and A2P 10DLC-ready compliance structure.

## Tech Stack

- **Framework:** Astro for static generation and zero-JS-by-default pages
- **Language:** TypeScript with Astro's strict TypeScript configuration
- **Styling:** Tailwind CSS with a high-contrast freight/logistics theme
- **Package manager:** npm
- **Build output:** Static assets generated to `dist/`

## Project Structure

```text
/
├── public/
├── src/
│   ├── components/
│   │   ├── Button.astro
│   │   ├── ContactForm.astro
│   │   ├── Footer.astro
│   │   └── Header.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── privacy.astro
│   │   └── terms.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── tsconfig.json
```

## Component Architecture

- `src/layouts/BaseLayout.astro` provides the HTML shell, metadata, global stylesheet import, header, footer, and main content slot.
- `src/components/Header.astro` contains primary navigation and a quote call-to-action.
- `src/components/Footer.astro` contains hardcoded links to `/privacy` and `/terms` for audit visibility.
- `src/components/Button.astro` is a typed, reusable link button with variant support.
- `src/components/ContactForm.astro` is a lead intake form with an explicit, unchecked SMS consent checkbox.
- `src/pages/privacy.astro` includes the required mobile-information non-sharing clause.
- `src/pages/terms.astro` includes SMS terms covering message frequency, carrier liability, STOP/HELP instructions, and message/data rates.

## Local Development

Install dependencies:

```sh
npm install
```

Start the development server:

```sh
npm run dev
```

Run Astro and TypeScript checks:

```sh
npm run check
```

Build the static site:

```sh
npm run build
```

Preview the production build locally:

```sh
npm run preview
```

## Compliance Notes

This scaffold includes structural language commonly requested for A2P 10DLC review:

- Privacy Policy language that excludes SMS opt-in data and consent from sharing.
- Terms of Service SMS section with opt-out/help language and carrier liability notice.
- Contact form checkbox requiring explicit consent for quote or shipment text messages.

Final legal review is recommended before production launch.
