import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5500000000000?text=Olá! Gostaria de saber mais sobre os procedimentos da clínica."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[hsl(142,70%,45%)] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="WhatsApp"
    >
      <MessageCircle size={26} className="text-white" />
    </a>
  );
};

export default WhatsAppButton;
