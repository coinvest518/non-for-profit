import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Fortis Proles Inc gave my daughter the confidence she needed to succeed. The mentoring program completely changed her outlook on life and her future.",
    name: "Maria Rodriguez",
    role: "Parent",
    color: "bg-fortis-orange"
  },
  {
    quote: "Being part of this organization as a volunteer has been incredibly rewarding. Seeing the positive impact on families motivates me every day.",
    name: "James Thompson",
    role: "Volunteer Mentor",
    color: "bg-fortis-brown"
  },
  {
    quote: "The family support services helped us through our most difficult time. We're stronger now and grateful for the community that stood by us.",
    name: "The Johnson Family",
    role: "Program Recipients",
    color: "bg-fortis-peru"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-fortis-brown mb-4">Stories of Impact</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from the families and community members whose lives have been transformed through our programs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-fortis-beige/30 rounded-xl p-8 text-center">
              <div className={`w-16 h-16 ${testimonial.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                <Quote className="text-white" size={24} />
              </div>
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-gray-300 pt-4">
                <h5 className="font-semibold text-fortis-brown">{testimonial.name}</h5>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
