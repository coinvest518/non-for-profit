import { Facebook, Twitter, Instagram, Linkedin, Users, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-fortis-dark text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-fortis-orange rounded-full flex items-center justify-center">
                <Users className="text-white" size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold">Fortis Proles Inc</h4>
                <p className="text-fortis-peru">Strong Offspring</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Nurturing and empowering youth from the womb through adulthood by supporting families, equipping youth with life skills, and providing economic, emotional, and educational tools to transform generational cycles.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-fortis-brown rounded-lg flex items-center justify-center hover:bg-fortis-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-fortis-brown rounded-lg flex items-center justify-center hover:bg-fortis-orange transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-fortis-brown rounded-lg flex items-center justify-center hover:bg-fortis-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-fortis-brown rounded-lg flex items-center justify-center hover:bg-fortis-orange transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-300 hover:text-fortis-orange transition-colors">About Us</a></li>
              <li><a href="#programs" className="text-gray-300 hover:text-fortis-orange transition-colors">Our Programs</a></li>
              <li><a href="#volunteer" className="text-gray-300 hover:text-fortis-orange transition-colors">Volunteer</a></li>
              <li><a href="#events" className="text-gray-300 hover:text-fortis-orange transition-colors">Events</a></li>
              <li><a href="#" className="text-gray-300 hover:text-fortis-orange transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-fortis-orange transition-colors">Annual Reports</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Contact Info</h5>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="text-fortis-orange mt-1" size={16} />
                <p className="text-gray-300 text-sm">
                  212 Delaware Ave FL 1<br />
                  Albany, NY 12209
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-fortis-orange" size={16} />
                <p className="text-gray-300 text-sm">(518) 704-8543</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-fortis-orange" size={16} />
                <p className="text-gray-300 text-sm">astrong1109@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Fortis Proles Inc. All rights reserved. | DOS ID: <a href="https://apps.dos.ny.gov/publicInquiry/EntityDisplay" target="_blank" rel="noopener noreferrer" className="text-fortis-orange hover:text-fortis-orange/80">7433656</a>
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-fortis-orange text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-fortis-orange text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-fortis-orange text-sm transition-colors">Financial Transparency</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
