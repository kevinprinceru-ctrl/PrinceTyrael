# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Helix-Pharm** — a static HTML/CSS/JS research peptides e-commerce website.
Live at: `https://kevinprinceru-ctrl.github.io/PrinceTyrael/`
Deployed from the `gh-pages` branch of `kevinprinceru-ctrl/PrinceTyrael`.

## Deployment

All changes must be committed and pushed to the `gh-pages` branch:

```bash
git add <files>
git commit -m "description"
git push -u origin gh-pages
```

If push is rejected (remote ahead — e.g. user uploaded a file via GitHub app on iPhone):
```bash
git stash && git pull origin gh-pages --rebase && git stash pop
```

CSS cache busting: stylesheet is loaded as `css/styles.css?v=3`. If CSS changes aren't showing, bump the version number.

## File Structure

```
index.html          # Homepage — 7-product grid + hero
shop.html           # All products page — full grid
contact.html        # Contact form with SMS consent checkbox
css/styles.css      # Single stylesheet for entire site
js/main.js          # Cart logic, menu, toast, scroll-to-top
61205B8A-CA41-4D01-BDCD-774BFB032CE1.png  # Logo (circular blue caduceus badge)

# Product detail pages:
retatrutide.html    # Retatrutide detail
bpc157.html         # BPC-157 detail
tb500.html          # TB-500 detail
ghkcu.html          # GHK-Cu detail
nadplus.html        # NAD+ detail
glowstack.html      # GLOW Stack detail
# wolverinestack.html — TO BE CREATED (next task)
```

## Current Product Catalogue

| Product | Size | Price | Detail Page | Notes |
|---------|------|-------|-------------|-------|
| WOLVERINE BLEND | 10mg each | $100 | wolverinestack.html (pending) | BPC-157 + TB-500 |
| GLOW Stack 70mg | 70mg total | $120 | glowstack.html | BPC-157 10mg + GHK-Cu 50mg + TB-500 10mg |
| NAD+ | 1000mg | $99 | nadplus.html | |
| RETATRUTIDE | 10mg | $150 | retatrutide.html | GIP+GLP-1+Glucagon |
| GLUTATHIONE | 1500mg | $90 | — | No detail page yet |
| BPC-157 | 10mg | $70 | bpc157.html | |
| SEMAGLUTIDE | — | $130 | — | No detail page yet |
| TB-500 | 10mg | $85 | tb500.html | |
| GHK-Cu | 100mg | $100 | ghkcu.html | Copper Peptide |

## Architecture

**No framework** — pure HTML/CSS/JS. Each page is self-contained with its own `<style>` block for page-specific CSS, plus the shared `css/styles.css`.

**Cart** (`js/main.js`):
- Persisted in `localStorage` under key `hp_cart`
- Functions: `addToCart(name, price)`, `renderCart()`, `updateCartCount()`, `showToast(msg)`
- Product cards use `<button class="add-to-cart" data-name="X" data-price="Y">`
- Detail pages wire up their own Add to Cart button with an inline `<script>` at bottom of page

**Header** (identical across all pages):
- Black sticky header (`#1a1a1a`)
- Logo: `<img src="61205B8A-CA41-4D01-BDCD-774BFB032CE1.png">` with `border-radius:50%; object-fit:cover` to clip white JPEG corners
- Cart icon + slide-out nav menu

**Product cards** (shop.html / index.html):
- SVG inline vial graphic
- For products WITH a detail page: name wrapped in `<a href="X.html">`, plus a "View Details" `<a>` styled as button above "Add To Cart"
- "View Details" button background color matches the product's detail page theme color

**Product detail pages** — all follow the same structure:
1. Hero section (SVG vial + price + Add to Cart + FDA bar)
2. Key benefits strip (dark colored background)
3. "What is X?" section
4. Research / science section
5. How it works (numbered steps)
6. Dosage guidelines (3-column cards)
7. Administration methods grid
8. Ideal For grid
9. Side effects / safety
10. Tagline banner
11. Final disclaimer (black background)
12. Shared footer + cart drawer

**Theme colors per product:**
- Retatrutide: `#1a3a8a` (dark blue)
- BPC-157: `#0a3a6e` (navy)
- TB-500: `#0b2e4a` (dark navy)
- GHK-Cu: `#1a3566` (blue) + `#b87333` (copper accent)
- NAD+: `#0a1f44` (very dark navy) + `#1565c0` (electric blue)
- GLOW Stack: `#1a2a5e` (navy) + `#1a7a4a` (green)
- Wolverine Stack (pending): `#0d1f3c` (dark navy) + `#1a6e3c` (dark green)

## CSS Variables (styles.css)

```css
--black: #1a1a1a
--white: #fff
--beige: #f5e8d5
--beige-light: #faf4ed
--border: #e0d5c8
```

## Pending Work

- **wolverinestack.html** needs to be created (BPC-157 + TB-500 stack, $100)
  - The WOLVERINE BLEND cards in `shop.html` and `index.html` need "View Details" buttons linking to it
  - Content from infographic: 5 key benefits, BPC-157 breakdown, TB-500 breakdown, 4-step how it works, comparison table (Individual vs Stack), dosage guidelines, research evidence, stacking tips, safety
  - Tagline: "HEAL. RECOVER. DOMINATE. UNLEASH YOUR INNER WOLVERINE."

## Logo

File: `61205B8A-CA41-4D01-BDCD-774BFB032CE1.png` (circular blue caduceus badge, "HELIX PHARM / HELIX-PHARM.COM")

Always render with inline styles to override any cached CSS:
```html
<img src="61205B8A-CA41-4D01-BDCD-774BFB032CE1.png" alt="Helix-Pharm" class="logo-img"
     style="height:54px;width:54px;border-radius:50%;object-fit:cover;display:block;">
```

## When Adding a New Product Detail Page

1. Copy the structure from an existing detail page (e.g. `bpc157.html`)
2. Change the `<style>` block primary color variable
3. Update the SVG vial graphic with the product name/color
4. Add all content sections
5. Wire the inline `<script>` at the bottom for the Add to Cart button
6. Update the product card in **both** `shop.html` and `index.html`:
   - Wrap product name in `<a href="newpage.html">`
   - Add View Details `<a>` button above Add to Cart
