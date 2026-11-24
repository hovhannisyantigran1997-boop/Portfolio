# Tigran Hovhannisyan — Portfolio

Next.js (App Router) portfolio, editorial/minimal style, ready for Vercel.

## 1. Run it locally

Requires Node.js 18.18+ (https://nodejs.org).

```bash
cd portfolio
npm install
npm run dev
```

Open http://localhost:3000. Edits reload instantly.

## 2. Edit your content

Almost everything lives in **`content/site.ts`**:

- `site` → name, intro line, email, socials, about paragraphs
- `clients` → each client, a one-line summary, and sample article links (`samples`)
- `newsletters` → name, tagline, optional `cadence`, optional `href` (makes the card clickable)
- `services` → the "What I do" list

Search for `TODO` and replace the placeholders (email, LinkedIn/Substack links, sample URLs).

Colours: change `--accent` at the top of `app/globals.css`.
Fonts: Fraunces (headlines) + Inter (body), set in `app/layout.tsx`.

## 3. Push to GitHub

Create an empty repo on GitHub (no README), then:

```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```

## 4. Deploy on Vercel

1. Go to https://vercel.com/new
2. Import the `portfolio` repo from GitHub
3. Framework preset: **Next.js** (auto-detected). Leave build settings as default.
4. Click **Deploy**. You'll get a URL like `portfolio-xyz.vercel.app` in ~1 minute.

Every `git push` to `main` redeploys automatically.

After the first deploy, put your live URL in `site.url` in `content/site.ts` (used for link previews).

## 5. Custom domain (optional)

Vercel → your project → **Settings → Domains** → add `yourname.com`, then add the DNS records Vercel shows at your domain registrar.

## Alternative: deploy without GitHub

```bash
npm i -g vercel
vercel        # preview deploy
vercel --prod # production
```
