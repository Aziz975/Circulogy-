import React, { useEffect, useRef, useState } from "react";

const minerals = [
  {
    symbol: "Li",
    name: "Lithium",
    position:
      "left-[24%] top-[13%] sm:left-[23%] md:left-[23%] lg:left-[22%]",
    line: "w-[32px] -rotate-[35deg] -left-[25px] top-[30px]",
  },
  {
    symbol: "Co",
    name: "Cobalt",
    position:
      "right-[7%] top-[14%] sm:right-[8%] md:right-[7%]",
    line: "w-[28px] rotate-[130deg] -left-[20px] top-[31px]",
  },
  {
    symbol: "Ni",
    name: "Nickel",
    position:
      "right-[1%] top-[42%] sm:right-[1%] md:right-[1%]",
    line: "w-[28px] rotate-[145deg] -left-[19px] top-[29px]",
  },
  {
    symbol: "REE",
    name: "Rare Earth Elements",
    position:
      "left-[15%] bottom-[34%] sm:left-[15%] md:left-[14%]",
    line: "w-[30px] rotate-[35deg] right-[-25px] top-[29px]",
  },
  {
    symbol: "Cu",
    name: "Copper",
    position:
      "right-[7%] bottom-[23%] sm:right-[8%] md:right-[7%]",
    line: "w-[30px] rotate-[145deg] -left-[21px] top-[28px]",
  },
];

