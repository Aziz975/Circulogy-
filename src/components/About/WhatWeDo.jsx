import React from "react";
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

function ProcessCard({ number, title, text, icon: Icon }) {
  return (
    <div className="group relative min-h-[265px] overflow-hidden rounded-[18px] border border-[#dcebe8] bg-white/90 px-6 py-5 shadow-[0_12px_35px_rgba(32,105,95,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(32,105,95,0.11)]">
      <div className="absolute left-0 right-0 top-0 h-[3px] bg-[#36a596]" />
      <div className="absolute -right-[55px] -top-[55px] h-[150px] w-[150px] rounded-full border border-[#e3efed]" />
      <div className="absolute -right-[25px] -top-[25px] h-[90px] w-[90px] rounded-full border border-[#e3efed]" />

      <div className="relative z-10">
        <span className="text-[11px] font-bold tracking-[0.08em] text-[#42a79b]">{number}</span>

        <div className="mt-5 flex h-[45px] w-[45px] items-center justify-center rounded-full border border-[#cde7e2] bg-[#edf7f5] text-[#38a596]">
          <Icon size={20} strokeWidth={1.8} />
        </div>

        <h3 className="mt-4 text-[18px] font-bold leading-[1.2] tracking-[-0.02em] text-[#111817] md:text-[19px]">
          {title}
        </h3>

        <p className="mt-3 max-w-[300px] text-[13px] leading-[1.65] text-[#6c7775] md:text-[13.5px]">
          {text}
        </p>
      </div>
    </div>
  );
}

export default function WhatWeDo() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f8fbfa] px-5 py-16 text-[#101716] sm:px-8 md:px-12 lg:px-[4.7vw] lg:py-[68px]">
      
      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-60 bg-[linear-gradient(to_right,#e5eeec_1px,transparent_1px),linear-gradient(to_bottom,#e5eeec_1px,transparent_1px)] bg-[size:54px_54px]" />

      {/* Decorative Background Circles */}
      <div className="pointer-events-none absolute -right-[120px] -top-[120px] h-[500px] w-[500px] rounded-full border border-[#e3efed]" />
      <div className="pointer-events-none absolute -right-[55px] -top-[55px] h-[365px] w-[365px] rounded-full border border-[#e3efed]" />
      <div className="pointer-events-none absolute right-[10px] top-[25px] h-[245px] w-[245px] rounded-full border border-[#e3efed]" />

      <div className="relative z-10 mx-auto max-w-[1450px]">
        
        {/* Main Grid */}
        <div className="grid items-start gap-10 lg:grid-cols-[51%_49%] lg:gap-8">

          {/* LEFT */}
          <div className="max-w-[710px]">
            
            {/* Label */}
            <div className="mb-7 flex items-center gap-4">
              <span className="text-[11px] font-black tracking-[0.24em] text-[#439e94] md:text-[12px]">
                WHAT WE DO
              </span>
              <span className="h-[2px] w-[62px] bg-[#45a99c]" />
            </div>

            {/* Heading */}
            <h2 className="font-bold max-w-[690px] text-[42px]  leading-[1.02] tracking-[-0.045em] sm:text-[48px] md:text-[55px] lg:text-[52px] xl:text-[56px]">
              Turning end-of-life
              <br />
              materials into the
              <br />
              <span className="text-[#32a092]">
                building blocks of
              </span>
              <br />
              <span className="text-[#32a092]">
                India's clean energy
              </span>
              <br />
              <span className="text-[#32a092]">
                economy.
              </span>
            </h2>

            {/* Paragraph 1 */}
            <p className="mt-8 max-w-[680px] text-[14px] leading-[1.75] text-[#697573] md:text-[15px]">
              Every spent lithium-ion battery contains the critical minerals
              India imports at enormous cost — Lithium, Cobalt, Nickel,
              Graphite, Manganese. Every discarded electronic device and
              decommissioned motor holds rare earth elements — Neodymium,
              Dysprosium, Praseodymium — that power EV drivetrains, wind
              turbines and defence systems. India imports nearly all of both.
            </p>

            {/* Paragraph 2 */}
            <p className="mt-5 max-w-[680px] text-[14px] leading-[1.75] text-[#697573] md:text-[15px]">
              Circulogy has built the infrastructure and the technology to
              recover both — from the same feedstock streams, using a single
              proprietary hydrometallurgical process. We are not a conventional
              recycler. We are a{" "}
              <strong className="font-bold text-[#424d4b]">
                critical mineral and rare earth refinery
              </strong>{" "}
              — purpose-built for India's energy transition, aligned with the
              National Critical Mineral Mission.
            </p>

            {/* Quote */}
            <div className="relative mt-7 max-w-[705px] overflow-hidden rounded-[18px] border border-[#dce9e6] bg-white px-6 py-5 shadow-[0_12px_35px_rgba(32,105,95,0.05)] md:px-7 md:py-6">
              <div className="absolute bottom-0 left-0 top-0 w-[5px] bg-[#35a697]" />

              <p className="pl-1 text-[15px] italic leading-[1.55] text-[#394542] md:text-[16px]">
                “India cannot build its clean energy future on imported critical
                minerals. The answer is already in circulation — we just need
                the technology and the will to recover it.”
              </p>

              <p className="mt-3 pl-1 text-[9px] font-bold tracking-[0.18em] text-[#43a298] md:text-[10px]">
                SAEEM RIZVI · FOUNDER & CEO, CIRCULOGY
              </p>
            </div>
          </div>


          {/* RIGHT CARDS */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-[43px]">
            {cards.map((card) => (
              <ProcessCard key={card.number} {...card} />
            ))}
          </div>

        </div>

        {/* Bottom Right Label */}
        <div className="mt-14 flex items-center justify-end gap-4 pr-1 lg:mt-[85px]">
          <span className="h-[1px] w-[45px] bg-[#62afa6]" />
          <span className="text-[9px] font-bold tracking-[0.23em] text-[#a3c8c3] md:text-[10px]">
            RECOVER · REFINE · REBUILD
          </span>
        </div>

      </div>
    </section>
  );
}