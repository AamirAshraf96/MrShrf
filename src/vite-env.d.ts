/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Formspree form URL (e.g. https://formspree.io/f/xxxx). Inlined at build time — set in Cloudflare Pages build env too. */
  readonly VITE_FORMSPREE_ENDPOINT?: string;
  /** Optional base URL for `/api/contact` during local dev (e.g. `http://127.0.0.1:8788` with `wrangler pages dev`). */
  readonly VITE_CONTACT_API_ORIGIN?: string;
}
