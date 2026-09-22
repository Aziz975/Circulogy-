import React from "react";

const minerals = [
  {
    symbol: "Li",
    name: "Lithium",
    position:
      "left-[24%] top-[13%] sm:left-[23%] md:left-[23%] lg:left-[22%]",
    line: "w-[32px] -rotate-[35deg] -left-[25px] top-[30px]",
  },
  {
    symbol: "Co",
    name: "Cobalt",
    position:
      "right-[7%] top-[14%] sm:right-[8%] md:right-[7%]",
    line: "w-[28px] rotate-[130deg] -left-[20px] top-[31px]",
  },
  {
    symbol: "Ni",
    name: "Nickel",
    position:
      "right-[1%] top-[42%] sm:right-[1%] md:right-[1%]",
    line: "w-[28px] rotate-[145deg] -left-[19px] top-[29px]",
  },
  {
    symbol: "REE",
    name: "Rare Earth Elements",
    position:
      "left-[15%] bottom-[34%] sm:left-[15%] md:left-[14%]",
    line: "w-[30px] rotate-[35deg] right-[-25px] top-[29px]",
  },
  {
    symbol: "Cu",
    name: "Copper",
    position:
      "right-[7%] bottom-[23%] sm:right-[8%] md:right-[7%]",
    line: "w-[30px] rotate-[145deg] -left-[21px] top-[28px]",
  },
];

function MineralLabel({ mineral }) {
  return (
    <div
      className={`absolute z-30 ${mineral.position}`}
    >
      <div className="relative">

        {/* connector */}
        <div
          className={`absolute h-[1.5px] origin-left bg-white ${mineral.line}`}
        />

        {/* connector dot */}
        <span className="absolute left-1/2 top-[calc(100%+16px)] h-[7px] w-[7px] -translate-x-1/2 rounded-full bg-white sm:top-[calc(100%+19px)]" />
      </div>
    </div>
  );
}

export default function CriticalMinerals() {
  return (
    <section className="relative min-h-[650px] w-full overflow-hidden bg-[#faf9f6] px-5 py-12 sm:min-h-[700px] sm:px-8 sm:py-14 md:min-h-[760px] md:px-10 lg:min-h-[680px] lg:px-12 lg:py-16 xl:min-h-[700px] xl:px-[4%]">

      {/* subtle background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_35%,rgba(255,255,255,0.95),transparent_45%)]" />

      <div className="relative mx-auto min-h-[590px] w-full max-w-[1600px]">

        {/* =====================================================
            LEFT CONTENT
        ====================================================== */}

        <div className="relative z-40 flex w-full max-w-[520px] flex-col justify-center pt-8 sm:max-w-[570px] sm:pt-10 md:max-w-[620px] lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 lg:pt-0 xl:max-w-[650px]">

          {/* Eyebrow */}
          <p className="mb-4 text-[13px] font-extrabold tracking-[0.08em] text-[#079e99] sm:mb-5 sm:text-[15px] md:text-[16px]">
            THE NEED OF TOMORROW
          </p>

          {/* Heading */}
          <h1 className="font-[800] text-[43px] leading-[0.94] tracking-[-0.045em] text-[#050707] sm:text-[50px] md:text-[58px] lg:text-[55px] xl:text-[60px]">
            Tomorrow’s
            <br />
            Economy
            <br />
            Needs More
            <br />
            <span className="text-[#0a9f99]">
              Critical Minerals
            </span>
          </h1>

          {/* turquoise line */}
          <div className="my-6 h-[3px] w-[98px] bg-[#0aa9a2] sm:my-7 md:my-8" />

          {/* Description */}
          <p className="max-w-[470px] text-[15px] font-medium leading-[1.42] tracking-[-0.01em] text-[#282c2b] sm:text-[16px] md:text-[17px] lg:text-[16px] xl:text-[17px]">
            The demand for lithium, cobalt, nickel, copper,
            <br className="hidden sm:block" />
            and rare earth elements is accelerating.
            <br className="hidden sm:block" />
            Yet traditional extraction alone cannot meet
            <br className="hidden sm:block" />
            the growing need for sustainable, resilient, and
            <br className="hidden sm:block" />
            secure supply chains.
          </p>

        </div>


        {/* =====================================================
            RIGHT IMAGE
        ====================================================== */}

        <div className="relative mt-10 h-[440px] w-full sm:h-[500px] md:h-[570px] lg:absolute lg:right-[-5%] lg:top-1/2 lg:mt-0 lg:h-[650px] lg:w-[67%] lg:-translate-y-1/2 xl:right-[-3%] xl:h-[680px] xl:w-[90%]">

          {/* Image shape */}
          <div
            className="
              absolute
              inset-0
              overflow-hidden
             
            "
          >

            {/* RIGHT IMAGE */}
            <img
              src="images/minerals_image.png"
              alt="Critical minerals"
              className="h-full w-full object-cover object-center"
            />

            {/* very subtle overlay */}
            <div className="absolute inset-0 bg-black/[0.025]" />

            {/* Mineral labels */}
            {minerals.map((mineral) => (
              <MineralLabel
                key={mineral.symbol}
                mineral={mineral}
              />
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}