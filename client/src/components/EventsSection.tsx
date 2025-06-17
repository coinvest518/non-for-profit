import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";

const events = [
  {
    title: "FOREX Education Workshop for Teens",
    date: "January 25, 2025",
    location: "Fortis Proles Inc Office - Albany, NY",
    description: "Weekly financial literacy class introducing teens to FOREX trading, budgeting, and entrepreneurship fundamentals.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300"
  },
  {
    title: "Doula Training Certification Program",
    date: "February 8, 2025",
    location: "Partnership with WAKPS LLC",
    description: "Full-spectrum doula care training for teens and young adults, connecting participants with local birthing centers.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300"
  },
  {
    title: "Family Wellness & Parenting Workshop",
    date: "February 22, 2025",
    location: "Community Center - Albany, NY",
    description: "Interactive workshops for families covering nutrition, mental health services, and navigating systemic challenges.",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300"
  },
  {
    title: "Youth Communication & Leadership Summit",
    date: "March 15, 2025",
    location: "Albany High School",
    description: "Public speaking, digital storytelling, and media advocacy training with certification opportunities for peer mentoring.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300"
  }
];

export default function EventsSection() {
  return (
    <section id="events" className="py-20 bg-fortis-beige/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-fortis-brown mb-4">Upcoming Events</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join us for community events, fundraisers, and programs that strengthen our families and neighborhoods
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <Card key={index} className="overflow-hidden shadow-lg">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-48 object-cover" 
              />
              <CardContent className="p-6">
                <div className="flex items-center text-fortis-orange text-sm font-medium mb-2">
                  <Calendar size={16} className="mr-2" />
                  {event.date}
                </div>
                <h4 className="text-xl font-semibold text-fortis-brown mb-3">{event.title}</h4>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 flex items-center">
                    <MapPin size={14} className="mr-1" />
                    {event.location}
                  </span>
                  <Button 
                    variant="ghost" 
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-fortis-orange hover:text-fortis-orange/80 p-0"
                  >
                    Register Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
