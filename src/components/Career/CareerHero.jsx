import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

function CareerHero() {
  const [visible, setVisible] = useState(false);

 
const [heroRef, setHeroRef] = useState(null);

useEffect(() => {
  if (!heroRef) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setVisible(false);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setVisible(true);
          });
        });
      } else {
        setVisible(false);
      }
    },
    {
      threshold: 0.25,
    }
  );

  observer.observe(heroRef);

  return () => observer.disconnect();
}, [heroRef]);

  return (
    <section ref={setHeroRef} className="career-hero relative min-h-[620px] overflow-hidden bg-[#003d31] text-white">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,rgba(53,169,155,0.18),transparent_32%),linear-gradient(120deg,#004d3c,#002b24)]" />

      {/* Decorative Rings */}

      <div className="career-ring-one absolute -right-[100px] top-[80px] h-[480px] w-[480px] rounded-full border border-[#4aa99a]/20" />

      <div className="career-ring-two absolute -right-[35px] top-[145px] h-[350px] w-[350px] rounded-full border border-[#4aa99a]/15" />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto grid max-w-[1600px] items-center gap-12 px-6 pb-24 pt-16 sm:px-10 lg:grid-cols-2 lg:px-16 lg:pb-28 lg:pt-20 xl:px-[110px]">

        {/* =====================================================
            LEFT CONTENT
        ====================================================== */}

        <div className="max-w-[560px]">

          {/* Label */}

          <p
            className={`career-label mb-5 text-[9px] font-bold uppercase tracking-[1.5px] text-[#62b6aa] ${
              visible ? "is-visible" : ""
            }`}
          >
            CAREERS AT CIRCULOGY
          </p>

          {/* Heading */}

          <h1
            className={`career-heading max-w-[520px] text-[42px] font-semibold leading-[0.95] tracking-[-2px] sm:text-[54px] lg:text-[58px] xl:text-[62px] ${
              visible ? "is-visible" : ""
            }`}
          >
            Let’s Build
            <br />
            Your Career
          </h1>

          {/* Main Description */}

          <p
            className={`career-description mt-6 max-w-[430px] text-[13px] leading-[1.7] text-white/80 ${
              visible ? "is-visible" : ""
            }`}
          >
            Be a part of our mission to build a sustainable future.
          </p>

          {/* Secondary Description */}

          <p
            className={`career-description-secondary mt-3 max-w-[410px] text-[10px] leading-[1.65] text-white/55 ${
              visible ? "is-visible" : ""
            }`}
          >
            Join a team that's building the infrastructure for India's
            circular economy, connecting people, technology and purpose to
            create measurable impact.
          </p>

          {/* =====================================================
              BUTTONS
          ====================================================== */}

          <div
            className={`career-buttons mt-6 flex flex-wrap gap-3 ${
              visible ? "is-visible" : ""
            }`}
          >

            <Link
              to="/jobs"
              className="career-primary-button group flex h-[38px] items-center gap-4 rounded-[4px] bg-white px-4 text-[9px] font-bold text-[#06483b]"
            >
              Explore Opportunities

              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <button
              className="career-secondary-button group flex h-[38px] items-center gap-4 rounded-[4px] border border-white/30 px-4 text-[9px] font-semibold text-white"
            >
              Submit Your CV

              <ArrowUpRight
                size={12}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>

          </div>

          {/* =====================================================
              TAG
          ====================================================== */}

          <div
            className={`career-tag mt-10 inline-flex rounded-full border border-white/15 px-4 py-2 text-[7px] tracking-[1px] text-white/50 ${
              visible ? "is-visible" : ""
            }`}
          >
            PEOPLE&nbsp;&nbsp;—&nbsp;&nbsp;TECHNOLOGY&nbsp;&nbsp;—&nbsp;&nbsp;IMPACT
          </div>

        </div>

        {/* =====================================================
            IMAGE
        ====================================================== */}

        <div
          className={`career-image-wrapper relative flex justify-center lg:justify-end ${
            visible ? "is-visible" : ""
          }`}
        >

          <div className="career-image relative h-[300px] w-full max-w-[500px] overflow-hidden rounded-[18px] border border-white/30 bg-white/80 shadow-2xl sm:h-[350px]">

            <img
              src="/career-hero.jpg"
              alt="Circulogy team"
              className="h-full w-full object-cover opacity-30"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-white/30">

              <p className="text-center text-[16px] font-bold leading-[1.2] text-[#111] sm:text-[18px]">
                Final real image to be
                <br />
                placed here
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
          ANIMATION CSS
      ====================================================== */}

      <style>{`

        .career-hero {
          font-family: inherit;
        }

        /* =====================================================
           TEXT REVEAL
        ====================================================== */

        .career-label,
        .career-heading,
        .career-description,
        .career-description-secondary,
        .career-buttons,
        .career-tag {
          opacity: 0;
          transform: translateY(25px);
        }

        .career-label.is-visible {
          animation: careerFadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1)
            0.05s forwards;
        }

        .career-heading.is-visible {
          animation: careerFadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1)
            0.15s forwards;
        }

        .career-description.is-visible {
          animation: careerFadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1)
            0.3s forwards;
        }

        .career-description-secondary.is-visible {
          animation: careerFadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1)
            0.4s forwards;
        }

        .career-buttons.is-visible {
          animation: careerFadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1)
            0.52s forwards;
        }

        .career-tag.is-visible {
          animation: careerFadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1)
            0.65s forwards;
        }

        /* =====================================================
           IMAGE REVEAL
        ====================================================== */

        .career-image-wrapper {
          opacity: 0;
          transform: translateX(45px) scale(0.96);
        }

        .career-image-wrapper.is-visible {
          animation: careerImageReveal 1.1s cubic-bezier(0.22, 1, 0.36, 1)
            0.3s forwards;
        }

        /* =====================================================
           BACKGROUND RINGS
        ====================================================== */

        .career-ring-one {
          animation: careerRingFloatOne 12s ease-in-out infinite alternate;
        }

        .career-ring-two {
          animation: careerRingFloatTwo 9s ease-in-out infinite alternate;
        }

        /* =====================================================
           BUTTON HOVER
        ====================================================== */

        .career-primary-button {
          transition:
            transform 300ms ease,
            background-color 300ms ease,
            color 300ms ease,
            box-shadow 300ms ease;
        }

        .career-primary-button:hover {
          transform: translateY(-2px);
          background-color: #62b6aa;
          color: white;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }

        .career-secondary-button {
          transition:
            transform 300ms ease,
            border-color 300ms ease,
            color 300ms ease;
        }

        .career-secondary-button:hover {
          transform: translateY(-2px);
          border-color: #62b6aa;
          color: #62b6aa;
        }

        /* =====================================================
           KEYFRAMES
        ====================================================== */

        @keyframes careerFadeUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes careerImageReveal {
          from {
            opacity: 0;
            transform: translateX(45px) scale(0.96);
          }

          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes careerRingFloatOne {
          0% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }

          100% {
            transform: translate3d(-15px, 12px, 0) rotate(8deg);
          }
        }

        @keyframes careerRingFloatTwo {
          0% {
            transform: translate3d(0, 0, 0);
          }

          100% {
            transform: translate3d(12px, -10px, 0);
          }
        }

        /* =====================================================
           MOBILE
        ====================================================== */

        @media (max-width: 1023px) {

          .career-image-wrapper {
            transform: translateY(30px) scale(0.97);
          }

          .career-image-wrapper.is-visible {
            animation: careerMobileImageReveal 1s
              cubic-bezier(0.22, 1, 0.36, 1)
              0.35s forwards;
          }

        }

        @keyframes careerMobileImageReveal {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.97);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* =====================================================
           REDUCED MOTION
        ====================================================== */

        @media (prefers-reduced-motion: reduce) {

          .career-label,
          .career-heading,
          .career-description,
          .career-description-secondary,
          .career-buttons,
          .career-tag,
          .career-image-wrapper {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }

          .career-ring-one,
          .career-ring-two {
            animation: none !important;
          }

        }

      `}</style>

    </section>
  );
}

export default CareerHero;