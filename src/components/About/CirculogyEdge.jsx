import React from "react";
import { ArrowUpRight } from "lucide-react";

const edgeItems = [
  "EPR Credit Matchmaking",
  "Awareness-as-a-Service for OEMs",
  "Access to Verified Recyclers and Refurbishers",
  "National and Global Event Properties",
  "Citizen-Powered Campaigns",
];

const CirculogyEdge = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#f2f9f7] px-6 py-16 sm:px-10 lg:px-[5.7%] lg:py-10">
      {/* Background subtle gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(210,235,230,0.35),transparent_55%)]" />

      <div className="relative mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-start">
          {/* Small label */}
          <p className="pt-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#17625e] sm:text-[11px]">
            What sets us apart
          </p>

          {/* Main heading */}
          <h2 className="text-[42px] font-normal leading-none tracking-[-0.04em] text-[#073f3d] sm:text-[52px] md:text-[58px] lg:text-[62px]">
            The Circulogy Edge
          </h2>
        </div>

        {/* List */}
        <div className="mt-8 border-t border-[#c5dcd8]">
          {edgeItems.map((item, index) => (
            <div
              key={item}
              className="group flex min-h-[65px] items-center border-b border-[#c5dcd8] transition-all duration-500 hover:bg-[#e9f4f1] sm:min-h-[66px]"
            >
              {/* Number */}
              <div className="w-[70px] shrink-0 pl-3 sm:w-[85px] sm:pl-4">
                <span className="text-[20px] font-normal tracking-[-0.02em] text-[#73a3a0] sm:text-[21px]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Text */}
              <div className="flex-1">
                <span className="text-[16px] font-normal tracking-[-0.02em] text-[#083f3d] sm:text-[17px] md:text-[18px]">
                  {item}
                </span>
              </div>

              {/* Arrow */}
              <div className="flex w-[40px] items-center justify-end pr-2 sm:w-[55px] sm:pr-3">
                <ArrowUpRight
                  size={19}
                  strokeWidth={1.4}
                  className="text-[#126b67] transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CirculogyEdge;