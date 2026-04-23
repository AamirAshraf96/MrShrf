import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { Reveal } from './motion/Reveal';

const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim();

/** Same-origin `/api/contact` (Cloudflare + Resend). Local: optional `VITE_CONTACT_API_ORIGIN` with `wrangler pages dev`. */
function getApiContactUrl(): string {
  const raw = import.meta.env.VITE_CONTACT_API_ORIGIN?.trim();
  const origin = raw ? raw.replace(/\/$/, '') : '';
  return origin ? `${origin}/api/contact` : '/api/contact';
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    setSubmitting(true);
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message,
      };

      const url = formspreeEndpoint ?? getApiContactUrl();
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = (await res.json().catch(() => null)) as { error?: string } | null;
      if (!res.ok) {
        const fallback =
          !formspreeEndpoint && res.status === 404
            ? 'No Formspree URL set (VITE_FORMSPREE_ENDPOINT), and /api/contact was not found. For Formspree: add the env var. For Cloudflare: deploy Pages with Functions and RESEND_API_KEY.'
            : 'Something went wrong. Please try again.';
        throw new Error(data?.error ?? fallback);
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const inputClass =
    'w-full border border-ink/15 bg-white px-4 py-3 text-ink placeholder:text-ink/35 transition-colors focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink';

  return (
    <section id="contact" className="border-t border-ink/10 bg-white px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-16 max-w-3xl">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/45">Contact</p>
          <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink md:text-5xl lg:text-6xl">
            Let&apos;s start growing your brand
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/60">
            Ready to amplify your marketing? Get in touch and let&apos;s discuss how we can help you achieve your goals.
          </p>
        </Reveal>

        <div className="grid gap-16 md:grid-cols-2 md:gap-20">
          <Reveal className="space-y-10" delay={0.06}>
            <div>
              <h3 className="font-display text-xl font-semibold text-ink">Get in touch</h3>
              <p className="mt-4 leading-relaxed text-ink/60">
                Whether you&apos;re looking to launch a new campaign, revamp your social media presence, or develop a
                comprehensive marketing strategy, we&apos;re here to help.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="border border-ink/10 p-3">
                  <Mail className="text-ink" size={22} strokeWidth={1.25} />
                </div>
                <div>
                  <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/45">Email</h4>
                  <p className="mt-1 text-ink/80">
                    <a href="mailto:mrshrfmarketing@gmail.com" className="transition-colors hover:text-ink">
                      mrshrfmarketing@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="border border-ink/10 p-3">
                  <Phone className="text-ink" size={22} strokeWidth={1.25} />
                </div>
                <div>
                  <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/45">Phone</h4>
                  <p className="mt-1 text-ink/80">
                    <a href="tel:+14168556314" className="transition-colors hover:text-ink">
                      +1 (416) 855-6314
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="border border-ink/10 p-3">
                  <MapPin className="text-ink" size={22} strokeWidth={1.25} />
                </div>
                <div>
                  <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/45">Location</h4>
                  <p className="mt-1 text-ink/80">Toronto, Ontario, Canada</p>
                </div>
              </div>
            </div>

            <div className="border border-ink/10 bg-ink p-8 text-canvas">
              <h4 className="font-display text-xl font-semibold">Free consultation</h4>
              <p className="mt-3 text-sm leading-relaxed text-canvas/75">
                Schedule a complimentary 30-minute strategy session to discuss your marketing goals.
              </p>
              <button
                type="button"
                className="mt-6 border border-canvas/30 bg-transparent px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-canvas transition-colors hover:bg-canvas hover:text-ink"
              >
                Book now
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="border border-ink/10 bg-canvas/50 p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/50">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/50">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/50">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/50">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us about your marketing needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="group flex w-full items-center justify-center gap-2 border border-ink bg-ink py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-canvas transition-colors hover:bg-ink/90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <span>{submitted ? 'Message sent' : submitting ? 'Sending…' : 'Send message'}</span>
                  <Send size={18} className="transition-transform group-hover:translate-x-0.5" />
                </button>

                {submitError && (
                  <div className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">{submitError}</div>
                )}

                {submitted && (
                  <div className="border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
                    Thank you for reaching out! We&apos;ll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
