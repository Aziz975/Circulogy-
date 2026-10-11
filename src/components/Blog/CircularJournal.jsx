import React, { useEffect, useRef, useState } from "react";
import {
  Search,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";

/* =========================================================
   REVEAL HOOK
   Animation restarts whenever element leaves/re-enters
========================================================= */

function useReveal(options = {}) {
  const {
    threshold = 0.15,
    rootMargin = "0px 0px -50px 0px",
  } = options;

  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, visible];
}


/* =========================================================
   LETTER REVEAL COMPONENT
========================================================= */

const LetterReveal = ({
  text,
  className = "",
  delay = 0,
}) => {
  const [ref, visible] = useReveal({
    threshold: 0.2,
    rootMargin: "0px 0px -40px 0px",
  });

  return (
    <span
      ref={ref}
      className={`inline-block ${className}`}
      aria-label={text}
    >
      {text.split("").map((char, index) => (
        <span
          key={`${char}-${index}`}
          aria-hidden="true"
          className="inline-block transition-all duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible
              ? "translate3d(0,0,0) rotateX(0deg)"
              : "translate3d(0,35px,0) rotateX(-70deg)",
            filter: visible ? "blur(0px)" : "blur(6px)",
            transitionDelay: `${delay + index * 28}ms`,
            transformOrigin: "bottom center",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};


/* =========================================================
   FADE REVEAL COMPONENT
========================================================= */

const Reveal = ({
  children,
  className = "",
  delay = 0,
  duration = 700,
}) => {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      className={`transition-all ease-[cubic-bezier(0.22,1,0.36,1)] ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translate3d(0,0,0) scale(1)"
          : "translate3d(0,35px,0) scale(0.985)",
        filter: visible ? "blur(0px)" : "blur(7px)",
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};


/* =========================================================
   CARD COMPONENT
========================================================= */

const ArticleCard = ({ article, index }) => {
  const [ref, visible] = useReveal({
    threshold: 0.12,
    rootMargin: "0px 0px -35px 0px",
  });

  return (
    <article
      ref={ref}
      className="group relative flex min-h-[300px] flex-col overflow-hidden rounded-[12px] border border-[#d2ddea] bg-white p-3.5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:border-[#36c9c3] hover:shadow-[0_20px_55px_rgba(0,170,167,0.15),0_0_35px_rgba(0,190,184,0.12)] sm:min-h-[300px] lg:min-h-[218px] xl:min-h-[300px]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translate3d(0,0,0)"
          : "translate3d(0,45px,0)",
        filter: visible ? "blur(0px)" : "blur(8px)",
        transitionDuration: "750ms",
        transitionDelay: `${index * 120}ms`,
      }}
    >

      {/* =====================================================
          CARD GLOW
      ====================================================== */}

      <div className="pointer-events-none absolute -inset-px rounded-[12px] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-[12px] bg-[radial-gradient(circle_at_50%_0%,rgba(0,190,184,0.18),transparent_60%)]" />
      </div>


      {/* =====================================================
          IMAGE
      ====================================================== */}

      <div className="relative z-10 h-[145px] shrink-0 overflow-hidden rounded-[8px] border border-[#08b7b6] bg-[#eef6f5] sm:h-[120px] lg:h-[82px] xl:h-[120px]">

        <img
          src={article.image}
          alt=""
          className="h-full w-full object-cover transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06] group-hover:brightness-[1.05]"
        />

        {/* Image overlay glow */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#004f4d]/20 via-transparent to-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      </div>


      {/* =====================================================
          META
      ====================================================== */}

      <div className="relative z-10 mt-3 flex items-center gap-2">

        <span className="rounded-full bg-[#e5f6f5] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.02em] text-[#078f8d] transition-all duration-300 group-hover:bg-[#d3f3f1] group-hover:shadow-[0_0_16px_rgba(0,175,169,0.16)]">
          {article.category}
        </span>

        <span className="h-4 w-px bg-[#cbd5e1]" />

        <span className="whitespace-nowrap text-[9px] font-medium uppercase tracking-[0.02em] text-[#7c879d]">
          {article.readTime}
        </span>

      </div>


      {/* =====================================================
          TITLE
      ====================================================== */}

      <h3 className="relative z-10 mt-3 text-[21px] font-bold leading-[0.98] tracking-[-0.045em] text-[#050607] transition-colors duration-300 group-hover:text-[#087f7d] sm:text-[20px] lg:text-[18px] xl:text-[21px]">
        {article.title}
      </h3>


      {/* =====================================================
          READ ARTICLE
      ====================================================== */}

      <button className="group/read relative z-10 mt-auto flex items-center gap-2 pt-4 text-[17px] font-medium tracking-[-0.02em] text-[#00aaa7]">

        <span className="relative">
          Read article

          <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#00aaa7] transition-all duration-300 group-hover/read:w-full" />
        </span>

        <ArrowUpRight
          size={20}
          strokeWidth={1.8}
          className="transition-transform duration-300 group-hover/read:-translate-y-1 group-hover/read:translate-x-1"
        />

      </button>

    </article>
  );
};


/* =========================================================
   MAIN COMPONENT
========================================================= */

const CircularJournal = () => {
  const categories = [
    "All",
    "Startup Mentoring",
    "Founder Growth",
    "Strategy & Scale",
    "Digital India",
  ];

  const articles = [
    {
      category: "STARTUP MENTORING",
      readTime: "5 MIN READ",
      title: "How to Find a Perfect Startup Mentor",
      image: "images/Blackwhite.png",
    },
    {
      category: "DIGITAL INDIA",
      readTime: "4 MIN READ",
      title: "The Digital Republic",
      image: "images/Blackwhite.png",
    },
    {
      category: "FOUNDER GROWTH",
      readTime: "4 MIN READ",
      title: "When to Fire Your Startup Mentor",
      image: "images/Blackwhite.png",
    },
    {
      category: "STRATEGY & SCALE",
      readTime: "3 MIN READ",
      title: "How to Scale Your Startup with Reverse Mentoring",
      image: "images/Blackwhite.png",
    },
  ];


  return (
    <main className="min-h-screen w-full overflow-hidden bg-[#fcfdfd] px-4 py-6 sm:px-6 sm:py-8 md:px-8 lg:px-10 xl:px-[52px]">

      <div className="mx-auto w-full max-w-[1600px]">


        {/* =====================================================
            HEADER
        ====================================================== */}

        <header className="relative">


          {/* ===================================================
              TOP ROW
          ==================================================== */}

          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">


            {/* LEFT HEADER */}
            <div className="min-w-0">


              {/* JOURNAL BRAND */}

              <Reveal delay={50} duration={650}>

                <div className="mb-2 text-[13px] font-bold uppercase tracking-[0.18em] text-[#079db2] sm:text-[13px]">

                  Circulogy Journal

                </div>

              </Reveal>


              {/* =================================================
                  MAIN HEADING
              ================================================== */}

              <h1 className="max-w-[950px] text-[clamp(52px,5vw,76px)] font-bold leading-[0.98] tracking-[-0.055em] text-[#050607] sm:text-[50px] md:text-[58px] lg:text-[54px] xl:text-[58px]">

                <LetterReveal
                  text="Ideas for building better ventures."
                  delay={100}
                />

              </h1>


              {/* =================================================
                  SUBTITLE
              ================================================== */}

              <Reveal delay={350} duration={800}>

                <p className="mt-3 max-w-[1000px] text-[18px] font-medium leading-[1.25] tracking-[-0.025em] text-[#193c38] sm:text-[21px] md:text-[23px] lg:text-[21px] xl:text-[23px]">

                  Practical perspectives on mentorship, founder decisions and
                  the systems that help startups grow.

                </p>

              </Reveal>

            </div>


            {/* =================================================
                SEARCH
            ================================================== */}

            <Reveal
              delay={500}
              duration={750}
              className="w-full shrink-0 lg:mt-5 lg:w-[286px] xl:w-[300px]"
            >

              <div className="group relative">

                {/* Search glow */}

                <div className="pointer-events-none absolute -inset-1 rounded-full bg-[#0cc5c0]/20 opacity-0 blur-md transition-opacity duration-500 group-focus-within:opacity-100" />

                <Search
                  size={20}
                  strokeWidth={2}
                  className="absolute left-5 top-1/2 z-10 -translate-y-1/2 text-[#17284a] transition-colors duration-300 group-focus-within:text-[#00aaa7]"
                />

                <input
                  type="text"
                  placeholder="Search articles"
                  className="relative h-[48px] w-full rounded-full border-[1.5px] border-[#13c6c5] bg-white pl-14 pr-5 text-[14px] font-medium text-[#17284a] outline-none transition-all duration-300 placeholder:text-[#7b879e] hover:border-[#079f9c] focus:border-[#00aaa7] focus:ring-4 focus:ring-[#13c6c5]/10 sm:h-[50px]"
                />

              </div>

            </Reveal>

          </div>


          {/* =====================================================
              FILTER BAR
          ====================================================== */}

          <Reveal
            delay={500}
            duration={800}
          >

            <div className="mt-6 flex flex-col gap-4 border-b border-[#d5dfea] pb-3 lg:flex-row lg:items-center lg:justify-between">


              {/* CATEGORIES */}

              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none lg:gap-3 lg:overflow-visible lg:pb-0">

                {categories.map((category, index) => (

                  <button
                    key={category}
                    className={`group relative flex h-[44px] shrink-0 items-center justify-center overflow-hidden rounded-full px-6 text-[16px] font-bold tracking-[-0.02em] transition-all duration-400 sm:px-8 ${
                      index === 0
                        ? "bg-[#079b96] text-white shadow-[0_8px_24px_rgba(7,155,150,0.18)]"
                        : "bg-[#e8f7f7] text-[#17284a] hover:-translate-y-1 hover:bg-[#d9f1f1] hover:text-[#078f8d] hover:shadow-[0_8px_24px_rgba(0,170,167,0.14)]"
                    }`}
                  >

                    {/* hover shine */}

                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                    <span className="relative z-10">
                      {category}
                    </span>

                  </button>

                ))}

              </div>

            </div>

          </Reveal>

        </header>


        {/* =====================================================
            ARTICLE AREA
        ====================================================== */}

        <section className="mt-4">


          <div className="grid grid-cols-1 gap-3 lg:grid-cols-[1.08fr_1fr]">


            {/* =================================================
                FEATURED ARTICLE
            ================================================== */}

            <Reveal
              delay={100}
              duration={850}
            >

              <article className="group relative overflow-hidden rounded-[12px] border border-[#d2ddea] bg-white p-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:border-[#32c9c4] hover:shadow-[0_25px_70px_rgba(0,170,167,0.15),0_0_45px_rgba(0,190,184,0.1)] sm:p-5">


                {/* CARD GLOW */}

                <div className="pointer-events-none absolute -inset-px rounded-[12px] bg-[radial-gradient(circle_at_45%_0%,rgba(0,190,184,0.14),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />


                {/* =================================================
                    FEATURED IMAGE
                ================================================== */}

                <div className="relative z-10 h-[220px] w-full overflow-hidden rounded-[9px] border border-[#08b7b6] bg-[#eef6f5] transition-all duration-500 group-hover:border-[#00aaa7] sm:h-[280px] md:h-[320px] lg:h-[218px] xl:h-[270px]">

                  <img
                    src="images/Blackwhite.png"
                    alt=""
                    className="h-full w-full object-cover transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.045] group-hover:brightness-[1.04]"
                  />

                  {/* Image overlay */}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#001f1e]/35 via-transparent to-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />


                  {/* Image title */}

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex justify-center pb-3">

                    <span className="text-center text-[13px] font-bold uppercase tracking-[-0.02em] text-white opacity-90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] transition-all duration-500 group-hover:-translate-y-1 group-hover:opacity-100 sm:text-[15px]">
                      Why startup mentors fail?
                    </span>

                  </div>

                </div>


                {/* =================================================
                    META
                ================================================== */}

                <div className="relative z-10 mt-4 flex flex-wrap items-center gap-3">

                  <span className="rounded-full bg-[#e5f6f5] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.04em] text-[#078f8d] transition-all duration-300 group-hover:bg-[#d5f3f1] group-hover:shadow-[0_0_18px_rgba(0,175,169,0.18)]">
                    Startup Mentoring
                  </span>

                  <span className="h-5 w-px bg-[#cbd5e1]" />

                  <span className="text-[11px] font-medium uppercase tracking-[0.04em] text-[#7c879d]">
                    4 MIN READ
                  </span>

                </div>


                {/* =================================================
                    TITLE LETTER REVEAL
                ================================================== */}

                <h2 className="relative z-10 mt-4 text-[37px] font-bold leading-[0.96] tracking-[-0.055em] text-[#050607] sm:text-[42px] md:text-[46px] lg:text-[34px] xl:text-[42px]">

                  <LetterReveal
                    text="Why startup mentors fail?"
                    delay={150}
                  />

                </h2>


                {/* DESCRIPTION */}

                <Reveal
                  delay={250}
                  duration={700}
                >

                  <p className="relative z-10 mt-3 max-w-[620px] text-[16px] font-medium leading-[1.3] tracking-[-0.025em] text-[#6c7d79] sm:text-[17px]">

                    Starting a business is not an easy task. It requires
                    clarity, experience and the right kind of guidance.

                  </p>

                </Reveal>


                {/* READ ARTICLE */}

                <button className="group/read relative z-10 mt-4 flex items-center gap-2 text-[18px] font-medium tracking-[-0.02em] text-[#00aaa7]">

                  <span className="relative">

                    Read article

                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#00aaa7] transition-all duration-300 group-hover/read:w-full" />

                  </span>

                  <ArrowUpRight
                    size={22}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover/read:-translate-y-1 group-hover/read:translate-x-1"
                  />

                </button>

              </article>

            </Reveal>


            {/* =================================================
                SMALL ARTICLES
            ================================================== */}

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

              {articles.map((article, index) => (

                <ArticleCard
                  key={article.title}
                  article={article}
                  index={index}
                />

              ))}

            </div>

          </div>

        </section>

      </div>


      {/* =====================================================
          ANIMATION KEYFRAMES
      ====================================================== */}

      <style>{`

        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-none {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }

      `}</style>

    </main>
  );
};

export default CircularJournal;