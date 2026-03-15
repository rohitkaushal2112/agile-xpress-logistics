# Agile Xpress Logistics Inc.

Single-page static website. Open `index.html` in a browser or use a local server.

## Next steps

1. **Forms**: Replace `YOUR_FORM_ID` in both forms (in `index.html`) with your [Formspree](https://formspree.io) form ID.
2. **Social links**: Update the LinkedIn, Instagram, Facebook, and TikTok URLs in the header and footer.
3. **Logo**: `images/logo.png` should be your **transparent-background** logo (truck, ship, plane). Replace the file if needed.
4. **Hero carousel**: To add background images for each service, set `style="background-image: url('images/hero/your-image.jpg');"` on each `.hero-slide` in `index.html` (slides 0–4 = LTL, FTL, FCL, Reefer, Warehousing). Create an `images/hero/` folder and add your images.
5. **Service card images**: In each `.service-card-image` div, add an `<img src="images/services/ltl.jpg" alt="LTL">` (and similar for ftl, fcl, reefer, warehousing). Create `images/services/` and add your photos.

## Structure

- `index.html` – All sections, hero carousel, About Us, services in 2+3 layout
- `styles.css` – Mobile-first, brand colors (#2f2674, #231d52, #ff5c00)
- `script.js` – Smooth scroll, mobile menu, hero carousel (5s rotation), footer year
- `images/logo.png` – Transparent logo (used in header and hero)

## Hosting

Upload the folder to Netlify, Vercel, GitHub Pages, or any static host. No build step required.
