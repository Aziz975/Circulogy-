import React from "react";
import { Phone } from "lucide-react";

function ContactButton() {
  return (
    <button
      type="button"
      className="
        flex
        h-[48px]
        min-w-[192px]
        items-center
        justify-center
        gap-2
        rounded-full
        bg-white
        px-3
        text-[16px]
        font-semibold
        text-black
        transition-transform
        duration-200
        hover:scale-105
      "
    >
      {/* Phone Icon */}
      <span
        className="
          flex
          h-[36px]
          w-[36px]
          items-center
          justify-center
          rounded-full
          bg-[#35a99b]
        "
      >
        <Phone size={18} className="text-white" />
      </span>

      <span>Contact Us</span>
    </button>
  );
}

export default ContactButton;