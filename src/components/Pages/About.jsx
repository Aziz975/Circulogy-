import React from "react";
import './About.css'
import { ArrowRight, ArrowDown } from "lucide-react";
import WhyCirculogy from "../About/Whycirculogy";
import CirculogyEdge from "../About/CirculogyEdge";
import PartnerWithCirculogy from "../PartnerWithCirculogy";
import SharedAmbition from "../About/ShareAmbition";
import ImpactSystem from "../About/ImpactSystem";
import DirectionSection from "../About/DirectionSection";
import TeamAdvisors from "../About/TeamAdvisors";

function About() {
  return (
    <>

      {/* part 1 */}

      <section className="relative min-h-[650px] w-full overflow-hidden bg-[#071311] text-white">

        {/* ================= BACKGROUND ================= */}
        <div className="absolute inset-0">
          <img
            src="/about.png"

            className="h-full w-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#071311]/70" />
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div
          className=" relative z-10 mx-auto flexmin-h-[650px] max-w-[1450px] items-center px-8 py-20 lg:px-12 xl:px-16" >
          <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2">

            {/* ================= LEFT CONTENT ================= */}
            <div className="max-w-[600px]">

              {/* Small Label */}
              <div
                className=" mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[10px] font-semibold tracking-[2px] text-white/70
              "
              >
                <span className="h-[6px] w-[6px] rounded-full bg-[#35b5a7]" />

                ABOUT CIRCULOGY
              </div>

              {/* Heading */}

              <h1 className="text-[48px] font-medium leading-[1.05] tracking-[-2px] sm:text-[58px] md:text-[65px] lg:text-[68px] xl:text-[72px]">
                <span className="reveal-line inline-block">
                  Enablers of a
                </span>
                <br />
                <span className="reveal-teal inline-block bg-gradient-to-r from-[#4fc1b4] via-[#6dd6ca] to-[#4fc1b4] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(79,193,180,0.18)]">
                  Circular Economy
                </span>
              </h1>
              {/* Description */}
              <p
                className="mt-7 max-w-[570px] text-[16px] leading-[1.6]text-white/75md:text-[17px]">
                Circulogy is a new-age, tech-enabled platform built to power
                the next phase of India’s circular economy. Connecting the right
                stakeholders at the right time to create value, transparency,
                and trust in the ecosystem.
              </p>

              {/* ================= BUTTONS ================= */}
              <div className="mt-9 flex flex-wrap items-center gap-4">

                {/* Partner Button */}
                <button
                  type="button"
                  className="flex h-[48px] items-center gap-4 rounded-full bg-[#4fc1b4] px-6 text-[14px] font-semibold text-white transition-allduration-300 hover:bg-[#3eafa3] hover:scale-105
">
                  Partner with Circulogy

                  <ArrowRight size={18} />
                </button>

                {/* Discover Button */}
                <button type="button" className=" flex h-[48px] items-center gap-3 rounded-full border border-white/20 bg-white/5 px-4 pr-6 text-[14px] text-white/80 transition-all duration-300 hover:border-[#4fc1b4] hover:text-white">
                  <span
                    className=" flex h-[36px] w-[36px] items-center justify-center rounded-full border border-white/3 "
                  >
                    <ArrowDown size={17} />
                  </span>

                  Discover our purpose
                </button>
              </div>
            </div>

            {/* ================= RIGHT IMAGE ================= */}
            <div className="relative flex items-center justify-center">

              {/* Glow */}
              <div
                className=" absolute h-[420px] w-[420px] rounded-full bg-[#35b5a7]/10 blur-[100px]"
              />

             
            </div>
          </div>
        </div>

        {/* ================= BOTTOM NAVIGATION ================= */}
        <div
          className="absolutebottom-14left-0z-20w-full"
        >
          <div
            className="mx-auto flex max-w-[1450px] items-center gap-4 px-8 text-[9px] font-medium tracking-[3px] text-white/50 lg:px-12 xl:px-16"
          >
            {/* Line */}
            <span className="h-[1px] w-[22px] bg-[#35b5a7]" />

            <span className="text-white/60">
              PEOPLE
            </span>

            <span>/</span>

            <span className="text-white/60">
              TECHNOLOGY
            </span>

            <span>/</span>

            <span className="text-white/60">
              MATERIALS
            </span>

            <span>/</span>

            <span className="text-white/60">
              A CIRCULAR TOMORROW
            </span>
          </div>
        </div>
      </section>

      {/* part2  */}

    <WhyCirculogy></WhyCirculogy>
    

    {/* part 3 */}

    <CirculogyEdge></CirculogyEdge>


    {/*   part 4 */}
     <ImpactSystem></ImpactSystem>


      {/* part 5 */}

      <DirectionSection></DirectionSection>

      
       {/* part 6  */}

       <TeamAdvisors></TeamAdvisors>


     <SharedAmbition></SharedAmbition>


      {/* part 7 */}
<PartnerWithCirculogy></PartnerWithCirculogy>

    </>
  );
}

export default About;