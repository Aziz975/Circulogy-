import React, { useEffect, useRef, useState } from "react";

const DirectionSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="direction-section relative w-full overflow-hidden bg-[#f8fcfa] text-[#073f3d]">

      {/* =====================================================
          OUR DIRECTION
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 pb-8 pt-12 sm:px-10 lg:px-[4.2%] lg:pt-5">

        <div className={`mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#11706a] transition-all duration-[1000ms] ease-out sm:text-[11px] ${visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}>
          Our Direction
        </div>

        {/* =====================================================
            VISION + MISSION
        ====================================================== */}

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">

          {/* VISION CARD */}
          <div className={`vision-card relative min-h-[320px] overflow-hidden border border-[#a9d9d2] bg-[#e4f5ef] px-7 py-8 transition-all duration-[1200ms] ease-out sm:px-8 lg:min-h-[320px] lg:px-7 lg:py-9 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>

            {/* Large V */}
            <div className="pointer-events-none absolute right-[15px] top-[5px] select-none text-[150px] font-normal leading-none text-[#b6dfd7]/60">
              V
            </div>

            {/* Decorative circle */}
            <div className="direction-circle absolute -bottom-[105px] -right-[75px] h-[170px] w-[170px] rounded-full border border-[#8ccfc5]/50" />

            <div className="relative z-10">
              <p className="mb-9 text-[10px] font-semibold uppercase tracking-[0.27em] text-[#12635f]">
                Vision
              </p>

              <p className="max-w-[445px] text-[21px] font-normal leading-[1.42] tracking-[-0.025em] text-[#073f3d] sm:text-[22px] lg:text-[21px]">
                To become India’s most trusted and connected full-stack circular economy platform enabling seamless collaboration, real-world impact, and policy influence at scale.
              </p>
            </div>

            {/* Moving dot */}
            <span className="vision-dot absolute bottom-[36px] right-[78px] h-[14px] w-[14px] rounded-full bg-[#65c4b1]" />
          </div>

          {/* MISSION CARD */}
          <div className={`mission-card relative min-h-[320px] overflow-hidden bg-[#003f3b] px-7 py-8 text-white transition-all delay-[180ms] duration-[1200ms] ease-out sm:px-8 lg:min-h-[320px] lg:px-7 lg:py-9 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>

            {/* Decorative circles */}
            <div className="mission-circle mission-circle-one absolute -right-[35px] -top-[75px] h-[210px] w-[210px] rounded-full border border-[#4eb0a9]/30" />
            <div className="mission-circle mission-circle-two absolute -right-[5px] -top-[45px] h-[155px] w-[155px] rounded-full border border-[#4eb0a9]/25" />
            <div className="mission-circle mission-circle-three absolute right-[25px] -top-[15px] h-[100px] w-[100px] rounded-full border border-[#4eb0a9]/20" />

            {/* Mission dot */}
            <span className="mission-dot absolute right-[78px] top-[68px] h-[13px] w-[13px] rounded-full bg-[#9bd2c5]" />

            <div className="relative z-10">
              <p className="mb-9 text-[10px] font-semibold uppercase tracking-[0.27em] text-white/90">
                Mission
              </p>

              <p className="max-w-[470px] text-[21px] font-normal leading-[1.37] tracking-[-0.025em] text-white sm:text-[22px] lg:text-[21px]">
                To accelerate circular economy adoption through intelligent tech platform that connects, digitizes and enables frictionless collaboration amongst various stakeholders across the value chain.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* =====================================================
          BUILT ON EXPERIENCE
      ====================================================== */}

      <div className="relative mt-0 overflow-hidden border-t border-[#edf5f2] bg-[#f0f9f6]">

        {/* Decorative background */}
        <div className="pointer-events-none absolute bottom-[-150px] right-[-80px] h-[280px] w-[280px] rounded-full bg-[#b3ded5]/40" />
        <div className="pointer-events-none absolute bottom-[-115px] right-[-20px] h-[220px] w-[220px] rounded-full bg-[#82c7bd]/25" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-12 sm:px-10 lg:px-[4.2%] lg:py-12">

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[32%_68%]">

            {/* LEFT EXPERIENCE */}
            <div className={`relative border-b border-[#d5e7e2] pb-10 lg:border-b-0 lg:border-r lg:pb-0 ${visible ? "animate-experience-left" : "opacity-0"}`}>

              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#11706a] sm:text-[11px]">
                Built on experience
              </p>

              <div className="relative mt-6 flex min-h-[145px] items-center">

                {/* Experience circle */}
                <div className="experience-ring absolute left-[8px] top-[-12px] h-[165px] w-[165px] rounded-full border border-[#b8ddd7]" />

                {/* 10+ */}
                <div className="relative z-10 flex items-end">
                  <span className="experience-number text-[100px] font-semibold leading-[0.82] tracking-[-0.08em] text-[#08766d] sm:text-[108px]">
                    10+
                  </span>

                  <div className="mb-[5px] ml-4 flex flex-col text-[8px] font-semibold uppercase leading-[1.4] tracking-[0.24em] text-[#26736e]">
                    <span>Years</span>
                    <span>Industry</span>
                    <span>Experience</span>
                  </div>
                </div>

                {/* Small dot */}
                <span className="experience-dot absolute bottom-[5px] left-[137px] h-[10px] w-[10px] rounded-full bg-[#4fae9d]" />
              </div>
            </div>


            {/* RIGHT CONTENT */}
            <div className={`lg:pl-10 ${visible ? "animate-experience-right" : "opacity-0"}`}>

              <p className="max-w-[650px] text-[18px] font-normal leading-[1.48] tracking-[-0.02em] text-[#073f3d] sm:text-[19px] lg:text-[19px]">
                Backed by over a decade of industry experience, deep grassroots networks, and strong relationships across the recycling community, Circulogy is engineered to be a circular economy powerhouse helping you solve your problems with ease.
              </p>

              {/* Divider */}
              <div className="my-5 h-px w-full max-w-[650px] bg-[#c9e0db]" />

              {/* Bullet points */}
              <div className="grid max-w-[650px] grid-cols-1 gap-x-10 gap-y-2 sm:grid-cols-2">

                <div className="flex items-center gap-3">
                  <span className="h-[7px] w-[7px] rounded-full bg-[#08766d]" />
                  <span className="text-[12px] text-[#527572]">
                    Deep grassroots networks
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="h-[7px] w-[7px] rounded-full bg-[#08766d]" />
                  <span className="text-[12px] text-[#527572]">
                    Recycling community relationships
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="h-[7px] w-[7px] rounded-full bg-[#08766d]" />
                  <span className="text-[12px] text-[#527572]">
                    Technology
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="h-[7px] w-[7px] rounded-full bg-[#08766d]" />
                  <span className="text-[12px] text-[#527572]">
                    Ecosystem expertise
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="h-[7px] w-[7px] rounded-full bg-[#08766d]" />
                  <span className="text-[12px] text-[#527572]">
                    Scalable impact
                  </span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>


      {/* =====================================================
          ANIMATION CSS
      ====================================================== */}

      <style>{`
        .direction-section{font-family:inherit}

        .direction-circle{animation:directionCircle 9s ease-in-out infinite alternate}

        .vision-dot{animation:visionDot 6s ease-in-out infinite alternate}

        .mission-circle-one{animation:missionOrbit 18s linear infinite}

        .mission-circle-two{animation:missionOrbitReverse 14s linear infinite}

        .mission-circle-three{animation:missionOrbit 11s linear infinite}

        .mission-dot{animation:missionDot 5s ease-in-out infinite alternate}

        .experience-ring{animation:experienceRing 10s ease-in-out infinite alternate}

        .experience-dot{animation:experienceDot 5s ease-in-out infinite alternate}

        .experience-number{animation:numberPulse 6s ease-in-out infinite}

        .animate-experience-left{animation:experienceLeft 1.2s ease-out forwards}

        .animate-experience-right{animation:experienceRight 1.2s .25s ease-out forwards}

        @keyframes directionCircle{
          0%{transform:translate3d(0,0,0);opacity:.45}
          100%{transform:translate3d(-12px,-8px,0);opacity:.75}
        }

        @keyframes visionDot{
          0%{transform:translate(0,0);opacity:.55}
          100%{transform:translate(-8px,-8px);opacity:1}
        }

        @keyframes missionOrbit{
          0%{transform:rotate(0deg)}
          100%{transform:rotate(360deg)}
        }

        @keyframes missionOrbitReverse{
          0%{transform:rotate(360deg)}
          100%{transform:rotate(0deg)}
        }

        @keyframes missionDot{
          0%{transform:translateY(0);opacity:.55}
          100%{transform:translateY(8px);opacity:1}
        }

        @keyframes experienceRing{
          0%{transform:scale(1);opacity:.5}
          100%{transform:scale(1.025);opacity:.85}
        }

        @keyframes experienceDot{
          0%{transform:translate(0,0);opacity:.5}
          100%{transform:translate(5px,-5px);opacity:1}
        }

        @keyframes numberPulse{
          0%,100%{opacity:.92}
          50%{opacity:1}
        }

        @keyframes experienceLeft{
          from{transform:translateY(25px);opacity:0}
          to{transform:translateY(0);opacity:1}
        }

        @keyframes experienceRight{
          from{transform:translateY(25px);opacity:0}
          to{transform:translateY(0);opacity:1}
        }

        @media(max-width:1023px){
          .experience-ring{left:0}
        }

        @media(prefers-reduced-motion:reduce){
          .direction-circle,.vision-dot,.mission-circle-one,.mission-circle-two,.mission-circle-three,.mission-dot,.experience-ring,.experience-dot,.experience-number{animation:none!important}
        }
      `}</style>
    </section>
  );
};

export default DirectionSection;