import React from "react";

function OpenPositions() {
  const positions = [
    ["01", "Business Development", "GROWTH & PARTNERSHIPS"],
    ["02", "Executive Assistant", "BUSINESS OPERATIONS"],
    ["03", "Public Relation", "COMMUNICATIONS"],
    ["04", "Equity / Capital Raising Specialist", "STRATEGY & FINANCE"],
    ["05", "Sr. Manager / Manager – Commodity, Waste Management / Trading", "CIRCULAR OPERATIONS"],
    ["06", "Partner Onboarding Executive", "PARTNER NETWORK"],
  ];

  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 text-[#073b3b] sm:px-10 lg:px-16 lg:py-24 xl:px-[110px]">
      <div className="absolute -right-[150px] -top-[150px] h-[350px] w-[350px] rounded-full border border-[#9dd5cf]/30"></div>

      <div className="relative mx-auto max-w-[1300px]">
        <div className="mb-8 grid gap-8 lg:grid-cols-[1fr_0.65fr]">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[1.2px] text-[#148d7e]">OPEN POSITIONS</p>
            <h2 className="mt-3 max-w-[600px] text-[34px] font-medium leading-[1] tracking-[-1.5px] sm:text-[43px]">
              Find Your Place in the
              <br />
              Circular Movement
            </h2>
          </div>

          <p className="self-end text-[10px] leading-[1.6] text-[#667d79]">
            Explore opportunities to work with a team that's helping shape the future of India's circular economy.
          </p>
        </div>

        <div className="border-t border-[#d6e7e3]">
          {positions.map((position) => (
            <div key={position[0]} className="grid min-h-[58px] items-center gap-4 border-b border-[#d6e7e3] py-3 lg:grid-cols-[40px_1fr_250px_80px]">
              <span className="text-[8px] text-[#8aa09c]">{position[0]}</span>

              <p className="text-[11px] font-semibold text-[#172f2c] sm:text-[12px]">{position[1]}</p>

              <p className="text-[7px] font-medium tracking-[0.8px] text-[#829591]">{position[2]}</p>

              <button className="flex items-center gap-2 text-left text-[7px] font-bold text-[#178c7c]">
                VIEW ROLE
                <span className="text-[12px]">↗</span>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-7 flex justify-between text-[7px] font-medium tracking-[1.1px] text-[#8ca09d]">
          <span>PEOPLE&nbsp;&nbsp;/&nbsp;&nbsp; PURPOSE&nbsp;&nbsp;/&nbsp;&nbsp; A CIRCULAR TOMORROW</span>
          <span className="hidden sm:block">CIRCULAR SOLUTIONS<br />FOR A BRIGHTER INDIA</span>
        </div>
      </div>
    </section>
  );
}

export default OpenPositions;