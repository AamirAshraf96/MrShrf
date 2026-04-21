import { Award, Users, Zap, Heart } from 'lucide-react';
import { Reveal } from './motion/Reveal';
import { Stagger, StaggerItem } from './motion/Stagger';

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'We deliver exceptional results through meticulous attention to detail and strategic execution.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Your success is our success. We work as an extension of your team with transparent communication.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Staying ahead of trends and leveraging cutting-edge strategies to keep you competitive.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'We genuinely care about your brand and are invested in driving meaningful growth.',
  },
];

export default function About() {
  return (
    <section id="about" className="border-t border-ink/10 bg-canvas px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-16 md:grid-cols-2 md:items-start md:gap-20">
          <Reveal>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/45">About</p>
            <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink md:text-5xl">
              Toronto&apos;s trusted marketing partner
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-ink/60">
              Based in the heart of Toronto, MrShrf Marketing is a full-service digital marketing agency dedicated to
              helping brands grow and thrive in the modern marketplace.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-ink/60">
              Our team combines creative excellence with analytical rigor to develop strategies that don&apos;t just
              look good on paper, but deliver real, measurable business results.
            </p>

            <div className="mt-12">
              <h3 className="font-display text-xl font-semibold text-ink">Why choose us</h3>
              <ul className="mt-6 space-y-4">
                {[
                  'Proven track record with 200+ satisfied clients',
                  'Data-driven approach that maximizes ROI',
                  'Transparent reporting and regular communication',
                  'Full-service capabilities under one roof',
                ].map((text) => (
                  <li key={text} className="flex items-start gap-3 text-ink/70">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Stagger className="space-y-5">
            {values.map((value, index) => (
              <StaggerItem key={index}>
                <div className="border border-ink/10 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-ink/20 hover:shadow-[0_20px_50px_-24px_rgba(10,10,10,0.1)]">
                  <div className="flex items-start gap-4">
                    <div className="border border-ink/10 p-3">
                      <value.icon className="text-ink" size={22} strokeWidth={1.25} />
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-semibold text-ink">{value.title}</h4>
                      <p className="mt-2 text-[15px] leading-relaxed text-ink/55">{value.description}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
