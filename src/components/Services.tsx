import { Target, Share2, FileText, BarChart3, Megaphone, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'Digital Marketing Strategy',
    description: 'Comprehensive marketing plans tailored to your business goals, audience insights, and competitive landscape.',
    features: ['Market Analysis', 'Campaign Planning', 'KPI Development']
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    description: 'Engaging social presence across all platforms with consistent posting, community management, and growth strategies.',
    features: ['Content Scheduling', 'Community Engagement', 'Analytics Tracking']
  },
  {
    icon: FileText,
    title: 'Content Strategy',
    description: 'Compelling content that resonates with your audience and drives action across blogs, videos, and social media.',
    features: ['Content Creation', 'SEO Optimization', 'Editorial Calendar']
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Campaigns',
    description: 'Performance-focused campaigns optimized through continuous testing, analytics, and data insights.',
    features: ['A/B Testing', 'Performance Tracking', 'ROI Optimization']
  },
  {
    icon: Megaphone,
    title: 'Brand Amplification',
    description: 'Strategic brand positioning and promotion to increase visibility, recognition, and market share.',
    features: ['Brand Strategy', 'PR Outreach', 'Influencer Partnerships']
  },
  {
    icon: Sparkles,
    title: 'Creative Design',
    description: 'Eye-catching visuals and creative assets that capture attention and communicate your brand message.',
    features: ['Graphic Design', 'Video Production', 'Brand Assets']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Marketing Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From strategy to execution, we deliver integrated marketing services that drive growth and amplify your brand.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl p-8 hover:bg-blue-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="bg-white rounded-xl p-4 inline-block mb-6 group-hover:bg-blue-500 transition-colors">
                <service.icon className="text-blue-600 group-hover:text-white transition-colors" size={32} />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-white transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 group-hover:text-blue-50 transition-colors leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-700 group-hover:text-white transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-600 group-hover:bg-white rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
