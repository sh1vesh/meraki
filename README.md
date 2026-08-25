# Meraki Website 2026

A multi-page redesign of Meraki as a Web3 & AI growth company, built around the **Product → Narrative → Attention → Trust → Conversion** framework.

## Stack
- Next.js 14 / App Router
- React 18
- TypeScript
- Tailwind CSS
- Lucide icons

## Pages
- `/` Home
- `/method`
- `/services`
- `/case-studies`
- `/case-studies/[slug]`
- `/industries`
- `/about`
- `/contact`

## Included case studies
Rain Protocol, SIXR Cricket, Goldbase, MINT, Fairplay, VOICE, $ENLV and League of Sloths.

## Local setup
```bash
npm install
npm run dev
```
Then open `http://localhost:3000`.

## Production
```bash
npm run build
npm start
```
The project is ready for Vercel deployment.

## Before publishing
1. Verify all public-facing campaign metrics against source records.
2. Replace the placeholder contact details / booking links.
3. Add any remaining brand logos, testimonials and new case studies.
4. Add the Method launch film when produced.
5. Confirm legal rights for all campaign screenshots and brand marks displayed publicly.

## GitHub push
```bash
git init
git add .
git commit -m "Rebuild Meraki 2026 website"
git branch -M main
git remote add origin https://github.com/bl3ed-ops/Meraki-Website.git
git push -u origin main --force
```
Use `--force` only if you intend to replace the existing repository history/content.
