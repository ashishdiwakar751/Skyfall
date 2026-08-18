# 🍸 Skyfall Lounge — Rooftop Lounge & Bar (Kanpur)

[![Vercel Ready](https://img.shields.io/badge/Vercel-Deployment%20Ready-000000?style=for-the-badge&logo=vercel)](https://vercel.com)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-0055FF?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

Welcome to the official web application repository for **Skyfall Lounge**, Kanpur's premier luxury rooftop lounge and bar located at Hotel Vijay Intercontinental.

---

## ✨ Features

- **Cinematic Rooftop Atmosphere**: Immersive video hero background with high-impact typography and smooth luxury aesthetic.
- **Interactive Culinary & Cocktails Menu**: Organized category navigation (Pan-Asian, Continental, Indian Fine Dining, Signature Cocktails, Vintage Cellar) with dietary tags and pricing.
- **Table Reservation & VIP Booking**: Full reservation & VIP enquiry workflow with date/time pickers, guest counts, and special requests.
- **Events & Private Celebrations**: Comprehensive showcase for corporate galas, private dining, sundowners, and DJ nights.
- **Interactive Editorial Gallery**: Category-filtered image gallery with accessible full-screen lightbox modal.
- **Guest Testimonials & Trust Indicators**: Highlights real guest reviews, ratings, and key venue stats.
- **Mobile-First Experience**: Includes sticky action bar on mobile for instantaneous table booking and phone dialer access.
- **Vercel & SPA Optimized**: Includes pre-configured `vercel.json` rewrites for seamless client-side routing reload support.

---

## 🛠️ Tech Stack & Libraries

- **Frontend Core**: [React 18](https://react.dev/) + [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- **Build Tool & Bundler**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/) with custom design tokens (`bg-primary`, `gold-champagne`, `obsidian-card`, etc.)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router v6](https://reactrouter.com/)

---

## 📁 Project Structure

```text
skyfall/
├── public/                  # Static media assets (videos, hero banners, menu items)
│   ├── images/
│   └── videos/
├── src/
│   ├── components/          # Reusable UI components & section layouts
│   │   ├── ui/              # Buttons, Headings, Modals
│   │   ├── Navbar.jsx       # Floating transparent luxury navigation
│   │   ├── Footer.jsx       # Site footer with operational details
│   │   └── ...
│   ├── data/                # Centralized menu, events, gallery, and review datasets
│   ├── hooks/               # Custom React hooks (SEO, Scroll detection)
│   ├── pages/               # Page view components (Home, Menu, Reservation, Events, etc.)
│   ├── utils/               # Constants and helper functions
│   ├── App.jsx              # Main router & app layout setup
│   ├── index.css            # Global CSS styles & Tailwind directives
│   └── main.jsx             # React DOM entrypoint
├── vercel.json              # Vercel SPA rewrite rules
├── tailwind.config.js       # Custom design system configuration
├── vite.config.js           # Vite config with alias support (@ -> /src)
└── package.json
```

---

## 🚀 Local Development Setup

### 1. Clone the repository
```bash
git clone https://github.com/ashishdiwakar751/Skyfall.git
cd Skyfall
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the live website.

### 4. Build for Production
```bash
npm run build
```
The output static bundle will be generated in the `dist/` directory.

---

## 🌐 Deploying to Vercel

This repository is pre-configured for one-click deployment on Vercel:

1. Import the `ashishdiwakar751/Skyfall` repository in your [Vercel Dashboard](https://vercel.com/dashboard).
2. Framework Preset will automatically detect **Vite**.
3. Output Directory: `dist`
4. Click **Deploy**.

---

## 📄 License

© 2026 **Skyfall Lounge** (Hotel Vijay Intercontinental, Kanpur). All rights reserved.
