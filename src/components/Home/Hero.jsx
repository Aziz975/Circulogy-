import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const sectionRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [parallaxY, setParallaxY] = useState(0);

  /* =========================================
     INTERSECTION / RESTART ANIMATION
  ========================================= */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    let wasVisible = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;

        if (visible && !wasVisible) {
          wasVisible = true;

          setIsVisible(false);

          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              setIsVisible(true);
            });
          });
        }

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

  /* =========================================
     OPTIONAL PARALLAX
  ========================================= */

  useEffect(() => {
    const handleScroll = () => {
      setParallaxY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`hero-section relative min-h-screen w-full overflow-hidden bg-[#050d0f] text-white ${isVisible ? "hero-visible" : "hero-hidden"
        }`}
    >
      {/* =========================================
          BACKGROUND IMAGE
      ========================================= */}

      <img



        src="images/HomePage1.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />


      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -right-[5%] top-[5%] h-[700px] w-[700px] rounded-full bg-[#087d78]/10 blur-[140px]"
          style={{
            transform: `translate3d(0, ${parallaxY * 0.05}px, 0)`,
          }}
        />

        <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_70%_45%,rgba(25,205,181,0.35)_0,transparent_30%)]" />
      </div>

      {/* =========================================
          CONTENT
      ========================================= */}

      <div className="relative z-10 mx-auto min-h-screen max-w-[1800px] px-6 py-10 sm:px-10 md:px-12 lg:px-16 xl:px-[6%]">
        <div className="flex min-h-[calc(100vh-80px)] items-center">

          {/* =========================================
              LEFT CONTENT
          ========================================= */}

          <div
            className="relative z-20 w-full max-w-[800px] pt-8 lg:pt-0"
            style={{
              transform: `translate3d(0, ${-parallaxY * 0.08}px, 0)`,
            }}
          >
            {/* =====================================
                BADGE
            ===================================== */}

            <div
              className={`hero-badge mb-8 inline-flex items-center gap-3 rounded-full border border-[#273638] bg-[#071012]/80 px-5 py-2.5 backdrop-blur-md ${isVisible ? "animate-in" : ""
                }`}
            >
              <span className="h-[7px] w-[7px] rounded-full bg-[#1bc8b5] shadow-[0_0_10px_rgba(27,200,181,0.8)]" />

              <span className="text-[10px] font-medium tracking-[0.2em] text-[#c2cbca] sm:text-[11px]">
                CIRCULAR CRITICAL MINERALS
              </span>
            </div>

            {/* =====================================
                HEADING
            ===================================== */}
            <h1 className="max-w-[800px] text-[40px] font-medium leading-[0.96] tracking-[-0.055em] sm:text-[65px] md:text-[74px] lg:text-[70px] xl:text-[80px] 2xl:text-[60px]">
              {/* First line */}
              <span className="block ">
                <span className="block">
                  {"Building the Mine".split("").map((letter, index) => (
                    <span
                      key={index}
                      className={`hero-letter ${isVisible ? "hero-letter-visible" : ""
                        } text-[#f2f3f2]`}
                      style={{
                        transitionDelay: `${index * 45}ms`,
                      }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </span>
                  ))}
                </span>
              </span>

              {/* Second line */}
              <span className="block overflow-hidden">
                <span className="block">
                  {"Above Ground".split("").map((letter, index) => (
                    <span
                      key={index}
                      className={`hero-letter ${isVisible ? "hero-letter-visible" : ""
                        } text-[#16b5a5]`}
                      style={{
                        transitionDelay: `${index * 45 + 650}ms`,
                      }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </span>
                  ))}
                </span>
              </span>
            </h1>

            {/* =====================================
                SUBTITLE
            ===================================== */}

            <p
              className={`hero-subtitle mt-8 text-[18px] font-normal tracking-[-0.015em] text-[#e0e6e5] sm:text-[20px] md:text-[22px] ${isVisible ? "animate-in" : ""
                }`}
            >
              Recovering critical minerals. Securing tomorrow.
            </p>

            {/* =====================================
                DESCRIPTION
            ===================================== */}

            <p
              className={`hero-description mt-5 max-w-[650px] text-[14px] leading-[1.75] text-[#929d9b] sm:text-[15px] md:text-[16px] ${isVisible ? "animate-in" : ""
                }`}
            >
              The critical minerals powering tomorrow’s economy already exist
              in the products we use today. Circulogy closes the loop
              recovering high-value materials from end-of-life electronics
              and batteries to build a resilient, circular supply chain.
            </p>

            {/* =====================================
                BUTTONS
            ===================================== */}

            <div
              className={`hero-buttons mt-8 flex flex-col gap-3 sm:flex-row ${isVisible ? "animate-in" : ""
                }`}
            >
              <button className="group flex h-[50px] items-center justify-between rounded-full bg-[#20b8a7] px-7 text-[20px] font-medium text-white transition-all duration-300 hover:bg-[#27c9b6] hover:shadow-[0_0_35px_rgba(32,184,167,0.2)] sm:w-[310px]">
                <span>Explore Urban Mining</span>

                <ArrowRight
                  size={20}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <button className="h-[50px] rounded-full border border-[#29393a] bg-[#061012]/60 px-10 text-[20px] font-medium text-[#d7dfdd] backdrop-blur-sm transition-all duration-300 hover:border-[#20b8a7] hover:text-[#20b8a7]">
                Talk to Us
              </button>
            </div>

            {/* =====================================
                TRUSTED
            ===================================== */}

            <div
              className={`hero-trusted mt-16 flex items-center gap-4 ${isVisible ? "animate-in" : ""
                }`}
            >
              <div className="flex -space-x-2">

                <div className="h-8 w-8 overflow-hidden rounded-full border-2 border-[#071011] bg-[#596663]">
                  <img
                    src="images/avatar1.png"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="h-8 w-8 overflow-hidden rounded-full border-2 border-[#071011] bg-[#747e7a]">
                  <img
                    src="images/avatar2.png"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="h-8 w-8 overflow-hidden rounded-full border-2 border-[#071011] bg-[#85877d]">
                  <img
                    src="images/avatar3.png"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="h-8 w-8 overflow-hidden rounded-full border-2 border-[#071011] bg-[#a49780]">
                  <img
                    src="images/avaatar4.png"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>

              </div>

              <p className="text-[12px] text-[#7e8a88] sm:text-[13px]">
                Trusted by leading OEMs, recyclers, and innovators
              </p>

              <span className="hidden h-[7px] w-[7px] rounded-full bg-[#19cdb5] shadow-[0_0_8px_#19cdb5] sm:block" />
            </div>
          </div>

        </div>
      </div>
    </section>

  );
}