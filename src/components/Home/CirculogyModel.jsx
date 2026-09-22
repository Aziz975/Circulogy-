import React from "react";

export default function CirculogyModel() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f8f9f7] px-5 py-12 sm:px-8 sm:py-16 md:px-10 md:py-20 lg:px-14 lg:py-24 xl:px-[6%]">

      <div className="mx-auto flex w-full max-w-[1500px] flex-col items-center gap-12 lg:flex-row lg:gap-8 xl:gap-14">

        {/* LEFT CONTENT */}
        <div className="w-full lg:w-[42%] xl:w-[40%]">

          {/* Small Heading */}
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[1.8px] text-[#19988f] sm:text-[14px]">
            The Circulogy Model
          </p>

          {/* Main Heading */}
          <h2 className="text-[34px] font-extrabold uppercase leading-[0.95] tracking-[-1px] text-black sm:text-[42px] md:text-[48px] lg:text-[42px] xl:text-[48px]">
            Closing the Loop
          </h2>

          {/* Green Line */}
          <div className="mt-5 h-[3px] w-[150px] bg-[#19988f] sm:mt-6" />

          {/* Description */}
          <p className="mt-6 max-w-[500px] text-[16px] font-medium leading-[1.35] tracking-[1.2px] text-[#444] sm:text-[17px] md:text-[18px]">
            Our closed-loop system transforms end-of-life products into new
            resources, recovering critical minerals, reducing waste, and
            creating sustainable value at every stage.
          </p>

        </div>


        {/* RIGHT IMAGE */}
        <div className="flex w-full items-center justify-center lg:w-[58%] xl:w-[60%]">

          <div className="relative w-full max-w-[700px]">

            <img
              src=""
              alt="Circulogy closed loop model"
              className="h-auto w-full object-contain"
            />

          </div>

        </div>

      </div>

    </section>
  );
}