import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about-us" className="bg-[#f1f7f6] py-14 lg:py-16">
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#079d89]">About AYNEX</p>
          <h2 className="mt-2 max-w-[450px] text-[30px] font-bold leading-[1.1] tracking-[-1px] text-[#16211f]">Your Technology Partner for Digital Growth</h2>
          <p className="mt-4 max-w-[510px] text-[12px] leading-5 text-slate-500">At AYNEX, we build modern digital experiences that combine technology, creativity and business strategy. Our goal is to help businesses establish a stronger digital presence and achieve measurable growth.</p>
          <a href="#" className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#0bcfb4] px-5 py-3 text-[10px] font-bold text-[#06201c]">
            More About Us <ArrowRight size={13} />
          </a>
        </div>

        <div className="relative h-[300px] overflow-hidden rounded-lg bg-gradient-to-br from-[#c9d0cd] to-[#8b9792]">
          <div className="absolute bottom-[18%] left-[15%] h-[75px] w-[290px] rotate-[-8deg] rounded-[50%] bg-[#303735] shadow-2xl" />
          <div className="absolute bottom-[28%] left-[30%] h-[145px] w-[210px] rotate-[-8deg] rounded-xl border border-white/20 bg-[#15201e] shadow-2xl">
            <div className="absolute left-7 top-8 text-lg font-bold text-white">
              <span className="text-[#18cdb5]">A</span>YNEX
            </div>
          </div>
          <div className="absolute bottom-[15%] right-[15%] h-[70px] w-[42px] rounded-b-lg bg-[#29302e]" />
          <div className="absolute bottom-[32%] right-[14%] h-[70px] w-[50px]">
            <div className="absolute left-5 h-16 w-2 rotate-12 rounded-full bg-green-900" />
            <div className="absolute left-0 top-0 h-12 w-6 -rotate-45 rounded-full bg-green-700" />
            <div className="absolute right-0 top-1 h-12 w-6 rotate-45 rounded-full bg-green-800" />
          </div>
        </div>
      </div>
    </section>
  );
}