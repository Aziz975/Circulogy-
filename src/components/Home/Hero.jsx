import React from "react";
import { ArrowRight, Infinity } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#050d0f] text-white">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Main green glow */}
        <div className="absolute -right-[8%] top-[5%] h-[700px] w-[700px] rounded-full bg-[#0b514d]/20 blur-[130px]" />

        <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[600px] rounded-full bg-[#0b7770]/15 blur-[120px]" />

        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(87,130,128,0.16) 1px, transparent 1px),
              linear-gradient(90deg, rgba(87,130,128,0.16) 1px, transparent 1px)
            `,
            backgroundSize: "85px 85px",
          }}
        />

        {/* Large subtle texture */}
        <div className="absolute inset-0 opacity-[0.22] [background-image:radial-gradient(circle_at_60%_45%,rgba(115,150,147,0.18)_0,transparent_35%),radial-gradient(circle_at_75%_55%,rgba(50,90,88,0.2)_0,transparent_28%)]" />

      </div>


      {/* ================= CONTENT ================= */}
      <div className="relative z-10 mx-auto min-h-screen max-w-[1800px] px-6 py-10 sm:px-10 md:px-12 lg:px-16 xl:px-[6%]">

        <div className="grid min-h-[calc(100vh-80px)] items-center lg:grid-cols-[52%_48%]">

          {/* =====================================================
              LEFT SIDE
          ====================================================== */}
          <div className="relative z-20 max-w-[800px] pt-8 lg:pt-0">

            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#273638] bg-[#071012]/80 px-5 py-2.5 backdrop-blur-md">

              <span className="h-[7px] w-[7px] rounded-full bg-[#1bc8b5] shadow-[0_0_10px_rgba(27,200,181,0.8)]" />

              <span className="text-[10px] font-medium tracking-[0.2em] text-[#c2cbca] sm:text-[11px]">
                CIRCULAR CRITICAL MINERALS
              </span>

            </div>


            {/* ================= HEADING ================= */}
            <h1 className="max-w-[800px] text-[52px] font-medium leading-[0.96] tracking-[-0.055em] sm:text-[65px] md:text-[74px] lg:text-[70px] xl:text-[86px] 2xl:text-[94px]">

              <span className="text-[#f2f3f2]">
                Building the{" "}
              </span>

              <span className="text-[#16b5a5]">
                Mine
              </span>

              <br />

              <span className="text-[#16b5a5]">
                Above Ground
              </span>

            </h1>


            {/* ================= SUBTITLE ================= */}
            <p className="mt-8 text-[18px] font-normal tracking-[-0.015em] text-[#e0e6e5] sm:text-[20px] md:text-[22px]">
              Recovering critical minerals. Securing tomorrow.
            </p>


            {/* ================= DESCRIPTION ================= */}
            <p className="mt-5 max-w-[650px] text-[14px] leading-[1.75] text-[#929d9b] sm:text-[15px] md:text-[16px]">

              The critical minerals powering tomorrow’s economy already exist in
              the products we use today. Circulogy closes the loop — recovering
              high-value materials from end-of-life electronics and batteries to
              build a resilient, circular supply chain.

            </p>


            {/* ================= BUTTONS ================= */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <button className="group flex h-[64px] items-center justify-between rounded-full bg-[#20b8a7] px-7 text-[14px] font-medium text-white transition-all duration-300 hover:bg-[#27c9b6] hover:shadow-[0_0_35px_rgba(32,184,167,0.2)] sm:w-[310px]">

                <span>
                  Explore Urban Mining
                </span>

                <ArrowRight
                  size={20}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </button>


              <button className="h-[64px] rounded-full border border-[#29393a] bg-[#061012]/50 px-10 text-[14px] font-medium text-[#d7dfdd] transition-all duration-300 hover:border-[#20b8a7] hover:text-[#20b8a7]">

                Talk to Us

              </button>

            </div>


            {/* ================= TRUSTED ================= */}
            <div className="mt-16 flex items-center gap-4">

              <div className="flex -space-x-2">

                {/* Avatar 1 */}
                <div className="h-8 w-8 overflow-hidden rounded-full border-2 border-[#071011] bg-[#596663]">
                  <img
                    src=""
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Avatar 2 */}
                <div className="h-8 w-8 overflow-hidden rounded-full border-2 border-[#071011] bg-[#747e7a]">
                  <img
                    src=""
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Avatar 3 */}
                <div className="h-8 w-8 overflow-hidden rounded-full border-2 border-[#071011] bg-[#85877d]">
                  <img
                    src=""
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Avatar 4 */}
                <div className="h-8 w-8 overflow-hidden rounded-full border-2 border-[#071011] bg-[#a49780]">
                  <img
                    src=""
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>

              </div>

              <p className="text-[12px] text-[#7e8a88] sm:text-[13px]">
                Trusted by leading OEMs, recyclers, and innovators
              </p>

              <span className="hidden h-[7px] w-[7px] rounded-full bg-[#19cdb5] shadow-[0_0_8px_#19cdb5] sm:block" />

            </div>

          </div>


          {/* =====================================================
              RIGHT SIDE
          ====================================================== */}
          <div className="relative mx-auto h-[520px] w-full max-w-[700px] sm:h-[600px] md:h-[650px] lg:h-[680px]">

            {/* Background glow */}
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#087d78]/10 blur-[90px]" />


            {/* ================= OUTER ORBITS ================= */}

            <div className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7c9996]/20 sm:h-[570px] sm:w-[570px]" />

            <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7c9996]/20 sm:h-[470px] sm:w-[470px]" />

            <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7c9996]/20 sm:h-[360px] sm:w-[360px]" />


            {/* Diagonal orbit */}
            <div className="absolute left-1/2 top-1/2 h-[650px] w-[230px] -translate-x-1/2 -translate-y-1/2 rotate-[48deg] rounded-[50%] border border-[#79918f]/15" />


            {/* =================================================
                NICKEL
            ================================================== */}

            <div className="absolute right-[9%] top-[7%] flex flex-col items-center">

              <div className="relative h-[145px] w-[145px] overflow-hidden rounded-full border border-[#3bcfc1]/30 bg-[#1a7772] shadow-[0_0_35px_rgba(25,205,181,0.12)] sm:h-[180px] sm:w-[180px]">

                {/* IMAGE — LEAVE SRC EMPTY */}
                <img
                  src=""
                  alt=""
                  className="h-full w-full object-cover"
                />

                {/* fallback texture */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.15),transparent_30%),radial-gradient(circle,rgba(15,70,68,0.2),transparent_60%)]" />


                {/* Element box */}
                <div className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-md border border-[#102e2d]/80 px-4 py-2 text-[#09201f]">

                  <span className="text-[9px]">
                    28
                  </span>

                  <span className="text-[32px] font-light leading-none">
                    Ni
                  </span>

                  <span className="text-[9px]">
                    58.693
                  </span>

                </div>

              </div>

              <span className="mt-2 text-[14px] text-[#d5dcda]">
                Nickel
              </span>

            </div>


            {/* =================================================
                LITHIUM
            ================================================== */}

            <div className="absolute bottom-[14%] left-[6%] flex flex-col items-center">

              <div className="relative h-[165px] w-[165px] overflow-hidden rounded-full border border-[#d5dad7]/20 bg-[#d0d0cb] shadow-[0_0_35px_rgba(255,255,255,0.04)] sm:h-[215px] sm:w-[215px]">

                {/* IMAGE — LEAVE SRC EMPTY */}
                <img
                  src=""
                  alt=""
                  className="h-full w-full object-cover"
                />

                {/* fallback texture */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.6),transparent_30%),radial-gradient(circle,rgba(120,120,115,0.08),transparent_70%)]" />


                {/* Element box */}
                <div className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-md border border-[#4d5250]/70 bg-white/5 px-5 py-3 text-[#3e4341]">

                  <span className="text-[10px]">
                    3
                  </span>

                  <span className="text-[40px] font-light leading-none">
                    Li
                  </span>

                  <span className="text-[10px]">
                    6.941
                  </span>

                </div>

              </div>

              <span className="mt-3 text-[14px] text-[#d5dcda]">
                Lithium
              </span>

            </div>


            {/* =================================================
                GRAPHITE
            ================================================== */}

            <div className="absolute bottom-[14%] right-[6%] flex flex-col items-center">

              <div className="relative h-[145px] w-[145px] overflow-hidden rounded-full border border-[#798482]/20 bg-[#3e4444] sm:h-[180px] sm:w-[180px]">

                {/* IMAGE — LEAVE SRC EMPTY */}
                <img
                  src=""
                  alt=""
                  className="h-full w-full object-cover"
                />

                {/* fallback texture */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,rgba(255,255,255,0.1),transparent_25%),radial-gradient(circle,rgba(0,0,0,0.3),transparent_70%)]" />


                {/* Element box */}
                <div className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-md border border-[#171d1d]/70 px-5 py-3 text-[#111817]">

                  <span className="text-[9px]">
                    6
                  </span>

                  <span className="text-[37px] font-light leading-none">
                    C
                  </span>

                  <span className="text-[9px]">
                    12.011
                  </span>

                </div>

              </div>

              <span className="mt-2 text-[14px] text-[#d5dcda]">
                Graphite
              </span>

            </div>


            {/* =================================================
                CENTER CIRCULAR ICON
            ================================================== */}

            <div className="absolute left-1/2 top-[48%] flex h-[88px] w-[88px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#1ebcae]/40 bg-[#061b1b]/80 shadow-[0_0_30px_rgba(25,205,181,0.1)] backdrop-blur-sm sm:h-[108px] sm:w-[108px]">

              <Infinity
                className="text-[#5ce0d1]"
                size={58}
                strokeWidth={1.4}
              />

            </div>


            {/* ================= ORBIT DOTS ================= */}

            <span className="absolute left-[20%] top-[36%] h-[7px] w-[7px] rounded-full bg-[#19cdb5] shadow-[0_0_10px_#19cdb5]" />

            <span className="absolute right-[24%] top-[38%] h-[7px] w-[7px] rounded-full bg-[#19cdb5] shadow-[0_0_10px_#19cdb5]" />

            <span className="absolute bottom-[24%] left-[49%] h-[6px] w-[6px] rounded-full bg-[#19cdb5] shadow-[0_0_8px_#19cdb5]" />

            <span className="absolute bottom-[5%] right-[1%] h-[5px] w-[5px] rounded-full bg-[#19cdb5]" />

          </div>

        </div>

      </div>
    </section>
  );
}