import React, { useEffect, useRef, useState } from "react";
import CountUp from "./CountUp";

export default function PledgeHero() {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    const currentImage = imageRef.current;

    if (currentImage) {
      observer.observe(currentImage);
    }

    return () => {
      if (currentImage) {
        observer.unobserve(currentImage);
      }
    };
  }, []);



  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f4faf7] px-6 py-16 md:px-10 lg:px-12">

      {/* BACKGROUND GRID */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(#dcebe6 1px, transparent 1px),
            linear-gradient(90deg, #dcebe6 1px, transparent 1px)
          `,
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative z-10 mx-auto grid min-h-[650px] max-w-[1450px] items-center lg:grid-cols-[46%_54%]">

        {/* LEFT CONTENT */}
        <div className="relative z-30">

          <p
            className="
    mb-5
    text-[13px] font-extrabold uppercase tracking-[3px] text-[#079e99]
    opacity-0
    animate-[fadeUp_0.7s_ease-out_0.1s_forwards]
  "
          >
            Sustainability Pledge
          </p>

          <h1 className="text-[48px] font-bold leading-[0.99] tracking-[-2.5px] text-[#071313] sm:text-[58px] lg:text-[61px] xl:text-[64px]">
            {"Sign the".split("").map((letter, index) => (
              <span key={index} className="letter-reveal" style={{ animationDelay: `${index * 0.05}s` }}>
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}

            <br />

            {"sustainability".split("").map((letter, index) => (
              <span key={index} className="letter-reveal" style={{ animationDelay: `${0.45 + index * 0.045}s` }}>
                {letter}
              </span>
            ))}

            <br />

            {"pledge".split("").map((letter, index) => (
              <span key={index} className="letter-reveal" style={{ animationDelay: `${1.1 + index * 0.06}s` }}>
                {letter}
              </span>
            ))}

            <br />

            <span className="text-[#36a88f]">
              {"at India".split("").map((letter, index) => (
                <span key={index} className="letter-reveal" style={{ animationDelay: `${1.55 + index * 0.05}s` }}>
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}

              <br />

              {"Mobile Congress".split("").map((letter, index) => (
                <span key={index} className="letter-reveal" style={{ animationDelay: `${2.05 + index * 0.045}s` }}>
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}

              <br />

              {"2025".split("").map((letter, index) => (
                <span key={index} className="letter-reveal" style={{ animationDelay: `${2.7 + index * 0.08}s` }}>
                  {letter}
                </span>
              ))}
            </span>

          </h1>

          <p
            className="
    mt-7 max-w-[470px]
    text-[18px] leading-[1.55] text-[#687876]
    opacity-0
    animate-[fadeUp_0.8s_ease-out_0.5s_forwards]
  "
          >
            “I / We pledge to act for a sustainable future by adopting
            practices that protect our planet, uplift our communities, and
            promote long-term responsibility.”
          </p>
          {/* BUTTON + COUNT */}
          <div className="mt-9 flex items-center">

            <button className="flex h-[44px] animate-bounce items-center gap-4 rounded-full bg-[#35aa91] px-6 text-[14px] font-bold text-white transition duration-300 hover:bg-[#278d78]">
              I Pledge Now
              <span className="text-[22px] font-bold ">→</span>
            </button>

            <div className="mx-5 h-[34px] w-px bg-[#a9d1c7]" />

            <div className="flex items-center gap-2">

              <span className="text-[14px] font-bold text-[#71817e]">
                Total Pledges Submitted:
              </span>

              <span className="text-[22px] font-bold text-[#071313]">
                <CountUp end={10147} duration={800} />
              </span>

            </div>
          </div>
        </div>

        {/* RIGHT EARTH AREA */}
        <div className={`relative flex h-[620px] items-center justify-center ${isVisible ? "animate-earth-spin" : ""
          }`} >

          {/* SOFT GREEN GLOW */}
          <div className={`absolute left-1/2 top-1/2 h-[570px] w-[570px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9eee7] opacity-50 blur-[50px] ${isVisible ? "animate-earth-spin" : ""
          } `} />

          {/* OUTER RING */}
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#62bdaa] opacity-70" />

          {/* MIDDLE RING */}
          <div className="absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#62bdaa] opacity-70" />

          {/* INNER RING */}
          <div className="absolute left-1/2 top-1/2 h-[385px] w-[385px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#72c5b2] opacity-60" />

          {/* TOP LEFT BALL */}
          <span className="absolute left-[calc(50%-156px)] top-[calc(58%-251px)] z-30 h-[9px] w-[9px] rounded-full bg-[#299d84] shadow-[0_0_8px_rgba(41,157,132,0.35)]" />

          {/* TOP RIGHT BALL */}
          <span className="absolute left-[calc(50%+145px)] top-[calc(61%-270px)] z-30 h-[9px] w-[9px] rounded-full bg-[#299d84] shadow-[0_0_8px_rgba(41,157,132,0.35)]" />

          {/* LEFT CENTER BALL */}
          <span className="absolute left-[calc(50%-255px)] top-[calc(55%-30px)] z-30 h-[9px] w-[9px] rounded-full bg-[#299d84] shadow-[0_0_8px_rgba(41,157,132,0.35)]" />

          {/* RIGHT CENTER BALL */}
          <span className="absolute left-[calc(54%+215px)] top-[calc(55%-20px)] z-30 h-[9px] w-[9px] rounded-full bg-[#299d84] shadow-[0_0_8px_rgba(41,157,132,0.35)]" />

          {/* BOTTOM LEFT BALL */}
          <span className="absolute left-[calc(54%-190px)] top-[calc(50%+195px)] z-30 h-[9px] w-[9px] rounded-full bg-[#299d84] shadow-[0_0_8px_rgba(41,157,132,0.35)]" />

          {/* BOTTOM RIGHT BALL */}
          <span className="absolute left-[calc(50%+180px)] top-[calc(45%+195px)] z-30 h-[9px] w-[9px] rounded-full bg-[#299d84] shadow-[0_0_8px_rgba(41,157,132,0.35)]" />

          {/* EARTH */}
          <div className="relative z-20 flex h-[500px] w-[440px] items-center justify-center [perspective:1000px]">

            {/* EARTH */}
            <div className="relative z-20 flex h-[600px] w-[600px] items-center justify-center">
              <img
                ref={imageRef}
                src="/images/earth.png"
                alt="Sustainable Earth"
                className={`relative top-[15px] h-full  w-full object-contain origin-center drop-shadow-[0_15px_110px_rgba(35,115,95,0.50)] `}
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}