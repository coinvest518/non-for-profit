import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Home, 
  GraduationCap, 
  Heart, 
  Shield, 
  UserPlus,
  Baby 
} from "lucide-react";

const programs = [
  {
    title: "FOREX Education & Financial Literacy",
    description: "Weekly classes for teens (ages 14+) on trading, budgeting, investing, and entrepreneurship with simulated trading environments and financial mentorships.",
    icon: GraduationCap,
    color: "bg-fortis-orange",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  },
  {
    title: "Doula Certification Program",
    description: "Training teens and young adults in full-spectrum doula care through partnerships with We Are Knowledge Power Strength LLC and local birthing centers.",
    icon: Heart,
    color: "bg-fortis-brown",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  },
  {
    title: "Communication & Public Speaking",
    description: "Youth-led workshops in public speaking, digital storytelling, and media advocacy with certification tracks for peer mentoring and career opportunities.",
    icon: UserPlus,
    color: "bg-fortis-peru",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  },
  {
    title: "Self-Sufficiency & Life Skills",
    description: "Comprehensive courses in cooking, hygiene, parenting for teen parents, conflict resolution, career preparation, and resume building.",
    icon: Users,
    color: "bg-fortis-orange",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  },
  {
    title: "Family Engagement & Education",
    description: "Parenting classes, counseling and coaching for navigating systemic challenges, and family wellness programs including nutrition and mental health services.",
    icon: Home,
    color: "bg-fortis-brown",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  },
  {
    title: "BEBÉ GABA Partnership",
    description: "Mission-aligned baby food brand offering nutritious, WIC-approved foods for culturally diverse families, with profits funding prenatal and infant health programming.",
    icon: Baby,
    color: "bg-fortis-peru",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400"
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
