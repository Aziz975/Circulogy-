import React, { useEffect, useRef, useState } from "react";

const minerals = [
  {
    name: "Lithium",
    img: "/images/lithium2.jpeg",
    number: "3",
    mass: "6.941",
    bg: "bg-[#e7e1d5]",
    description: "Essential for rechargeable batteries and energy storage.",
  },
  {
    name: "Nickel",
    img: "/images/nickel2.jpeg",
    number: "28",
    mass: "58.693",
    bg: "bg-[#0b8880]",
    description: "Used in high-performance batteries and advanced alloys.",
  },
  {
    name: "Cobalt",
    img: "/images/cobalt2.jpeg",
    number: "27",
    mass: "58.933",
    bg: "bg-[#1d2423]",
    description: "Critical for battery cathodes and energy technologies.",
  },
  {
    name: "Copper",
    img: "/images/copper2.jpeg",
    number: "29",
    mass: "63.546",
    bg: "bg-[#b84b0c]",
    description:
      "Important for electrical systems, mobility, and electronics.",
  },
  {
    name: "Rare Earth Elements",
    img: "/images/rare-earth2.jpeg",
    number: "",
    mass: "",
    bg: "bg-[#242b2a]",
    description:
      "Strategic elements used in magnets, electronics, and defence.",
  },
  {
    name: "Future Minerals",
    img: "/images/futureminerals2.jpeg",
    number: "",
    mass: "",
    bg: "bg-[#151b1a]",
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
      className="bg-[#f7f7f5] px-5 py-16 text-[#061715] sm:px-8 sm:py-20 lg:px-10 xl:px-12"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* HEADER */}
        <div className="mb-10">
          <p className="mb-4 text-[9px] uppercase tracking-[0.25em] text-[#087d78]">
            What We Recover
          </p>

          <h2 className="max-w-[650px] text-[36px] font-light leading-[1] tracking-[-0.04em] sm:text-[48px]">
            Critical Minerals For The
            <br />
            Industries Of Tomorrow
          </h2>

          <p className="mt-4 max-w-[500px] text-[11px] leading-5 text-[#061715]/50">
            Recovering strategic resources essential for energy, mobility,
            electronics, and advanced manufacturing.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {/* ================= LITHIUM ================= */}
          <div
            className={`relative min-h-[300px] w-full ${
              isVisible ? "animate-mineral-flip" : ""
            }`}
            style={{
              animationDelay: "0ms",
              animationFillMode: "both",
            }}
          >
            <div className="relative h-full min-h-[300px] overflow-hidden rounded-[16px] bg-[#e7e1d5]">
              <img
                src={minerals[0].img}
                alt={minerals[0].name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/10" />

            
              <div className="absolute bottom-4 left-4">
                <span className="rounded-full bg-[#19cdb5] px-4 py-2 text-[8px] font-medium text-[#061715]">
                  Lithium
                  <span className="ml-2">→</span>
                </span>
              </div>
            </div>
          </div>


          {/* ================= NICKEL ================= */}
          <div
            className={`relative min-h-[300px] w-full ${
              isVisible ? "animate-mineral-flip" : ""
            }`}
            style={{
              animationDelay: "180ms",
              animationFillMode: "both",
            }}
          >
            <div className="relative h-full min-h-[300px] overflow-hidden rounded-[16px] bg-[#0b8880]">
              <img
                src={minerals[1].img}
                alt={minerals[1].name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/10" />

             

              <div className="absolute bottom-4 left-4">
                <span className="rounded-full bg-[#19cdb5] px-4 py-2 text-[8px] font-medium text-[#061715]">
                  Nickel
                  <span className="ml-2">→</span>
                </span>
              </div>
            </div>
          </div>


          {/* ================= COBALT ================= */}
          <div
            className={`relative min-h-[300px] w-full ${
              isVisible ? "animate-mineral-flip" : ""
            }`}
            style={{
              animationDelay: "360ms",
              animationFillMode: "both",
            }}
          >
            <div className="relative h-full min-h-[300px] overflow-hidden rounded-[16px] bg-[#1d2423]">
              <img
                src={minerals[2].img}
                alt={minerals[2].name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/10" />

              
              <div className="absolute bottom-4 left-4">
                <span className="rounded-full bg-[#19cdb5] px-4 py-2 text-[8px] font-medium text-[#061715]">
                  Cobalt
                  <span className="ml-2">→</span>
                </span>
              </div>
            </div>
          </div>


          {/* ================= COPPER ================= */}
          <div
            className={`relative min-h-[300px] w-full ${
              isVisible ? "animate-mineral-flip" : ""
            }`}
            style={{
              animationDelay: "540ms",
              animationFillMode: "both",
            }}
          >
            <div className="relative h-full min-h-[300px] overflow-hidden rounded-[16px] bg-[#b84b0c]">
              <img
                src={minerals[3].img}
                alt={minerals[3].name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/10" />

             
              <div className="absolute bottom-4 left-4">
                <span className="rounded-full bg-[#19cdb5] px-4 py-2 text-[8px] font-medium text-[#061715]">
                  Copper
                  <span className="ml-2">→</span>
                </span>
              </div>
            </div>
          </div>


          {/* ================= RARE EARTH ================= */}
          <div
            className={`relative min-h-[300px] w-full ${
              isVisible ? "animate-mineral-flip" : ""
            }`}
            style={{
              animationDelay: "720ms",
              animationFillMode: "both",
            }}
          >
            <div className="relative h-full min-h-[300px] overflow-hidden rounded-[16px] bg-[#242b2a]">
              <img
                src={minerals[4].img}
                alt={minerals[4].name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />

       


              <div className="absolute bottom-4 left-4">
                <span className="rounded-full bg-[#19cdb5] px-4 py-2 text-[8px] font-medium text-[#061715]">
                  Rare Earth Elements
                  <span className="ml-2">→</span>
                </span>
              </div>
            </div>
          </div>


          {/* ================= FUTURE MINERALS ================= */}
          <div
            className={`relative min-h-[300px] w-full ${
              isVisible ? "animate-mineral-flip" : ""
            }`}
            style={{
              animationDelay: "900ms",
              animationFillMode: "both",
            }}
          >
            <div className="relative h-full min-h-[300px] overflow-hidden rounded-[16px] bg-[#151b1a]">
              <img
                src={minerals[5].img}
                alt={minerals[5].name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />

             

              <div className="absolute bottom-4 left-4">
                <span className="rounded-full bg-[#19cdb5] px-4 py-2 text-[8px] font-medium text-[#061715]">
                  Future Minerals
                  <span className="ml-2">→</span>
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}