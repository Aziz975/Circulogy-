import React, { useEffect, useRef, useState } from "react";

const values = [
  "Value",
  "Transparency",
  "Trust",
  "Collaboration",
  "Circularity",
];

export default function WhyCirculogy() {
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
      className="relative w-full overflow-hidden bg-[#f8fbfa] px-6 py-24 sm:px-10 lg:px-[5.5%] lg:py-32"
    >
      {/* Background circles */}
      <div className="pointer-events-none absolute right-[-30px] top-[-30px] h-[260px] w-[260px] rounded-full border border-[#dcebe8] opacity-70 sm:right-5 sm:top-[-20px]">
        <div className="absolute left-1/2 top-1/2 h-[125px] w-[125px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#dcebe8]" />

        <div className="absolute left-1/2 top-1/2 h-[80px] w-[80px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#dcebe8]" />
      </div>

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* LEFT SIDE */}
        <div>
          {/* Label */}
          <div
            className={`transform transition-all duration-[1000ms] ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#174f4b] sm:text-[11px]">
              Why Circulogy
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-8 max-w-[560px] text-[42px] font-normal leading-[1.12] tracking-[-0.035em] text-[#073f3d] sm:text-[52px] lg:text-[56px] xl:text-[60px]">
            <span
              className={`block transform transition-all delay-[250ms] duration-[1100ms] ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              Connecting the
            </span>

            <span
              className={`block transform transition-all delay-[400ms] duration-[1100ms] ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              ecosystem.
            </span>

            <span
              className={`block transform transition-all delay-[550ms] duration-[1100ms] ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              Enabling circularity.
            </span>
          </h2>
        </div>

        {/* RIGHT SIDE */}
        <div className="pt-2 lg:pt-14">
          {/* Paragraph */}
          <p
            className={`max-w-[650px] transform text-[18px] leading-[1.9] text-[#64817f] transition-all delay-[750ms] duration-[1200ms] ease-out sm:text-[20px] lg:text-[21px] ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            Whether you are an OEM looking to fulfill EPR obligations, a
            recycler aiming to access consistent supply, or a policymaker
            seeking scalable models, Circulogy provides a{" "}
            <span className="font-medium text-[#102f2e]">
              reliable, fast and practical solution
            </span>{" "}
            without the delays and complexities of traditional compliance
            businesses.
          </p>

          {/* Divider + Values */}
          <div
            className={`mt-10 transform border-t border-[#cbdedb] pt-7 transition-all delay-[950ms] duration-[1200ms] ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            <div className="flex flex-wrap gap-x-7 gap-y-5 sm:gap-x-8 lg:flex-nowrap lg:justify-between">
              {values.map((value, index) => (
                <div
                  key={value}
                  className="flex items-center gap-3 whitespace-nowrap"
                >
                  <span className="text-[9px] font-medium text-[#76908e]">
                    0{index + 1}
                  </span>

                  <span className="text-[13px] font-medium text-[#08706b] sm:text-[14px]">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom gradient */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-8 w-full bg-gradient-to-t from-[#edf7f4] to-transparent opacity-80" />
    </section>
  );
}