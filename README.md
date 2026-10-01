# Martin Stewart: website

Plain HTML and CSS with no build step. Hosted free on GitHub Pages.

## Files
- `index.html`: the whole site (hero, problems, how it works, pricing, work, about, contact)
- `privacy.html`: UK GDPR privacy policy
- `assets/styles.css`: styles (the accent colour is `--accent` at the top)
- `assets/main.js`: mobile menu and contact form (opens the visitor's email app)
- `404.html`, `robots.txt`, `sitemap.xml`, `.nojekyll`: hosting extras

## Site address
The site lives at https://martinpstewartv88.github.io/martin-stewart-site/. If you move to a custom domain, update that address in `index.html` (canonical, og:url, og:image, JSON-LD), `privacy.html`, `robots.txt` and `sitemap.xml`.

## Run locally
```bash
python3 -m http.server 3140
```
Then open http://localhost:3140.

## Deploy to GitHub Pages
1. Create an empty repo on GitHub, e.g. `martin-stewart-site`.
2. In this folder:
   ```bash
   git add .
   git commit -m "Initial site"
   git remote add origin https://github.com/YOUR-USERNAME/martin-stewart-site.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Source: Deploy from a branch → `main` / `(root)`**.
4. The site goes live at `https://YOUR-USERNAME.github.io/martin-stewart-site/`. All links are relative, so this works without changes.

### Custom domain (optional)
Add your domain under **Settings → Pages → Custom domain** (GitHub creates a `CNAME` file), point your DNS at GitHub as their instructions describe, and tick **Enforce HTTPS**. Then replace `[Domain]` everywhere.
