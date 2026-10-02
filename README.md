# Martin Stewart: website

Plain HTML and CSS with no build step. Hosted free on GitHub Pages.

## Site address
Live at **https://martinpstewart.co.uk/**, hosted free on GitHub Pages from the `main` branch of
[martinpstewartv88/martin-stewart-site](https://github.com/martinpstewartv88/martin-stewart-site).
Every push to `main` goes live within a minute or two.

## Run locally
```bash
python3 -m http.server 3140
```
Then open http://localhost:3140.

## Publish changes
```bash
git add .
git commit -m "Describe the change"
git push
```

## Custom domain setup
The domain `martinpstewart.co.uk` is registered with **Fasthosts**. The `CNAME` file in this repo tells GitHub Pages to serve the site on it.

**DNS records (Fasthosts control panel → DNS):**

| Type | Host name | Points to |
|---|---|---|
| A | *(blank)* | `185.199.108.153` |
| A | *(blank)* | `185.199.109.153` |
| A | *(blank)* | `185.199.110.153` |
| A | *(blank)* | `185.199.111.153` |
| AAAA | *(blank)* | `2606:50c0:8000::153` |
| AAAA | *(blank)* | `2606:50c0:8001::153` |
| AAAA | *(blank)* | `2606:50c0:8002::153` |
| AAAA | *(blank)* | `2606:50c0:8003::153` |
| CNAME | `www` | `martinpstewartv88.github.io` |

**GitHub (repo → Settings → Pages):** custom domain `martinpstewart.co.uk`, **Enforce HTTPS** ticked.
`www.martinpstewart.co.uk`, `http://` and the old `martinpstewartv88.github.io/martin-stewart-site/` address all redirect to `https://martinpstewart.co.uk/`.

**Check DNS:**
```bash
dig +short martinpstewart.co.uk
```
It should list the four `185.199.x.153` addresses.

**If the domain ever changes:** update `CNAME`, the GitHub Pages custom domain setting, and the full address in
`index.html` (canonical, Open Graph, Twitter and JSON-LD tags), `privacy.html`, `robots.txt` and `sitemap.xml`.

**Renewal:** keep the domain on auto-renew at Fasthosts. If it lapses, the site goes offline.

## SEO
What's in place:
- **Title and description** aimed at searches like "software developer Bath", "apps for charities Bath" and "database help Bath".
- **Share previews:** Open Graph and Twitter tags with `assets/og-image.png` (1200×630).
- **Structured data (JSON-LD)** in `index.html`: a local business (address, phone, email, towns served, prices), a person (Martin Stewart), the website, and the FAQ. Check it with Google's [Rich Results Test](https://search.google.com/test/rich-results).
- **FAQ section:** answers to common local questions, marked up so Google can show them in results.
- **Local signals:** towns served are named in the copy and the structured data, plus geo meta tags for Bath.
- **`sitemap.xml` and `robots.txt`:** update the `<lastmod>` dates in the sitemap when you change a page.
- **404 page** is marked `noindex`.

To do (needs you, not code):
1. **Google Search Console:** go to search.google.com/search-console and add `martinpstewart.co.uk` as a *Domain* property. Verify it with the TXT record Google gives you, added in Fasthosts DNS. Then submit `https://martinpstewart.co.uk/sitemap.xml`.
2. **Google Business Profile:** create a free profile as a service-area business in Bath (hide your home address). This does most to get you into local map results.
3. **Bing Webmaster Tools:** import from Search Console in one click.
4. **Local links:** ask Walking Solves and future clients to link to the site, and list it in local business and community directories.
5. **Reviews:** ask happy clients for a Google review.

## Files
- `index.html`: the whole site (hero, problems, how it works, pricing, work, about, FAQ, contact)
- `privacy.html`: UK GDPR privacy policy
- `assets/styles.css`: styles (the accent colour is `--accent` at the top)
- `assets/main.js`: mobile menu and contact form (opens the visitor's email app)
- `assets/`: photo, screenshots, share image, favicon and home-screen icon
- `CNAME`: the custom domain for GitHub Pages
- `404.html`, `robots.txt`, `sitemap.xml`, `.nojekyll`: hosting extras
