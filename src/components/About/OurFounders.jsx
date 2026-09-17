import React from "react";
import { ArrowRight } from "lucide-react";

const founders = [
  {
    name: "Saeem Rizvi",
    role: "Founder & CEO",
    src: "/images/saeem-rizvi.jpeg",
  },
  {
    name: "Abhishek Tiwari",
    role: "Co-Founder & COO",
    src: "/images/abhishek-tiwari.jpeg",
  },

    {
    name: "Abhishek Tiwari",
    role: "Co-Founder & COO",
    src: "/images/abhishek-tiwari.jpeg",
  },
];

function FounderCard({ name, role, src }) {
  return (
    <div className="group relative overflow-hidden rounded-[18px] border border-[#d9ebe7] bg-white shadow-[0_12px_35px_rgba(28,110,99,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(28,110,99,0.12)]">
      <div className="absolute left-0 right-0 top-0 z-20 h-[5px] bg-[#36a294]" />

      <div className="relative mx-[7px] mt-[7px] aspect-[1.06/1] overflow-hidden rounded-[13px] bg-[#252525]">
        <img src={src} alt={name} className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]" />
      </div>

      <div className="px-7 pb-7 pt-5 sm:px-6">
        <h3 className="text-[26px] font-bold leading-[1.05] tracking-[-0.035em] text-[#0d1110] sm:text-[24px] lg:text-[26px]">
          {name}
        </h3>

        <p className="mt-1 text-[17px] leading-none text-[#73807e] sm:text-[16px]">
          {role}
        </p>

        <button className="mt-7 flex h-[51px] w-[220px] items-center justify-center gap-3 rounded-[12px] border-[1.5px] border-[#72c4b9] bg-white text-[16px] font-medium text-[#3ba394] transition-all duration-300 hover:bg-[#eef9f7]">
          View Profile
          <ArrowRight size={19} strokeWidth={1.8} className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}

export default function OurFounders() {
  return (
    <section className="relative  overflow-hidden bg-[#f8fbfa] px-5 py-14 text-[#101716] sm:px-8 md:px-12 lg:px-[5vw] lg:py-[78px]">
      
      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-60 bg-[linear-gradient(to_right,#e4eeeb_1px,transparent_1px),linear-gradient(to_bottom,#e4eeeb_1px,transparent_1px)] bg-[size:54px_54px]" />

      {/* Top Right Orbit */}
      <div className="pointer-events-none absolute -right-[95px] -top-[105px] h-[510px] w-[510px] rounded-full border border-[#dcece9]" />
      <div className="pointer-events-none absolute right-[-30px] top-[-35px] h-[370px] w-[370px] rounded-full border border-[#dcece9]" />
      <div className="pointer-events-none absolute right-[55px] top-[25px] h-[255px] w-[255px] rounded-full border border-[#dcece9]" />

      {/* Top Right Dot */}
      <div className="absolute right-[9px] top-[142px] flex h-[29px] w-[29px] items-center justify-center rounded-full border border-[#a9dcd4] bg-[#f8fbfa]">
        <span className="h-[9px] w-[9px] rounded-full bg-[#35a293] shadow-[0_0_0_5px_rgba(53,162,147,0.08)]" />
      </div>

      {/* Bottom Left Orbit */}
      <div className="pointer-events-none absolute -bottom-[240px] left-[29%] h-[610px] w-[610px] rounded-full border border-[#dcece9]" />
      <div className="pointer-events-none absolute -bottom-[170px] left-[33%] h-[470px] w-[470px] rounded-full border border-[#dcece9]" />
      <div className="pointer-events-none absolute -bottom-[90px] left-[38%] h-[310px] w-[310px] rounded-full border border-[#dcece9]" />

      {/* Bottom Orbit Dot */}
      <div className="absolute bottom-[290px] left-[30.5%] flex h-[29px] w-[29px] items-center justify-center rounded-full border border-[#a9dcd4] bg-[#f8fbfa]">
        <span className="h-[8px] w-[8px] rounded-full bg-[#35a293]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1450px]">
        
        <div className="grid items-start gap-12 lg:grid-cols-[38%_62%] lg:gap-8 xl:grid-cols-[37%_63%]">

          {/* LEFT CONTENT */}
          <div className="pt-2 lg:pt-[25px]">
            
            {/* Section Label */}
            <div className="flex items-center gap-4">
              <span className="text-[11px] font-black tracking-[0.25em] text-[#409e93] sm:text-[12px]">
                OUR FOUNDERS
              </span>
              <span />
            </div>

            {/* Heading */}
            <h2 className="mt-8 max-w-[570px] text-[47px] font-bold leading-[1.01] tracking-[-0.05em] sm:text-[54px] md:text-[60px] lg:text-[52px] xl:text-[59px]">
              Built by people
              <br />
              who have been
              <br />
              <span className="text-[#32a092]">
                in the trenches.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-8 text-[18px] leading-[1.5] text-[#697875] sm:text-[19px]">
              Meet the leadership behind Circulogy.
            </p>
          </div>


          {/* RIGHT FOUNDERS */}
          <div className="grid gap-6 sm:grid-cols-3 lg:gap-7 xl:gap-8 mt-8">
            {founders.map((founder) => (
              <FounderCard key={founder.name} {...founder} />
            ))}
          </div>

        </div>

        {/* Bottom Left Label */}
        <div className="mt-16 flex items-center gap-4 pb-1 lg:mt-[35px]">
          <span/>
          <span className="text-[9px] font-bold tracking-[0.24em] text-[#9ec7c2] sm:text-[10px]">
            RECOVER · REFINE · REBUILD
          </span>
        </div>

      </div>
    </section>
  );
}