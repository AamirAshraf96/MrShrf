import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 32);
  });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <motion.nav
      className={`fixed z-50 w-full border-b transition-colors duration-500 ${
        scrolled ? 'border-ink/10 bg-canvas/90 backdrop-blur-md' : 'border-transparent bg-transparent'
      }`}
      initial={false}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-10">
        <button
          type="button"
          onClick={() => scrollToSection('home')}
          className="font-display text-lg font-semibold tracking-tight text-ink"
        >
          MrShrf
        </button>

        <div className="hidden items-center gap-10 md:flex">
          {(['home', 'services', 'about', 'contact'] as const).map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollToSection(id)}
              className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/55 transition-colors hover:text-ink"
            >
              {id === 'home' ? 'Home' : id === 'services' ? 'Services' : id === 'about' ? 'About' : 'Contact'}
            </button>
          ))}
          <button
            type="button"
            onClick={() => scrollToSection('contact')}
            className="border border-ink/15 bg-ink px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-canvas transition-colors hover:bg-ink/90"
          >
            Get started
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 md:hidden"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/70">Menu</span>
          {isOpen ? <X size={22} className="text-ink" /> : <Menu size={22} className="text-ink" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-ink/10 bg-canvas md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-6">
              {(['home', 'services', 'about', 'contact'] as const).map((id, i) => (
                <motion.button
                  key={id}
                  type="button"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => scrollToSection(id)}
                  className="py-3 text-left text-sm font-semibold uppercase tracking-[0.18em] text-ink/80"
                >
                  {id === 'home' ? 'Home' : id === 'services' ? 'Services' : id === 'about' ? 'About' : 'Contact'}
                </motion.button>
              ))}
              <motion.button
                type="button"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => scrollToSection('contact')}
                className="mt-4 border border-ink/15 bg-ink py-3 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-canvas"
              >
                Get started
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
