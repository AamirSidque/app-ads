# Byte Envision — Portfolio Website

Production-grade personal portfolio for **Aamir Sidque** (Byte Envision).  
Live at → **https://byteenvision.github.io**

---

## Stack

| Layer | Choice |
|-------|--------|
| Hosting | GitHub Pages (free, fast, zero config) |
| HTML | Semantic HTML5, no framework |
| CSS | Single `css/main.css` — custom design tokens, no Bootstrap |
| JS | Vanilla JS — `js/main.js` + `js/components.js` |
| Fonts | Google Fonts — Syne + DM Sans |
| Forms | Formspree (free tier) |

---

## File Structure

```
byteenvision-site/
├── index.html              ← Homepage (hero, apps, projects, CTA)
├── 404.html                ← Custom error page
├── _config.yml             ← GitHub Pages config
│
├── css/
│   └── main.css            ← All styles (design tokens + components)
│
├── js/
│   ├── main.js             ← Scroll reveal, nav, filter, form
│   └── components.js       ← Shared nav + footer (injected into every page)
│
└── pages/
    ├── apps.html           ← All 8 apps with filter
    ├── projects.html       ← 4 case studies (problem/solution/outcome)
    ├── services.html       ← Services + pricing
    ├── blog.html           ← Blog feed + links to byteenvision.com
    ├── contact.html        ← Contact form + FAQ
    ├── privacy.html        ← Privacy policy
    ├── terms.html          ← Terms of use
    └── disclaimer.html     ← Affiliate disclosure
```

---

## Deploy to GitHub Pages

### Option A — GitHub UI (easiest)

1. Create repo named `byteenvision.github.io` (must match username exactly)
2. Upload all files maintaining the folder structure above
3. Go to **Settings → Pages → Source → Deploy from branch → main → / (root)**
4. Wait ~2 minutes — live at `https://byteenvision.github.io`

### Option B — Git CLI

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/byteenvision/byteenvision.github.io.git
git push -u origin main
```

Then enable Pages in repo settings.

---

## Customisation Guide

### Update contact form
Open `js/components.js` and `pages/contact.html`.  
Replace the Formspree endpoint with your own from [formspree.io](https://formspree.io):
```js
fetch('https://formspree.io/f/YOUR_FORM_ID', { ... })
```

### Add a new app
Open `pages/apps.html`. Copy any `app-card` block:
```html
<div data-category="utility" class="reveal">
  <a class="app-card" href="PLAY_STORE_URL" target="_blank" rel="noopener">
    <div class="app-icon">EMOJI</div>
    <div>
      <div class="app-name">App Name</div>
      <div class="app-desc">Short description of what it does.</div>
      <div class="tags">
        <span class="tag">Category</span>
      </div>
      <div class="app-badge">↗ View on Play Store</div>
    </div>
  </a>
</div>
```
Set `data-category` to: `utility`, `privacy`, `education`, or `entertainment`.

### Add a new case study
Open `pages/projects.html`. Copy an existing `<section>` block.  
Each case study has 4 blocks: Problem · Solution · Approach · Outcome.

### Change accent colour
Open `css/main.css`. Find `:root` at the top. Change `--accent`:
```css
--accent: #F5A623;   /* amber — change to any hex */
```

### Update nav links
Open `js/components.js`. The `NAV_HTML` string at the top contains all nav links.  
Edit the `<ul class="nav-links">` section.

### Update footer info
In `js/components.js`, edit the `FOOTER_HTML` string.

---

## SEO Checklist

- [x] Semantic HTML5 (`<nav>`, `<main>`, `<article>`, `<footer>`)
- [x] Unique `<title>` on every page
- [x] Meta descriptions on every page
- [x] Canonical URLs on every page
- [x] Open Graph tags on homepage
- [x] JSON-LD structured data (Person + ItemList)
- [x] Mobile-first responsive CSS
- [x] No render-blocking resources
- [x] Custom 404 page
- [ ] Add `sitemap.xml` (see below)
- [ ] Add `robots.txt` (see below)

### Add sitemap.xml (recommended)

Create `/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://byteenvision.github.io/</loc><priority>1.0</priority></url>
  <url><loc>https://byteenvision.github.io/pages/apps.html</loc><priority>0.9</priority></url>
  <url><loc>https://byteenvision.github.io/pages/projects.html</loc><priority>0.9</priority></url>
  <url><loc>https://byteenvision.github.io/pages/services.html</loc><priority>0.8</priority></url>
  <url><loc>https://byteenvision.github.io/pages/blog.html</loc><priority>0.8</priority></url>
  <url><loc>https://byteenvision.github.io/pages/contact.html</loc><priority>0.7</priority></url>
</urlset>
```

### Add robots.txt (recommended)

Create `/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://byteenvision.github.io/sitemap.xml
```

---

## Performance Notes

- Zero JS frameworks — pure vanilla
- CSS custom properties for instant theming
- Fonts preconnected via `<link rel="preconnect">`
- Images served from external CDNs (Play Store assets)
- Scroll reveal uses `IntersectionObserver` — no layout thrash
- Mobile nav is CSS transform (GPU composited, no reflow)

Target PageSpeed: **90+ mobile / 98+ desktop**

---

## Contact

**Aamir Sidque**  
📧 byteenvision@gmail.com  
📍 Baramulla, Jammu & Kashmir, India  
🔗 https://play.google.com/store/apps/developer?id=Byte+Envision
