import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Home, 
  GraduationCap, 
  Heart, 
  Shield, 
  UserPlus 
} from "lucide-react";

const programs = [
  {
    title: "Youth Empowerment",
    description: "Building confidence, leadership skills, and resilience in young people through mentorship, educational support, and life skills training.",
    icon: UserPlus,
    color: "bg-fortis-orange",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  },
  {
    title: "Family Support Services",
    description: "Comprehensive support for families including counseling, resource navigation, parenting education, and crisis intervention services.",
    icon: Home,
    color: "bg-fortis-brown",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  },
  {
    title: "Community Building",
    description: "Strengthening neighborhood connections through community events, volunteer opportunities, and collaborative initiatives.",
    icon: Users,
    color: "bg-fortis-peru",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  },
  {
    title: "Educational Support",
    description: "Tutoring, homework assistance, college preparation, and scholarship programs to ensure academic success for all children.",
    icon: GraduationCap,
    color: "bg-fortis-orange",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  },
  {
    title: "Mental Health Support",
    description: "Professional counseling, support groups, and wellness programs to promote emotional health and resilience.",
    icon: Heart,
    color: "bg-fortis-brown",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  },
  {
    title: "Crisis Intervention",
    description: "24/7 emergency support, safety planning, and immediate assistance for families facing urgent challenges.",
    icon: Shield,
    color: "bg-fortis-peru",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  }
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-fortis-brown mb-4">Our Programs</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive support services designed to empower families and strengthen communities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-48 object-cover" 
                />
                <CardContent className="p-6">
                  <div className={`w-12 h-12 ${program.color} rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-semibold text-fortis-brown mb-3">{program.title}</h4>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <Button variant="ghost" className="text-fortis-orange hover:text-fortis-orange/80 p-0">
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
