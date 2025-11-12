# Hettinger Painting Group — Static Site (GitHub Pages)

This folder contains a **static** website that works on **GitHub Pages** (no server required).  
It mirrors the structure and styling of your previous EJS views, but everything is now plain **HTML/CSS/JS**.

## Files
- `index.html` — main marketing site with hero, services, slideshow, and contact form (client-only)
- `login.html` — demo login page (client-only message, since Pages can’t run backend auth)
- `assets/styles.css` — extracted styles
- `assets/script.js` — slideshow + form behavior
- `assets/images/` — placeholder logo & favicon

## How to publish on GitHub Pages
1. Create a new GitHub repo (or use an existing one).
2. Upload the files at the repo root (keep folders intact).
3. Commit & push.
4. In **Settings → Pages**, set **Branch: `main` / folder: `/root`**, click **Save**.
5. Your site will appear at the Pages URL (usually `https://<username>.github.io/<repo>/`).

> Note: Forms and logins need a backend. For production, connect to a service like Netlify Forms, Formspree, or wire up an API on Vercel/Render and call it via fetch from the form submit handler.

## Customization
- Update hero background image in `.hero` (CSS).
- Replace photos in the slides with your own.
- Adjust brand colors in `:root` variables in `assets/styles.css`.
- Swap logo assets in `assets/images`.
