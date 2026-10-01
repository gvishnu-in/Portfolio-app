# Vishnu Vardhan — Portfolio

A personal developer portfolio built with React + Vite. No backend, no
database — just a static site you can deploy anywhere, including Netlify.

## Run it locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

This creates a `dist/` folder with the production build.

## Deploy to Netlify

- **Build command:** `npm run build`
- **Publish directory:** `dist`

You can drag-and-drop the `dist` folder onto Netlify, or connect your GitHub
repo and let Netlify build it automatically on every push.

## Before you go live

- Replace the placeholder LinkedIn URL in `src/components/Hero.jsx` and
  `src/components/Footer.jsx` with your profile URL.
- Verify the project repository and live-demo destinations in
  `src/components/Projects.jsx` before sharing the portfolio.
- The contact form is already connected to Formspree in
  `src/components/Contact.jsx`. Send a test submission and confirm it arrives
  in your inbox before publishing.
