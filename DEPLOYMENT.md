# Deployment Guide: MrShrf

This guide covers deploying the MrShrf website and setting up custom domain email (recommended: Cloudflare).

## 1. Contact Form (Cloudflare Pages + Resend)

The contact form uses a Cloudflare Pages Function that sends emails via Resend to sales@mrshrf.com.

### Setup

1. Create a [Resend](https://resend.com) account and verify your domain (mrshrf.com).
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

## 4. Custom Domain Email (Forward to Gmail)

Use Cloudflare Email Routing to forward `sales@mrshrf.com` to your Gmail.

1. Add your domain to Cloudflare (if not already).
2. Go to **Email** → **Email Routing**.
3. Create address: `sales` → Forward to your Gmail address.
4. Add the MX records Cloudflare provides to your domain's DNS.

Emails sent to `sales@mrshrf.com` will appear in your Gmail inbox.

### Sending from Your Domain

In Gmail: **Settings** → **Accounts** → **Add another email address** → enter `sales@mrshrf.com`. You'll need SMTP credentials (e.g. from your domain host or a service like SendGrid) to send from that address.

---

## Summary Checklist

- [ ] Create Resend account, verify domain, and add `RESEND_API_KEY` to Cloudflare Pages
- [ ] Deploy to Cloudflare Pages (Git or Wrangler)
- [ ] Buy domain and connect it to Cloudflare Pages
- [ ] Set up Cloudflare Email Routing to forward to Gmail
