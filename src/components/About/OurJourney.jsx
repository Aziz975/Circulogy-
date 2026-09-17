import React from "react";
import { ArrowRight } from "lucide-react";

export default function OurJourney() {
  const journeyItems = [
    {
      year: "2025",
      title: "Founded",
      text: "DPIIT-recognised DeepTech startup incorporated and headquartered in Noida, registered in Meerut, UP.",
      image: "images/founded.png",
      dark: true,
    },
    {
      year: "2026",
      title: "Hub & Spoke Activated",
      text: "Onboarding of an e-waste recycling facility with 20,000+ MT per annum capacity activating the informal supply chain network to fulfill the feedstock need.",
      image: "images/Hub.png",
      dark: true,
    },
    {
      year: "2026",
      title: "R&D Facility Setup",
      text: "Setting up a dedicated hydrometallurgical R&D facility focused on developing and validating the process technology for critical mineral and rare earth element extraction, processing and refining from battery black mass and NdFeB magnets.",
      image: "images/facility.png",
      dark: true,
    },
    {
      year: "2027 (Proposed)",
      title: "Pilot Plant",
      text: "Pre-commercial pilot validates hydromet recovery of critical minerals and rare earth elements to battery-grade specifications.",
      image: "images/pilot.png",
      dark: false,
    },
    {
      year: "2028 (Proposed)",
      title: "Gigafactory — Meerut, UP",
      text: "India’s first integrated critical mineral and rare earth refinery reaches commercial scale supplying battery-grade outputs to India’s EV, energy storage and defence supply chains.",
      image: "images/giga.png",
      dark: false,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f5fbf9] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-8 lg:py-[90px] xl:px-[2vw]">
      
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(207,244,237,0.65),transparent_42%)]" />
      <div className="pointer-events-none absolute left-[-10%] top-[-100px] h-[230px] w-[120%] rounded-[50%] bg-[#dff6f1]/70" />
      
      {/* Bottom teal waves */}
      <div className="pointer-events-none absolute bottom-[-190px] left-[-8%] h-[350px] w-[116%] rounded-[50%] bg-[#087b76]" />
      <div className="pointer-events-none absolute bottom-[-235px] left-[-5%] h-[320px] w-[110%] rounded-[50%] border-t border-[#55c7bb]/50 bg-[#005b58]" />
      <div className="pointer-events-none absolute bottom-[-280px] left-[5%] h-[270px] w-[95%] rounded-[50%] border-t border-[#64cfc3]/30" />

      <div className="relative z-10 mx-auto max-w-[1600px]">

        {/* ================= HEADER ================= */}
        <div className="grid items-end gap-8 lg:grid-cols-[57%_43%] xl:grid-cols-[58%_42%]">

          {/* Left */}
          <div>
            <div className="mb-7 inline-flex items-center rounded-full bg-[#e4f7f3] px-6 py-3 text-[15px] font-medium text-[#087b76] sm:px-7 sm:text-[16px]">
              Our Journey
            </div>

            <h2 className="max-w-[850px] text-[46px] font-semibold leading-[0.98] tracking-[-0.055em] text-[#080b0b] sm:text-[56px] md:text-[64px] lg:text-[62px] xl:text-[72px]">
              From vision to <span className="text-[#087d78]">refinery.</span>
            </h2>
          </div>

          {/* Right */}
          <div className="pb-2">
            <p className="max-w-[590px] text-[16px] leading-[1.5] text-[#55476d] sm:text-[17px] md:text-[18px] lg:text-[18px] xl:text-[19px]">
              Built on a single conviction: India’s critical mineral and rare
              earth future does not lie in new mines abroad or geopolitically
              fragile imports, but in the end-of-life batteries and electronic
              devices already in circulation at home.
            </p>
          </div>

        </div>


        {/* ================= CARDS ================= */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3 xl:gap-4">

          {journeyItems.map((item, index) => (
            <div key={item.title} className={`group relative flex h-[510px] w-full flex-col overflow-hidden rounded-[18px] border shadow-[0_10px_30px_rgba(0,70,65,0.08)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-3 hover:shadow-[0_25px_55px_rgba(0,70,65,0.18)] sm:h-[530px] lg:h-[510px] xl:h-[520px] ${item.dark ? "border-[#086f6a] bg-[#00504e] text-white" : "border-[#cce9e5] bg-[#f9fdfc] text-[#111414]"}`}>

              {/* ================= CONTENT ================= */}
              <div className="relative z-20 flex flex-1 flex-col px-5 pt-5 sm:px-6 sm:pt-6">

                {/* Year + Arrow */}
                <div className="flex items-center justify-between">
                  
                  <span className={`inline-flex min-h-[43px] items-center rounded-full px-5 text-[16px] font-medium transition-all duration-500 group-hover:scale-105 ${item.dark ? "bg-[#087d78] text-white group-hover:bg-[#10958d]" : "bg-[#e4f6f3] text-[#087b76] group-hover:bg-[#d6f0ec]"}`}>
                    {item.year}
                  </span>

                  <div className={`flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full transition-all duration-500 group-hover:rotate-[-35deg] group-hover:scale-110 ${item.dark ? "bg-[#087d78] text-white group-hover:bg-[#10958d]" : "bg-[#e4f6f3] text-[#087b76] group-hover:bg-[#d6f0ec]"}`}>
                    <ArrowRight size={21} strokeWidth={1.7} />
                  </div>

                </div>


                {/* Title */}
                <h3 className={`mt-6 text-[21px] font-semibold leading-[1.08] tracking-[-0.025em] transition-all duration-500 ease-out group-hover:-translate-y-1 sm:text-[22px] ${item.dark ? "text-white" : "text-[#111313]"}`}>
                  {item.title}
                </h3>


                {/* Description */}
                <p className={`mt-4 text-[14px] leading-[1.5] transition-all duration-500 ease-out group-hover:-translate-y-1 sm:text-[15px] ${item.dark ? "text-white/90 group-hover:text-white" : "text-[#625778] group-hover:text-[#4e405f]"}`}>
                  {item.text}
                </p>

              </div>


              {/* ================= IMAGE MERGE ================= */}
              <div className={`absolute inset-x-0 bottom-0 h-[255px] overflow-hidden ${item.dark ? "bg-[#00504e]" : "bg-[#e8f5f2]"}`}>

                {/* Image */}
                {item.image && (
                  <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                )}

                {/* Main gradient merge */}
                <div className={`absolute inset-x-0 top-0 h-[135px] bg-gradient-to-b ${item.dark ? "from-[#00504e] via-[#00504e]/90 via-[42%] to-transparent" : "from-[#f9fdfc] via-[#f9fdfc]/90 via-[42%] to-transparent"}`} />

                {/* Soft blurred transition */}
                <div className={`absolute inset-x-0 top-0 h-[105px] blur-[7px] ${item.dark ? "bg-gradient-to-b from-[#00504e] via-[#00504e]/70 to-transparent" : "bg-gradient-to-b from-[#f9fdfc] via-[#f9fdfc]/70 to-transparent"}`} />

                {/* Image darkening */}
                <div className={`absolute inset-0 ${item.dark ? "bg-gradient-to-t from-[#003f3d]/35 via-transparent to-transparent" : "bg-gradient-to-t from-[#d9eee9]/20 via-transparent to-transparent"}`} />

              </div>


              {/* Additional Merge Layer */}
              <div className={`pointer-events-none absolute inset-x-0 top-[120px] z-10 h-[115px] bg-gradient-to-b to-transparent ${item.dark ? "from-[#00504e] via-[#00504e]/80" : "from-[#f9fdfc] via-[#f9fdfc]/80"}`} />


              {/* Bottom Hover Line */}
              <div className="absolute bottom-0 left-0 z-30 h-[3px] w-0 bg-[#35b4a3] transition-all duration-700 ease-out group-hover:w-full" />

            </div>
          ))}

        </div>


        {/* Bottom spacing for wave */}
        <div className="h-[130px] sm:h-[150px]" />

      </div>
    </section>
  );
}