import React, { useEffect, useRef, useState } from "react";

const dependencyCards = [
  {
    type: "Critical Minerals",
    title: "Battery Supply Chain",
    image: "images/critical-minerals.png",
    stats: [
      {
        value: "~100%",
        text: "of India's Lithium and Cobalt is imported",
      },
      {
        value: "$300B+",
        text: "India's projected EV market by 2030 ",
      },
      {
        value: "10M+ T",
        text: "e-waste generated in India annually by 2030",
      },
    ],
  },
  {
    type: "Rare Earth Elements",
    title: "Magnet Supply Chain",
    image: "images/rare-earth-magnets.png",
    stats: [
      {
        value: "95%",
        text: "of global REE magnet processing is controlled by China.",
      },
      {
        value: "30x",
        text: "growth in REE demand projected by 2040.",
      },
      {
        value: "Zero",
        text: "commercial REE recycling operations in India today.",
      },
    ],
  },
];

export default function ImportDependency() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  /* ================= INTERSECTION ANIMATION ================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset animation first
          setVisible(false);

          // Restart animation
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              setVisible(true);
            });
          });
        } else {
          // Reset when leaving viewport
          setVisible(false);
        }
      },
      {
        threshold: 0.15,
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
      className="w-full overflow-hidden bg-[#fafbf9] px-5 py-14 sm:px-8 sm:py-16 md:px-10 md:py-20 lg:px-12 lg:py-8 xl:px-16"
    >
      <div className="relative mx-auto max-w-[1500px]">

        {/* ================= TOP CONTENT ================= */}
        <div className="mb-8 grid grid-cols-1 gap-8 lg:mb-7 lg:grid-cols-[1.05fr_1fr] lg:gap-12 xl:gap-16">

          {/* LEFT HEADING */}
          <div
            className={`relative ${
              visible
                ? "animate-[fadeUp_0.9s_ease-out_forwards]"
                : "opacity-0"
            }`}
          >
            <p className="mb-2 text-[13px] font-bold tracking-[-0.02em] text-[#119e94] sm:text-[14px] md:text-[15px]">
              India's Import Dependency
            </p>

            <h2 className="max-w-[550px] text-[42px] font-semibold leading-[0.96] tracking-[-0.055em] text-[#080b0b] sm:text-[50px] md:text-[58px] lg:text-[59px] xl:text-[61px]">
              Two strategic
              <br />
              vulnerabilities.
              <br />
              <span className="text-[#17a99f]">One solution.</span>
            </h2>
          </div>

          {/* RIGHT DESCRIPTION */}
          <div
            className={`flex items-end ${
              visible
                ? "animate-[fadeUp_0.9s_ease-out_0.2s_forwards]"
                : "opacity-0"
            }`}
          >
            <p className="max-w-[555px] text-[16px] font-medium leading-[1.18] tracking-[-0.02em] text-[#29383a] sm:text-[17px] md:text-[18px] lg:pb-2 lg:text-[17px] xl:text-[18px]">
              India's clean energy transition rests entirely on two categories
              of materials it almost entirely imports. Critical minerals for
              battery cathodes, and rare earth elements for the permanent
              magnets that power EV motors, wind turbines and defence systems.
            </p>
          </div>
        </div>

        {/* ================= CARDS ================= */}
        <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-2">

          {dependencyCards.map((card, index) => (
            <div
              key={index}
              className={`group relative min-h-[440px] overflow-hidden rounded-[17px] border border-white/80 bg-[#e6f6f4] shadow-[0_4px_20px_rgba(0,70,65,0.04)] transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_22px_50px_rgba(0,80,75,0.15)] sm:min-h-[465px] lg:min-h-[440px] ${
                visible
                  ? "animate-[fadeUp_1s_ease-out_forwards]"
                  : "opacity-0"
              }`}
              style={{
                animationDelay: visible
                  ? `${0.35 + index * 0.18}s`
                  : "0s",
              }}
            >

              {/* ================= BACKGROUND IMAGE ================= */}
              <div className="absolute inset-x-0 bottom-0 h-[30%] overflow-hidden">
                {card.image ? (
                  <img
                    src={card.image}
                    alt=""
                    className="h-full w-full object-cover object-center opacity-90 transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-b from-transparent via-[#d5eeeb]/40 to-[#9bc8c3]/60" />
                )}

                {/* HOVER GLOW */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0eaaa0]/15 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              {/* ================= CARD CONTENT ================= */}
              <div className="relative z-10 p-5 sm:p-6 md:p-7">

                {/* CARD TITLE */}
                <h3 className="mb-4 text-[19px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#101515] sm:text-[20px] md:text-[21px]">
                  <span className="text-[#099e96]">
                    {card.type}
                  </span>{" "}
                  <span className="text-[#111515]">— {card.title}</span>
                </h3>

                {/* ================= STATS ================= */}
                <div className="relative">

                  {card.stats.map((stat, statIndex) => (
                    <div
                      key={statIndex}
                      className="group/stat relative grid grid-cols-[145px_1fr] gap-3 py-2.5 transition-transform duration-500 ease-out group-hover:translate-x-1 sm:grid-cols-[165px_1fr] md:grid-cols-[175px_1fr]"
                    >

                      {/* STAT NUMBER */}
                      <div className="relative flex items-start">
                        <span className="text-[39px] font-semibold leading-[0.95] tracking-[-0.055em] text-[#050707] transition-all duration-500 group-hover/stat:text-[#0a8f87] sm:text-[43px] md:text-[45px]">
                          {stat.value}
                        </span>

                        {/* VERTICAL LINE */}
                        <span className="absolute -right-1 top-0 h-[49px] w-px bg-[#20afa7]/70 transition-all duration-500 group-hover/stat:h-[58px] group-hover/stat:bg-[#079e95]" />
                      </div>

                      {/* DESCRIPTION */}
                      <p className="max-w-[285px] pt-0.5 text-[13px] font-medium leading-[1.2] tracking-[-0.015em] text-[#344346] transition-colors duration-300 group-hover/stat:text-[#182c2e] sm:text-[13.5px] md:text-[14px]">
                        {stat.text}
                      </p>
                    </div>
                  ))}

                </div>
              </div>

              {/* ================= TOP BORDER GLOW ================= */}
              <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#12aaa0] transition-all duration-700 ease-out group-hover:w-full" />

              {/* ================= CORNER GLOW ================= */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#5de0d5]/20 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}