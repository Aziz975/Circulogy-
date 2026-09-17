import React, { useEffect, useRef, useState } from "react";


const cards = [
  {
    number: "01",
    title: "Urban Mining & Feedstock",
    text: "Spent lithium-ion batteries, e-waste and NdFeB magnets aggregated at source through a pan-India network of formal and informal collection channels.",
    image: "/images/urban.png",
  },
  {
    number: "02",
    title: "Hydrometallurgical Refining",
    text: "One proprietary hydromet process. Two output streams — battery-grade critical minerals from black mass, and rare earth elements from NdFeB magnets.",
    image: "/images/refining.png",
  },
  {
    number: "03",
    title: "Domestic Supply Chain",
    text: "Refined outputs supplied to cathode manufacturers, cell makers, EV OEMs and defence users — closing India's loop and two of its most critical import dependencies.",
    image: "/images/supply-chain.png",
  },
  {
    number: "04",
    title: "EPR & Compliance",
    text: "Every tonne of feedstock is traceable and certified — managed end-to-end through our EPRSense™ compliance infrastructure.",
    image: "/images/epr.png",
  },
];

export default function WhatDo() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(false);

          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              setVisible(true);
            });
          });
        } else {
          setVisible(false);
        }
      },
      {
        threshold: 0.18,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#f7faf8] px-5 py-16 sm:px-8 sm:py-20 md:px-10 md:py-24 lg:px-[4.8vw] lg:py-[105px] xl:px-[4.8vw]">
      
      {/* Grid Background */}
      <div className="pointer-events-none absolute inset-0 opacity-70 bg-[linear-gradient(to_right,rgba(34,107,98,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,107,98,0.055)_1px,transparent_1px)] bg-[size:54px_54px]" />

      {/* Decorative Circles */}
      <div className="pointer-events-none absolute -right-[180px] -top-[170px] h-[560px] w-[560px] rounded-full border border-[#249d8d]/[0.08] sm:h-[650px] sm:w-[650px]" />
      <div className="pointer-events-none absolute -right-[110px] -top-[100px] h-[430px] w-[430px] rounded-full border border-[#249d8d]/[0.07]" />
      <div className="pointer-events-none absolute -bottom-[300px] -left-[220px] h-[600px] w-[600px] rounded-full border border-[#249d8d]/[0.05]" />

      <div className="relative z-10 mx-auto max-w-[1450px]">
        <div className="grid items-start gap-12 lg:grid-cols-[49%_51%] lg:gap-10 xl:grid-cols-[50%_50%]">

          {/* ================= LEFT CONTENT ================= */}
          <div className="max-w-[720px]">
            
            {/* Label */}
            <div className={`mb-7 flex items-center gap-4 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}>
              <span className="text-[11px] font-bold tracking-[0.22em] text-[#299d8e] sm:text-[12px]">
                 WHAT WE DO
              </span>
              <span/>
            </div>

            {/* Heading */}
            <h2 className="max-w-[690px] text-[42px] font-semibold leading-[0.99] tracking-[-0.045em] text-[#080c0b] sm:text-[49px] md:text-[56px] lg:text-[51px] xl:text-[57px]">
              
              <span className="block ">
                <span className={`block transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${visible ? "translate-y-0 opacity-100" : "translate-y-[110%] opacity-0"}`} style={{ transitionDelay: "100ms" }}>
                Turning end-of-life
                </span>
              </span>

              <span className="block ">
                <span className={`block transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${visible ? "translate-y-0 opacity-100" : "translate-y-[110%] opacity-0"}`} style={{ transitionDelay: "180ms" }}>
                  materials into the
                </span>
              </span>

              <span className="block ">
                <span className={`block text-[#299d8e] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${visible ? "translate-y-0 opacity-100" : "translate-y-[110%] opacity-0"}`} style={{ transitionDelay: "260ms" }}>
                  building blocks of
                </span>
              </span>

              <span className="block ">
                <span className={`block text-[#299d8e] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${visible ? "translate-y-0 opacity-100" : "translate-y-[110%] opacity-0"}`} style={{ transitionDelay: "340ms" }}>
                  India's clean energy
                </span>
              </span>

              <span className="block ">
                <span className={`block text-[#299d8e] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${visible ? "translate-y-0 opacity-100" : "translate-y-[110%] opacity-0"}`} style={{ transitionDelay: "420ms" }}>
                  economy.
                </span>
              </span>

            </h2>

            {/* Description */}
            <div className={`mt-8 max-w-[690px] transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`} style={{ transitionDelay: "520ms" }}>
              
              <p className="text-[14px] leading-[1.75] text-[#63716e] sm:text-[15px] sm:leading-[1.7] md:text-[16px]">
                Every spent lithium-ion battery contains the critical minerals
                India imports at enormous cost  Lithium, Cobalt, Nickel,
                Graphite, Manganese. Every discarded electronic device and
                decommissioned motor holds rare earth elements  Neodymium,
                Dysprosium, Praseodymium  that power EV drivetrains, wind
                turbines and defence systems. India imports nearly all of both.
              </p>

              <p className="mt-5 text-[14px] leading-[1.75] text-[#63716e] sm:text-[15px] sm:leading-[1.7] md:text-[16px]">
                Circulogy has built the infrastructure and the technology to
                recover both  from the same feedstock streams, using a single
                proprietary hydrometallurgical process. We are not a
                conventional recycler. We are a{" "}
                <strong className="font-semibold text-[#253a36]">
                  critical mineral and rare earth refinery
                </strong>{" "}
                 purpose-built for India's energy transition, aligned with the
                National Critical Mineral Mission.
              </p>

            </div>

          </div>


       
          {/* ================= RIGHT CARDS ================= */}
<div className="relative top-[8%]">
  <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
    {cards.map((card, index) => {
      return (
        <div key={index} className="group relative rounded-[24px] border border-[#d7ebe5] bg-[#f8fcfa] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#56b7a8] hover:shadow-[0_20px_40px_rgba(7,63,61,0.12)]">

          {/* Icon / Image */}
          <div className="mb-6 flex h-[52px] w-[52px] items-center justify-center overflow-hidden rounded-full border border-[#cfe5df] bg-[#eef7f4] transition-all duration-500 group-hover:scale-110 group-hover:border-[#43a394]">
            <img src={card.image} alt={card.title} className="h-[30px] w-[30px] object-contain transition-transform duration-500 group-hover:scale-110" />
          </div>

          {/* Number */}
          <span className="mb-3 block text-[13px] font-medium text-[#11706a]">
            {card.number}
          </span>

          {/* Title */}
          <h3 className="text-[22px] font-semibold leading-[1.1] text-[#073f3d] transition-transform duration-500 group-hover:-translate-y-1">
            {card.title}
          </h3>

          {/* Text */}
          <p className="mt-4 text-[15px] leading-[1.6] text-[#55716d] transition-transform duration-500 group-hover:-translate-y-1">
            {card.text}
          </p>

        </div>
      );
    })}
  </div>
</div>

        </div>
      </div>

      {/* Bottom Right Tag */}
      <div className={`absolute bottom-8 right-[5vw] hidden items-center gap-4 transition-all duration-1000 ease-out lg:flex ${visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`} style={{ transitionDelay: "900ms" }}>
        <span/>
        <span className="text-[10px] font-bold tracking-[0.22em] text-[#8dc8be]">
          RECOVER · REFINE · REBUILD
        </span>
      </div>

    </section>
  );
}