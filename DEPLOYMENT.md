# Deployment Guide: MrShrf

This guide covers deploying the MrShrf website and setting up custom domain email (recommended: Cloudflare).

## 1. Contact Form (Formspree)

The contact form sends submissions to your inbox via Formspree.

### Setup

1. Go to [formspree.io](https://formspree.io) and create a free account.
2. Create a new form. You'll get an endpoint like `https://formspree.io/f/xxxxxxxx`.
3. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
4. Add your Formspree endpoint to `.env`:
   ```
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   ```
5. In Formspree, set the notification email to your custom address (e.g. `hello@mrshrf.marketing`).

### Cloudflare Pages / Vercel / Netlify

Add `VITE_FORMSPREE_ENDPOINT` as an environment variable in your hosting dashboard so it's available at build time.

---

## 2. Deploy to Cloudflare Pages

### Option A: Git Integration (Recommended)

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Select your GitHub account and the `MrShrf` repository.
3. Build settings:
   - **Framework preset**: Vite
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Add environment variable: `VITE_FORMSPREE_ENDPOINT` = your Formspree endpoint.
5. Deploy. Cloudflare will build and deploy on every push to `main`.

### Option B: Wrangler CLI

1. Install Wrangler: `npm install -g wrangler` (or use `npx wrangler`).
2. Log in: `npx wrangler login`.
3. Create the Pages project (one-time): `npx wrangler pages project create mrshrf`.
4. Deploy:
   ```bash
   npm run deploy:cloudflare
   ```

---

## 3. Custom Domain

### Buy a Domain

Purchase `mrshrf.marketing` (or similar) from:

- [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/) (at-cost pricing)
- [Namecheap](https://www.namecheap.com)
- [Google Domains](https://domains.google)

### Connect to Cloudflare Pages

1. In Cloudflare Pages → your project → **Custom domains** → **Set up a custom domain**.
2. Enter your domain (e.g. `mrshrf.marketing`).
3. Update DNS at your registrar to use Cloudflare's nameservers (or add the CNAME record they provide).

---

## 4. Custom Domain Email (Forward to Gmail)

Use Cloudflare Email Routing to forward `hello@mrshrf.marketing` to your Gmail.

1. Add your domain to Cloudflare (if not already).
2. Go to **Email** → **Email Routing**.
3. Create address: `hello` → Forward to your Gmail address.
4. Add the MX records Cloudflare provides to your domain's DNS.

Emails sent to `hello@mrshrf.marketing` will appear in your Gmail inbox.

### Sending from Your Domain

In Gmail: **Settings** → **Accounts** → **Add another email address** → enter `hello@mrshrf.marketing`. You'll need SMTP credentials (e.g. from your domain host or a service like SendGrid) to send from that address.

---

## Summary Checklist

- [ ] Create Formspree account and add `VITE_FORMSPREE_ENDPOINT` to `.env` and hosting env vars
- [ ] Deploy to Cloudflare Pages (Git or Wrangler)
- [ ] Buy domain and connect it to Cloudflare Pages
- [ ] Set up Cloudflare Email Routing to forward to Gmail
