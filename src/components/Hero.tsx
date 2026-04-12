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

          <div className="relative flex min-h-[280px] items-center justify-center md:min-h-[360px]">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden rounded-3xl">
              <div className="absolute h-[min(100%,420px)] w-[min(100%,420px)] rounded-full bg-blue-200/35 blur-3xl" />
              <div className="absolute h-48 w-48 translate-x-1/3 -translate-y-1/4 rounded-full bg-blue-400/25 blur-2xl" />
              <div className="absolute -bottom-8 -right-4 h-40 w-40 rounded-full bg-blue-100/60 blur-2xl" />
            </div>

            <div className="relative z-10 mx-auto flex w-full max-w-[280px] items-center justify-center rounded-3xl border border-blue-100/80 bg-white/75 px-10 py-12 shadow-lg shadow-blue-900/[0.06] backdrop-blur-md md:max-w-[320px] md:px-12 md:py-14">
              <img
                src="/logo-lettermark.svg"
                alt="MrShrf Marketing"
                className="h-auto w-full max-w-[200px] object-contain md:max-w-[220px]"
              />
            </div>

            <div className="absolute -bottom-2 left-0 z-20 rounded-2xl border border-blue-100/90 bg-white/90 p-5 shadow-md shadow-blue-900/[0.05] backdrop-blur-sm md:-bottom-1 md:-left-2">
              <div className="flex items-center space-x-3">
                <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-blue-500" />
                <span className="text-sm font-medium text-gray-800">Campaign Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
