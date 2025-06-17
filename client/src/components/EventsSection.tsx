import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";

const events = [
  {
    title: "Annual Family Fun Day & Fundraiser",
    date: "March 15, 2024",
    location: "Albany Community Center",
    description: "Join us for a day of family activities, local vendors, and community celebration while supporting our programs.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300"
  },
  {
    title: "Parenting Workshop Series",
    date: "March 22, 2024",
    location: "Fortis Proles Inc Office",
    description: "Interactive workshops covering positive parenting techniques, child development, and family communication.",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300"
  },
  {
    title: "Community Service Day",
    date: "April 5, 2024",
    location: "Lincoln Park",
    description: "Volunteers and families come together to beautify local parks and support neighborhood improvement projects.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300"
  },
  {
    title: "Youth Leadership Summit",
    date: "April 12, 2024",
    location: "Albany High School",
    description: "A full-day event focused on developing leadership skills, goal-setting, and career exploration for teens.",
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
                  <Button variant="ghost" className="text-fortis-orange hover:text-fortis-orange/80 p-0">
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
