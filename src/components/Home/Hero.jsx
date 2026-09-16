import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[650px] overflow-hidden bg-[#061817] pt-[72px] text-white lg:min-h-[650px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,rgba(17,145,126,0.18),transparent_32%)]" />
      <div className="absolute right-[-100px] top-[100px] h-[500px] w-[500px] rounded-full border border-[#1bbba5]/10" />
      <div className="absolute right-[80px] top-[160px] h-[380px] w-[380px] rounded-full border border-[#1bbba5]/10" />

      <div className="relative mx-auto grid min-h-[578px] max-w-[1280px] items-center gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="relative z-10 max-w-[610px] pb-12 pt-16 lg:pb-0 lg:pt-0">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[2px] text-[#20cbb3]">Digital Solutions</p>

          <h1 className="max-w-[600px] text-[43px] font-bold leading-[1.06] tracking-[-2px] sm:text-[52px] lg:text-[60px]">
            We Build Digital Solutions That Move Your <span className="text-[#18ceb5]">Business Forward</span>
          </h1>

          <p className="mt-5 max-w-[530px] text-[14px] leading-6 text-white/65">
            Web development, creative design, and digital marketing solutions built to help your business grow online.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#services" className="flex items-center gap-2 rounded-md bg-[#10cfb4] px-6 py-3.5 text-[11px] font-bold text-[#06201c] transition-all hover:bg-[#2de2c9]">
              Get Started <ArrowRight size={14} />
            </a>
            <a href="#services" className="flex items-center gap-2 rounded-md border border-white/30 px-6 py-3.5 text-[11px] font-semibold text-white transition-all hover:border-[#19cdb5] hover:text-[#19cdb5]">
              Explore Services
            </a>
          </div>
        </div>

        <div className="relative flex h-[420px] items-center justify-center lg:h-full">
          <div className="absolute right-[4%] top-[18%] h-[260px] w-[390px] rotate-[-8deg] rounded-[12px] border border-white/20 bg-gradient-to-br from-[#152b2a] to-[#020908] shadow-[0_35px_70px_rgba(0,0,0,0.5)] lg:h-[320px] lg:w-[480px]">
            <div className="absolute left-[12%] top-[15%] text-[24px] font-bold tracking-[-2px] text-white">
              <span className="text-[#19ceb5]">A</span>YNEX
            </div>
            <div className="absolute left-[12%] top-[42%] text-[13px] text-white/70">
              Simple Ideas
              <br />
              <span className="text-[#19ceb5]">Powerful Digital</span>
              <br />
              Solutions
            </div>
            <div className="absolute inset-0 rounded-[12px] bg-[linear-gradient(115deg,transparent_35%,rgba(21,202,177,0.08)_36%,transparent_50%)]" />
          </div>

          <div className="absolute bottom-[4%] right-[12%] h-[50px] w-[500px] rounded-[50%] bg-black/50 blur-xl" />

          <div className="absolute bottom-[2%] left-[5%] h-[105px] w-[470px] rotate-[-2deg] rounded-[50%] bg-gradient-to-b from-[#4e5c59] to-[#111817] shadow-[0_15px_35px_rgba(0,0,0,0.7)] lg:left-[10%]">
            <div className="absolute left-[10%] right-[10%] top-[8px] h-[70px] rounded-[50%] border border-white/10 bg-[#192220]" />
          </div>

          <div className="absolute bottom-[22%] right-[-1%] h-[150px] w-[90px]">
            <div className="absolute bottom-0 left-[20px] h-[75px] w-[52px] rounded-b-xl bg-[#17201e]" />
            <div className="absolute bottom-[65px] left-[10px] h-[80px] w-[75px] rotate-[-15deg]">
              <div className="absolute bottom-0 left-[35px] h-[95px] w-[10px] rotate-[12deg] rounded-full bg-[#244d3d]" />
              <div className="absolute left-0 top-0 h-[55px] w-[25px] -rotate-[30deg] rounded-full bg-[#2c7959]" />
              <div className="absolute right-0 top-[10px] h-[55px] w-[25px] rotate-[30deg] rounded-full bg-[#246c50]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}