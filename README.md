
# ViralSpark — Next.js Agency Starter

A fast, modern, and fully responsive website for a digital marketing + web development agency.
Built with **Next.js 14 (App Router)** and **Tailwind CSS**. Ready for **Vercel**.

## Features
- Pages: Home, About, Services, Portfolio, Blog, Contact
- EmailJS contact form (client-side)
- SEO metadata, Open Graph + Twitter tags
- Responsive, accessible UI with rich blue/yellow/emerald palette
- Sample projects and blog posts with images
- Clean structure, TypeScript & linting
- Ready for GitHub + Vercel

## Tech
- Next.js 14, React 18
- Tailwind CSS 3
- EmailJS (`@emailjs/browser`)

## Setup

### 1) Install
```bash
npm install
# or
pnpm install
```

### 2) Configure EmailJS
Create an account at https://www.emailjs.com/
- Make a **Service**, **Template**, and get a **Public Key**.
- Add these to `.env.local` in the project root:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

> The contact form uses these public ENV vars in the browser.

### 3) Run locally
```bash
npm run dev
```

Open http://localhost:3000

### 4) Deploy to GitHub
```bash
git init
git add .
git commit -m "ViralSpark starter"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

### 5) Deploy to Vercel
- Import the GitHub repo in **Vercel**.
- Framework: **Next.js** (auto-detected)
- Build command: `next build` (default)
- Output: `.next` (default)
- **Environment Variables**: add the three EmailJS keys above.
- Deploy 🚀

## Notes
- Update `metadataBase` and URLs in `app/layout.tsx`, `robots.txt`, and `sitemap.xml` to your real domain.
- Replace images in `/public/images` with real assets (same filenames).

## Scripts
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm start` — run production server locally

## License
MIT
