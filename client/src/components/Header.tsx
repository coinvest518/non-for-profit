import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoSvg from "@/assets/logo.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-16 h-16 flex items-center justify-center">
              <img src={logoSvg} alt="Fortis Proles Inc Logo" className="w-16 h-16" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-fortis-brown">Fortis Proles Inc</h1>
              <p className="text-sm text-fortis-peru">Strong Offspring</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-fortis-brown font-medium transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-fortis-brown font-medium transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('programs')}
              className="text-gray-700 hover:text-fortis-brown font-medium transition-colors"
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection('volunteer')}
              className="text-gray-700 hover:text-fortis-brown font-medium transition-colors"
            >
              Volunteer
            </button>
            <button
              onClick={() => scrollToSection('events')}
              className="text-gray-700 hover:text-fortis-brown font-medium transition-colors"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-fortis-brown font-medium transition-colors"
            >
              Contact
            </button>
            <Button 
              onClick={() => window.open('https://www.paypal.com/donate', '_blank')}
              className="bg-fortis-orange text-white hover:bg-fortis-orange/90"
            >
              Donate Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-fortis-brown font-medium transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-fortis-brown font-medium transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('programs')}
                className="text-gray-700 hover:text-fortis-brown font-medium transition-colors text-left"
              >
                Programs
              </button>
              <button
                onClick={() => scrollToSection('volunteer')}
                className="text-gray-700 hover:text-fortis-brown font-medium transition-colors text-left"
              >
                Volunteer
              </button>
              <button
                onClick={() => scrollToSection('events')}
                className="text-gray-700 hover:text-fortis-brown font-medium transition-colors text-left"
              >
                Events
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-fortis-brown font-medium transition-colors text-left"
              >
                Contact
              </button>
              <Button 
                onClick={() => window.open('https://www.paypal.com/donate', '_blank')}
                className="bg-fortis-orange text-white hover:bg-fortis-orange/90 w-full"
              >
                Donate Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
