import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/image.png" alt="MrShrf Marketing" className="h-10 w-10" />
              <span className="text-2xl font-bold text-white">MrShrf Marketing</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Strategic marketing solutions that drive growth and amplify your brand. Based in Toronto, we specialize in digital marketing, social media management, and data-driven campaigns.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="hover:text-white transition-colors">Digital Marketing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Social Media</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Content Strategy</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Brand Strategy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} MrShrf Marketing. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Mail size={16} />
              <span>hello@mrshrf.marketing</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
