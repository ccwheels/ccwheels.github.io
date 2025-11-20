# Hett Painting Group — Professional Painting Services Website

[![Live Site](https://img.shields.io/badge/live-site-blue)](https://ccwheels.github.io)

A modern, responsive static website for **Hettinger Painting Group** (HPG), a professional painting company providing interior & exterior painting services for residential and commercial properties.

## 🎯 Overview

This is a static website built with vanilla HTML, CSS, and JavaScript, optimized for deployment on **GitHub Pages**. The site features a clean, professional design with smooth animations, an interactive project slideshow, and mobile responsiveness.

## ✨ Features

### 🏠 Main Website (`index.html`)
- **Fixed Navigation Bar** - Smooth scrolling navigation with brand logo and quick access links
- **Hero Section** - Eye-catching hero with background image, value proposition, and dual CTAs
- **Services/Benefits** - Three-column card layout highlighting key differentiators:
  - Clean, Crisp Lines
  - Premium Materials
  - On-Time, On-Budget
- **Project Gallery** - Interactive slideshow featuring 4 completed projects with:
  - Auto-advance (5-second intervals)
  - Manual navigation (prev/next arrows)
  - Pause on hover
  - Dot indicators
- **Contact Form** - Lead capture form with validation (client-side demo)
- **Footer** - Company info, copyright, and social media links

### 🔐 Owner Portal (`login.html`)
- Demo login page for owner/admin access
- Note: Static hosting requires backend implementation for real authentication

### 🎨 Design Highlights
- **Modern UI/UX** - Clean, professional aesthetic with Inter font family
- **Brand Colors** - Navy (#1d3557) and accent red (#e63946)
- **Responsive Design** - Mobile-first approach with breakpoints at 820px
- **Smooth Animations** - Fade transitions for slideshow, hover effects on buttons/cards
- **Accessibility** - ARIA labels, semantic HTML, proper alt text

## 📁 Project Structure

```
ccwheels.github.io/
├── index.html              # Main landing page
├── login.html              # Owner login page (demo)
├── README.md               # This file
├── assets/
│   ├── images/
│   │   ├── favicon.png     # Browser favicon
│   │   ├── hpg.jpeg        # Company logo
│   │   └── mark.svg        # Logo mark for login page
│   ├── script.js           # Slideshow & form interactions
│   └── styles.css          # All styling (CSS custom properties)
```

## 🚀 Deployment (GitHub Pages)

This site is designed for **GitHub Pages** deployment:

1. **Already Configured**: The repository is set up for GitHub Pages
2. **Live URL**: `https://ccwheels.github.io/`
3. **Settings**: Repository → Settings → Pages → Branch: `main` / Folder: `/root`

### How to Update
```bash
# Make your changes locally
git add .
git commit -m "Update website content"
git push origin main
```

The site will automatically rebuild and deploy within 1-2 minutes.

## 🛠️ Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties (CSS variables), Flexbox, Grid
- **Vanilla JavaScript** - No frameworks/dependencies
- **Google Fonts** - Inter (weights: 400, 600, 800)
- **Unsplash** - Placeholder images (replace with actual project photos)

## 🎨 Customization Guide

### Change Brand Colors
Edit CSS variables in `assets/styles.css`:
```css
:root {
  --brand: #1d3557;      /* Primary navy */
  --brand-2: #e63946;    /* Accent red */
  --ink: #1a1a1a;        /* Text color */
  --muted: #667085;      /* Secondary text */
}
```

### Update Logo
Replace `assets/images/hpg.jpeg` with your logo file and update image references in:
- `index.html` (line 18 - navbar)
- `login.html` (line 11 - login page)

### Replace Project Photos
Update image URLs in `index.html` lines 77-103 (slideshow slides) with your own project photos.

### Modify Services/Benefits
Edit the three cards in `index.html` lines 51-66 to reflect your company's unique value propositions.

## 📱 Responsive Breakpoints

- **Desktop**: > 820px (full layout)
- **Tablet/Mobile**: ≤ 820px (stacked layout, adjusted image heights)

## 🔧 Future Enhancements

### Backend Integration
For production use, consider adding:

1. **Form Submission** - Connect contact form to:
   - [Formspree](https://formspree.io/) - Easy email forwarding
   - [Netlify Forms](https://www.netlify.com/products/forms/) - Built-in form handling
   - Custom API (Vercel, Render, AWS Lambda)

2. **Owner Authentication** - Implement real login with:
   - Firebase Authentication
   - Auth0
   - Custom backend (Node.js/Express, Python/Flask, etc.)

3. **CMS Integration** - Manage content dynamically:
   - Contentful
   - Sanity.io
   - Strapi

### Additional Features
- [ ] Add actual project photos from HPG portfolio
- [ ] Implement analytics (Google Analytics, Plausible)
- [ ] Add testimonials/reviews section
- [ ] Create blog for painting tips/company updates
- [ ] Add live chat integration (Intercom, Drift)
- [ ] Implement SEO enhancements (structured data, Open Graph tags)

## 📄 License

© 2025 Hettinger Painting Group. All rights reserved.

## 🤝 Support

For technical questions or assistance, contact the development team or open an issue in this repository.

---

**Built with ❤️ for Hettinger Painting Group**
