# Habitual Backlinks Monorepo

4 statiska SEO-stödsajter byggda i Astro, alla deployas till samma Hetzner-box (CX23 i Helsinki, IP 204.168.174.15).

## Sajter

| Sajt | Path | Live URL | Status |
|---|---|---|---|
| ashwagandhagummies.se | `sites/ashwa/` | https://ashwagandhagummies.se | TODO bygga + flytta DNS |
| seamossgummies.se | `sites/seamoss/` | https://seamossgummies.se | TODO bygga + flytta DNS |
| shilajitsverige.se | `sites/shilajit/` | https://shilajitsverige.se | TODO bygga + flytta DNS |
| kreatingummies.se | `sites/kreatin/` | https://kreatingummies.se | TODO bygga + flytta DNS |

## Migration från Loopia (WordPress)

Innehåll ska portas från befintliga WP-sajter på Loopia:
- ashwa: 3 sidor + 7 inlägg, Astra-tema, byggd 2026-04-21
- seamoss: 3 sidor + 7 inlägg, samma som ashwa
- shilajit: 10 URLs, Rank Math + nginx (host okonfirmerad)
- kreatin: Elementor + Rank Math (mer komplext)

URL-slugs MÅSTE behållas (för att inte tappa backlinks). Schema, metas och anchor-text-varianter för anti-PBN-länkar måste portas.

## Stack

- **Astro** (statisk SSG, MD/MDX-content)
- **Caddy** (host-installerad på servern, auto-TLS via Let's Encrypt)
- **GitHub Actions / webhook** för auto-deploy på push till main
- **Server**: `habitual-backlinks-prod-01` (CX23, Helsinki, 204.168.174.15)

## Bygg + Deploy

```bash
# Lokalt
cd sites/ashwa && npm install && npm run build

# Deploy (efter webhook är konfigurerad)
git push origin main
# → webhook hits server → git pull + build:all → rsync dist/ → /var/www/<site>/dist/
```

## Anti-PBN-rules

- Egen redaktör per sajt (fiktiv): t.ex. Elin Bergqvist för kreatin
- 4 av 7 inlägg länkar till habitual.se med varierade nofollow-ankarrtexter
- Egen ton och layout per sajt — undvik att alla ser ut som mall
