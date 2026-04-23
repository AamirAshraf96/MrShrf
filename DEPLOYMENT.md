# Deployment Guide: MrShrf

This guide covers deploying the MrShrf website and setting up custom domain email (recommended: Cloudflare).

## 1. Contact Form (Cloudflare Pages + Resend)

The contact form uses a Cloudflare Pages Function that sends emails via Resend to **mrshrfmarketing@gmail.com**.

### Setup

1. Create a [Resend](https://resend.com) account. For the `from` address in code, verify the sender in Resend (domain or single sender, per [Resend docs](https://resend.com/docs)) so delivery works.
2. In Cloudflare Pages → your project → **Settings** → **Environment variables**.
3. Add a variable:
   - **Variable name**: `RESEND_API_KEY`
   - **Value**: your Resend API key (from [Resend Dashboard](https://resend.com/api-keys))
   - **Environment**: Production (and Preview if you use branch previews)
4. Redeploy the project so the new variable is available.

---

## 2. Deploy to Cloudflare Pages

### Option A: Git Integration (Recommended)

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Select your GitHub account and the `MrShrf` repository.
3. Build settings:
   - **Framework preset**: Vite
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Add environment variable: `RESEND_API_KEY` = your Resend API key (for the contact form).
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

Purchase `mrshrf.com` (or similar) from:

- [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/) (at-cost pricing)
- [Namecheap](https://www.namecheap.com)
- [Google Domains](https://domains.google)

### Connect to Cloudflare Pages

1. In Cloudflare Pages → your project → **Custom domains** → **Set up a custom domain**.
2. Enter your domain (e.g. `mrshrf.com`).
3. Update DNS at your registrar to use Cloudflare's nameservers (or add the CNAME record they provide).

---

## 4. Custom Domain Email (optional)

Public contact email on the site is **mrshrfmarketing@gmail.com**. If you later want an address like `hello@mrshrf.com`, use Cloudflare **Email** → **Email Routing** to forward that alias to Gmail, and add the MX records Cloudflare provides.

---

## Summary Checklist

- [ ] Create Resend account, verify domain, and add `RESEND_API_KEY` to Cloudflare Pages
- [ ] Deploy to Cloudflare Pages (Git or Wrangler)
- [ ] Buy domain and connect it to Cloudflare Pages
- [ ] (Optional) Cloudflare Email Routing if you use a custom-domain alias
