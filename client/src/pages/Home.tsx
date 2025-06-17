import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import ProgramsSection from "@/components/ProgramsSection";
import StatisticsSection from "@/components/StatisticsSection";
import VolunteerSection from "@/components/VolunteerSection";
import EventsSection from "@/components/EventsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";
import ContactSection from "@/components/ContactSection";
import FloatingDonateButton from "@/components/FloatingDonateButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <MissionSection />
        <ProgramsSection />
        <StatisticsSection />
        <VolunteerSection />
        <EventsSection />
        <TestimonialsSection />
        <NewsletterSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingDonateButton />
    </div>
  );
}
