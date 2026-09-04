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

- Replace the GitHub and LinkedIn URLs in `src/components/Hero.jsx` and
  `src/components/Footer.jsx` with your real profile links.
- Replace the placeholder GitHub/live-demo links in
  `src/components/Projects.jsx` for HomeNest and the Myntra Clone.
- To make the contact form actually send you email, sign up at
  [Formspree](https://formspree.io), create a form, and follow the note at
  the top of `src/components/Contact.jsx`.
