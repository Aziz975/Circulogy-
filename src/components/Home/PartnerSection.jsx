import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

const partners = [
  { id: 1, name: "Partner 1", image: "/images/partner1.png" },
  { id: 2, name: "Partner 2", image: "/images/partner2.png" },
  { id: 3, name: "Partner 3", image: "/images/partner3.png" },
  { id: 4, name: "Partner 4", image: "/images/partner4.png" },
  { id: 5, name: "Partner 5", image: "/images/partner5.png" },
  { id: 6, name: "Partner 6", image: "/images/partner6.png" },
  { id: 7, name: "Partner 7", image: "/images/partner7.png" },
  { id: 8, name: "Partner 8", image: "/images/partner8.png" },
  { id: 9, name: "Partner 9", image: "/images/partner9.png" },
  { id: 10, name: "Partner 10", image: "/images/partner10.png" },
  { id: 11, name: "Partner 11", image: "/images/partner11.png" },
  { id: 12, name: "Partner 12", image: "/images/partner12.png" },
];

const PartnersSection = () => {
  const [activeIndex, setActiveIndex] = useState(4);

  const total = partners.length;

  const normalizeIndex = (index) => {
    return (index + total) % total;
  };

  const nextSlide = () => {
    setActiveIndex((current) => normalizeIndex(current + 1));
  };

  const previousSlide = () => {
    setActiveIndex((current) => normalizeIndex(current - 1));
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const getRelativePosition = (index) => {
    let position = index - activeIndex;

    if (position > total / 2) {
      position -= total;
    }

    if (position < -total / 2) {
      position += total;
    }

    return position;
  };

  return (
    <section className="w-full overflow-hidden bg-[#f7f6f2] px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14 lg:px-12 lg:py-16 xl:px-16">
      <div className="mx-auto w-full max-w-[1500px]">

        {/* HEADING */}

        <div className="max-w-[780px]">
          <h2 className="text-[38px] font-medium leading-[0.98] tracking-[-0.045em] text-[#111111] sm:text-[46px] md:text-[54px] lg:text-[58px] xl:text-[60px]">
            Stronger Together.
          </h2>

          <h2 className="mt-1 text-[38px] font-medium leading-[0.98] tracking-[-0.045em] text-[#249d94] sm:text-[46px] md:text-[54px] lg:text-[58px] xl:text-[60px]">
            Building the Circular Future.
          </h2>

          <p className="mt-6 max-w-[650px] text-[14px] font-normal leading-[1.6] tracking-[-0.01em] text-[#777773] sm:mt-7 sm:text-[15px] md:mt-8 md:text-[16px] lg:text-[17px]">
            We collaborate with forward-thinking organizations, industry leaders, and innovation partners to close loops, unlock value, and create lasting impact across the circular economy.
          </p>
        </div>

        {/* CAROUSEL */}

        <div className="relative mt-12 w-full sm:mt-14 md:mt-16 lg:mt-[70px]">

          <div className="relative h-[230px] w-full overflow-visible sm:h-[260px] md:h-[285px] lg:h-[330px] xl:h-[350px]">

            {/* LEFT ARROW */}

            <button type="button" onClick={previousSlide} aria-label="Previous partner" className="absolute left-0 top-1/2 z-[100] flex h-[44px] w-[44px] -translate-y-1/2 items-center justify-center rounded-full bg-[#696969] text-white shadow-[0_8px_20px_rgba(0,0,0,0.10)] transition-all duration-300 hover:scale-105 hover:bg-[#555555] active:scale-95 sm:h-[48px] sm:w-[48px] md:h-[50px] md:w-[50px]">
              <ChevronLeft className="h-[22px] w-[22px] sm:h-[24px] sm:w-[24px]" strokeWidth={1.8} />
            </button>

            {/* RIGHT ARROW */}

            <button type="button" onClick={nextSlide} aria-label="Next partner" className="absolute right-0 top-1/2 z-[100] flex h-[44px] w-[44px] -translate-y-1/2 items-center justify-center rounded-full bg-[#c6c6c3] text-white shadow-[0_8px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:scale-105 hover:bg-[#aeadab] active:scale-95 sm:h-[48px] sm:w-[48px] md:h-[50px] md:w-[50px]">
              <ChevronRight className="h-[22px] w-[22px] sm:h-[24px] sm:w-[24px]" strokeWidth={1.8} />
            </button>

            {/* =====================================================
                DESKTOP
                5 CIRCLES
            ====================================================== */}

          <div className="absolute inset-0 hidden items-center justify-center lg:flex">
  {partners.map((partner, index) => {
    const position = getRelativePosition(index);

    if (Math.abs(position) > 2) {
      return null;
    }

    const isCenter = position === 0;

    let translateX = 0;
    let zIndex = 10;
    let opacity = 0.65;
    let scale = 1;

    if (position === -2) {
      translateX = -390;
      zIndex = 10;
      opacity = 0.55;
      scale = 0.94;
    }

    if (position === -1) {
      translateX = -195;
      zIndex = 20;
      opacity = 0.78;
      scale = 0.97;
    }

    if (position === 0) {
      translateX = 0;
      zIndex = 50;
      opacity = 1;
      scale = 1;
    }

    if (position === 1) {
      translateX = 195;
      zIndex = 20;
      opacity = 0.78;
      scale = 0.97;
    }

    if (position === 2) {
      translateX = 390;
      zIndex = 10;
      opacity = 0.55;
      scale = 0.94;
    }

    return (
      <button
        key={partner.id}
        type="button"
        onClick={() => goToSlide(index)}
        aria-label={`Select ${partner.name}`}
        className="group absolute left-1/2 top-1/2 outline-none"
        style={{
          transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${scale})`,
          zIndex,
          opacity,
          transition: "transform 650ms cubic-bezier(0.22,1,0.36,1), opacity 500ms ease",
        }}
      >
        <div className={`relative flex items-center justify-center overflow-hidden rounded-full bg-white transition-all duration-400 ease-out ${isCenter ? "h-[200px] w-[200px] border-[2px] border-[#83d2ca] shadow-[0_18px_45px_rgba(36,157,148,0.16)] xl:h-[205px] xl:w-[205px]" : "h-[145px] w-[145px] border-[2px] border-[#d8ebe8] xl:h-[150px] xl:w-[150px]"} group-hover:border-[#69c9c0] group-hover:shadow-[0_0_0_5px_rgba(36,157,148,0.06),0_0_35px_rgba(36,157,148,0.28),0_18px_45px_rgba(36,157,148,0.16)]`}>
          
          {isCenter && (
            <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(46,174,163,0.10)_0%,rgba(46,174,163,0.03)_45%,transparent_72%)] transition-all duration-500 group-hover:bg-[radial-gradient(circle,rgba(46,174,163,0.18)_0%,rgba(46,174,163,0.06)_48%,transparent_75%)]" />
          )}

          <img
            src={partner.image}
            alt={partner.name}
            draggable="false"
            className={`relative z-10 object-contain transition-transform duration-500 ease-out group-hover:scale-[1.04] ${isCenter ? "h-[72%] w-[72%]" : "h-[64%] w-[64%]"}`}
          />

        </div>
      </button>
    );
  })}
</div>
            {/* =====================================================
                TABLET
                3 CIRCLES
            ====================================================== */}

            <div className="absolute inset-0 hidden items-center justify-center sm:flex lg:hidden">
              {partners.map((partner, index) => {
                const position = getRelativePosition(index);

                if (Math.abs(position) > 1) {
                  return null;
                }

                const isCenter = position === 0;

                let translateX = 0;
                let zIndex = 10;
                let opacity = 0.65;
                let scale = 1;

                if (position === -1) {
                  translateX = -170;
                  zIndex = 20;
                  opacity = 0.75;
                  scale = 0.95;
                }

                if (position === 0) {
                  translateX = 0;
                  zIndex = 50;
                  opacity = 1;
                  scale = 1;
                }

                if (position === 1) {
                  translateX = 170;
                  zIndex = 20;
                  opacity = 0.75;
                  scale = 0.95;
                }

                return (
                  <button key={partner.id} type="button" onClick={() => goToSlide(index)} aria-label={`Select ${partner.name}`} className="absolute left-1/2 top-1/2 outline-none" style={{ transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${scale})`, zIndex, opacity, transition: "transform 650ms cubic-bezier(0.22,1,0.36,1), opacity 500ms ease" }}>
                    <div className={`relative flex items-center justify-center overflow-hidden rounded-full bg-white ${isCenter ? "h-[185px] w-[185px] border-[2px] border-[#83d2ca] shadow-[0_15px_40px_rgba(36,157,148,0.15)]" : "h-[140px] w-[140px] border-[2px] border-[#d8ebe8]"}`}>

                      {isCenter && <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(46,174,163,0.10)_0%,rgba(46,174,163,0.03)_45%,transparent_72%)]" />}

                      <img src={partner.image} alt={partner.name} draggable="false" className="h-[65%] w-[65%] object-contain" />

                    </div>
                  </button>
                );
              })}
            </div>

            {/* =====================================================
                MOBILE
                3 CIRCLES
            ====================================================== */}

          <div className="absolute inset-0 flex items-center justify-center sm:hidden">
  {partners.map((partner, index) => {
    const position = getRelativePosition(index);

    if (Math.abs(position) > 1) {
      return null;
    }

    const isCenter = position === 0;

    let translateX = 0;
    let zIndex = 10;
    let opacity = 0.60;
    let scale = 0.9;

    if (position === -1) {
      translateX = -140;
      zIndex = 20;
      opacity = 0.70;
      scale = 0.92;
    }

    if (position === 0) {
      translateX = 0;
      zIndex = 50;
      opacity = 1;
      scale = 1;
    }

    if (position === 1) {
      translateX = 140;
      zIndex = 20;
      opacity = 0.70;
      scale = 0.92;
    }

    return (
      <motion.button
        key={partner.id}
        type="button"
        onClick={() => goToSlide(index)}
        aria-label={`Select ${partner.name}`}
        className="absolute left-1/2 top-1/2 outline-none"
        initial={false}
        animate={{
          x: translateX,
          scale,
          opacity,
        }}
        whileHover={{
          scale: isCenter ? 1.06 : 1.02,
          y: -5,
          opacity: 1,
        }}
        whileTap={{
          scale: isCenter ? 1.02 : 0.98,
        }}
        transition={{
          x: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          },
          scale: {
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          },
          opacity: {
            duration: 0.35,
            ease: "easeOut",
          },
          y: {
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
          },
        }}
        style={{
          translateX: "-50%",
          translateY: "-50%",
          zIndex,
        }}
      >
        <motion.div
          className={`relative flex items-center justify-center overflow-hidden rounded-full bg-white ${
            isCenter
              ? "h-[150px] w-[150px] border-[2px] border-[#83d2ca]"
              : "h-[100px] w-[100px] border-[2px] border-[#d8ebe8]"
          }`}
          animate={{
            boxShadow: isCenter
              ? "0 14px 35px rgba(36,157,148,0.15)"
              : "0 8px 22px rgba(36,157,148,0.04)",
          }}
          whileHover={{
            borderColor: "#63c8be",
            boxShadow: isCenter
              ? "0 0 0 5px rgba(36,157,148,0.08), 0 0 45px rgba(36,157,148,0.30), 0 16px 40px rgba(36,157,148,0.18)"
              : "0 0 0 4px rgba(36,157,148,0.07), 0 0 30px rgba(36,157,148,0.24), 0 12px 30px rgba(36,157,148,0.12)",
          }}
          transition={{
            duration: 0.35,
            ease: "easeOut",
          }}
        >
          {isCenter && (
            <motion.div
              className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(46,174,163,0.10)_0%,rgba(46,174,163,0.03)_45%,transparent_72%)]"
              whileHover={{
                opacity: 1,
                scale: 1.08,
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
            />
          )}

          <motion.img
            src={partner.image}
            alt={partner.name}
            draggable="false"
            className="relative z-10 h-[65%] w-[65%] object-contain"
            whileHover={{
              scale: 1.06,
            }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </motion.div>
      </motion.button>
    );
  })}
</div>
          </div>

          {/* DOTS */}

          <div className="mt-3 flex items-center justify-center gap-[7px] sm:mt-4">
            {partners.map((partner, index) => (
              <button key={partner.id} type="button" onClick={() => goToSlide(index)} aria-label={`Go to ${partner.name}`} className={`h-[7px] rounded-full transition-all duration-300 ${index === activeIndex ? "w-[24px] bg-[#249d8d]" : "w-[7px] bg-[#d3d3d0]"}`} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default PartnersSection;