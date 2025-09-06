# ViralSpark — Next.js Agency Site

A modern, fast, and responsive agency website built with **Next.js 14 (App Router)** and **Tailwind CSS**.

## Pages
Home, About, Services, Portfolio, Blog, Contact (with EmailJS-ready form).

## Install
```bash
npm install
npm run dev
```

## EmailJS
Create `.env.local` from the example:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## Deploy (Vercel)
- Import the GitHub repo in Vercel
- Add the three EmailJS env vars later (optional)
- Click Deploy