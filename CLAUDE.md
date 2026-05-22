# Helix-Pharm — Projektstatus & Session-Gedächtnis

## Projekt-Übersicht
Statische HTML/CSS/JS Website für **Helix-Pharm** (Forschungs-Peptide, Research Use Only).
- Kein npm / kein Build-Tool — reines HTML/CSS/JS
- Repo: `kevinprinceru-ctrl/PrinceTyrael`
- GitHub Pages aktiv unter: `kevinprinceru-ctrl.github.io/PrinceTyrael/`

## Dateien
```
index.html      — Startseite (Hero, Produkt-Grid, Features)
shop.html       — Shop-Seite (alle 8 Produkte als Karten)
contact.html    — Kontaktseite
css/styles.css  — Haupt-Stylesheet
js/main.js      — Cart-Logik, Hamburger-Menu, Scroll-Effekte
61205B8A-CA41-4D01-BDCD-774BFB032CE1.png  — Helix-Pharm Logo (blauer Kreis)
47033D89-0AFC-4682-B5F5-2CE9AA2C451C.png  — Retatrutide Foto (weißes Etikett, rotes Badge)
```

## Aktive Branches
| Branch | Zweck | GitHub Pages? |
|--------|-------|--------------|
| `claude/rebrand-helix-pharm-website-73wZf` | Haupt-Redesign, wird von GitHub Pages geserved | JA |
| `claude/install-design-plugin-JRHcM` | Frontend-Design Plugin + Retatrutide Foto | Nein |

## Was wurde gemacht

### 1. Frontend-Design Plugin installiert
- Marketplace hinzugefügt: `anthropics/claude-code` → gespeichert als `claude-code-plugins`
- Plugin installiert: `frontend-design@claude-code-plugins` v1.0.0 (user scope, enabled)
- Skill-Datei: `/root/.claude/plugins/cache/claude-code-plugins/frontend-design/1.0.0/skills/frontend-design/SKILL.md`

### 2. Retatrutide Produktbild getauscht
- **Vorher:** Inline SVG (beige Flasche mit schwarzem Etikett)
- **Nachher:** Echtes Produktfoto `47033D89-0AFC-4682-B5F5-2CE9AA2C451C.png` (weiße Etikette, rotes "10MG/Vial" Badge)
- Geändert in: `shop.html` und `index.html` auf beiden Branches
- Das Foto wurde vom User auf den `rebrand`-Branch gepusht und von dort geholt

### 3. GitHub Pages
- User hat Pages eingerichtet, servet von `claude/rebrand-helix-pharm-website-73wZf`
- Problem: Manchmal zeigt der Browser noch die alte gecachte Version
- Lösung: Incognito-Modus oder Hard Refresh

## Offene Punkte / To-Do
- [ ] GitHub Pages Cache-Problem klären — User sieht noch alte Version im Browser
- [ ] Ggf. weitere Produktfotos tauschen (andere Produkte haben noch SVG-Illustrationen)
- [ ] Branches ggf. zusammenführen (rebrand + install-design-plugin)
- [ ] Projekt-Skill (`.claude/skills/`) einrichten falls gewünscht

## Produkte im Shop (alle 8)
| Produkt | Preis | Bild-Typ |
|---------|-------|----------|
| WOLVERINE BLEND (TB500 + BPC-157) | $100 | SVG |
| GLOW (TB500 + BPC-157 + GHK-CU) | $120 | SVG |
| NAD+ 1000mg | $80 | SVG |
| RETATRUTIDE 10mg | $150 | **Foto** ✓ |
| GLUTATHIONE 1500mg | $90 | SVG |
| BPC-157 5mg | $70 | SVG |
| SEMAGLUTIDE 5mg | $130 | SVG |
| TB-500 10mg | $85 | SVG |

## User-Sprache
Der User kommuniziert auf **Deutsch** und manchmal Englisch. Antworten gerne auf Deutsch.
