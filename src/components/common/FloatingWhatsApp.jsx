"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  const whatsappNumber = "918639852224";

  const message =
    "Hello Yesupadam Infra Projects, I would like to know more about your services.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Yesupadam Infra Projects on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 sm:bottom-6 sm:right-6 sm:h-15 sm:w-15"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40" />

      <FaWhatsapp className="h-7 w-7 transition-transform duration-300 group-hover:scale-110 sm:h-8 sm:w-8" />
    </a>
  );
}