function MineralLabel({ mineral, isVisible, delay }) {
  return (
    <div
      className={`absolute z-30 transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-[45px] opacity-0"
        } ${mineral.position}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="relative">
        {/* Connector */}

      </div>
    </div>
  );
}

export default function CriticalMinerals() {
  const sectionRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  /* =====================================================
     VIEWPORT ANIMATION
     RESTART EVERY TIME SECTION ENTERS VIEWPORT
  ====================================================== */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    let wasVisible = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;

        /* =========================
           ENTER VIEWPORT
        ========================= */

        if (visible && !wasVisible) {
          wasVisible = true;

          // Reset
          setIsVisible(false);

          // Restart animation
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              setIsVisible(true);
            });
          });
        }

        /* =========================
           LEAVE VIEWPORT
        ========================= */

        if (!visible && wasVisible) {
          wasVisible = false;
          setIsVisible(false);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[600px] w-full overflow-hidden bg-[#faf9f6] px-5 pt-12 pb-0 sm:min-h-[650px] sm:px-8 sm:pt-14 sm:pb-0 md:min-h-[700px] md:px-10 md:pt-14 md:pb-0 lg:min-h-[650px] lg:px-12 lg:pt-14 lg:pb-0 xl:min-h-[670px] xl:px-[4%] xl:pb-0"
    >
      {/* =====================================================
          CLEAN BACKGROUND
          NO RADIAL SHADOW / NO GLOW
      ====================================================== */}

      <div className="absolute max-w-[500px] inset-0 bg-[#faf9f6]" />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative mx-auto min-h-[450px] w-full max-w-[1600px]">

        {/* =====================================================
            LEFT CONTENT
        ====================================================== */}

        <div className="relative z-40 flex w-full max-w-[500px] flex-col justify-center pt-8 sm:max-w-[570px] sm:pt-10 md:max-w-[620px] lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 lg:pt-0 xl:max-w-[650px]">

          {/* =================================================
              EYEBROW
          ================================================= */}

          <p
            className={`mb-4 text-[13px] font-extrabold tracking-[0.08em] text-[#079e99] transition-all duration-[750ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:mb-5 sm:text-[15px] md:text-[16px] ${isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-[50px] opacity-0"
              }`}
          >
            THE NEED OF TOMORROW
          </p>

          {/* =================================================
              MAIN HEADING
          ================================================= */}

          <h1 className="font-[800] text-[40px] leading-[0.94] tracking-[-0.045em] text-[#050707] sm:text-[50px] md:text-[58px] lg:text-[55px] xl:text-[60px]">

            {/* Tomorrow's */}

            <span className="inline-block">
              {"Tomorrow’s".split("").map((letter, index) => (
                <span
                  key={`tomorrow-${index}`}
                  className={`inline-block transition-all duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-[100%] opacity-0"
                    }`}
                  style={{
                    transitionDelay: `${100 + index * 45}ms`,
                  }}
                >
                  {letter}
                </span>
              ))}
            </span>

            <br />

            {/* Economy */}

            <span className="inline-block">
              {"Economy".split("").map((letter, index) => (
                <span
                  key={`economy-${index}`}
                  className={`inline-block transition-all duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-[100%] opacity-0"
                    }`}
                  style={{
                    transitionDelay: `${600 + index * 45}ms`,
                  }}
                >
                  {letter}
                </span>
              ))}
            </span>

            <br />

            {/* Needs More */}

            <span className="inline-block">
              {"Needs More".split("").map((letter, index) => (
                <span
                  key={`needs-${index}`}
                  className={`inline-block transition-all duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-[100%] opacity-0"
                    }`}
                  style={{
                    transitionDelay: `${1000 + index * 45}ms`,
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </span>

            <br />

            {/* Critical Minerals */}

            <span className="text-[#0a9f99]">
              {"Critical Minerals".split("").map((letter, index) => (
                <span
                  key={`critical-${index}`}
                  className={`inline-block transition-all duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-[100%] opacity-0"
                    }`}
                  style={{
                    transitionDelay: `${1450 + index * 45}ms`,
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </span>
          </h1>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p
            className={`mt-6 max-w-[470px] text-[15px] font-medium leading-[1.42] tracking-[-0.01em] text-[#394542] transition-all duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:text-[16px] md:text-[17px] lg:text-[16px] xl:text-[17px] ${isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-[70px] opacity-0"
              }`}
            style={{
              transitionDelay: "2100ms",
            }}
          >
            The demand for lithium, cobalt, nickel, copper,
            <br className="hidden sm:block" />
            and rare earth elements is accelerating.
            <br className="hidden sm:block" />
            Yet traditional extraction alone cannot meet
            <br className="hidden sm:block" />
            the growing need for sustainable, resilient, and
            <br className="hidden sm:block" />
            secure supply chains.
          </p>
        </div>

        {/* =====================================================
            RIGHT IMAGE
        ====================================================== */}

        <div
          className={`relative mt-10 h-[440px] w-full transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:h-[500px] md:h-[570px] lg:absolute lg:right-[-5%] lg:top-1/2 lg:mt-0 lg:h-[650px] lg:w-[67%] lg:-translate-y-1/2 xl:right-[-3%] xl:h-[680px] xl:w-[90%] ${isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-[120px] opacity-0"
            }`}
          style={{
            transitionDelay: "300ms",
          }}
        >

          {/* =================================================
              IMAGE
          ================================================= */}
          <div className="relative top-[10%] w-[70%] ml-[34%]">

            {/* Image */}
            <img
              src="/images/critical-minerals2.jpeg"
              alt="Critical minerals"
              className="w-full object-cover object-center"
            />

            {/* LITHIUM */}
            <div className="absolute left-[30%] top-[15%] flex items-center gap-1 rounded-[8px] border border-[#e5e5e5] bg-white px-2 py-1 shadow-md animate-[float_5s_ease-in-out_infinite]">

              <span className="text-[26px] font-bold leading-none text-[#249d8d]">
                Li
              </span>

              <span className="text-[20px] font-normal text-black">
                —
              </span>

              <span className="text-[17px] font-semibold text-[#1b2927]">
                Lithium
              </span>

            </div>


            {/* COBALT */}
            <div className="absolute left-[70%] top-[15%] flex items-center gap-2 rounded-[10px] border border-[#e5e5e5] bg-white px-2 py-1 shadow-md animate-[float_5s_ease-in-out_infinite]">

              <span className="text-[26px] font-bold leading-none text-[#249d8d]">
                Co
              </span>

              <span className="text-[20px] font-normal text-black">
                —
              </span>

              <span className="text-[17px] font-semibold text-[#1b2927]">
                Cobalt
              </span>

            </div>




            {/* NICKEL */}

            <div className="absolute right-[5%] top-[40%] flex items-center gap-2 rounded-[10px] border border-[#e5e5e5] bg-white px-2 py-1 shadow-md animate-[float_5s_ease-in-out_infinite]">

              <span className="text-[26px] font-bold leading-none text-[#249d8d]">
                Ni
              </span>

              <span className="text-[20px] font-normal text-black">
                —
              </span>

              <span className="text-[17px] font-semibold text-[#1b2927]">
                Nickel
              </span>

            </div>



            {/* GRAPHITE */}

            <div className="absolute right-[10%] bottom-[25%] flex items-center gap-2 rounded-[10px] border border-[#e5e5e5] bg-white px-2 py-1 shadow-md animate-[float_5s_ease-in-out_infinite]">

              <span className="text-[26px] font-bold leading-none text-[#249d8d]">
                Cu
              </span>

              <span className="text-[20px] font-normal text-black">
                —
              </span>

              <span className="text-[17px] font-semibold text-[#1b2927]">
                Copper
              </span>

            </div>



            {/* RARE EARTHS */}

            <div className="absolute left-[5%] bottom-[40%] flex items-center gap-2 rounded-[10px] border border-[#e5e5e5] bg-white px-2 py-1 shadow-md animate-[float_5s_ease-in-out_infinite]">

              <span className="text-[26px] font-bold leading-none text-[#249d8d]">
                REE
              </span>

              <span className="text-[20px] font-normal text-black">
                —
              </span>

              <span className="text-[17px] font-semibold text-[#1b2927]">
                Rare Earth <br /> Elements
              </span>

            </div>



            {/* =================================================
                MINERAL LABELS
            ================================================= */}

            {minerals.map((mineral, index) => (
              <MineralLabel
                key={mineral.symbol}
                mineral={mineral}
                isVisible={isVisible}
                delay={800 + index * 130}
              />
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}