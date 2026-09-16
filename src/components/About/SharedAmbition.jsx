import React, { useEffect, useRef, useState } from "react";

const SharedAmbition = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[700px] w-full items-center justify-center overflow-hidden bg-[#fbfcfa] px-6 py-24 sm:min-h-[750px] sm:px-10 lg:min-h-[780px]"
    >
      {/* ================= BACKGROUND SHAPES ================= */}

      {/* Top Left Large Circle */}
      <div className="ambition-circle ambition-circle-1 absolute -left-[150px] -top-[170px] h-[440px] w-[440px] rounded-full border-[2px] border-[#319f9b]/80">
        <div className="absolute left-0 top-[120px] h-[350px] w-[350px] rounded-full bg-[#b8e1dc]/45" />
      </div>

      {/* Left Middle Circle */}
      <div className="ambition-circle ambition-circle-2 absolute -left-[150px] top-[115px] h-[325px] w-[325px] rounded-full bg-[#75c8c2]/45" />

      {/* Top Right Circle */}
      <div className="ambition-circle ambition-circle-3 absolute right-[8%] top-[80px] h-[170px] w-[170px] rounded-full bg-[#c9dfc1]/55" />

      {/* Right Large Circle */}
      <div className="ambition-circle ambition-circle-4 absolute -right-[170px] top-[100px] h-[530px] w-[530px] rounded-full border-[2px] border-[#319f9b]/75" />

      {/* Bottom Right Circle */}
      <div className="ambition-circle ambition-circle-5 absolute -bottom-[250px] -right-[150px] h-[510px] w-[510px] rounded-full bg-[#8ed1ca]/45" />

      {/* Bottom Left Small Circle */}
      <div className="ambition-circle ambition-circle-6 absolute bottom-[100px] left-[4%] h-[120px] w-[120px] rounded-full bg-[#b5dba9]/65" />

      {/* Bottom Left Outline */}
      <div className="ambition-circle ambition-circle-7 absolute -bottom-[190px] left-[-30px] h-[350px] w-[350px] rounded-full border-[2px] border-[#d6e5d5]" />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto flex w-full max-w-[1100px] flex-col items-center text-center">
        {/* Label */}
        <p
          className={`mb-10 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#0c4846] transition-all duration-[1100ms] ease-out sm:text-[11px] ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          Our Shared Ambition
        </p>

        {/* Heading */}
        <h2
          className={`max-w-[900px] text-[46px] font-semibold leading-[1.02] tracking-[-0.045em] text-[#063f3d] transition-all duration-[1300ms] delay-[200ms] ease-out sm:text-[58px] md:text-[68px] lg:text-[76px] xl:text-[82px] ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          Together, we create
          <br />
          lasting impact.
        </h2>

        {/* Paragraph */}
        <p
          className={`mt-10 text-[18px] font-normal tracking-[-0.015em] text-[#67817f] transition-all duration-[1200ms] delay-[500ms] ease-out sm:text-[20px] md:text-[21px] ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-7 opacity-0"
          }`}
        >
          Be part of the circular movement.
        </p>
      </div>

      {/* ================= ANIMATION CSS ================= */}

      <style>{`
        .partner-section,.ambition-section{font-family:inherit}

        .ambition-circle{will-change:transform,opacity;animation-timing-function:ease-in-out;animation-iteration-count:infinite;animation-direction:alternate}

        .ambition-circle-1{animation:ambitionFloat1 12s ease-in-out infinite alternate,ambitionPulse 8s ease-in-out infinite}
        .ambition-circle-2{animation:ambitionFloat2 15s ease-in-out infinite alternate,ambitionPulse 9s ease-in-out infinite}
        .ambition-circle-3{animation:ambitionFloat3 11s ease-in-out infinite alternate,ambitionPulse 7s ease-in-out infinite}
        .ambition-circle-4{animation:ambitionFloat4 16s ease-in-out infinite alternate,ambitionPulse 10s ease-in-out infinite}
        .ambition-circle-5{animation:ambitionFloat5 14s ease-in-out infinite alternate,ambitionPulse 9s ease-in-out infinite}
        .ambition-circle-6{animation:ambitionFloat6 10s ease-in-out infinite alternate,ambitionPulse 7s ease-in-out infinite}
        .ambition-circle-7{animation:ambitionFloat7 18s ease-in-out infinite alternate,ambitionPulse 10s ease-in-out infinite}

        @keyframes ambitionFloat1{from{transform:translate3d(0,0,0)}to{transform:translate3d(18px,12px,0)}}
        @keyframes ambitionFloat2{from{transform:translate3d(0,0,0)}to{transform:translate3d(15px,-12px,0)}}
        @keyframes ambitionFloat3{from{transform:translate3d(0,0,0)}to{transform:translate3d(-12px,14px,0)}}
        @keyframes ambitionFloat4{from{transform:translate3d(0,0,0)}to{transform:translate3d(-18px,18px,0)}}
        @keyframes ambitionFloat5{from{transform:translate3d(0,0,0)}to{transform:translate3d(-15px,-15px,0)}}
        @keyframes ambitionFloat6{from{transform:translate3d(0,0,0)}to{transform:translate3d(12px,-10px,0)}}
        @keyframes ambitionFloat7{from{transform:translate3d(0,0,0)}to{transform:translate3d(18px,-8px,0)}}

        @keyframes ambitionPulse{0%,100%{opacity:.7}50%{opacity:.9}}

        @media (prefers-reduced-motion:reduce){
          .ambition-circle{animation:none!important}
        }
      `}</style>
    </section>
  );
};

export default SharedAmbition;