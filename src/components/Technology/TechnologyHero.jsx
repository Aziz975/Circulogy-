import React, { useEffect, useRef, useState } from "react";

export default function TechnologyHero() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(false);

          requestAnimationFrame(() => {
            setVisible(true);
          });
        } else {
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
      className="w-full bg-[#f8f8f6] px-4 py-5 sm:px-6 sm:py-7 md:px-8 lg:px-10 xl:px-[38px]"
    >
      <div className="mx-auto w-full max-w-[1600px]">

        {/* ================= HERO IMAGE ================= */}
        <div
          className={`relative min-h-[500px] overflow-hidden rounded-[20px] bg-[#d8efeb] sm:min-h-[540px] md:min-h-[570px] lg:min-h-[590px] xl:min-h-[545px] ${
            visible ? "animate-[fadeUp_0.9s_ease-out_forwards]" : "opacity-0"
          }`}
        >

          {/* Background Image */}
          <img
            src="images/full-mountain.png"
            alt=""
            className={`absolute inset-0 top-[30%] h-[80%] w-full object-cover ${
              visible
                ? "animate-[fadeUp_1.1s_ease-out_0.15s_forwards]"
                : "opacity-0"
            }`}
          />

          {/* ================= HEADING ================= */}
          <div
            className={`relative z-10 mx-auto max-w-[1120px] px-5 pt-12 text-center sm:px-8 sm:pt-14 md:pt-16 lg:pt-[64px] xl:pt-[62px] ${
              visible
                ? "animate-[fadeUp_0.8s_ease-out_0.2s_forwards]"
                : "opacity-0"
            }`}
          >
            <h1 className="text-[34px] font-bold leading-[1.03] tracking-[-1.5px] text-black sm:text-[42px] md:text-[50px] md:tracking-[-2px] lg:text-[57px] xl:text-[58px]">
              <span className="text-[#2b9d8c]">
                Proprietary hydromet technology for
              </span>
              <br />
              <span>
                Critical minerals{" "}
                <span className="text-[#2b9d8c]">
                  and Rare earths, both
                </span>
              </span>
            </h1>
          </div>

          {/* ================= DESCRIPTION ================= */}
          <div
            className={`relative z-10 mx-auto mt-12 max-w-[530px] px-5 text-center sm:mt-14 md:mt-16 lg:mt-[62px] ${
              visible
                ? "animate-[fadeUp_0.8s_ease-out_0.4s_forwards]"
                : "opacity-0"
            }`}
          >
            <p className="text-[17px] font-medium leading-[1.18] tracking-[-0.3px] text-[#34383a] sm:text-[19px] md:text-[20px] lg:text-[21px]">
              Circulogy's proprietary hydrometallurgical
              <br className="hidden sm:block" />
              platform processes two feedstock streams i.e.
              <br className="hidden sm:block" />
              lithium-ion battery and permanent magnets
              <br className="hidden sm:block" />
              both through a single integrated refinery.
            </p>
          </div>
        </div>

        {/* ================= STATS STRIP ================= */}
        <div
          className={`grid grid-cols-2 bg-white px-3 py-6 sm:px-5 sm:py-7 md:grid-cols-4 md:px-8 md:py-8 lg:px-10 lg:py-7 ${
            visible
              ? "animate-[fadeUp_0.9s_ease-out_0.55s_forwards]"
              : "opacity-0"
          }`}
        >

          {/* Stat 1 */}
          <div className="flex min-h-[65px] flex-col items-center justify-center border-r border-[#48c5b7] px-3 text-center md:px-5">
            <h3 className="text-[17px] font-extrabold leading-none text-[#111] sm:text-[18px] md:text-[19px]">
              Hydromet
            </h3>
            <p className="mt-1 text-[12px] font-medium leading-tight text-[#34383a] sm:text-[13px] md:text-[14px]">
              Proprietary process
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex min-h-[65px] flex-col items-center justify-center px-3 text-center md:border-r md:border-[#48c5b7] md:px-5">
            <h3 className="text-[17px] font-extrabold leading-none text-[#111] sm:text-[18px] md:text-[19px]">
              Dual Feedstock
            </h3>
            <p className="mt-1 text-[12px] font-medium leading-tight text-[#34383a] sm:text-[13px] md:text-[14px]">
              Batteries + NdFeB magnets
            </p>
          </div>

          {/* Stat 3 */}
          <div className="mt-5 flex min-h-[65px] flex-col items-center justify-center border-r border-[#48c5b7] px-3 text-center md:mt-0 md:px-5">
            <h3 className="text-[17px] font-extrabold leading-none text-[#111] sm:text-[18px] md:text-[19px]">
              97–99%
            </h3>
            <p className="mt-1 text-[12px] font-medium leading-tight text-[#34383a] sm:text-[13px] md:text-[14px]">
              Recovery rate
            </p>
          </div>

          {/* Stat 4 */}
          <div className="mt-5 flex min-h-[65px] flex-col items-center justify-center px-3 text-center md:mt-0 md:px-5">
            <h3 className="text-[17px] font-extrabold leading-none text-[#111] sm:text-[18px] md:text-[19px]">
              NMC + LFP
            </h3>
            <p className="mt-1 text-[12px] font-medium leading-tight text-[#34383a] sm:text-[13px] md:text-[14px]">
              Chemistry Support
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}