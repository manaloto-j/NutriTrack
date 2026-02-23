# NutriTrack 🥗

A dark-themed, multi-page nutrition and recipe platform built with vanilla HTML, CSS, and JavaScript.

> **Created by Johnzelle Manaloto** — This is a revised and significantly improved version of a past project, rebuilt with a sharper design system, SVG iconography, interactive components, and a proper multi-file architecture.

🔗 **Live Demo:** [[https://your-live-demo-link-here.com](https://raw.githack.com/manaloto-j/NutriTrack/refs/heads/main/nutritrack/index.html)](#) ← *replace this*

---

## Overview

NutriTrack is a frontend website for a fictional nutrition tracking platform. It showcases recipe listings, detailed recipe pages with interactive step-by-step instructions, macro tracking visuals, and a contact/recipe submission form — all styled with a consistent dark design language.

---

## Pages

| File | Description |
|------|-------------|
| `index.html` | Home page — hero with Ken Burns effect, stats, features grid, comparison table, macro section, ingredient SVG icons |
| `recipes.html` | Recipe listing — featured card, filterable recipe grid with category tabs |
| `beefsoup.html` | Recipe detail — dynamic recipe switcher, interactive stepper, countdown timers, adjustable servings |
| `contact.html` | Contact page — glassmorphism forms, info cards, recipe submission form |

---

## Project Structure

```
nutritrack/
├── index.html
├── recipes.html
├── beefsoup.html
├── contact.html
│
├── css/
│   ├── style.css        # Global styles, nav, footer, buttons, utilities
│   ├── home.css         # Home page — hero, stats, features, macros
│   ├── recipes.css      # Recipe listing — featured card, grid, filter tabs
│   ├── beefsoup.css     # Recipe detail — stepper, sidebar, ingredients
│   └── contact.css      # Contact — glass forms, info cards
│
├── scripts/
│   ├── main.js          # Global — nav scroll, burger menu, scroll reveal, lazy load
│   ├── home.js          # Animated counters, macro bar animations
│   ├── recipes.js       # Filter tabs, card hover tilt
│   ├── beefsoup.js      # Recipe switcher, stepper, timers, servings counter
│   └── contact.js       # Form submissions, input focus effects, char counter
│
└── images/
    ├── beef-soup.png
    ├── chicken-parmesan.png
    ├── chicken-salad.png
    ├── salmon-pasta.png
    └── food-on-blackboard.png
```

---

## Features

### Design
- Dark theme (`#0d0d0d` base) with a `#00a553` green accent system
- **Fredoka One** for headings, **Outfit** for body text
- Fully responsive — mobile, tablet, and desktop
- Custom scrollbar, glassmorphism cards, and consistent CSS variable system

### Home Page
- **Ken Burns effect** on the hero background image
- Animated stat counters that roll up on scroll
- Feature cards with radial gradient hover effect
- SVG draw-in checkmarks in the comparison table (animate on scroll)
- Animated macro progress bars triggered by scroll intersection
- Custom line-art SVGs for ingredient icons (chicken, cheese, salmon, greens)

### Recipes Page
- Featured recipe hero card with parallax-style hover zoom
- **Filter tabs** — filters cards by category (High Protein, Low Carb, Soups) using comma-separated `data-categories` attributes
- Card hover tilt using mouse position tracking
- All "View →" buttons link to the detail page with a `?recipe=` URL parameter

### Recipe Detail Page
- **Sticky recipe switcher bar** — thumbnail buttons to toggle between all 6 recipes without a page reload
- URL param (`?recipe=beef-soup`) controls which recipe loads on arrival
- Fully dynamic content — title, image, ingredients, steps, nutrition, and tips all swap from a single data object
- Interactive **SVG stepper** — click any step or use "Next Step"; active step glows green
- **Countdown timers** on relevant steps — click to start/pause
- Adjustable servings counter that recalculates all nutrition values proportionally

### Contact Page
- **Glassmorphism forms** (`backdrop-filter: blur`) for both "Send a Message" and a recipe submission section
- Loading spinner on submit button, transitions to a success state after submission
- Character counter on the message textarea
- Input focus glow effect on labels

### Global
- Scroll-triggered reveal animations on all sections
- Intersection Observer lazy loading for all food images
- Burger → X morphing mobile nav overlay
- Sticky nav with blur backdrop on scroll
- Social media icons (Facebook, Instagram, X) with green glow on hover

---

## Tech Stack

- **HTML5** — semantic markup, no frameworks
- **CSS3** — custom properties, grid, flexbox, keyframe animations, `backdrop-filter`
- **Vanilla JavaScript** — Intersection Observer API, URLSearchParams, dynamic DOM rendering
- **Google Fonts** — Fredoka One, Outfit
- No build tools, no dependencies — open `index.html` directly in a browser

---

## How to Run

1. Download and unzip the project
2. Open `index.html` in any modern browser
3. All pages link to each other — no server required

> **Note:** Lazy-loaded images use `data-src` and require JavaScript to be enabled. The site works fully offline with no external dependencies beyond Google Fonts.

---

## Improvements Over the Original

- Replaced all `.png` icon files with inline SVGs for crisp rendering at any size
- Rebuilt navigation with proper mobile overlay and scroll-state backdrop blur
- Introduced a proper CSS variable system and separated styles per page
- Added the recipe switcher — the old version only showed one static recipe
- Fixed broken filter tabs (category matching was incorrect)
- All recipe card "View" buttons are now functional links
- Forms now have loading states, success states, and input validation feedback
- Consistent reveal animations and lazy loading added throughout

---

*NutriTrack — Nourish You*
