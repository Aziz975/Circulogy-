import React from "react";
import { ArrowRight } from "lucide-react";

const partners = [
  {
    number: "01",
    name: "ESSCI",
    image: "",
  },
  {
    number: "02",
    name: "TECHNO ELECTRIC",
    image: "",
  },
  {
    number: "03",
    name: "WERFTEN",
    image: "",
  },
  {
    number: "04",
    name: "LIFE",
    image: "",
  },
  {
    number: "05",
    name: "BSG",
    image: "",
  },
];

export default function PartnerSection() {
  return (
   <section className="relative w-full overflow-hidden bg-[#f8f8f3] px-5 pt-5 pb-8 text-[#061715] sm:px-8 sm:pt-6 sm:pb-10 md:px-10 md:pt-8 md:pb-12 lg:px-16 lg:pt-10 lg:pb-14 xl:px-[4%]">
      {/* =====================================================
          SOFT BACKGROUND GLOW
      ====================================================== */}
      <div className="pointer-events-none absolute -left-40 top-3 h-[500px] w-[500px] rounded-full bg-[#8ce4d8]/20 blur-[110px]" />

      <div className="pointer-events-none absolute right-[-180px] top-[35%] h-[500px] w-[500px] rounded-full bg-[#dceee9]/60 blur-[100px]" />


      <div className="relative mx-auto max-w-[1740px]">

        {/* =====================================================
            TOP CONTENT
        ====================================================== */}
        <div className="grid items-start gap-10 lg:grid-cols-[1.45fr_0.7fr] lg:gap-20 xl:grid-cols-[1.55fr_0.7fr]">

          {/* LEFT */}
          <div>

            <p className="mb-6 text-[12px] font-semibold tracking-[0.08em] text-[#159f91] sm:text-[13px]">
              OUR PARTNERS
            </p>

            <h2 className="max-w-[1000px] text-[48px] font-semibold leading-[0.98] tracking-[-0.045em] text-[#071614] sm:text-[58px] md:text-[68px] lg:text-[70px] xl:text-[76px]">

              Stronger Together.

              <br />

              <span className="text-[#159f91]">
                Building the Circular Future.
              </span>

            </h2>

          </div>


          {/* RIGHT */}
          <div className="pt-1 lg:pt-9">

            <p className="max-w-[500px] text-[15px] leading-[1.55] text-[#394542] sm:text-[16px] md:text-[17px]">

              We collaborate with forward-thinking organizations,
              industry leaders, and innovation partners to close loops,
              unlock value, and create lasting impact across the
              circular economy.

            </p>

          </div>

        </div>


        {/* =====================================================
            PARTNER CARD
        ====================================================== */}
        <div className="relative mt-14 overflow-hidden rounded-[30px] border border-[#dcebe7] bg-[#eef9f6]/90 sm:mt-16 md:mt-20 lg:mt-14">

          {/* Card glow */}
          <div className="pointer-events-none absolute -left-20 top-[-100px] h-[400px] w-[600px] rounded-full bg-[#9ce8df]/25 blur-[90px]" />

          <div className="pointer-events-none absolute bottom-[-180px] right-[-100px] h-[350px] w-[700px] rounded-[50%] bg-[#ffffff]/70 blur-[45px]" />


          <div className="relative z-10 px-6 py-7 sm:px-8 sm:py-9 md:px-10 lg:px-8 xl:px-5">

            {/* =================================================
                CARD HEADER
            ================================================== */}
            <div className="flex flex-col gap-4 border-b border-[#d5e5e1] pb-15 sm:flex-row sm:items-center sm:justify-between">

              <h3 className="text-[23px] font-semibold tracking-[-0.02em] text-[#071715] sm:text-[25px] md:text-[27px]">

                Partners across technology, skills and sustainability.

              </h3>

              <span className="text-[10px] font-medium tracking-[0.2em] text-[#71817e]">
                ONE SHARED NETWORK
              </span>

            </div>


            {/* =================================================
                PARTNER GRID
            ================================================== */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">

              {partners.map((partner, index) => (
                <div
                  key={partner.number}
                  className={`group relative flex min-h-[300px] flex-col px-0 py-7 sm:min-h-[320px] sm:px-5 lg:min-h-[325px] lg:px-5 xl:px-6 ${
                    index !== 0
                      ? "border-t border-[#c6e4de] md:border-l md:border-t-0"
                      : ""
                  }`}
                >

                  {/* Number */}
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-[#149f91]">
                    {partner.number}
                  </span>


                  {/* =================================================
                      LOGO IMAGE
                      SRC LEFT EMPTY
                  ================================================== */}
                  <div className="flex flex-1 items-center justify-center py-10">

                    <div className="flex h-[145px] w-full max-w-[230px] items-center justify-center">

                      <img
                        src={partner.image}
                        alt={partner.name}
                        className="max-h-[125px] max-w-[210px] object-contain transition-transform duration-300 group-hover:scale-[1.04]"
                      />

                    </div>

                  </div>


                  {/* Partner name */}
                  <p className="text-[11px] font-semibold tracking-[0.18em] text-[#17211f]">
                    {partner.name}
                  </p>

                </div>
              ))}

            </div>


            {/* =================================================
                BOTTOM LINE
            ================================================== */}
            <div className="flex flex-col gap-5 border-t border-[#d5e5e1] pt-7 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-center gap-8">

                <span className="text-[13px] font-semibold text-[#14201e]">
                  Five partners.
                </span>

                <span className="text-[13px] font-semibold text-[#159f91]">
                  One circular ambition.
                </span>

              </div>


              {/* Arrow button */}
              <button
                aria-label="View partners"
                className="group flex h-11 w-11 items-center justify-center self-end rounded-full bg-[#07100f] text-white transition-all duration-300 hover:bg-[#159f91] hover:scale-105 sm:self-auto"
              >
                <ArrowRight
                  size={18}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}