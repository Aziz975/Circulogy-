
import React, { useState, useEffect, useCallback } from "react";
import {
  ArrowRight,
  X,
  Settings,
  ChartNoAxesCombined,
  Recycle,
  Factory,
  ShieldCheck,
  Leaf,
  Zap,
  Truck,
  FlaskConical,
  Pickaxe,
  Globe,
} from "lucide-react";

/* =========================================================
   FOUNDER DATA — EACH FOUNDER HAS DIFFERENT PROFILE CONTENT
========================================================= */

const founders = [
  {
    id: 1,
    name: "Saeem Rizvi",
    role: "Founder & CEO",
    src: "/images/saeem-rizvi.jpeg",
    experience: [
      {
        icon: Settings,
        text: "More than half a decade of experience in recycling and materials operations",
      },
      {
        icon: ChartNoAxesCombined,
        text: "Built and scaled a prior e-waste recycling facility of 30,000 MT/year capacity",
      },
      {
        icon: Recycle,
        text: "Owns recycling operations, material recovery, and on-ground execution",
      },
    ],
  },
  {
    id: 2,
    name: "Abhishek Tiwari",
    role: "Co-Founder & COO",
    src: "/images/abhishek-tiwari.jpeg",
    experience: [
      {
        icon: Factory,
        text: "20+ years experience at KPMG at government advisory, across 25+ countries",
      },
      {
        icon: ShieldCheck,
        text: "Architected the government of Uttar Pradesh's states startup mission. ",
      },
      {
        icon: Truck,
        text: "Owns business strategy ,government relations, partnerships and market.",
      },
    ],
  },
  {
    id: 3,
    name: "Azeem Rizvi",
    role: "Co-Founder and CPO",
    src: "/images/azeem-sir.jpeg",
    experience: [
      {
        icon: FlaskConical,
        text: "Owns recycling factory supervision across the network",
      },
      {
        icon: Pickaxe,
        text: "Leads e-waste procurement and output material sales",
      },
      {
        icon: Globe,
        text: "Drives on-ground plant operations from facility to facility",
      },
    ],
  },
];

/* =========================================================
   EXPERIENCE CARD
========================================================= */

