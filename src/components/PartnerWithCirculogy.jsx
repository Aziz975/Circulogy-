import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const PartnerWithCirculogy = () => {
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
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="partner-section relative flex min-h-[700px] w-full items-center overflow-hidden bg-[#48b9b7] px-6 py-24 sm:px-10 lg:min-h-[780px] lg:px-[5.5%]"
    >
      {/* =========================
          ANIMATED GRID
      ========================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animated-grid absolute -inset-[100px] opacity-[0.42]" />
      </div>

      {/* =========================
          SOFT TEAL GRADIENT
      ========================== */}
      <div className="pointer-events-none absolute inset-0 animated-gradient" />

      {/* =========================
          CONTENT
      ========================== */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_360px] lg:gap-20">
          {/* =========================
              LEFT CONTENT
          ========================== */}
          <div className="max-w-[760px]">
            {/* Label */}
            <p
              className={`mb-8 text-[10px] font-semibold uppercase tracking-[0.28em] text-white transition-all duration-[1000ms] ease-out sm:text-[11px] ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              Partner with Circulogy
            </p>

            {/* Heading */}
            <h2 className="max-w-[760px] text-[48px] font-semibold leading-[0.98] tracking-[-0.045em] text-white sm:text-[58px] md:text-[66px] lg:text-[72px]">
              <span
                className={`block transition-all duration-[1100ms] delay-[150ms] ease-out ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                Build a more circular
              </span>

              <span
                className={`block transition-all duration-[1100ms] delay-[300ms] ease-out ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                future with us.
              </span>
            </h2>

            {/* Paragraph */}
            <p
              className={`mt-8 max-w-[710px] text-[18px] font-normal leading-[1.7] tracking-[-0.01em] text-white/95 transition-all duration-[1200ms] delay-[500ms] ease-out sm:text-[19px] lg:text-[20px] ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-7 opacity-0"
              }`}
            >
              Whether you are a recycler, awareness agency, policymaker, or
              logistics innovator — there’s a place for you in our ecosystem.
            </p>
          </div>

          {/* =========================
              BUTTONS
          ========================== */}
          <div
            className={`flex w-full max-w-[360px] flex-col gap-4 transition-all duration-[1200ms] delay-[700ms] ease-out lg:justify-self-end ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            {/* Primary Button */}
            <button
              className="
                group
                flex
                h-[56px]
                w-full
                items-center
                justify-center
                gap-4
                rounded-[7px]
                bg-white
                px-6
                text-[14px]
                font-semibold
                text-[#08706d]
                shadow-sm
                transition-all
                duration-300
                ease-out
                hover:-translate-y-[2px]
                hover:shadow-lg
              "
            >
              <span>Partner with Circulogy</span>

              <ArrowUpRight
                size={19}
                strokeWidth={1.8}
                className="transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>

            {/* Secondary Button */}
            <button
              className="
                group
                flex
                h-[56px]
                w-full
                items-center
                justify-center
                rounded-[7px]
                border
                border-white/75
                bg-transparent
                px-6
                text-[14px]
                font-semibold
                text-white
                transition-all
                duration-300
                ease-out
                hover:-translate-y-[2px]
                hover:bg-white/10
                hover:border-white
              "
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>

      {/* =========================
          ANIMATION STYLES
      ========================== */}
      <style>{`
        /*
          Slow grid movement
        */
        .animated-grid {
          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.20) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.20) 1px,
              transparent 1px
            );

          background-size: 40px 40px;

          animation:
            gridMove 24s linear infinite,
            gridPulse 7s ease-in-out infinite;
        }

        /*
          Very subtle grid movement
        */
        @keyframes gridMove {
          0% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(20px, 15px, 0);
          }

          100% {
            transform: translate3d(40px, 30px, 0);
          }
        }

        /*
          Light opacity pulse
        */
        @keyframes gridPulse {
          0%,
          100% {
            opacity: 0.35;
          }

          50% {
            opacity: 0.48;
          }
        }

        /*
          Soft teal background gradient movement
        */
        .animated-gradient {
          background:
            radial-gradient(
              circle at 15% 25%,
              rgba(255, 255, 255, 0.08),
              transparent 35%
            ),
            radial-gradient(
              circle at 85% 75%,
              rgba(0, 100, 98, 0.10),
              transparent 40%
            );

          background-size: 140% 140%;

          animation: gradientShift 18s ease-in-out infinite alternate;
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }

          50% {
            background-position: 100% 40%;
          }

          100% {
            background-position: 20% 60%;
          }
        }

        /*
          Respect reduced-motion settings
        */
        @media (prefers-reduced-motion: reduce) {
          .animated-grid,
          .animated-gradient {
            animation: none;
          }

          * {
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </section>
  );
};

export default PartnerWithCirculogy;