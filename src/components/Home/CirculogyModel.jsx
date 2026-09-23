import React, { useEffect, useRef, useState } from "react";

export default function CirculogyModel() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  /* =========================================
     INTERSECTION OBSERVER
     RESTART ANIMATION ON EVERY VIEW
  ========================================= */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    let wasVisible = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;

        // ENTER VIEW
        if (visible && !wasVisible) {
          wasVisible = true;

          // Reset animation
          setIsVisible(false);

          // Restart animation
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              setIsVisible(true);
            });
          });
        }

        // LEAVE VIEW
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
      className="relative w-full overflow-hidden bg-[#f8f9f7] px-5 py-12 sm:px-8 sm:py-16 md:px-10 md:py-20 lg:px-14 lg:py-24 xl:px-[6%]"
    >
      <div className="mx-auto flex w-full max-w-[1500px] flex-col items-center gap-12 lg:flex-row lg:gap-8 xl:gap-14">

        {/* =========================================
            LEFT CONTENT
        ========================================= */}

        <div className="w-full lg:w-[42%] xl:w-[40%]">

          {/* Small Heading */}
          <p
            className={`mb-4 text-[13px] font-bold uppercase tracking-[1.8px] text-[#19988f] transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:text-[14px] ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-[80px] opacity-0"
            }`}
          >
            The Circulogy Model
          </p>

          {/* Main Heading */}
          <h2
            className={`text-[34px] font-extrabold uppercase leading-[0.95] tracking-[-1px] text-black transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:text-[42px] md:text-[48px] lg:text-[42px] xl:text-[48px] ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-[100px] opacity-0"
            }`}
            style={{
              transitionDelay: "100ms",
            }}
          >
            Closing the Loop
          </h2>

          {/* Green Line */}
          <div
            className={`mt-5 h-[3px] w-[150px] bg-[#19988f] transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:mt-6 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-[70px] opacity-0"
            }`}
            style={{
              transitionDelay: "220ms",
            }}
          />

          {/* Description */}
          <p
            className={`mt-6 max-w-[500px] text-[16px] font-medium leading-[1.35] tracking-[1.2px] text-[#444] transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:text-[17px] md:text-[18px] ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-[100px] opacity-0"
            }`}
            style={{
              transitionDelay: "320ms",
            }}
          >
            Our closed-loop system transforms end-of-life products into new
            resources, recovering critical minerals, reducing waste, and
            creating sustainable value at every stage.
          </p>

        </div>

        {/* =========================================
            RIGHT IMAGE
        ========================================= */}

        <div
          className={`flex w-full items-center justify-center transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] lg:w-[58%] xl:w-[60%] ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-[140px] opacity-0"
          }`}
          style={{
            transitionDelay: "200ms",
          }}
        >
          <div className="relative w-full max-w-[700px]">

            <img
              src=""
              alt="Circulogy closed loop model"
              className="h-auto w-full object-contain"
            />

          </div>
        </div>

      </div>
    </section>
  );
}