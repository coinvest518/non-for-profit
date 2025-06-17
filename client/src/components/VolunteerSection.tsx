import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Presentation, Calendar, HandHelping } from "lucide-react";
import type { InsertVolunteer } from "@shared/schema";

const volunteerOpportunities = [
  {
    title: "Youth Financial Literacy Mentor",
    description: "Help teach teens FOREX education, budgeting, investing, and entrepreneurship skills through our financial literacy programs.",
    icon: Presentation,
    color: "bg-fortis-orange"
  },
  {
    title: "Doula Training Assistant",
    description: "Support our doula certification program by assisting with training sessions and connecting youth with birthing center partnerships.",
    icon: HandHelping,
    color: "bg-fortis-brown"
  },
  {
    title: "Life Skills Instructor",
    description: "Teach essential life skills including cooking, parenting, conflict resolution, and career preparation to youth and families.",
    icon: Calendar,
    color: "bg-fortis-peru"
  }
];

export default function VolunteerSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    areaOfInterest: "",
    description: ""
  });

  const volunteerMutation = useMutation({
    mutationFn: async (data: InsertVolunteer) => {
      const response = await apiRequest("POST", "/api/volunteers", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Application Submitted!",
        description: "Thank you for your interest in volunteering. We'll be in touch soon!",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        areaOfInterest: "",
        description: ""
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.areaOfInterest || !formData.description) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    volunteerMutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="volunteer" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h3 className="text-4xl font-bold text-fortis-brown mb-6">Join Our Mission</h3>
          <p className="text-xl text-gray-600">
            Your time, skills, and passion can make a real difference in the lives of families and children in our community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {volunteerOpportunities.map((opportunity, index) => {
            const IconComponent = opportunity.icon;
            return (
              <div key={index} className="text-center p-6 bg-fortis-beige/30 rounded-xl">
                <div className={`w-16 h-16 ${opportunity.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className="text-white" size={28} />
                </div>
                <h4 className="text-xl font-semibold text-fortis-brown mb-3">{opportunity.title}</h4>
                <p className="text-gray-600 mb-4">{opportunity.description}</p>
                <Button 
                  variant="ghost" 
                  onClick={() => {
                    const element = document.querySelector('.volunteer-form');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-fortis-orange hover:text-fortis-orange/80 p-0"
                >
                  Apply Now
                </Button>
              </div>
            );
          })}
        </div>

        {/* Volunteer Application Form */}
        <div className="volunteer-form max-w-2xl mx-auto bg-gray-50 rounded-xl p-8">
          <h4 className="text-2xl font-semibold text-fortis-brown mb-6 text-center">Volunteer Application</h4>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  className="mt-2"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="areaOfInterest">Areas of Interest</Label>
              <Select onValueChange={(value) => handleInputChange("areaOfInterest", value)}>
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select your preferred volunteer area" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="financial-literacy">FOREX & Financial Literacy</SelectItem>
                  <SelectItem value="doula-training">Doula Training Program</SelectItem>
                  <SelectItem value="communication-skills">Communication & Public Speaking</SelectItem>
                  <SelectItem value="life-skills">Self-Sufficiency & Life Skills</SelectItem>
                  <SelectItem value="family-engagement">Family Engagement & Education</SelectItem>
                  <SelectItem value="administrative">Administrative Support</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="description">Tell us about yourself</Label>
              <Textarea
                id="description"
                rows={4}
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                placeholder="Share your background, skills, and why you want to volunteer with us..."
                className="mt-2"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-fortis-orange text-white hover:bg-fortis-orange/90"
              disabled={volunteerMutation.isPending}
            >
              {volunteerMutation.isPending ? "Submitting..." : "Submit Application"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
