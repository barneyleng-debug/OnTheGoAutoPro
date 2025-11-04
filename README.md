# OnTheGo Auto Pro — GitHub Pages Mockup

This repository contains a simple, responsive mockup site for **OnTheGo Auto Pro** (mobile mechanic).  
Files included:
- `index.html` — the single-page site
- `styles.css` — styling (Monteserrat & Open Sans via Google Fonts)
- `script.js` — light form handling for the mockup
- `logo.svg` — simple logo used in header

## How to publish
1. Create a new GitHub repository (e.g. `onthegoautopro.github.io` or any repo).
2. Commit the files and push.
3. In the repository settings -> Pages, choose the `main` branch (or `gh-pages`) and the root folder. GitHub Pages will publish the site at `https://<username>.github.io/<repo>` (or at the repo URL if using `username.github.io`).

## Form handling
The contact form in this mockup is client-side only and opens a `mailto:` link. To accept submissions automatically:
- Use **Formspree**: set the form `action` to Formspree endpoint and `method="POST"`.
- Use **Netlify Forms**: add `data-netlify="true"` to the form and deploy to Netlify.
- Or wire a simple server endpoint to receive POST requests.

## Map
The map area is a placeholder. Replace `.map-placeholder` with a Google Maps iframe or a static map image if you want an embedded map.

## Customization notes
- Colors: adjust `--red`, `--bg`, and other root vars in `styles.css`.
- Fonts: change or add weights via the Google Fonts link in `index.html`.
- Logo: replace `logo.svg` with your production logo.

--- 
Made as a ready-to-publish mockup. Push these files to GitHub and you should be live quickly.
