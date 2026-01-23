import { Bus, MapPin, Phone, Mail, Clock, Building2, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#/' },
    { name: 'Search Buses', href: '#/search' },
    { name: 'All Depots', href: '#/' },
    { name: 'Route Map', href: '#/' },
  ];

  const popularDepots = [
    'Chandigarh', 'Ambala', 'Delhi (ISBT)', 'Gurugram',
    'Faridabad', 'Karnal', 'Panipat', 'Rohtak',
    'Kurukshetra', 'Panchkula', 'Rewari', 'Jhajjar'
  ];

  const contactInfo = [
    { icon: Phone, text: '1800-180-2006 (Toll Free)', label: 'Customer Care' },
    { icon: Mail, text: 'info@haryanaroadways.gov.in', label: 'Email Support' },
    { icon: Clock, text: '24/7 Service Available', label: 'Availability' },
    { icon: Building2, text: 'Transport Department, Haryana', label: 'Department' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white mt-12 sm:mt-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative">
        {/* Top Wave Decoration */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500"></div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* About Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2.5 rounded-xl shadow-xl">
                  <Bus className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-black text-white">Haryana Roadways</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your trusted partner for comfortable and safe bus travel across Haryana and neighboring states. Connecting cities with reliable service since 1966.
              </p>
              <div className="flex gap-3">
                <a href="#" className="bg-white/10 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 p-2 rounded-lg transition-all duration-300 hover:scale-110">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="bg-white/10 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 p-2 rounded-lg transition-all duration-300 hover:scale-110">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="bg-white/10 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 p-2 rounded-lg transition-all duration-300 hover:scale-110">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="bg-white/10 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 p-2 rounded-lg transition-all duration-300 hover:scale-110">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-black text-white flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></div>
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm font-medium flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-orange-500 transition-colors"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Depots */}
            <div className="space-y-4">
              <h4 className="text-lg font-black text-white flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></div>
                Major Depots
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {popularDepots.slice(0, 8).map((depot) => (
                  <div
                    key={depot}
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-xs font-medium flex items-center gap-1.5 group cursor-pointer"
                  >
                    <MapPin className="w-3 h-3 text-gray-600 group-hover:text-orange-500 transition-colors flex-shrink-0" />
                    {depot}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-black text-white flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></div>
                Contact Us
              </h4>
              <ul className="space-y-3">
                {contactInfo.map((info) => (
                  <li key={info.label} className="flex items-start gap-3 group">
                    <div className="bg-white/10 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-red-500 p-2 rounded-lg transition-all duration-300 flex-shrink-0">
                      <info.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-semibold">{info.label}</div>
                      <div className="text-sm text-gray-300 font-medium">{info.text}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

          {/* Important Notice */}
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-4 sm:p-5 mb-8">
            <h5 className="text-sm font-black text-orange-400 mb-2 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Important Notice
            </h5>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              All timings displayed are subject to change during festivals, holidays, and adverse weather conditions. 
              Please verify schedules with your nearest bus depot before traveling. Senior citizens (60+) and students 
              are eligible for concessional fares on production of valid ID proof.
            </p>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-800">
            <div className="text-sm text-gray-400 text-center sm:text-left">
              <p className="font-medium">
                © {currentYear} <span className="font-bold text-white">Haryana Roadways</span>. All rights reserved.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Managed by Transport Department, Government of Haryana
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-400">
              <a href="#" className="hover:text-orange-400 transition-colors font-medium">Privacy Policy</a>
              <span className="text-gray-700">•</span>
              <a href="#" className="hover:text-orange-400 transition-colors font-medium">Terms of Service</a>
              <span className="text-gray-700">•</span>
              <a href="#" className="hover:text-orange-400 transition-colors font-medium">Refund Policy</a>
              <span className="text-gray-700">•</span>
              <a href="#" className="hover:text-orange-400 transition-colors font-medium">Feedback</a>
            </div>
          </div>

          {/* Developer Credit */}
          <div className="text-center mt-6 pt-6 border-t border-gray-800">
            <p className="text-xs text-gray-500">
              Website designed for easy access to Haryana Roadways bus schedules and routes
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
