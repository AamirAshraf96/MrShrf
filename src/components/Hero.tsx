import { ArrowRight, TrendingUp } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <TrendingUp size={16} />
              <span>Toronto's Premier Marketing Agency</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Strategic Marketing That Drives
              <span className="text-blue-600"> Real Growth</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Transform your brand with data-driven campaigns, compelling content, and strategic social media management that delivers measurable results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="group bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 font-medium"
              >
                <span>Start Your Campaign</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-gray-900 px-8 py-4 rounded-full hover:shadow-lg transition-all border border-gray-200 font-medium"
              >
                Explore Services
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-gray-900">200+</div>
                <div className="text-sm text-gray-600">Clients Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">95%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">3x</div>
                <div className="text-sm text-gray-600">Avg ROI Increase</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-500 to-blue-700 p-1 shadow-2xl">
              <div className="w-full h-full bg-white rounded-3xl flex items-center justify-center p-12">
                <img src="/image.png" alt="MrShrf Marketing" className="w-full h-full object-contain" />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-900">Campaign Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
