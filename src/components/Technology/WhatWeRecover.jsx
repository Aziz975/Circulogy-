import React, { useEffect, useRef, useState } from "react";

export default function WhatWeRecover() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  /* ================= INTERSECTION ANIMATION ================= */
  useEffect(() => {
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
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-[#f7f8f4] px-5 py-10 sm:px-7 sm:py-12 md:px-10 md:py-14 lg:px-[27px] lg:py-[21px] xl:px-[27px]">
      <div className="mx-auto max-w-[1300px]">

        {/* ================= SECTION LABEL ================= */}
        <div className={`mb-5 pl-1 sm:mb-6 md:mb-7 ${visible ? "animate-[fadeUp_0.7s_ease-out_forwards]" : "opacity-0"}`}>
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#159b95] sm:text-[11px]">
            WHAT WE RECOVER
          </p>
        </div>

        {/* ================= MAIN CARDS ================= */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-7">

          {/* ================================================= */}
          {/* LEFT CARD - CRITICAL MINERALS */}
          {/* ================================================= */}
          <div
            className={`group relative min-h-[445px] overflow-hidden rounded-[20px] bg-[#087f7b] sm:min-h-[460px] lg:h-[445px] ${
              visible
                ? "animate-[fadeUp_0.9s_ease-out_0.15s_forwards]"
                : "opacity-0"
            }`}
          >

            {/* LEFT IMAGE */}
            <div className="absolute inset-y-0 left-[-1%] w-[34%] overflow-hidden">
              <img
                src="images/recoveringimg1.png"
                alt=""
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-[#087f7b]/20" />
            </div>

            {/* CARD BACKGROUND */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#087f7b]/15" />

            {/* CONTENT */}
            <div className="relative z-10 ml-[31%] h-full px-5 py-6 sm:px-7 sm:py-7 md:px-8 lg:px-6 xl:px-7">

              {/* NUMBER */}
              <div className="absolute left-[px] top-[-2px] select-none text-[108px] font-bold leading-none tracking-[-0.08em] text-[#b9dedd]/70 sm:text-[115px] lg:text-[105px]">
                0 1
              </div>

              {/* SMALL LABEL */}
              <div className="relative z-10 mt-[105px]">
                <p className="mb-1 text-[7px] font-semibold uppercase tracking-[0.12em] text-[#d5f4f0] sm:text-[8px]">
                  CRITICAL MINERALS — FROM LI-ION BATTERY BLACK MASS
                </p>

                {/* TITLE */}
                <h2 className="max-w-[285px] text-[27px] font-bold leading-[0.95] tracking-[-0.045em] text-white sm:text-[29px] md:text-[30px] lg:text-[27px]">
                  Battery-Grade
                  <br />
                  Critical Minerals
                </h2>

                {/* DESCRIPTION */}
                <p className="mt-2 max-w-[295px] text-[10px] font-medium leading-[1.28] text-[#d3e9e7] sm:text-[10.5px]">
                  Recovered from spent lithium-ion batteries across
                  NMC, NCA, LFP and LCO chemistries — refined to
                  battery-grade specifications for cathode
                  manufacturing and industrial applications.
                </p>

                {/* MINERAL LIST */}
                <div className="mt-2.5 max-w-[300px]">
                  <MineralRow symbol="Li" name="Lithium Carbonate" />
                  <MineralRow symbol="Co" name="Cobalt Sulphate" />
                  <MineralRow symbol="Ni" name="Nickel Sulphate" />
                  <MineralRow symbol="Mn" name="Manganese Carbonate" />
                  <MineralRow symbol="C" name="Graphite" last />
                </div>
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* RIGHT CARD - RARE EARTH */}
          {/* ================================================= */}
          <div
            className={`group relative min-h-[445px] overflow-hidden rounded-[20px] bg-[#f8f8f4] sm:min-h-[460px] lg:h-[445px] ${
              visible
                ? "animate-[fadeUp_0.9s_ease-out_0.35s_forwards]"
                : "opacity-0"
            }`}
          >

            {/* RIGHT IMAGE */}
            <div className="absolute inset-y-0 right-0 w-[34%] overflow-hidden">
              <img
                src="images/recoveringimg2.png"
                alt=""
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Image fade */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#f8f8f4]/70" />
            </div>

            {/* CONTENT */}
            <div className="relative z-10 h-full px-5 py-6 sm:px-7 sm:py-7 md:px-8 lg:px-6 xl:px-7">

              {/* NUMBER */}
              <div className="absolute top-[-2px] select-none text-[108px] font-bold leading-none tracking-[-0.08em] text-[#b9dedd]/70 sm:text-[115px] lg:text-[105px]">
                0 2
              </div>

              {/* CONTENT AREA */}
              <div className="relative z-10 mr-[30%] pt-[105px]">

                {/* SMALL LABEL */}
                <p className="mb-1 text-[7px] font-semibold uppercase tracking-[0.11em] text-[#159b95] sm:text-[8px]">
                  RARE EARTH ELEMENTS — FROM END-OF-LIFE NDFEB MAGNETS
                </p>

                {/* TITLE */}
                <h2 className="max-w-[315px] text-[27px] font-bold leading-[0.95] tracking-[-0.045em] text-[#080d0d] sm:text-[29px] md:text-[30px] lg:text-[27px]">
                  High-Purity Rare
                  <br />
                  Earth Oxides &amp; Metals
                </h2>

                {/* DESCRIPTION */}
                <p className="mt-2 max-w-[300px] text-[10px] font-medium leading-[1.28] text-[#3d4748] sm:text-[10.5px]">
                  Recovered from NdFeB permanent magnets in end-of-life
                  EV motors, hard disk drives, wind turbines and consumer
                  electronics — refined to precise specifications for alloy
                  and magnet manufacturing.
                </p>

                {/* ELEMENT LIST */}
                <div className="mt-2.5 max-w-[300px]">
                  <MineralRow symbol="Nd" name="Neodymium" light />
                  <MineralRow symbol="Pr" name="Praseodymium" light />
                  <MineralRow symbol="Dy" name="Dysprosium" light />
                  <MineralRow symbol="Tb" name="Terbium" light />
                  <MineralRow symbol="Sm" name="Samarium" light last />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


/* ========================================================= */
/* MINERAL ROW */
/* ========================================================= */

function MineralRow({ symbol, name, last = false, light = false }) {
  return (
    <div
      className={`group/row flex items-center border-b ${
        light ? "border-[#a8d9d6]" : "border-[#54a9a5]"
      } py-[4px] transition-all duration-300 hover:translate-x-1 ${
        last ? "border-b-0" : ""
      }`}
    >
      {/* SYMBOL */}
      <span
        className={`w-[38px] text-[24px] font-semibold leading-none tracking-[-0.04em] ${
          light ? "text-[#050909]" : "text-white"
        }`}
      >
        {symbol}
      </span>

      {/* DASH */}
      <span
        className={`mr-3 text-[15px] ${
          light ? "text-[#343b3c]" : "text-[#c7e6e4]"
        }`}
      >
        —
      </span>

      {/* NAME */}
      <span
        className={`text-[10px] font-medium ${
          light ? "text-[#171e1f]" : "text-[#e4f3f1]"
        }`}
      >
        {name}
      </span>
    </div>
  );
}