import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919998757045"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Contact us on WhatsApp"
    >
      <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
        <MessageCircle size={24} className="md:w-7 md:h-7 text-white" />
      </div>
      <div className="absolute bottom-16 right-0 bg-gray-900 text-white text-sm font-medium px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        WhatsApp support
        <div className="absolute top-full right-2 w-2 h-2 bg-gray-900 rotate-45" />
      </div>
    </a>
  );
}
