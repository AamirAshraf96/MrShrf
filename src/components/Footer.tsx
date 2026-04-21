import { Mail } from 'lucide-react';
import { Reveal } from './motion/Reveal';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink px-4 py-16 text-neutral-400 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="mb-12 grid gap-12 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="mb-4 flex items-center gap-3">
                <img src="/logo-lettermark.svg" alt="MrShrf Marketing" className="h-9 w-auto invert" />
                <span className="font-display text-xl font-semibold tracking-tight text-white">MrShrf Marketing</span>
              </div>
              <p className="max-w-md leading-relaxed text-neutral-500">
                Strategic marketing solutions that drive growth and amplify your brand. Based in Toronto, we specialize
                in digital marketing, social media management, and data-driven campaigns.
              </p>
            </div>

            <div>
              <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">Services</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#services" className="transition-colors hover:text-white">
                    Digital marketing
                  </a>
                </li>
                <li>
                  <a href="#services" className="transition-colors hover:text-white">
                    Social media
                  </a>
                </li>
                <li>
                  <a href="#services" className="transition-colors hover:text-white">
                    Content strategy
                  </a>
                </li>
                <li>
                  <a href="#services" className="transition-colors hover:text-white">
                    Brand strategy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">Company</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#about" className="transition-colors hover:text-white">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="transition-colors hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Case studies
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <p className="text-sm text-neutral-500">&copy; {currentYear} MrShrf Marketing. All rights reserved.</p>
          <div className="flex items-center gap-2 text-sm text-neutral-500">
            <Mail size={16} strokeWidth={1.25} />
            <a href="mailto:mrshrfmarketing@gmail.com" className="transition-colors hover:text-white">
              mrshrfmarketing@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
