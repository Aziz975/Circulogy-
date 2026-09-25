import React, { useEffect, useRef, useState } from "react";

const minerals = [
  {
    name: "Lithium",
    img: "/images/lithium2.jpeg",
    number: "3",
    mass: "6.941",
    bg: "bg-[#e7e1d5]",
    glow: "rgba(231,225,213,0.85)",
    description: "Essential for rechargeable batteries and energy storage.",
  },
  {
    name: "Nickel",
    img: "/images/nickel2.jpeg",
    number: "28",
    mass: "58.693",
    bg: "bg-[#0b8880]",
    glow: "rgba(11,136,128,0.75)",
    description: "Used in high-performance batteries and advanced alloys.",
  },
  {
    name: "Cobalt",
    img: "/images/cobalt2.jpeg",
    number: "27",
    mass: "58.933",
    bg: "bg-[#1d2423]",
    glow: "rgba(29,36,35,0.85)",
    description: "Critical for battery cathodes and energy technologies.",
  },
  {
    name: "Copper",
    img: "/images/copper2.jpeg",
    number: "29",
    mass: "63.546",
    bg: "bg-[#b84b0c]",
    glow: "rgba(184,75,12,0.8)",
    description:
      "Important for electrical systems, mobility, and electronics.",
  },
  {
    name: "Rare Earth Elements",
    img: "/images/rare-earth2.jpeg",
    number: "",
    mass: "",
    bg: "bg-[#242b2a]",
    glow: "rgba(36,43,42,0.85)",
    description:
      "Strategic elements used in magnets, electronics, and defence.",
  },
  {
    name: "Future Minerals",
    img: "/images/future-minerals.jpeg",
    number: "",
    mass: "",
    bg: "bg-[#151b1a]",
    glow: "rgba(21,27,26,0.9)",
    description:
      "Emerging resources supporting India's future technologies.",
  },
];

export default function WhatWeRecover() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(false);

          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              setIsVisible(true);
            });
          });
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
   <section
  ref={sectionRef}
  id="minerals"
  className="bg-[#f7f7f5] px-5 pt-2  text-[#061715] sm:px-8 sm:pt-4 sm:pb-5 lg:px-10 xl:px-12"
>
      <div className="mx-auto max-w-[1400px]">

        {/* ================= HEADER ================= */}

        <div className="mb-10">

          {/* Eyebrow */}
          <p
            className="mb-4 text-[13px] font-extrabold tracking-[0.08em] text-[#079e99] sm:mb-5 sm:text-[15px] md:text-[16px]"
          >
            What We Recover
          </p>

          {/* Heading */}
       <h2
  className="max-w-[650px] font-[800] text-[40px] leading-[1] tracking-[-0.04em] sm:text-[48px]"
>
  {"Critical Minerals For The".split("").map((letter, index) => (
    <span
      key={`line1-${index}`}
      className={`horizontal-letter ${
        isVisible ? "horizontal-letter-visible" : ""
      }`}
      style={{
        transitionDelay: `${index * 35}ms`,
      }}
    >
      {letter === " " ? "\u00A0" : letter}
    </span>
  ))}

  <br />

  {"Industries Of Tomorrow".split("").map((letter, index) => (
    <span
      key={`line2-${index}`}
      className={`horizontal-letter ${
        isVisible ? "horizontal-letter-visible" : ""
      }`}
      style={{
        transitionDelay: `${900 + index * 35}ms`,
      }}
    >
      {letter === " " ? "\u00A0" : letter}
    </span>
  ))}
</h2>

          {/* Description */}
          <p
            className={`mt-4 max-w-[500px] text-[15px] font-medium   text-[#282c2b] leading-5  transition-all duration-[800ms] delay-[220ms] ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-[35px] opacity-0"
            }`}
          >
            Recovering strategic resources essential for energy, mobility,
            electronics, and advanced manufacturing.
          </p>
        </div>

        {/* ================= CARDS ================= */}

        <div className="grid h-auto min-h-[300px] w-full max-w-[1600px] grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">

          {minerals.map((mineral, index) => (
            <div
              key={mineral.name}
              className={`group relative min-h-[500px] w-full ${
                isVisible ? "animate-mineral-flip" : ""
              }`}
              style={{
                animationDelay: `${index * 180}ms`,
                animationFillMode: "both",
              }}
            >
              {/* GLOW */}
              <div
                className="pointer-events-none absolute -inset-[5px] rounded-[20px] opacity-0 blur-[16px] transition-all duration-500 group-hover:opacity-70"
                style={{
                  backgroundColor: mineral.glow,
                }}
              />

              {/* CARD */}
              <div
                className={`relative h-full min-h-[300px] overflow-hidden rounded-[16px] ${mineral.bg} transition-all duration-500 ease-out group-hover:-translate-y-[4px]`}
              >
                {/* IMAGE */}
                <img
                  src={mineral.img}
                  alt={mineral.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/10 transition-all duration-500 group-hover:bg-black/[0.02]" />

                {/* LABEL */}
                <div
                  className={`absolute bottom-4 left-4 transition-all duration-700 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-[20px] opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${500 + index * 120}ms`,
                  }}
                >
                  <span className="rounded-full bg-[#19cdb5] px-4 py-3 text-[15px] font-medium text-[white] transition-all duration-300 group-hover:px-5">
                    {mineral.name}
                    <span className="ml-2">→</span>
                  </span>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
      
    </section>
  );
}