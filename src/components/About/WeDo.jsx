import React, { useEffect, useRef, useState } from "react";
import { Diamond, Circle, Minus, CircleDot } from "lucide-react";

const cards = [
  {
    number: "01",
    title: "Urban Mining & Feedstock",
    text: "Spent lithium-ion batteries, e-waste and NdFeB magnets aggregated at source through a pan-India network of formal and informal collection channels.",
    icon: Diamond,
  },
  {
    number: "02",
    title: "Hydrometallurgical Refining",
    text: "One proprietary hydromet process. Two output streams — battery-grade critical minerals from black mass, and rare earth elements from NdFeB magnets.",
    icon: Circle,
  },
  {
    number: "03",
    title: "Domestic Supply Chain",
    text: "Refined outputs supplied to cathode manufacturers, cell makers, EV OEMs and defence users — closing India's loop and two of its most critical import dependencies.",
    icon: Minus,
  },
  {
    number: "04",
    title: "EPR & Compliance",
    text: "Every tonne of feedstock is traceable and certified — managed end-to-end through our EPRSense™ compliance infrastructure.",
    icon: CircleDot,
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
              <span className="h-[2px] w-[60px] bg-[#299d8e] sm:w-[62px]" />
            </div>

            {/* Heading */}
            <h2 className="max-w-[690px] text-[42px] font-semibold leading-[0.99] tracking-[-0.045em] text-[#080c0b] sm:text-[49px] md:text-[56px] lg:text-[51px] xl:text-[57px]">
              
              <span className="block overflow-hidden">
                <span className={`block transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${visible ? "translate-y-0 opacity-100" : "translate-y-[110%] opacity-0"}`} style={{ transitionDelay: "100ms" }}>
                  Turning end-of-life
                </span>
              </span>

              <span className="block overflow-hidden">
                <span className={`block transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${visible ? "translate-y-0 opacity-100" : "translate-y-[110%] opacity-0"}`} style={{ transitionDelay: "180ms" }}>
                  materials into the
                </span>
              </span>

              <span className="block overflow-hidden">
                <span className={`block text-[#299d8e] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${visible ? "translate-y-0 opacity-100" : "translate-y-[110%] opacity-0"}`} style={{ transitionDelay: "260ms" }}>
                  building blocks of
                </span>
              </span>

              <span className="block overflow-hidden">
                <span className={`block text-[#299d8e] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${visible ? "translate-y-0 opacity-100" : "translate-y-[110%] opacity-0"}`} style={{ transitionDelay: "340ms" }}>
                  India's clean energy
                </span>
              </span>

              <span className="block overflow-hidden">
                <span className={`block text-[#299d8e] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${visible ? "translate-y-0 opacity-100" : "translate-y-[110%] opacity-0"}`} style={{ transitionDelay: "420ms" }}>
                  economy.
                </span>
              </span>

            </h2>

            {/* Description */}
            <div className={`mt-8 max-w-[690px] transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`} style={{ transitionDelay: "520ms" }}>
              
              <p className="text-[14px] leading-[1.75] text-[#63716e] sm:text-[15px] sm:leading-[1.7] md:text-[16px]">
                Every spent lithium-ion battery contains the critical minerals
                India imports at enormous cost — Lithium, Cobalt, Nickel,
                Graphite, Manganese. Every discarded electronic device and
                decommissioned motor holds rare earth elements — Neodymium,
                Dysprosium, Praseodymium — that power EV drivetrains, wind
                turbines and defence systems. India imports nearly all of both.
              </p>

              <p className="mt-5 text-[14px] leading-[1.75] text-[#63716e] sm:text-[15px] sm:leading-[1.7] md:text-[16px]">
                Circulogy has built the infrastructure and the technology to
                recover both — from the same feedstock streams, using a single
                proprietary hydrometallurgical process. We are not a
                conventional recycler. We are a{" "}
                <strong className="font-semibold text-[#253a36]">
                  critical mineral and rare earth refinery
                </strong>{" "}
                — purpose-built for India's energy transition, aligned with the
                National Critical Mineral Mission.
              </p>

            </div>

            {/* Quote */}
            <div className={`relative mt-7 overflow-hidden rounded-[18px] border border-[#d9e9e4] bg-white px-6 py-6 shadow-[0_12px_35px_rgba(7,63,61,0.06)] transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-7 sm:py-6 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`} style={{ transitionDelay: "650ms" }}>
              
              <div className="absolute bottom-0 left-0 top-0 w-[5px] bg-[#39a994]" />

              <p className="text-[14px] italic leading-[1.65] text-[#384844] sm:text-[15px] md:text-[16px]">
                “India cannot build its clean energy future on imported
                critical minerals. The answer is already in circulation —
                we just need the technology and the will to recover it.”
              </p>

              <p className="mt-4 text-[10px] font-bold tracking-[0.17em] text-[#3aa08f] sm:text-[11px]">
                SAEEM RIZVI · FOUNDER & CEO, CIRCULOGY
              </p>

            </div>
          </div>


          {/* ================= RIGHT CARDS ================= */}
          <div className="relative">
            
            {/* Cards Grid */}
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">

              {cards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <div key={card.number} className={`group relative min-h-[250px] overflow-hidden rounded-[19px] border border-[#d9e8e3] bg-white px-6 py-6 shadow-[0_8px_25px_rgba(7,63,61,0.045)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-3 hover:scale-[1.015] hover:border-[#56b7a8] hover:shadow-[0_22px_45px_rgba(7,63,61,0.12)] sm:min-h-[264px] sm:px-6 sm:py-6 ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} style={{ transitionDelay: `${index * 130 + 150}ms` }}>
                    
                    {/* Top Accent */}
                    <div className="absolute left-0 right-0 top-0 h-[4px] origin-left scale-x-100 bg-[#3ba997] transition-transform duration-700 ease-out group-hover:scale-x-[0.35]" />

                    {/* Decorative Circle */}
                    <div className="pointer-events-none absolute -right-[42px] -top-[42px] h-[125px] w-[125px] rounded-full border border-[#43a99a]/[0.12] transition-all duration-700 ease-out group-hover:scale-[1.55] group-hover:border-[#43a99a]/[0.24]" />

                    {/* Number */}
                    <div className="relative z-10 text-[11px] font-bold tracking-[0.08em] text-[#48a596] transition-all duration-500 group-hover:-translate-y-1 group-hover:tracking-[0.15em]">
                      {card.number}
                    </div>

                    {/* Icon */}
                    <div className="relative z-10 mt-6 flex h-[45px] w-[45px] items-center justify-center rounded-full border border-[#cfe5df] bg-[#eef7f4] text-[#43a394] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-12 group-hover:scale-110 group-hover:border-[#43a394] group-hover:bg-[#dcefe9]">
                      <Icon size={21} strokeWidth={1.8} />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 mt-5">
                      <h3 className="text-[18px] font-semibold leading-[1.15] tracking-[-0.025em] text-[#111817] transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:text-[#218e80] sm:text-[19px]">
                        {card.title}
                      </h3>

                      <p className="mt-4 text-[12px] leading-[1.65] text-[#687773] transition-all duration-500 ease-out group-hover:translate-y-[-2px] group-hover:text-[#40534f] sm:text-[13px]">
                        {card.text}
                      </p>
                    </div>

                    {/* Bottom Accent */}
                    <div className="absolute bottom-0 left-6 h-[2px] w-0 bg-[#2da18f] transition-all duration-700 ease-out group-hover:w-[calc(100%-48px)]" />

                  </div>
                );
              })}

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Right Tag */}
      <div className={`absolute bottom-8 right-[5vw] hidden items-center gap-4 transition-all duration-1000 ease-out lg:flex ${visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`} style={{ transitionDelay: "900ms" }}>
        <span className="h-[1px] w-[45px] bg-[#5bb7aa]" />
        <span className="text-[10px] font-bold tracking-[0.22em] text-[#8dc8be]">
          RECOVER · REFINE · REBUILD
        </span>
      </div>

    </section>
  );
}