function ExperienceCard({ experience = [] }) {
  return (
    <div className="w-full rounded-xl border border-[#e0efeb] bg-white p-4 sm:p-5">
      <div className="space-y-4">
        {experience.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex items-center gap-3 sm:gap-3.5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e0f7f3] text-[#278f82] sm:h-11 sm:w-11">
                <Icon size={21} strokeWidth={2} />
              </div>

              <div className="h-9 w-px shrink-0 bg-[#d5e8e3] sm:h-11" />

              <p className="min-w-0 flex-1 text-[13px] font-medium leading-[1.4] tracking-[-0.015em] text-[#293431] sm:text-[14px]">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* =========================================================
   FOUNDER CARD
========================================================= */

function FounderCard({ founder, onViewProfile }) {
  return (
    <div className="group relative overflow-hidden rounded-[18px] border border-[#d9ebe7] bg-white shadow-[0_12px_35px_rgba(28,110,99,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(28,110,99,0.12)]">
      <div className="absolute left-0 right-0 top-0 z-20 h-[5px] bg-[#36a294]" />

      <div className="relative mx-[7px] mt-[7px] aspect-[1.06/1] overflow-hidden rounded-[13px] bg-[#edf6f3]">
        <img
          src={founder.src}
          alt={founder.name}
          loading="lazy"
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="px-5 pb-6 pt-5 sm:px-5">
        <h3 className="text-[22px] font-semibold leading-[1.1] tracking-[-0.035em] text-[#0d1110] sm:text-[24px]">
          {founder.name}
        </h3>

        <p className="mt-2 text-[15px] leading-normal text-[#73807e] sm:text-[16px]">
          {founder.role}
        </p>

        <button
          type="button"
          onClick={() => onViewProfile(founder)}
          aria-label={`View ${founder.name}'s profile`}
          className="mt-6 flex h-[48px] w-full items-center justify-center gap-3 rounded-[12px] border-[1.5px] border-[#72c4b9] bg-white text-[15px] font-medium text-[#3ba394] transition-all duration-300 hover:bg-[#eef9f7] focus:outline-none focus:ring-2 focus:ring-[#36a294] focus:ring-offset-2"
        >
          View Profile
          <ArrowRight
            size={18}
            strokeWidth={1.8}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </div>
    </div>
  );
}

/* =========================================================
   REUSABLE FOUNDER PROFILE MODAL
========================================================= */

function FounderModal({ founder, onClose }) {
  useEffect(() => {
    if (!founder) return;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [founder, onClose]);

  if (!founder) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#071b18]/65 p-3 backdrop-blur-sm sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="founder-modal-title"
        className="relative my-auto w-full max-w-[850px] overflow-hidden rounded-[22px] border border-[#d9ebe7] bg-white shadow-[0_30px_100px_rgba(0,0,0,0.25)] sm:rounded-[24px] animate-[modalIn_0.25s_ease-out]"
      >
        <div className="absolute left-0 right-0 top-0 z-10 h-[5px] bg-[#36a294]" />

        <button
          type="button"
          onClick={onClose}
          aria-label="Close profile"
          className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-[#d9ebe7] bg-white text-[#263a36] transition hover:bg-[#eef9f7] hover:text-[#269484] focus:outline-none focus:ring-2 focus:ring-[#36a294] sm:right-4 sm:top-4"
        >
          <X size={21} />
        </button>

        <div className="grid md:grid-cols-[0.8fr_1.2fr]">
          {/* FOUNDER IMAGE */}
          <div className="relative min-h-[230px] bg-[#edf6f3] sm:min-h-[300px] md:min-h-[480px]">
            <img
              src={founder.src}
              alt={founder.name}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent md:hidden" />

            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/50 bg-white/90 px-3 py-2 text-[10px] font-semibold tracking-wide text-[#278f82] backdrop-blur-sm sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-[#36a294]" />
              CIRCULOGY LEADERSHIP
            </div>
          </div>

          {/* DYNAMIC FOUNDER INFORMATION */}


          <div className="flex min-w-0 w-full flex-col justify-center p-4 sm:p-6 md:p-8 lg:p-9">
            <h2
              id="founder-modal-title"
              className="break-words pr-6 text-2xl font-bold leading-tight tracking-[-0.04em] text-[#101716] sm:pr-8 sm:text-3xl md:text-[36px] md:leading-[1.08]"
            >
              {founder.name}
            </h2>

            <p className="mt-2 mb-4 text-sm font-medium text-[#36a294] sm:mb-5 sm:text-base">
              {founder.role}
            </p>

            <div className="w-full min-w-0">
              <ExperienceCard experience={founder.experience} />
            </div>

            <div className="mt-5 sm:mt-7">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl bg-[#36a294] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#278f82] focus:outline-none focus:ring-2 focus:ring-[#36a294] focus:ring-offset-2 sm:w-auto sm:gap-3 sm:px-6"
              >
                Close Profile
                <X size={17} className="shrink-0" />
              </button>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes modalIn {
          from {
            opacity: 0;
            transform: translateY(12px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}

/* =========================================================
   OUR FOUNDERS SECTION
========================================================= */

export default function OurFounders() {
  const [selectedFounder, setSelectedFounder] = useState(null);

  const closeModal = useCallback(() => {
    setSelectedFounder(null);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#f8fbfa] px-5 py-14 text-[#101716] sm:px-8 md:px-12 lg:px-[5vw] lg:py-[78px]">
      {/* BACKGROUND GRID */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e4eeeb_1px,transparent_1px),linear-gradient(to_bottom,#e4eeeb_1px,transparent_1px)] bg-[size:54px_54px] opacity-60" />

      {/* TOP RIGHT ORBITS */}
      <div className="pointer-events-none absolute -right-[95px] -top-[105px] h-[510px] w-[510px] rounded-full border border-[#dcece9]" />
      <div className="pointer-events-none absolute right-[-30px] top-[-35px] h-[370px] w-[370px] rounded-full border border-[#dcece9]" />
      <div className="pointer-events-none absolute right-[55px] top-[25px] h-[255px] w-[255px] rounded-full border border-[#dcece9]" />

      <div className="pointer-events-none absolute right-[9px] top-[142px] flex h-[29px] w-[29px] items-center justify-center rounded-full border border-[#a9dcd4] bg-[#f8fbfa]">
        <span className="h-[9px] w-[9px] rounded-full bg-[#35a293] shadow-[0_0_0_5px_rgba(53,162,147,0.08)]" />
      </div>

      {/* BOTTOM LEFT ORBITS */}
      <div className="pointer-events-none absolute -bottom-[240px] left-[29%] h-[610px] w-[610px] rounded-full border border-[#dcece9]" />
      <div className="pointer-events-none absolute -bottom-[170px] left-[33%] h-[470px] w-[470px] rounded-full border border-[#dcece9]" />
      <div className="pointer-events-none absolute -bottom-[90px] left-[38%] h-[310px] w-[310px] rounded-full border border-[#dcece9]" />

      <div className="pointer-events-none absolute bottom-[290px] left-[30.5%] flex h-[29px] w-[29px] items-center justify-center rounded-full border border-[#a9dcd4] bg-[#f8fbfa]">
        <span className="h-[8px] w-[8px] rounded-full bg-[#35a293]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1450px]">
        <div className="grid items-start gap-12 lg:grid-cols-[38%_62%] lg:gap-8 xl:grid-cols-[37%_63%]">
          {/* LEFT CONTENT */}
          <div className="pt-2 lg:pt-[25px]">
            <div className="flex items-center gap-4">
              <span className="text-[11px] font-black tracking-[0.25em] text-[#409e93] sm:text-[12px]">
                OUR FOUNDERS
              </span>
            </div>

            <h2 className="mt-8 max-w-[570px] text-[47px] font-bold leading-[1.01] tracking-[-0.05em] sm:text-[54px] md:text-[60px] lg:text-[52px] xl:text-[59px]">
              Built by people
              <br />
              who have been
              <br />
              <span className="text-[#32a092]">
                in the trenches.
              </span>
            </h2>

            <p className="mt-8 text-[18px] leading-[1.5] text-[#697875] sm:text-[19px]">
              Meet the leadership behind Circulogy.
            </p>
          </div>

          {/* FOUNDER CARDS */}
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 xl:gap-7">
            {founders.map((founder) => (
              <FounderCard
                key={founder.id}
                founder={founder}
                onViewProfile={setSelectedFounder}
              />
            ))}
          </div>
        </div>

        
      </div>

      {/* SHARED MODAL — CONTENT CHANGES WITH SELECTED FOUNDER */}
      <FounderModal
        founder={selectedFounder}
        onClose={closeModal}
      />
    </section>
  );
}
