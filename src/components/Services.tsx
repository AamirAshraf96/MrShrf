import { Target, Share2, FileText, BarChart3, Megaphone, Sparkles } from 'lucide-react';
import { Reveal } from './motion/Reveal';
import { Stagger, StaggerItem } from './motion/Stagger';

const services = [
  {
    icon: Target,
    title: 'Digital Marketing Strategy',
    description:
      'Comprehensive marketing plans tailored to your business goals, audience insights, and competitive landscape.',
    features: ['Market Analysis', 'Campaign Planning', 'KPI Development'],
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    description:
      'Engaging social presence across all platforms with consistent posting, community management, and growth strategies.',
    features: ['Content Scheduling', 'Community Engagement', 'Analytics Tracking'],
  },
  {
    icon: FileText,
    title: 'Content Strategy',
    description:
      'Compelling content that resonates with your audience and drives action across blogs, videos, and social media.',
    features: ['Content Creation', 'SEO Optimization', 'Editorial Calendar'],
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Campaigns',
    description:
      'Performance-focused campaigns optimized through continuous testing, analytics, and data insights.',
    features: ['A/B Testing', 'Performance Tracking', 'ROI Optimization'],
  },
  {
    icon: Megaphone,
    title: 'Brand Amplification',
    description:
      'Strategic brand positioning and promotion to increase visibility, recognition, and market share.',
    features: ['Brand Strategy', 'PR Outreach', 'Influencer Partnerships'],
  },
  {
    icon: Sparkles,
    title: 'Creative Design',
    description:
      'Eye-catching visuals and creative assets that capture attention and communicate your brand message.',
    features: ['Graphic Design', 'Video Production', 'Brand Assets'],
  },
];

export default function Services() {
  return (
    <section id="services" className="border-t border-ink/10 bg-white px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-20 max-w-3xl">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/45">Capabilities</p>
          <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink md:text-5xl lg:text-6xl">
            Comprehensive marketing solutions
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/60">
            From strategy to execution, we deliver integrated services that drive growth and amplify your brand.
          </p>
        </Reveal>

        <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <div className="group flex h-full flex-col border border-ink/10 bg-canvas/40 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-ink/25 hover:bg-white hover:shadow-[0_24px_60px_-28px_rgba(10,10,10,0.12)]">
                <div className="mb-6 inline-flex border border-ink/10 bg-white p-3 transition-colors duration-300 group-hover:border-ink/20">
                  <service.icon className="text-ink" size={26} strokeWidth={1.25} />
                </div>

                <h3 className="font-display text-xl font-semibold tracking-tight text-ink">{service.title}</h3>

                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink/55">{service.description}</p>

                <ul className="mt-8 space-y-2.5 border-t border-ink/10 pt-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-ink/65">
                      <span className="mr-2.5 h-px w-6 bg-ink/25" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
