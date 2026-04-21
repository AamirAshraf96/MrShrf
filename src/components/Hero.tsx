import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { LineReveal } from './motion/LineReveal';
import { Reveal } from './motion/Reveal';
import { transition } from '../motion/constants';

const headlineLines = ['We grow', 'brands with', 'strategy &', 'creative'];

export default function Hero() {
  const reduce = useReducedMotion();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-canvas px-4 pb-24 pt-28 sm:px-6 sm:pt-32 lg:px-10 lg:pt-36"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(to right, #0a0a0a 1px, transparent 1px), linear-gradient(to bottom, #0a0a0a 1px, transparent 1px)`,
            backgroundSize: '72px 72px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col gap-16 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
        <div className="max-w-4xl flex-1">
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: transition.headline.ease, delay: 0.05 }}
            className="mb-10 inline-flex items-center border border-ink/10 bg-white/60 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/70 backdrop-blur-sm"
          >
            Toronto marketing studio
          </motion.div>

          <h1 className="font-display text-[clamp(2.75rem,8vw,5.75rem)] font-semibold leading-[0.92] tracking-[-0.03em] text-ink">
            {headlineLines.map((line, i) => (
              <LineReveal key={line} delay={0.08 + i * transition.stagger} className="block">
                <span className="block pb-[0.06em]">{line}</span>
              </LineReveal>
            ))}
          </h1>

          <Reveal className="mt-10 max-w-xl" delay={0.15} y={28}>
            <p className="text-lg leading-relaxed text-ink/65 md:text-xl">
              We shape campaigns that connect to convert—data-led strategy, standout creative, and channel execution
              that keeps your brand coherent everywhere your audience shows up.
            </p>
          </Reveal>

          <Reveal className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4" delay={0.22} y={20}>
            <button
              type="button"
              onClick={() => scrollTo('services')}
              className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-ink"
            >
              <span className="relative">
                Our services
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-100 bg-ink transition-transform duration-300 group-hover:origin-right group-hover:scale-x-0" />
              </span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
            <button
              type="button"
              onClick={() => scrollTo('contact')}
              className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-ink"
            >
              <span className="relative">
                Contact us
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-100 bg-ink transition-transform duration-300 group-hover:origin-right group-hover:scale-x-0" />
              </span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </Reveal>
        </div>

        <motion.div
          className="relative flex w-full max-w-md shrink-0 flex-col items-start gap-6 lg:max-w-sm"
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, ease: transition.headline.ease, delay: 0.45 }}
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden border border-ink/10 bg-white/80 shadow-[0_32px_80px_-24px_rgba(10,10,10,0.18)] backdrop-blur-md">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-canvas to-neutral-200/40" />
            <div className="relative flex h-full min-h-[280px] items-center justify-center p-10 md:min-h-[320px] md:p-12">
              <motion.img
                src="/logo-lettermark.svg"
                alt="MrShrf Marketing"
                className="h-auto w-full max-w-[200px] object-contain md:max-w-[220px]"
                animate={
                  reduce
                    ? {}
                    : {
                        y: [0, -6, 0],
                      }
                }
                transition={
                  reduce
                    ? {}
                    : {
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }
                }
              />
            </div>
          </div>

          <motion.div
            className="flex items-center gap-3 border border-ink/10 bg-white/90 px-4 py-3 text-sm text-ink/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.95, duration: 0.45 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/40 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="font-medium tracking-tight">Taking new projects</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
