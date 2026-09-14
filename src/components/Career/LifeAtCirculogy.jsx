import React from "react";

function LifeAtCirculogy() {
  return (
    <section className="relative overflow-hidden bg-[#f7faf8] px-6 py-16 sm:px-10 lg:px-12 lg:py-20 xl:px-[46px]">
      {/* Decorative background circles */}
      <div className="pointer-events-none absolute -left-[170px] top-[80px] h-[430px] w-[430px] rounded-full border border-[#b9ddd6]/25"></div>
      <div className="pointer-events-none absolute -left-[115px] top-[135px] h-[320px] w-[320px] rounded-full border border-[#b9ddd6]/20"></div>
      <div className="pointer-events-none absolute -right-[170px] top-[70px] h-[500px] w-[500px] rounded-full border border-[#b9ddd6]/25"></div>
      <div className="pointer-events-none absolute -right-[90px] top-[145px] h-[350px] w-[350px] rounded-full border border-[#b9ddd6]/20"></div>

      {/* Soft background glow */}
      <div className="pointer-events-none absolute left-[30%] top-[25%] h-[350px] w-[350px] rounded-full bg-[#d9f2ec]/20 blur-[100px]"></div>
      <div className="pointer-events-none absolute right-[10%] bottom-[5%] h-[300px] w-[300px] rounded-full bg-[#d7eee9]/15 blur-[100px]"></div>

      <div className="relative z-10 mx-auto max-w-[940px]">
        {/* Heading */}
        <div className="mb-8 grid grid-cols-1 items-end gap-5 md:grid-cols-[1fr_0.9fr]">
          <div>
             <h2 className="mt-2 text-[35px] font-extrabold  font-medium leading-[0.95]  tracking-[-1.8px] text-[#148d7e] sm:text-[30px] md:text-[30px]">LIFE AT CIRCULOGY</h2>
            <h2 className="mt-2 text-[35px] font-medium leading-[0.95] tracking-[-1.8px] text-[#071b19] sm:text-[42px] md:text-[45px]">More Than a Job</h2>
          </div>

          <p className="max-w-[430px] pb-1 text-[9px] font-medium leading-[1.65] text-[#657673] sm:text-[10px] md:text-[10px]">
            Be part of a team of sustainability advocates, systems thinkers and technology enablers working together to transform India's circular economy.
          </p>
        </div>

        {/* Image collage */}
        <div className="grid h-auto grid-cols-1 gap-[6px] md:h-[325px] md:grid-cols-[1fr_1.12fr]">
          {/* Large left image */}
          <div className="group relative h-[300px] overflow-hidden rounded-[5px] md:h-full">
            <img src="/life-1.png" alt="Life at Circulogy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
            <div className="absolute inset-0 bg-white/55"></div>
            <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
              <p className="text-[16px] font-bold leading-[1.2] tracking-[-0.5px] text-[#111918] sm:text-[18px] md:text-[18px]">Final real image to be<br />placed here</p>
            </div>
          </div>

          {/* Right images */}
          <div className="grid grid-cols-2 grid-rows-2 gap-[6px]">
            {/* Top left */}
            <div className="group relative h-[145px] overflow-hidden rounded-[5px] md:h-full">
              <img src="/life-2.jpg" alt="Circulogy team" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
              <div className="absolute inset-0 bg-white/55"></div>
              <div className="absolute inset-0 flex items-center justify-center px-3 text-center">
                <p className="text-[13px] font-bold leading-[1.2] tracking-[-0.3px] text-[#111918] sm:text-[15px]">Final real image to be<br />placed here</p>
              </div>
            </div>

            {/* Top right */}
            <div className="group relative h-[145px] overflow-hidden rounded-[5px] md:h-full">
              <img src="/life-3.jpg" alt="Circulogy workspace" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
              <div className="absolute inset-0 bg-white/55"></div>
              <div className="absolute inset-0 flex items-center justify-center px-3 text-center">
                <p className="text-[13px] font-bold leading-[1.2] tracking-[-0.3px] text-[#111918] sm:text-[15px]">Final real image to be<br />placed here</p>
              </div>
            </div>

            {/* Bottom full-width */}
            <div className="group relative col-span-2 h-[145px] overflow-hidden rounded-[5px] md:h-full">
              <img src="/life-4.jpg" alt="Circulogy circular economy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
              <div className="absolute inset-0 bg-white/55"></div>
              <div className="absolute inset-0 flex items-center justify-center px-3 text-center">
                <p className="text-[14px] font-bold leading-[1.2] tracking-[-0.4px] text-[#111918] sm:text-[17px]">Final real image to be<br />placed here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LifeAtCirculogy;