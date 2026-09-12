import React from "react";
import './About.css'
import { ArrowRight, ArrowDown } from "lucide-react";
import WhyCirculogy from "../About/Whycirculogy";
import CirculogyEdge from "../About/CirculogyEdge";

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

              {/* Main Image */}
              <img
                src="/images/about-circular.png"
                alt="Circular Economy"
                className=" relative z-10 w-full max-w-[650px] object-contain drop-shadow-[0_0_40px_rgba(53,181,167,0.25)] "
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



      {/* part 3 */}

      <section className="w-full bg-[#F7FAF9] px-6 py-16 md:px-10 lg:px-[55px] lg:py-20">

        {/* Section Heading */}
        <div className="mb-5">
          <p className="text-[11px] font-bold uppercase tracking-[3px] text-[#147A73]">
            OUR DIRECTION
          </p>
        </div>

        {/* Vision + Mission */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">

          {/* ================= VISION ================= */}
          <div className="relative min-h-[390px] overflow-hidden border border-[#BFDCD7] bg-[#E2F4F0] px-9 py-12 md:px-10 lg:px-9">

            {/* Decorative V */}
            <span className="pointer-events-none absolute right-[20px] top-[5px] text-[180px] font-light leading-none text-[#C5E9E2]">
              V
            </span>

            {/* Decorative Circle */}
            <div className="pointer-events-none absolute bottom-[-80px] right-[-55px] h-[260px] w-[260px] rounded-full border border-[#B9DDD7]"></div>

            {/* Circle Dot */}
            <div className="pointer-events-none absolute bottom-[43px] right-[96px] h-[18px] w-[18px] rounded-full bg-[#6BC0B3]"></div>

            {/* Content */}
            <div className="relative z-10">

              <p className="mb-11 text-[11px] font-bold uppercase tracking-[2px] text-[#147A73]">
                VISION
              </p>

              <h2 className="max-w-[500px] text-[27px] font-medium leading-[1.38] tracking-[-0.7px] text-[#073B3B] md:text-[29px] lg:text-[28px] xl:text-[29px]">
                To become India’s most trusted
                <br />
                and connected full-stack circular
                <br />
                economy platform enabling
                <br />
                seamless collaboration, real-
                <br />
                world impact, and policy influence
                <br />
                at scale.
              </h2>

            </div>
          </div>

          {/* ================= MISSION ================= */}
          <div className="relative min-h-[390px] overflow-hidden bg-[#00483F] px-9 py-12 md:px-10 lg:px-9">

            {/* Decorative Circles */}
            <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[280px] w-[280px] rounded-full border border-[#2B756D]/50"></div>

            <div className="pointer-events-none absolute right-[-60px] top-[-60px] h-[210px] w-[210px] rounded-full border border-dashed border-[#2B756D]/50"></div>

            <div className="pointer-events-none absolute right-[-20px] top-[-20px] h-[140px] w-[140px] rounded-full border border-dashed border-[#2B756D]/50"></div>

            {/* Circle Dot */}
            <div className="pointer-events-none absolute right-[98px] top-[82px] h-[17px] w-[17px] rounded-full bg-[#70C5B9]"></div>

            {/* Content */}
            <div className="relative z-10">

              <p className="mb-11 text-[11px] font-bold uppercase tracking-[2px] text-white">
                MISSION
              </p>

              <h2 className="max-w-[570px] text-[27px] font-medium leading-[1.32] tracking-[-0.7px] text-white md:text-[29px] lg:text-[28px] xl:text-[29px]">
                To accelerate circular economy
                <br />
                adoption through intelligent tech
                <br />
                platform that connects, digitizes
                <br />
                and enables frictionless
                <br />
                collaboration amongst various
                <br />
                stakeholders across the value
                <br />
                chain.
              </h2>

            </div>
          </div>

        </div>
      </section>

      {/* part 4 */}

      {/* ================= BUILT ON EXPERIENCE SECTION ================= */}
      <section className="relative w-full overflow-hidden bg-[#F7FAF9] px-8 py-16 text-[#073B3B] md:px-12 lg:px-[75px] lg:py-[65px]">

        {/* Background Decorative Shape */}
        <div className="pointer-events-none absolute -bottom-[150px] -right-[80px] h-[300px] w-[300px] rounded-full bg-[#D9F0EB] opacity-70"></div>

        {/* Main Container */}
        <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 lg:grid-cols-[360px_1fr] lg:gap-[75px]">

          {/* ================= LEFT SIDE ================= */}
          <div className="relative">

            {/* Small Heading */}
            <p className="mb-8 text-[11px] font-bold uppercase tracking-[3px] text-[#147A73]">
              BUILT ON EXPERIENCE
            </p>

            {/* 10+ Circle */}
            <div className="relative flex h-[240px] w-[300px] items-center justify-center">

              {/* Outer Circle */}
              <div className="absolute left-[45px] top-[5px] h-[205px] w-[205px] rounded-full border border-[#C5E4DF]"></div>

              {/* 10+ */}
              <div className="relative z-10 flex items-center">
                <span className="text-[125px] font-bold leading-none tracking-[-8px] text-[#078579]">
                  10+
                </span>

                {/* Years Text */}
                <div className="ml-5 mt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#147A73]">
                    YEARS
                  </p>

                  <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#147A73]">
                    IN
                  </p>

                  <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#147A73]">
                    INDUSTRY
                  </p>

                  <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#147A73]">
                    EXPERIENCE
                  </p>
                </div>
              </div>

              {/* Circle Dot */}
              <span className="absolute bottom-[5px] left-[175px] h-[12px] w-[12px] rounded-full bg-[#54B5A8]"></span>

            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div>

            {/* Main Paragraph */}
            <p className="max-w-[700px] text-[18px] font-medium leading-[1.65] tracking-[-0.3px] text-[#16454A] md:text-[20px]">

              Backed by over a decade of industry experience, deep grassroots
              networks, and strong relationships across the recycling community,
              Circulogy is engineered to be a circular economy powerhouse helping
              you solve your problems with ease.

            </p>

            {/* Divider */}
            <div className="mt-7 h-[1px] w-full bg-[#C9DAD8]"></div>

            {/* ================= FEATURES ================= */}
            <div className="mt-6 grid grid-cols-1 gap-x-12 gap-y-4 sm:grid-cols-2">

              {/* Left Column */}
              <div className="space-y-4">

                <div className="flex items-center gap-3">
                  <span className="h-[9px] w-[9px] rounded-full bg-[#147A73]"></span>
                  <span className="text-[14px] font-medium text-[#5D7473]">
                    Deep grassroots networks
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="h-[9px] w-[9px] rounded-full bg-[#147A73]"></span>
                  <span className="text-[14px] font-medium text-[#5D7473]">
                    Technology
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="h-[9px] w-[9px] rounded-full bg-[#147A73]"></span>
                  <span className="text-[14px] font-medium text-[#5D7473]">
                    Scalable impact
                  </span>
                </div>

              </div>

              {/* Right Column */}
              <div className="space-y-4">

                <div className="flex items-center gap-3">
                  <span className="h-[9px] w-[9px] rounded-full bg-[#147A73]"></span>
                  <span className="text-[14px] font-medium text-[#5D7473]">
                    Recycling community relationships
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="h-[9px] w-[9px] rounded-full bg-[#147A73]"></span>
                  <span className="text-[14px] font-medium text-[#5D7473]">
                    Ecosystem expertise
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>
      {/* 
       part 5 */}

      {/* ================= TEAM & ADVISORS SECTION ================= */}
      <section className="relative w-full overflow-hidden bg-[#F7FAF9] px-6 py-16 text-[#073B3B] md:px-10 lg:px-[55px] lg:py-14">

        {/* Decorative Dots - Top Left */}
        <div className="pointer-events-none absolute left-0 top-0 h-[120px] w-[120px] opacity-40" style={{ backgroundImage: "radial-gradient(#8DCFC5 1px, transparent 1px)", backgroundSize: "10px 10px" }}></div>

        {/* Decorative Circle - Top Right */}
        <div className="pointer-events-none absolute right-[-80px] top-[-100px] h-[280px] w-[280px] rounded-full border border-[#D6EAE7]"></div>
        <div className="pointer-events-none absolute right-[-35px] top-[-50px] h-[190px] w-[190px] rounded-full border border-[#D6EAE7]"></div>

        {/* Main Container */}
        <div className="relative z-10 mx-auto max-w-[1250px]">

          {/* ================= HEADER ================= */}
          <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-[1fr_1fr]">

            {/* Left Header */}
            <div>

              <p className="mb-5 text-[10px] font-bold uppercase tracking-[3px] text-[#147A73]">
                TEAM & ADVISORS
              </p>

              <h2 className="max-w-[600px] text-[38px] font-semibold leading-[1.05] tracking-[-1.8px] text-[#073B3B] md:text-[45px] lg:text-[43px]">
                People Behind the
                <br />
                Circular Movement
              </h2>

              {/* Header Line */}
              <div className="mt-5 flex items-center gap-4">
                <span className="h-[2px] w-[30px] bg-[#4DAFA3]"></span>

                <span className="text-[8px] font-semibold uppercase tracking-[3px] text-[#7B9694]">
                  PEOPLE
                </span>

                <span className="text-[8px] text-[#7B9694]">•</span>

                <span className="text-[8px] font-semibold uppercase tracking-[3px] text-[#7B9694]">
                  IDEAS
                </span>

                <span className="text-[8px] text-[#7B9694]">•</span>

                <span className="text-[8px] font-semibold uppercase tracking-[3px] text-[#7B9694]">
                  A CLEANER TOMORROW
                </span>
              </div>

            </div>

            {/* Right Header */}
            <div className="pb-1 lg:pl-4">
              <p className="max-w-[520px] text-[13px] font-medium leading-[1.55] text-[#637B79] md:text-[14px]">
                Behind Circulogy is a team of passionate sustainability advocates,
                systems thinkers, and technology enablers committed to transforming
                India’s circular economy landscape.
              </p>
            </div>

          </div>

          {/* ================= TEAM GRID ================= */}
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">

            {/* ================= CARD 1 ================= */}
            <div className="overflow-hidden rounded-[10px] border border-[#D6E9E5] bg-white">

              {/* Image / Placeholder */}
              <div className="relative mx-2 mt-2 flex h-[165px] items-center justify-center overflow-hidden rounded-[8px] bg-[#D5F0EB]">

                {/* Circles */}
                <div className="absolute h-[145px] w-[145px] rounded-full border border-white/60"></div>
                <div className="absolute h-[105px] w-[105px] rounded-full border border-white/60"></div>

                {/* Dot */}
                <span className="absolute right-[35px] top-[28px] h-[7px] w-[7px] rounded-full bg-[#63B8AC]"></span>

                {/* Person Icon */}
                <div className="relative flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#C1E5DF]">
                  <div className="relative">
                    <div className="mx-auto h-[10px] w-[10px] rounded-full bg-[#68AFA6]"></div>
                    <div className="mt-1 h-[13px] w-[22px] rounded-t-full bg-[#68AFA6]"></div>
                  </div>
                </div>

              </div>

              {/* Card Content */}
              <div className="px-3 pb-4 pt-3">

                <p className="text-[8px] font-bold uppercase tracking-[2px] text-[#147A73]">
                  FOUNDER
                </p>

                <h3 className="mt-1 text-[15px] font-bold text-[#073B3B]">
                  Saeed Rizvi
                </h3>

                <a href="#" className="mt-2 inline-flex items-center gap-2 text-[10px] font-medium text-[#315B5A]">
                  <span className="border-b border-[#315B5A]">
                    View profile
                  </span>
                  <span className="text-[16px]">→</span>
                </a>

              </div>
            </div>

            {/* ================= CARD 2 ================= */}
            <div className="overflow-hidden rounded-[10px] border border-[#D6E9E5] bg-white">

              <div className="relative mx-2 mt-2 flex h-[165px] items-center justify-center overflow-hidden rounded-[8px] bg-[#D5F0EB]">

                <div className="absolute h-[145px] w-[145px] rounded-full border border-white/60"></div>
                <div className="absolute h-[105px] w-[105px] rounded-full border border-white/60"></div>

                <span className="absolute right-[35px] top-[28px] h-[7px] w-[7px] rounded-full bg-[#63B8AC]"></span>

                <div className="relative flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#C1E5DF]">
                  <div>
                    <div className="mx-auto h-[10px] w-[10px] rounded-full bg-[#68AFA6]"></div>
                    <div className="mt-1 h-[13px] w-[22px] rounded-t-full bg-[#68AFA6]"></div>
                  </div>
                </div>

              </div>

              <div className="px-3 pb-4 pt-3">

                <p className="text-[8px] font-bold uppercase tracking-[2px] text-[#147A73]">
                  CO-FOUNDER
                </p>

                <h3 className="mt-1 text-[15px] font-bold text-[#073B3B]">
                  Abhishek Tiwari
                </h3>

                <a href="#" className="mt-2 inline-flex items-center gap-2 text-[10px] font-medium text-[#315B5A]">
                  <span className="border-b border-[#315B5A]">
                    View profile
                  </span>
                  <span className="text-[16px]">→</span>
                </a>

              </div>
            </div>

            {/* ================= CARD 3 ================= */}
            <div className="overflow-hidden rounded-[10px] border border-[#D6E9E5] bg-white">

              <div className="relative mx-2 mt-2 flex h-[165px] items-center justify-center overflow-hidden rounded-[8px] bg-[#D5F0EB]">

                <div className="absolute h-[145px] w-[145px] rounded-full border border-white/60"></div>
                <div className="absolute h-[105px] w-[105px] rounded-full border border-white/60"></div>

                <span className="absolute right-[35px] top-[28px] h-[7px] w-[7px] rounded-full bg-[#63B8AC]"></span>

                <div className="relative flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#C1E5DF]">
                  <div>
                    <div className="mx-auto h-[10px] w-[10px] rounded-full bg-[#68AFA6]"></div>
                    <div className="mt-1 h-[13px] w-[22px] rounded-t-full bg-[#68AFA6]"></div>
                  </div>
                </div>

              </div>

              <div className="px-3 pb-4 pt-3">

                <p className="text-[8px] font-bold uppercase tracking-[2px] text-[#147A73]">
                  CO-FOUNDER
                </p>

                <h3 className="mt-1 text-[15px] font-bold text-[#073B3B]">
                  Bhuvanesh S. Manhas
                </h3>

                <a href="#" className="mt-2 inline-flex items-center gap-2 text-[10px] font-medium text-[#315B5A]">
                  <span className="border-b border-[#315B5A]">
                    View profile
                  </span>
                  <span className="text-[16px]">→</span>
                </a>

              </div>
            </div>

            {/* ================= CARD 4 ================= */}
            <div className="overflow-hidden rounded-[10px] border border-[#D6E9E5] bg-white">

              <div className="relative mx-2 mt-2 flex h-[165px] items-center justify-center overflow-hidden rounded-[8px] bg-[#D5F0EB]">

                <div className="absolute h-[145px] w-[145px] rounded-full border border-white/60"></div>
                <div className="absolute h-[105px] w-[105px] rounded-full border border-white/60"></div>

                <span className="absolute right-[35px] top-[28px] h-[7px] w-[7px] rounded-full bg-[#63B8AC]"></span>

                <div className="relative flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#C1E5DF]">
                  <div>
                    <div className="mx-auto h-[10px] w-[10px] rounded-full bg-[#68AFA6]"></div>
                    <div className="mt-1 h-[13px] w-[22px] rounded-t-full bg-[#68AFA6]"></div>
                  </div>
                </div>

              </div>

              <div className="px-3 pb-4 pt-3">

                <p className="text-[8px] font-bold uppercase tracking-[2px] text-[#147A73]">
                  DIRECTOR
                </p>

                <h3 className="mt-1 text-[15px] font-bold text-[#073B3B]">
                  Azeem Rizvi
                </h3>

                <p className="mt-1 text-[10px] text-[#809391]">
                  Profile details to follow.
                </p>

              </div>
            </div>

            {/* ================= CARD 5 ================= */}
            <div className="overflow-hidden rounded-[10px] border border-[#D6E9E5] bg-white">

              <div className="relative mx-2 mt-2 flex h-[165px] items-center justify-center overflow-hidden rounded-[8px] bg-[#D5F0EB]">

                <div className="absolute h-[145px] w-[145px] rounded-full border border-white/60"></div>
                <div className="absolute h-[105px] w-[105px] rounded-full border border-white/60"></div>

                <span className="absolute right-[35px] top-[28px] h-[7px] w-[7px] rounded-full bg-[#63B8AC]"></span>

                <div className="relative flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#C1E5DF]">
                  <div>
                    <div className="mx-auto h-[10px] w-[10px] rounded-full bg-[#68AFA6]"></div>
                    <div className="mt-1 h-[13px] w-[22px] rounded-t-full bg-[#68AFA6]"></div>
                  </div>
                </div>

              </div>

              <div className="px-3 pb-4 pt-3">

                <p className="text-[8px] font-bold uppercase tracking-[2px] text-[#147A73]">
                  DIRECTOR
                </p>

                <h3 className="mt-1 text-[15px] font-bold text-[#073B3B]">
                  Sajid Sahidi
                </h3>

                <p className="mt-1 text-[10px] text-[#809391]">
                  Profile details to follow.
                </p>

              </div>
            </div>

            {/* ================= ROOM TO GROW ================= */}
            <div className="relative flex min-h-[250px] items-center justify-center overflow-hidden rounded-[10px] border border-dashed border-[#B9D9D4] bg-transparent">

              {/* Plus Circle */}
              <div className="relative z-10 flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#8FCBC3] text-[22px] font-light text-[#70B6AE]">
                +
              </div>

              {/* Text */}
              <p className="absolute mt-[105px] text-[8px] font-bold uppercase tracking-[3px] text-[#718987]">
                ROOM TO GROW
              </p>

              {/* Decorative Circle */}
              <div className="absolute bottom-[-90px] right-[-80px] h-[190px] w-[190px] rounded-full border border-[#D7EAE7]"></div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= SHARED AMBITION SECTION ================= */}
      <section className="relative flex min-h-[340px] w-full items-center justify-center overflow-hidden bg-[#F8FAF8] px-6 py-20 text-[#073B3B] md:min-h-[420px] lg:min-h-[500px]">

        {/* ================= TOP LEFT DECORATION ================= */}
        <div className="pointer-events-none absolute -left-[115px] -top-[125px] h-[270px] w-[270px] rounded-full bg-[#E0EEE9]"></div>

        <div className="pointer-events-none absolute -left-[105px] -top-[95px] h-[185px] w-[185px] rounded-full border border-[#159C91]"></div>

        <div className="pointer-events-none absolute -left-[100px] top-[50px] h-[157px] w-[157px] rounded-full bg-[#B9DED7] opacity-90"></div>

        {/* ================= TOP RIGHT CIRCLE ================= */}
        <div className="pointer-events-none absolute right-[50px] top-[32px] h-[75px] w-[75px] rounded-full bg-[#DCE9D5]"></div>

        <div className="pointer-events-none absolute -right-[125px] top-[42px] h-[250px] w-[250px] rounded-full border border-[#159C91]"></div>

        {/* ================= BOTTOM LEFT CIRCLE ================= */}
        <div className="pointer-events-none absolute bottom-[-115px] left-[-55px] h-[190px] w-[190px] rounded-full border border-[#D8E6DF]"></div>

        <div className="pointer-events-none absolute bottom-[70px] left-[27px] h-[54px] w-[54px] rounded-full bg-[#BBDCB0]"></div>

        {/* ================= BOTTOM RIGHT DECORATION ================= */}
        <div className="pointer-events-none absolute -bottom-[150px] right-[-75px] h-[300px] w-[300px] rounded-full bg-[#C3E2DC]"></div>

        <div className="pointer-events-none absolute bottom-[55px] right-[-105px] h-[260px] w-[260px] rounded-full border border-[#159C91]"></div>

        {/* ================= CENTER CONTENT ================= */}
        <div className="relative z-10 flex max-w-[850px] flex-col items-center text-center">

          {/* Small Label */}
          <p className="mb-5 text-[8px] font-bold uppercase tracking-[3px] text-[#246966] md:text-[9px]">
            OUR SHARED AMBITION
          </p>

          {/* Main Heading */}
          <h2 className="max-w-[700px] text-[38px] font-semibold leading-[1.05] tracking-[-1.8px] text-[#073B3B] md:text-[48px] lg:text-[50px]">
            Together, we create
            <br />
            lasting impact.
          </h2>

          {/* Subtitle */}
          <p className="mt-5 text-[12px] font-medium text-[#6D8381] md:text-[13px]">
            Be part of the circular movement.
          </p>

        </div>

      </section>

      {/* part 6 */}

      {/* ================= PARTNER WITH CIRCULOGY SECTION ================= */}
      <section className="relative flex min-h-[340px] w-full items-center overflow-hidden bg-[#48B7B7] px-8 py-16 text-white md:min-h-[420px] md:px-12 lg:min-h-[500px] lg:px-[55px]">

        {/* ================= GRID BACKGROUND ================= */}
        <div className="pointer-events-none absolute inset-0 opacity-25" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)", backgroundSize: "25px 25px" }}></div>

        {/* ================= CONTENT ================= */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1450px] items-center justify-between gap-10">

          {/* ================= LEFT CONTENT ================= */}
          <div className="max-w-[650px]">

            {/* Small Label */}
            <p className="mb-5 text-[8px] font-bold uppercase tracking-[2px] text-white md:text-[9px]">
              PARTNER WITH CIRCULOGY
            </p>

            {/* Heading */}
            <h2 className="max-w-[600px] text-[36px] font-semibold leading-[1.08] tracking-[-1.5px] text-white md:text-[46px] lg:text-[50px]">
              Build a more circular
              <br />
              future with us.
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-[600px] text-[11px] font-medium leading-[1.55] text-white/90 md:text-[13px]">
              Whether you are a recycler, awareness agency, policymaker, or logistics
              innovator — there’s a place for you in our ecosystem.
            </p>

          </div>

          {/* ================= RIGHT BUTTONS ================= */}
          <div className="flex w-[150px] shrink-0 flex-col gap-2 md:w-[170px] lg:mr-[20px]">

            {/* Primary Button */}
            <button type="button" className="flex h-[40px] w-full items-center justify-center gap-2 rounded-[4px] bg-white px-3 text-[8px] font-bold text-[#147A73] transition-all duration-300 hover:bg-[#F2FAF9] md:h-[45px] md:text-[9px]">
              <span>Partner with Circulogy</span>
              <span className="text-[14px]">→</span>
            </button>

            {/* Secondary Button */}
            <button type="button" className="flex h-[40px] w-full items-center justify-center rounded-[4px] border border-white/70 bg-transparent px-3 text-[8px] font-medium text-white transition-all duration-300 hover:bg-white/10 md:h-[45px] md:text-[9px]">
              Get in touch
            </button>

          </div>

        </div>

      </section>

    </>
  );
}

export default About;