import { Award, Users, Zap, Heart } from 'lucide-react';

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'We deliver exceptional results through meticulous attention to detail and strategic execution.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Your success is our success. We work as an extension of your team with transparent communication.'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Staying ahead of trends and leveraging cutting-edge strategies to keep you competitive.'
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'We genuinely care about your brand and are invested in driving meaningful growth.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Toronto's Trusted Marketing Partner
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Based in the heart of Toronto, MrShrf Marketing is a full-service digital marketing agency dedicated to helping brands grow and thrive in the modern marketplace.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Our team combines creative excellence with analytical rigor to develop strategies that don't just look good on paper, but deliver real, measurable business results. We specialize in data-driven campaigns that amplify your brand and drive sustainable growth.
            </p>

            <div className="pt-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Proven track record with 200+ satisfied clients</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Data-driven approach that maximizes ROI</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Transparent reporting and regular communication</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Full-service capabilities under one roof</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-lg p-3">
                    <value.icon className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
