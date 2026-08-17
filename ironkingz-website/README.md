# Iron Kingz — Website

Marketing site for **Iron Kingz** (Honolulu combat sports & martial arts gym).
Built with [Astro](https://astro.build) (static output) + Tailwind CSS.

---

## Deploy to Vercel (recommended)

Vercel auto-detects Astro — no config needed.

### 1. Put this project on GitHub
```bash
# from inside this folder
git init
git add .
git commit -m "Initial commit — Iron Kingz site"
git branch -M main
# create an empty repo on github.com first, then:
git remote add origin https://github.com/<your-username>/iron-kingz.git
git push -u origin main
```

### 2. Import into Vercel
1. Go to **vercel.com → Add New… → Project**
2. **Import** your `iron-kingz` GitHub repo
3. Vercel detects **Astro** automatically:
   - Framework Preset: **Astro**
   - Build Command: `astro build`
   - Output Directory: `dist`
   - Install Command: `npm install`
4. Click **Deploy**. Done — you get a live `*.vercel.app` URL.

### 3. Point your domain (when ready)
- In Vercel → **Project → Settings → Domains**, add `ironkingz.com` and `www.ironkingz.com`
- Update your DNS as Vercel instructs
- Then set the production domain in **`astro.config.mjs`** (`const SITE = ...`) so canonical URLs + sitemap are correct, commit, and push.

Every `git push` to `main` auto-deploys.

---

## Run locally
Requires Node 18.20.8+, 20.3+, or 22+.
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

---

## Editing content (no component changes needed)
Most content lives in plain data files under `src/data/`:
- `coaches.ts` — coach names, bios, photos, ordering
- `schedule.ts` — class schedule (days, times, programs)
- `memberships.ts` — plans & pricing
- `programs.ts` — the four programs
- `site.ts` — address, phone, email, hours, socials
- `nav.ts` — navigation links

Photos live in `src/assets/photos/` and are registered in `src/data/images.ts`.

## Notes
- **Waiver** (`/waiver`) embeds the gym's live GoHighLevel form — signed waivers go to the GoHighLevel account.
- Legacy URL redirects (old Squarespace paths → new pages) are defined in `astro.config.mjs`.
