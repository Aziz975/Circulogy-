import React from "react";

function CareerValues() {
  const values = [
    {
      number: "01",
      title: "PURPOSE",
      text: "Work on challenges that directly contribute to a more sustainable future.",
    },
    {
      number: "02",
      title: "IMPACT",
      text: "Your work helps connect businesses, people and technology across the circular economy.",
    },
    {
      number: "03",
      title: "INNOVATION",
      text: "Build practical solutions at the intersection of sustainability, technology and business.",
    },
    {
      number: "04",
      title: "GROWTH",
      text: "Grow alongside a team shaping a rapidly evolving circular economy ecosystem.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f7faf9] px-6 py-20 text-[#073b3b] sm:px-10 lg:px-16 lg:py-24 xl:px-[110px]">
      <div className="absolute -left-[100px] bottom-[-100px] h-[300px] w-[300px] rounded-full border border-[#9dd5cf]/30"></div>

      <div className="relative mx-auto grid max-w-[1300px] gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-[8px] font-bold tracking-[1.3px] text-[#35a99b]">01/04 — WHY CIRCULOGY?</p>

          <h2 className="mt-5 max-w-[430px] text-[38px] font-medium leading-[0.98] tracking-[-1.8px] sm:text-[44px]">
            Build a Career
            <br />
            That Moves the
            <br />
            World Forward
          </h2>

          <p className="mt-6 max-w-[410px] text-[10px] leading-[1.7] text-[#526c68]">
            At Circulogy, we're building a new-age, tech-enabled ecosystem for India's circular economy. We connect brands, recyclers, refurbishers and other stakeholders to create a more transparent, trusted and sustainable future.
          </p>

          <div className="relative mt-12 flex h-[145px] w-[170px] items-center justify-center">
            <div className="absolute h-[135px] w-[135px] rounded-full border border-[#9dd5cf]/40"></div>
            <div className="absolute h-[105px] w-[105px] rounded-full border border-[#9dd5cf]/50"></div>
            <div className="absolute flex h-[65px] w-[65px] items-center justify-center rounded-full bg-[#d7f4ed] text-[28px] text-[#35a99b]">♻</div>
            <div className="absolute right-0 top-[55px] h-[7px] w-[7px] rounded-full bg-[#35a99b]"></div>
          </div>
        </div>

        <div className="flex flex-col">
          {values.map((value) => (
            <div key={value.number} className="grid min-h-[90px] grid-cols-[35px_110px_1fr] items-center border-b border-[#cce8e3]">
              <span className="text-[8px] font-medium text-[#35a99b]">{value.number}</span>
              <div className="flex items-center gap-3">
                <span className="h-[6px] w-[6px] rounded-full border border-[#35a99b]"></span>
                <span className="text-[10px] font-bold tracking-[0.2px]">{value.title}</span>
              </div>
              <p className="text-[9px] leading-[1.55] text-[#667d79]">{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CareerValues;