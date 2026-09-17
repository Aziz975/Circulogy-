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

export default function WhatWeDo() {
  return (
    <section className="relative overflow-hidden bg-[#f7faf8] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-[5%] lg:py-24 xl:px-[4.8%]">
      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(20,100,88,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(20,100,88,0.055)_1px,transparent_1px)] [background-size:54px_54px]" />

      {/* Decorative Circles */}
      <div className="pointer-events-none absolute -right-[180px] -top-[170px] h-[520px] w-[520px] rounded-full border border-[#d9ebe5] opacity-80 sm:-right-[130px] sm:-top-[130px] sm:h-[600px] sm:w-[600px] lg:-right-[80px] lg:-top-[190px] lg:h-[700px] lg:w-[700px]" />
      <div className="pointer-events-none absolute -right-[110px] -top-[100px] h-[400px] w-[400px] rounded-full border border-[#d9ebe5] opacity-70 sm:h-[480px] sm:w-[480px] lg:h-[570px] lg:w-[570px]" />

      <div className="relative z-10 mx-auto max-w-[1450px]">
        <div className="grid items-start gap-12 lg:grid-cols-[0.98fr_1fr] lg:gap-14 xl:gap-16">
          
          {/* LEFT CONTENT */}
          <div className="max-w-[730px]">
            
            {/* Label */}
            <div className="mb-7 flex items-center gap-4 sm:mb-8">
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#3a9f91] sm:text-[12px]">What We Do</span>
              <span className="h-[2px] w-12 bg-[#3a9f91] sm:w-16" />
            </div>

            {/* Heading */}
            <h2 className="text-[28px] font-semibold text-[#073f3d] transition-all duration-500 ease-out group-hover:-translate-y-2">
              Turning end-of-life
              <br />
              materials into the
              <br />
              <span className="text-[#279c8d] ">building blocks of</span>
              <br />
              <span className="text-[#279c8d]" >India's clean energy</span>
              <br />
              <span className="text-[#279c8d]">economy.</span>
            </h2>

            {/* Description */}
            <div className="mt-8 max-w-[690px] space-y-5 text-[14px] leading-[1.8] text-[#65736f] sm:mt-9 sm:text-[15px]">
              <p>Every spent lithium-ion battery contains the critical minerals India imports at enormous cost — Lithium, Cobalt, Nickel, Graphite, Manganese. Every discarded electronic device and decommissioned motor holds rare earth elements — Neodymium, Dysprosium, Praseodymium — that power EV drivetrains, wind turbines and defence systems. India imports nearly all of both.</p>
              <p>Circulogy has built the infrastructure and the technology to recover both — from the same feedstock streams, using a single proprietary hydrometallurgical process. We are not a conventional recycler. We are a <strong className="font-semibold text-[#4e5d59]">critical mineral and rare earth refinery</strong> — purpose-built for India's energy transition, aligned with the National Critical Mineral Mission.</p>
            </div>

            {/* Quote */}
            <div className="group mt-8 overflow-hidden rounded-[20px] border border-[#d8e8e3] bg-white shadow-[0_10px_35px_rgba(0,60,50,0.05)] transition-all duration-500 hover:-translate-y-1 hover:border-[#4aaea0] hover:shadow-[0_18px_45px_rgba(0,90,75,0.10)] sm:mt-9">
              <div className="border-l-[5px] border-[#39a697] px-5 py-5 sm:px-6 sm:py-6">
                <p className="text-[15px] italic leading-[1.55] text-[#475550] transition-colors duration-500 group-hover:text-[#263c37] sm:text-[16px]">“India cannot build its clean energy future on imported critical minerals. The answer is already in circulation — we just need the technology and the will to recover it.”</p>
                <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#46a99c] transition-all duration-500 group-hover:tracking-[0.22em]">Saeem Rizvi · Founder & CEO, Circulogy</p>
              </div>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="grid gap-4 sm:grid-cols-2 lg:mt-10 xl:gap-5">
            {cards.map((card) => {
              const Icon = card.icon;

              return (
                <article key={card.number} className="group relative min-h-[250px] overflow-hidden rounded-[18px] border border-[#dce9e5] bg-white px-5 pb-6 pt-5 shadow-[0_8px_25px_rgba(0,60,50,0.035)] transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#3ba697] hover:shadow-[0_20px_40px_rgba(0,80,65,0.12)] sm:min-h-[265px] sm:px-6 sm:pt-5">
                  
                  {/* Top Border */}
                  <div className="absolute left-0 right-0 top-0 h-[4px] bg-[#38a395] transition-all duration-500 group-hover:h-[6px]" />

                  {/* Decorative Corner Circle */}
                  <div className="pointer-events-none absolute -right-[62px] -top-[62px] h-[190px] w-[190px] rounded-full border border-[#e0eee9] transition-all duration-700 ease-out group-hover:scale-[1.25] group-hover:border-[#b9ddd5]" />
                  <div className="pointer-events-none absolute -right-[27px] -top-[27px] h-[120px] w-[120px] rounded-full border border-[#e5f0ed] transition-all duration-700 group-hover:scale-[1.15]" />

                  {/* Number */}
                  <div className="relative z-10 text-[11px] font-bold tracking-[0.08em] text-[#4aa99b] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#178777]">{card.number}</div>

                  {/* Icon */}
                  <div className="relative z-10 mt-6 flex h-11 w-11 items-center justify-center rounded-full border border-[#cce5df] bg-[#edf7f4] text-[#43a696] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:border-[#43a696] group-hover:bg-[#dff2ed] group-hover:text-[#178777]">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>

                  {/* Card Content */}
                  <div className="relative z-10 mt-5">
                    <h3 className="text-[18px] font-semibold leading-[1.2] tracking-[-0.025em] text-[#111715] transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#208f81] sm:text-[19px]">{card.title}</h3>
                    <p className="mt-4 text-[13px] leading-[1.65] text-[#697671] transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#4c5e59] sm:text-[13.5px]">{card.text}</p>
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#38a395] transition-all duration-500 group-hover:w-full" />
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom Right Tag */}
        <div className="mt-14 hidden items-center justify-end gap-4 lg:flex">
          <span className="h-[1px] w-11 bg-[#5eafa3]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8abdb5]">Recover · Refine · Rebuild</span>
        </div>
      </div>
    </section>
  );
}