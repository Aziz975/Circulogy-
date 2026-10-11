import React from "react";
import { Leaf } from "lucide-react";

const CircularJournalHero = () => {
  return (
    <section className="relative min-h-[700px] w-full overflow-hidden bg-[#f4fbfd]">

      {/* =========================================================
          FULL SCREEN BACKGROUND IMAGE
      ========================================================= */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/blogHero.png"
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* =========================================================
          DESKTOP CONTENT
      ========================================================= */}
      <div className="relative z-10 hidden min-h-[720px] w-full lg:flex">

        <div className="flex w-[54%] flex-col justify-center px-[4.5vw] py-16">

          {/* JOURNAL BADGE */}
          <div className="mb-7 flex w-fit items-center gap-2 rounded-full border border-[#13b4c7] bg-[#f8fdfe]/75 px-3.5 py-[6px]">

            <Leaf
              size={12}
              strokeWidth={2}
              className="text-[#08aabd]"
            />

            <span className="text-[13px] font-extrabold uppercase leading-none tracking-[0.16em] text-[#079db2]">
              Circulogy Journal
            </span>

          </div>

          {/* HEADING */}
          <h1 className="max-w-[600px] text-[clamp(52px,5vw,76px)] font-bold leading-[0.91] tracking-[-0.065em] text-[#050607]">

            Insights, Ideas{" "}

            <span className="text-[#09a9ba]">
              &amp;
            </span>

            <br />

            Impact

          </h1>

          {/* DESCRIPTION */}
          <p className="mt-10 max-w-[560px] text-[15px] font-normal leading-[1.55] tracking-[-0.01em]  text-[#6c7d79] md:text-[17px] lg:text[18px] xl:text-[18px]">

            Perspectives from the front line of India&apos;s circular economy 
            on sustainability, waste management, recycling, environmental
            innovation and the industry trends shaping what comes next.

          </p>

          {/* =====================================================
              STATS
          ===================================================== */}
          <div className="mt-8 flex items-center">

            {/* 120+ */}
            <div className="pr-5 xl:pr-7">

              <div className="text-[25px] font-bold leading-none tracking-[-0.035em] text-[#08a9ba] xl:text-[25px]">
                120+
              </div>

              <div className="mt-1.5 whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.07em] text-[#657482] xl:text-[12px]">
                Articles &amp; Reports
              </div>

            </div>

            {/* DIVIDER */}
            <div className="h-[38px] w-px bg-[#76d3dc]" />

            {/* 7 */}
            <div className="px-5 xl:px-7">

              <div className="text-[25px] font-bold leading-none tracking-[-0.035em] text-[#08a9ba] xl:text-[25px]">
                7
              </div>

              <div className="mt-1.5 whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.07em] text-[#657482] xl:text-[12px]">
                Focus Areas
              </div>

            </div>

            {/* DIVIDER */}
            <div className="h-[38px] w-px bg-[#76d3dc]" />

            {/* WEEKLY */}
            <div className="pl-5 xl:pl-7">

              <div className="text-[25px] font-bold leading-none tracking-[-0.035em] text-[#08a9ba] xl:text-[25px]">
                Weekly
              </div>

              <div className="mt-1.5 whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.07em] text-[#657482] xl:text-[12px]">
                New Insights
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* =========================================================
          TABLET
      ========================================================= */}
      <div className="relative z-10 hidden min-h-screen md:block lg:hidden">

        <div className="flex min-h-screen items-center px-10 py-16">

          <div className="max-w-[580px]">

            {/* BADGE */}
            <div className="mb-7 flex w-fit items-center gap-2 rounded-full border border-[#13b4c7] bg-white/70 px-3.5 py-[6px]">

              <Leaf
                size={12}
                strokeWidth={2}
                className="text-[#08aabd]"
              />

              <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#079db2]">
                Circulogy Journal
              </span>

            </div>

            {/* HEADING */}
            <h1 className="text-[58px] font-bold leading-[0.92] tracking-[-0.06em] text-[#050607]">

              Insights, Ideas{" "}

              <span className="text-[#09a9ba]">
                &amp;
              </span>

              <br />

              Impact

            </h1>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-[520px] text-[14px] font-medium leading-[1.55] text-[#596878]">

              Perspectives from the front line of India&apos;s circular
              economy — on sustainability, waste management, recycling,
              environmental innovation and the industry trends shaping what
              comes next.

            </p>

            {/* STATS */}
            <div className="mt-8 flex items-center">

              <div className="pr-6">

                <div className="text-[21px] font-bold text-[#08a9ba]">
                  120+
                </div>

                <div className="text-[8px] uppercase tracking-[0.08em] text-[#657482]">
                  Articles &amp; Reports
                </div>

              </div>

              <div className="h-9 w-px bg-[#76d3dc]" />

              <div className="px-6">

                <div className="text-[21px] font-bold text-[#08a9ba]">
                  7
                </div>

                <div className="text-[8px] uppercase tracking-[0.08em] text-[#657482]">
                  Focus Areas
                </div>

              </div>

              <div className="h-9 w-px bg-[#76d3dc]" />

              <div className="pl-6">

                <div className="text-[21px] font-bold text-[#08a9ba]">
                  Weekly
                </div>

                <div className="text-[8px] uppercase tracking-[0.08em] text-[#657482]">
                  New Insights
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* =========================================================
          MOBILE
      ========================================================= */}
      <div className="relative z-10 flex min-h-screen flex-col md:hidden">

        <div className="px-6 pb-10 pt-12 sm:px-8 sm:pt-14">

          {/* BADGE */}
          <div className="mb-7 flex w-fit items-center gap-2 rounded-full border border-[#13b4c7] bg-white/70 px-3.5 py-[6px]">

            <Leaf
              size={12}
              strokeWidth={2}
              className="text-[#08aabd]"
            />

            <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#079db2]">
              Circulogy Journal
            </span>

          </div>

          {/* HEADING */}
          <h1 className="text-[47px] font-bold leading-[0.93] tracking-[-0.06em] text-[#050607] sm:text-[56px]">

            Insights, Ideas{" "}

            <span className="text-[#09a9ba]">
              &amp;
            </span>

            <br />

            Impact

          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 max-w-[520px] text-[13px] font-medium leading-[1.55] text-[#596878] sm:text-[14px]">

            Perspectives from the front line of India&apos;s circular economy —
            on sustainability, waste management, recycling, environmental
            innovation and the industry trends shaping what comes next.

          </p>

          {/* STATS */}
          <div className="mt-8 flex items-center">

            <div className="pr-3 sm:pr-5">

              <div className="text-[19px] font-bold leading-none text-[#08a9ba]">
                120+
              </div>

              <div className="mt-1 text-[7px] uppercase tracking-[0.05em] text-[#657482] sm:text-[8px]">
                Articles &amp; Reports
              </div>

            </div>

            <div className="h-9 w-px bg-[#76d3dc]" />

            <div className="px-3 sm:px-5">

              <div className="text-[19px] font-bold leading-none text-[#08a9ba]">
                7
              </div>

              <div className="mt-1 text-[7px] uppercase tracking-[0.05em] text-[#657482] sm:text-[8px]">
                Focus Areas
              </div>

            </div>

            <div className="h-9 w-px bg-[#76d3dc]" />

            <div className="pl-3 sm:pl-5">

              <div className="text-[19px] font-bold leading-none text-[#08a9ba]">
                Weekly
              </div>

              <div className="mt-1 text-[7px] uppercase tracking-[0.05em] text-[#657482] sm:text-[8px]">
                New Insights
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CircularJournalHero;