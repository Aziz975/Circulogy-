import React, { useRef, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  UploadCloud,
} from "lucide-react";

const CareerApplication = () => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    if (file) {
      setFileName(file.name);
    }
  };

  const handleBrowse = () => {
    fileInputRef.current?.click();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);

    const file = event.dataTransfer.files?.[0];

    if (file) {
      const validTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      const validExtension = /\.(pdf|doc|docx)$/i.test(file.name);

      if (validTypes.includes(file.type) || validExtension) {
        setFileName(file.name);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <section className="career-page min-h-screen w-full bg-[#f3f8f6] px-0 py-0">
        <div className="career-shell mx-auto flex min-h-screen w-full max-w-[1600px] flex-col lg:flex-row">

          {/* =========================================================
              LEFT PANEL
          ========================================================= */}
          <div className="career-left-panel group relative min-h-[620px] w-full overflow-hidden bg-[#064d48] lg:min-h-screen lg:w-[35%]">

            {/* Background image */}
            <div
              className="career-bg-image absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "url('/images/careers-lab-bg.png')",
              }}
            />

            {/* Image dark overlay */}
            <div className="career-image-overlay absolute inset-0" />

            {/* Blue/teal glow */}
            <div className="career-image-glow absolute inset-0" />

            {/* Animated shine */}
            <div className="career-image-shine absolute inset-y-0 -left-[100%] w-[55%]" />

            {/* Decorative glow orbs */}
            <div className="career-orb career-orb-one" />
            <div className="career-orb career-orb-two" />
            <div className="career-orb career-orb-three" />

            {/* Grid texture */}
            <div className="career-grid absolute inset-0" />

            {/* Content */}
            <div className="relative z-10 flex min-h-[620px] flex-col px-7 py-10 sm:px-10 sm:py-12 md:px-12 lg:min-h-screen lg:px-[11%] lg:py-[9%]">

              {/* Eyebrow */}
              <div className="career-fade career-delay-1">
                <span className="text-[11px] font-semibold tracking-[0.2em] text-[#75c8bd] sm:text-[12px]">
                  START A CONVERSATION
                </span>
              </div>

              {/* Heading */}
              <h1 className="career-heading career-fade career-delay-2 mt-9 max-w-[390px] text-[44px] font-bold leading-[0.98] tracking-[-0.045em] text-white sm:mt-11 sm:text-[50px] md:text-[56px] lg:mt-10 lg:text-[52px] xl:text-[58px]">
                Ready to
                <span className="block">Make an</span>
                <span className="career-heading-accent block text-[#70d1c4]">
                  Impact?
                </span>
              </h1>

              {/* Description */}
              <p className="career-fade career-delay-3 mt-9 max-w-[340px] text-[14px] font-normal leading-[1.65] tracking-[0.005em] text-[#c3dad6] sm:mt-10 sm:text-[15px]">
                Tell us where you see yourself contributing to
                the circular movement. We’re always looking for
                curious minds who want to build a cleaner, more
                sustainable India.
              </p>

              {/* Divider */}
              <div className="career-divider career-fade career-delay-4 mt-7 h-px w-full max-w-[275px]" />

              {/* Meta */}
              <span className="career-fade career-delay-4 mt-4 text-[9px] font-bold tracking-[0.22em] text-[#83bbb5] sm:text-[10px]">
                PEOPLE · TECHNOLOGY · IMPACT
              </span>

              {/* Lower label */}
              <div className="mt-auto pt-20">
                <div className="career-bottom-label career-fade career-delay-5">
                  <p className="max-w-[125px] text-[8px] font-bold uppercase leading-[1.6] tracking-[0.22em] text-white/90">
                    THE NEXT CYCLE
                    <br />
                    STARTS WITH
                    <br />
                    PEOPLE
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================
              RIGHT PANEL
          ========================================================= */}
          <div className="career-right-panel flex w-full items-center justify-center bg-[#f4f9f7] px-4 py-8 sm:px-7 sm:py-10 md:px-10 lg:w-[65%] lg:px-[4%] lg:py-10">

            {/* Form Card */}
            <div className="career-form-card w-full max-w-[900px] rounded-[22px] border border-[#dce9e5] bg-white px-6 py-7 shadow-[0_18px_50px_rgba(27,78,70,0.10)] sm:rounded-[25px] sm:px-8 sm:py-8 md:px-9 md:py-9 lg:px-8 lg:py-7 xl:px-9 xl:py-8">

              {/* Top label */}
              <div className="career-form-header mb-6 flex justify-end">
                <span className="text-[11px] font-semibold tracking-[0.2em] text-[#86a19c] sm:text-[10px]">
                  A CLEANER · BRIGHTER · TOMORROW
                </span>
              </div>

              {/* Form */}
              <form
                className="w-full"
                onSubmit={handleSubmit}
              >

                {/* =====================================================
                    ROW 1
                ===================================================== */}
                <div className="career-form-row career-row-1 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5">

                  <div>
                    <label className="mb-2 block text-[11px] font-semibold text-[#1c302d]">
                      FIRST NAME
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your first name"
                      className="career-input h-[45px] w-full rounded-[8px] border border-[#d7e5e1] bg-white px-3 text-[12px] text-[#314541] outline-none transition-all placeholder:text-[#82928e] focus:border-[#299f8f] focus:ring-2 focus:ring-[#299f8f]/10 sm:h-[47px]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[11px] font-semibold text-[#1c302d]">
                      LAST NAME
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your last name"
                      className="career-input h-[45px] w-full rounded-[8px] border border-[#d7e5e1] bg-white px-3 text-[10px] text-[#314541] outline-none transition-all placeholder:text-[#82928e] focus:border-[#299f8f] focus:ring-2 focus:ring-[#299f8f]/10 sm:h-[47px] sm:text-[12px]"
                    />
                  </div>
                </div>

                {/* =====================================================
                    ROW 2
                ===================================================== */}
                <div className="career-form-row career-row-2 mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5">

                  <div>
                    <label className="mb-2 block text-[11px] font-semibold text-[#1c302d]">
                      EMAIL
                    </label>

                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="career-input h-[45px] w-full rounded-[8px] border border-[#d7e5e1] bg-white px-3 text-[10px] text-[#314541] outline-none transition-all placeholder:text-[#82928e] focus:border-[#299f8f] focus:ring-2 focus:ring-[#299f8f]/10 sm:h-[47px] sm:text-[12px]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[11px] font-semibold text-[#1c302d]">
                      POSITION APPLYING FOR
                    </label>

                    <div className="relative">
                      <select className="career-input h-[45px] w-full appearance-none rounded-[8px] border border-[#d7e5e1] bg-white px-3 pr-9 text-[10px] text-[#82928e] outline-none transition-all focus:border-[#299f8f] focus:ring-2 focus:ring-[#299f8f]/10 sm:h-[47px] sm:text-[12px]">
                        <option value="">
                          Select a position
                        </option>

                        <option>
                          Business Development
                        </option>

                        <option>
                          Executive Assistant
                        </option>

                        <option>
                          Public Relation
                        </option>

                        <option>
                          Equity / Capital Raising Specialist
                        </option>

                        <option>
                          Sr. Manager / Manager
                        </option>

                        <option>
                          Partner Onboarding Executive
                        </option>
                      </select>

                      <ChevronDown
                        size={16}
                        strokeWidth={1.6}
                        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#173c38]"
                      />
                    </div>
                  </div>
                </div>

                {/* =====================================================
                    ROW 3
                ===================================================== */}
                <div className="career-form-row career-row-3 mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5">

                  <div>
                    <label className="mb-2 block text-[11px] font-semibold text-[#1c302d]">
                      WHERE DID YOU KNOW ABOUT US?
                    </label>

                    <input
                      type="text"
                      placeholder="e.g. LinkedIn, referral, website"
                      className="career-input h-[45px] w-full rounded-[8px] border border-[#d7e5e1] bg-white px-3 text-[10px] text-[#314541] outline-none transition-all placeholder:text-[#82928e] focus:border-[#299f8f] focus:ring-2 focus:ring-[#299f8f]/10 sm:h-[47px] sm:text-[12px]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[12px] font-semibold text-[#1c302d]">
                      DATE OF BIRTH
                    </label>

                    <div className="relative">
                      <input
                        type="date"
                        className="career-input h-[45px] w-full rounded-[8px] border border-[#d7e5e1] bg-white px-3 text-[10px] text-[#82928e] outline-none transition-all focus:border-[#299f8f] focus:ring-2 focus:ring-[#299f8f]/10 sm:h-[47px] sm:text-[11px]"
                      />

                      <CalendarDays
                        size={15}
                        strokeWidth={1.5}
                        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#31504b]"
                      />
                    </div>
                  </div>
                </div>

                {/* =====================================================
                    UPLOAD
                ===================================================== */}
                <div className="career-upload-section mt-6">

                  <label className="mb-2 block text-[11px] font-semibold text-[#1c302d]">
                    UPLOAD CV
                  </label>

                  <div
                    onClick={handleBrowse}
                    onDragOver={(event) => {
                      event.preventDefault();
                      setIsDragging(true);
                    }}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={handleDrop}
                    className={`career-upload group flex min-h-[125px] cursor-pointer flex-col items-center justify-center rounded-[12px] border-[1.5px] border-dashed px-5 transition-all duration-300 sm:min-h-[130px] ${
                      isDragging
                        ? "border-[#299f8f] bg-[#e8f7f3] shadow-[0_0_30px_rgba(41,159,143,0.15)]"
                        : "border-[#a9d5cd] bg-[#f5faf8]"
                    }`}
                  >

                    <div className="career-upload-icon">
                      <UploadCloud
                        size={57}
                        strokeWidth={1.4}
                        className="text-[#008c82]"
                      />
                    </div>

                    {fileName ? (
                      <span className="mt-2 max-w-full truncate text-[11px] font-medium text-[#087d78]">
                        {fileName}
                      </span>
                    ) : (
                      <>
                        <span className="mt-1 text-[11px] font-semibold text-[#284c48] sm:text-[13px]">
                          Drop your CV here
                        </span>

                        <span className="mt-1 text-[11px] text-[#899d99]">
                          PDF, DOC or DOCX
                        </span>
                      </>
                    )}

                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        handleBrowse();
                      }}
                      className="career-browse-button mt-2 rounded-[7px] border border-[#d2e3df] bg-white px-4 py-2 text-[11px] font-semibold text-[#3a5550] transition-all"
                    >
                      Browse Files
                    </button>

                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </div>
                </div>

                {/* =====================================================
                    BOTTOM
                ===================================================== */}
                <div className="career-bottom mt-6 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-5">

                  <p className="max-w-[490px] text-[11px] font-normal leading-[1.55] text-[#71827e]">
                    By submitting, you agree that Circulogy may use your
                    information to review and respond to your application.
                  </p>

                  <button
                    type="submit"
                    className="career-submit group flex h-[45px] shrink-0 items-center justify-center gap-7 rounded-full bg-[#169d90] px-6 text-[11px] font-semibold text-white"
                  >
                    <span>Apply Now</span>

                    <ArrowRight
                      size={18}
                      strokeWidth={1.5}
                      className="career-submit-arrow transition-transform duration-300"
                    />
                  </button>
                </div>
              </form>

              {/* =====================================================
                  FOOTER
              ===================================================== */}
              <div className="career-form-footer mt-6 flex items-center justify-between border-t border-[#e1ebe8] pt-4">
                <span className="text-[10px] font-bold tracking-[0.18em] text-[#9aada9]">
                  CIRCULOGY CAREERS
                </span>

                <span className="text-[10px] font-bold tracking-[0.18em] text-[#9aada9]">
                  PEOPLE — TECHNOLOGY — IMPACT
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===============================================================
          PAGE ANIMATION / CUSTOM CSS
      =============================================================== */}
      <style>{`

        /* ============================================================
           BASE
        ============================================================ */

        .career-page {
          position: relative;
          overflow: hidden;
        }

        .career-shell {
          animation: pageReveal 1s cubic-bezier(.16,1,.3,1) both;
        }

        @keyframes pageReveal {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }


        /* ============================================================
           LEFT IMAGE
        ============================================================ */

        .career-left-panel {
          isolation: isolate;
        }

        .career-bg-image {
          transform: scale(1.04);
          transition:
            transform 1.2s cubic-bezier(.16,1,.3,1),
            filter 0.8s ease;
          filter: saturate(.8) contrast(1.02);
        }

        .career-left-panel:hover .career-bg-image {
          transform: scale(1.105);
          filter: saturate(1.08) contrast(1.05);
        }


        /* Dark teal overlay */

        .career-image-overlay {
          z-index: 1;

          background:
            linear-gradient(
              180deg,
              rgba(3,78,73,.96) 0%,
              rgba(3,78,73,.89) 42%,
              rgba(2,57,53,.68) 70%,
              rgba(1,40,38,.58) 100%
            );

          transition:
            background .8s ease,
            opacity .8s ease;
        }

        .career-left-panel:hover .career-image-overlay {
          background:
            linear-gradient(
              180deg,
              rgba(3,78,73,.90) 0%,
              rgba(3,78,73,.82) 42%,
              rgba(2,57,53,.55) 70%,
              rgba(1,40,38,.42) 100%
            );
        }


        /* Main image glow */

        .career-image-glow {
          z-index: 2;
          pointer-events: none;

          opacity: .25;

          background:
            radial-gradient(
              circle at 50% 45%,
              rgba(43,220,201,.30),
              transparent 35%
            );

          mix-blend-mode: screen;

          transition:
            opacity .8s ease,
            transform 1s ease;
        }

        .career-left-panel:hover .career-image-glow {
          opacity: .72;
          transform: scale(1.08);
        }


        /* Moving light */

        .career-image-shine {
          z-index: 4;

          pointer-events: none;

          background:
            linear-gradient(
              100deg,
              transparent 0%,
              rgba(255,255,255,.04) 35%,
              rgba(104,240,226,.22) 50%,
              rgba(255,255,255,.04) 65%,
              transparent 100%
            );

          transform: skewX(-18deg);

          opacity: 0;
        }

        .career-left-panel:hover .career-image-shine {
          animation: imageShine 1.15s cubic-bezier(.16,1,.3,1);
        }

        @keyframes imageShine {
          0% {
            left: -100%;
            opacity: 0;
          }

          20% {
            opacity: 1;
          }

          100% {
            left: 150%;
            opacity: 0;
          }
        }


        /* ============================================================
           LEFT DECORATIVE ORBS
        ============================================================ */

        .career-orb {
          position: absolute;

          z-index: 3;

          border-radius: 999px;

          pointer-events: none;

          filter: blur(1px);

          opacity: .35;

          transition:
            transform 1s cubic-bezier(.16,1,.3,1),
            opacity .7s ease;
        }

        .career-orb-one {
          width: 190px;
          height: 190px;

          top: 12%;
          right: -110px;

          background:
            radial-gradient(
              circle,
              rgba(81,228,211,.34),
              rgba(20,142,132,.04) 65%,
              transparent 70%
            );

          animation: orbFloatOne 7s ease-in-out infinite;
        }

        .career-orb-two {
          width: 120px;
          height: 120px;

          left: -60px;
          bottom: 18%;

          background:
            radial-gradient(
              circle,
              rgba(44,180,255,.30),
              transparent 70%
            );

          animation: orbFloatTwo 8s ease-in-out infinite;
        }

        .career-orb-three {
          width: 70px;
          height: 70px;

          right: 18%;
          bottom: 8%;

          background:
            radial-gradient(
              circle,
              rgba(113,239,222,.28),
              transparent 70%
            );

          animation: orbFloatThree 5s ease-in-out infinite;
        }

        .career-left-panel:hover .career-orb {
          opacity: .7;
        }

        @keyframes orbFloatOne {
          0%,
          100% {
            transform: translate3d(0,0,0);
          }

          50% {
            transform: translate3d(-25px,20px,0);
          }
        }

        @keyframes orbFloatTwo {
          0%,
          100% {
            transform: translate3d(0,0,0);
          }

          50% {
            transform: translate3d(25px,-30px,0);
          }
        }

        @keyframes orbFloatThree {
          0%,
          100% {
            transform: translate3d(0,0,0) scale(1);
          }

          50% {
            transform: translate3d(-15px,-20px,0) scale(1.15);
          }
        }


        /* ============================================================
           GRID TEXTURE
        ============================================================ */

        .career-grid {
          z-index: 2;

          pointer-events: none;

          opacity: .07;

          background-image:
            linear-gradient(
              rgba(255,255,255,.18) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,.18) 1px,
              transparent 1px
            );

          background-size: 55px 55px;

          mask-image:
            linear-gradient(
              to bottom,
              transparent,
              black 30%,
              black 70%,
              transparent
            );

          animation: gridMove 18s linear infinite;
        }

        @keyframes gridMove {
          from {
            background-position: 0 0;
          }

          to {
            background-position: 55px 55px;
          }
        }


        /* ============================================================
           LEFT CONTENT ANIMATION
        ============================================================ */

        .career-fade {
          opacity: 0;

          transform:
            translateY(25px);

          animation:
            contentReveal .9s cubic-bezier(.16,1,.3,1)
            forwards;
        }

        .career-delay-1 {
          animation-delay: .15s;
        }

        .career-delay-2 {
          animation-delay: .27s;
        }

        .career-delay-3 {
          animation-delay: .39s;
        }

        .career-delay-4 {
          animation-delay: .51s;
        }

        .career-delay-5 {
          animation-delay: .63s;
        }

        @keyframes contentReveal {
          from {
            opacity: 0;
            transform:
              translateY(28px);
          }

          to {
            opacity: 1;
            transform:
              translateY(0);
          }
        }


        /* Heading */

        .career-heading {
          transform-origin: left center;
        }

        .career-heading-accent {
          transition:
            color .4s ease,
            text-shadow .4s ease;
        }

        .career-left-panel:hover .career-heading-accent {
          color: #8be4d8;
          text-shadow:
            0 0 25px rgba(101,232,216,.25);
        }


        /* Divider */

        .career-divider {
          background:
            linear-gradient(
              90deg,
              rgba(109,163,158,.75),
              rgba(109,163,158,.05)
            );

          transform-origin: left;
          animation:
            dividerReveal 1s .65s cubic-bezier(.16,1,.3,1)
            both;
        }

        @keyframes dividerReveal {
          from {
            opacity: 0;
            transform: scaleX(0);
          }

          to {
            opacity: 1;
            transform: scaleX(1);
          }
        }


        /* ============================================================
           RIGHT PANEL / FORM CARD
        ============================================================ */

        .career-right-panel {
          position: relative;
        }

        .career-right-panel::before {
          content: "";

          position: absolute;

          width: 420px;
          height: 420px;

          top: 5%;
          right: -180px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(41,159,143,.10),
              transparent 68%
            );

          pointer-events: none;

          animation: rightGlow 8s ease-in-out infinite;
        }

        @keyframes rightGlow {
          0%,
          100% {
            transform: translate(0,0);
          }

          50% {
            transform: translate(-35px,35px);
          }
        }

        .career-form-card {
          position: relative;
          z-index: 5;

          opacity: 0;

          transform:
            translateX(55px)
            translateY(15px)
            scale(.985);

          animation:
            formCardReveal 1s .18s cubic-bezier(.16,1,.3,1)
            forwards;

          transition:
            box-shadow .5s ease,
            transform .5s ease;
        }

        .career-form-card:hover {
          box-shadow:
            0 22px 65px rgba(27,78,70,.13);
        }

        @keyframes formCardReveal {
          from {
            opacity: 0;

            transform:
              translateX(55px)
              translateY(15px)
              scale(.985);
          }

          to {
            opacity: 1;

            transform:
              translateX(0)
              translateY(0)
              scale(1);
          }
        }


        /* ============================================================
           FORM HEADER
        ============================================================ */

        .career-form-header {
          opacity: 0;

          animation:
            fadeUp .7s .55s cubic-bezier(.16,1,.3,1)
            forwards;
        }


        /* ============================================================
           FORM ROW STAGGER
        ============================================================ */

        .career-form-row {
          opacity: 0;

          transform:
            translateY(18px);

          animation:
            formRowReveal .65s cubic-bezier(.16,1,.3,1)
            forwards;
        }

        .career-row-1 {
          animation-delay: .62s;
        }

        .career-row-2 {
          animation-delay: .72s;
        }

        .career-row-3 {
          animation-delay: .82s;
        }

        @keyframes formRowReveal {
          from {
            opacity: 0;

            transform:
              translateY(18px);
          }

          to {
            opacity: 1;

            transform:
              translateY(0);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }


        /* ============================================================
           INPUTS
        ============================================================ */

        .career-input {
          transition:
            border-color .25s ease,
            box-shadow .25s ease,
            transform .25s ease,
            background .25s ease;
        }

        .career-input:hover {
          border-color: #b7d6d0;
          background: #fcfefd;
        }

        .career-input:focus {
          transform: translateY(-1px);

          box-shadow:
            0 0 0 3px rgba(41,159,143,.08),
            0 7px 20px rgba(41,159,143,.06);
        }


        /* ============================================================
           UPLOAD
        ============================================================ */

        .career-upload-section {
          opacity: 0;

          transform: translateY(18px);

          animation:
            formRowReveal .7s .94s cubic-bezier(.16,1,.3,1)
            forwards;
        }

        .career-upload {
          position: relative;
          overflow: hidden;

          transition:
            transform .35s cubic-bezier(.16,1,.3,1),
            border-color .35s ease,
            background .35s ease,
            box-shadow .35s ease;
        }

        .career-upload::before {
          content: "";

          position: absolute;

          top: 0;
          left: -120%;

          width: 70%;
          height: 100%;

          transform: skewX(-20deg);

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(255,255,255,.55),
              transparent
            );

          transition: left .7s ease;

          pointer-events: none;
        }

        .career-upload:hover {
          transform: translateY(-3px);

          border-color: #299f8f;

          background: #edf8f5;

          box-shadow:
            0 12px 30px rgba(41,159,143,.08);
        }

        .career-upload:hover::before {
          left: 150%;
        }


        /* Upload icon */

        .career-upload-icon {
          transition:
            transform .4s cubic-bezier(.16,1,.3,1),
            filter .4s ease;
        }

        .career-upload:hover .career-upload-icon {
          transform:
            translateY(-5px)
            scale(1.05);

          filter:
            drop-shadow(
              0 7px 10px
              rgba(0,140,130,.20)
            );
        }


        /* Browse button */

        .career-browse-button {
          position: relative;
          z-index: 2;

          transition:
            transform .25s ease,
            border-color .25s ease,
            color .25s ease,
            box-shadow .25s ease;
        }

        .career-browse-button:hover {
          transform: translateY(-2px);

          border-color: #299f8f;

          color: #087d78;

          box-shadow:
            0 6px 15px rgba(41,159,143,.10);
        }


        /* ============================================================
           BOTTOM SECTION
        ============================================================ */

        .career-bottom {
          opacity: 0;

          transform: translateY(18px);

          animation:
            formRowReveal .7s 1.05s cubic-bezier(.16,1,.3,1)
            forwards;
        }


        /* ============================================================
           SUBMIT BUTTON
        ============================================================ */

        .career-submit {
          position: relative;

          overflow: hidden;

          transition:
            transform .3s cubic-bezier(.16,1,.3,1),
            background .3s ease,
            box-shadow .3s ease;
        }

        .career-submit::before {
          content: "";

          position: absolute;

          top: 0;
          left: -120%;

          width: 70%;
          height: 100%;

          transform: skewX(-20deg);

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(255,255,255,.25),
              transparent
            );

          transition: left .7s ease;
        }

        .career-submit:hover {
          transform: translateY(-3px);

          background: #0c887d;

          box-shadow:
            0 10px 28px rgba(22,157,144,.25);
        }

        .career-submit:hover::before {
          left: 150%;
        }

        .career-submit-arrow {
          position: relative;
          z-index: 2;
        }

        .career-submit:hover .career-submit-arrow {
          transform: translateX(5px);
        }


        /* ============================================================
           FOOTER
        ============================================================ */

        .career-form-footer {
          opacity: 0;

          animation:
            fadeUp .7s 1.15s cubic-bezier(.16,1,.3,1)
            forwards;
        }


        /* ============================================================
           MOBILE
        ============================================================ */

        @media (max-width: 1024px) {
          .career-left-panel {
            min-height: 620px;
          }

          .career-bg-image {
            transform: scale(1.02);
          }

          .career-form-card {
            animation-delay: .1s;
          }
        }


        @media (max-width: 640px) {
          .career-left-panel {
            min-height: 650px;
          }

          .career-orb-one {
            right: -150px;
          }

          .career-form-card {
            border-radius: 18px;
          }

          .career-form-footer {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }

          .career-image-shine {
            display: none;
          }
        }


        /* ============================================================
           ACCESSIBILITY
        ============================================================ */

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
          }

          .career-bg-image,
          .career-form-card,
          .career-fade,
          .career-form-row,
          .career-upload-section,
          .career-bottom,
          .career-form-header,
          .career-form-footer {
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default CareerApplication;