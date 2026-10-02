# Cusdex (Modoxx) - staffing, software development and HR consulting (React + Vite)
    npm install
    npm run images     # optional: FIGMA_TOKEN=... downloads real photos + logo into public/images
    npm run dev        # develop
    npm run build      # production build in /dist

## What is included
- Full-width layout, dark/bright toggle (bottom-right), Login / Sign up page (demo: demo@cusdex.com / demo1234)
- Solid navbar that hides on scroll down and returns on scroll up; logo on every page and in the footer
- Combined footer: contact + link columns + Get Started line + Terms/Privacy + giant fading "cusdex" over a grainy gradient
- Animations: page transitions, scroll reveals, hover effects, scroll progress bar, back-to-top
- Publish-ready: SEO meta + Open Graph, favicon, robots.txt, sitemap.xml, 404 page, Terms & Privacy templates, cookie notice, SPA rewrites (vercel.json, public/_redirects)

## Before you publish
1. Put your real contact details in `src/site.js`.
2. Replace YOUR-DOMAIN.com in `public/robots.txt` and `public/sitemap.xml`.
3. Contact form: set `VITE_FORM_ENDPOINT` (see .env.example) to receive messages by e-mail.
4. Login is a browser-only demo (localStorage). For real accounts you need a backend (Firebase, Supabase, etc.).
5. Have the Terms and Privacy templates reviewed.
6. Deploy the /dist folder on Vercel, Netlify or Cloudflare Pages (build command: npm run build, output: dist).
