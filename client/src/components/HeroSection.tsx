import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-r from-fortis-brown to-fortis-peru text-white py-20">
      {/* Background image overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
          alt="Children in empowerment program" 
          className="w-full h-full object-cover" 
        />
      </div>
      
      <div className="relative container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Nurturing Youth from<br />
            <span className="text-fortis-orange">Womb to Adulthood</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            FORTIS PROLES INC., meaning "Strong Offspring," transforms generational cycles of poverty into strength and sustainability through youth empowerment, family support, and life skills training.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => scrollToSection('volunteer')}
              className="bg-fortis-orange text-white hover:bg-fortis-orange/90 px-8 py-4 text-lg font-semibold"
            >
              Start Your Impact Today
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('about')}
              className="border-2 border-white text-white hover:bg-white hover:text-fortis-brown px-8 py-4 text-lg font-semibold"
            >
              Learn Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
