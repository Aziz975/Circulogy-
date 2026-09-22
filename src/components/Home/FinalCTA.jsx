import React from "react";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative min-h-[430px] overflow-hidden bg-[#020505] px-5 py-20 text-white sm:min-h-[500px] sm:px-8 lg:px-10 xl:px-12"
    >

      {/* Image placeholder */}
      <img
        src=""
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Decorative particles */}
      <div className="absolute inset-0 opacity-50">
        <span className="absolute left-[10%] top-[20%] h-2 w-2 rotate-45 bg-white/60" />
        <span className="absolute left-[25%] top-[65%] h-3 w-3 rotate-45 bg-white/30" />
        <span className="absolute right-[20%] top-[30%] h-2 w-2 rotate-45 bg-white/50" />
        <span className="absolute right-[35%] bottom-[20%] h-3 w-3 rotate-45 bg-white/20" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[350px] max-w-[1000px] flex-col items-center justify-center text-center">

        <p className="mb-5 text-[9px] uppercase tracking-[0.25em] text-[#19cdb5]">
          Circulogy
        </p>

        <h2 className="text-[42px] font-light tracking-[-0.04em] sm:text-[60px] lg:text-[72px]">
          Built Above Ground.
        </h2>

        <p className="mt-4 max-w-[550px] text-[11px] leading-5 text-white/55">
          Enabling resilient, sustainable and secure critical mineral supply
          chains through circularity.
        </p>

        <a
          href="#contact"
          className="mt-7 flex items-center gap-3 rounded-full bg-[#19cdb5] px-6 py-3 text-[9px] font-medium text-[#061715]"
        >
          Partner With Us
          <ArrowRight size={13} />
        </a>
      </div>
    </section>
  );
}