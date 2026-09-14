import React from "react";
import { Link } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

function CareerHero() {
  const [open, setOpen] = useState(false);

 

  return (
    <section className="relative min-h-[620px] overflow-hidden bg-[#003d31] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,rgba(53,169,155,0.18),transparent_32%),linear-gradient(120deg,#004d3c,#002b24)]"></div>

      <div className="absolute -right-[100px] top-[80px] h-[480px] w-[480px] rounded-full border border-[#4aa99a]/20"></div>
      <div className="absolute -right-[35px] top-[145px] h-[350px] w-[350px] rounded-full border border-[#4aa99a]/15"></div>


      <div className="relative z-10 mx-auto grid max-w-[1600px] items-center gap-12 px-6 pb-24 pt-16 sm:px-10 lg:grid-cols-2 lg:px-16 lg:pb-28 lg:pt-20 xl:px-[110px]">
        <div>
          <p className="mb-5 text-[9px] font-bold uppercase tracking-[1.5px] text-[#62b6aa]">CAREERS AT CIRCULOGY</p>

          <h1 className="max-w-[520px] text-[42px] font-semibold leading-[0.95] tracking-[-2px] sm:text-[54px] lg:text-[58px] xl:text-[62px]">
            Let’s Build
            <br />
            Your Career
          </h1>

          <p className="mt-6 max-w-[430px] text-[13px] leading-[1.7] text-white/80">
            Be a part of our mission to build a sustainable future.
          </p>

          <p className="mt-3 max-w-[410px] text-[10px] leading-[1.65] text-white/55">
            Join a team that's building the infrastructure for India's circular economy, connecting people, technology and purpose to create measurable impact.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/jobs" className="flex h-[38px] items-center gap-4 rounded-[4px] bg-white px-4 text-[9px] font-bold text-[#06483b] transition-all duration-300 hover:bg-[#62b6aa] hover:text-white">
              Explore Opportunities
              <span>→</span>
            </Link>
            <button className="flex h-[38px] items-center gap-4 rounded-[4px] border border-white/30 px-4 text-[9px] font-semibold text-white transition-all duration-300 hover:border-[#62b6aa] hover:text-[#62b6aa]">
              Submit Your CV
              <span>↗</span>
            </button>
          </div>

          <div className="mt-10 inline-flex rounded-full border border-white/15 px-4 py-2 text-[7px] tracking-[1px] text-white/50">
            PEOPLE&nbsp;&nbsp;—&nbsp;&nbsp;TECHNOLOGY&nbsp;&nbsp;—&nbsp;&nbsp;IMPACT
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative h-[300px] w-full max-w-[500px] overflow-hidden rounded-[18px] border border-white/30 bg-white/80 shadow-2xl sm:h-[350px]">
            <img src="/career-hero.jpg" alt="Circulogy team" className="h-full w-full object-cover opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center bg-white/30">
              <p className="text-center text-[16px] font-bold leading-[1.2] text-[#111] sm:text-[18px]">Final real image to be<br />placed here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerHero;