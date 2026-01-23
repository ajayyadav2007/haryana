import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';

export default function Root() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12 mt-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="font-black text-xl mb-4 text-orange-400">Haryana Roadways</h3>
              <p className="text-gray-400 leading-relaxed font-medium">
                Your trusted partner for bus travel across Haryana. Complete timetable information for all routes and depots.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-black text-xl mb-4 text-orange-400">Quick Links</h3>
              <ul className="space-y-2 text-gray-400 font-medium">
                <li className="hover:text-orange-400 transition-colors cursor-pointer">All Routes</li>
                <li className="hover:text-orange-400 transition-colors cursor-pointer">Search Buses</li>
                <li className="hover:text-orange-400 transition-colors cursor-pointer">Depot Information</li>
                <li className="hover:text-orange-400 transition-colors cursor-pointer">FAQs</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-black text-xl mb-4 text-orange-400">Contact Us</h3>
              <ul className="space-y-3 text-gray-400 font-medium">
                <li className="flex items-center gap-3 hover:text-orange-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>1800-180-XXXX</span>
                </li>
                <li className="flex items-center gap-3 hover:text-orange-400 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>info@hrtc.gov.in</span>
                </li>
                <li className="flex items-start gap-3 hover:text-orange-400 transition-colors">
                  <MapPin className="w-4 h-4 mt-1" />
                  <span>Haryana State Road Transport Corporation</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400 font-medium flex items-center justify-center gap-2 flex-wrap">
              © 2026 Haryana Roadways. All rights reserved.
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for travelers
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}