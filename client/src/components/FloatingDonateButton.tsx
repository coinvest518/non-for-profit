import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export default function FloatingDonateButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button 
        onClick={() => window.open('https://www.paypal.com/donate', '_blank')}
        className="bg-fortis-orange text-white hover:bg-fortis-orange/90 shadow-lg hover:scale-105 transition-all px-6 py-3 rounded-full"
      >
        <Heart className="mr-2" size={20} />
        <span className="font-semibold">Donate</span>
      </Button>
    </div>
  );
}
