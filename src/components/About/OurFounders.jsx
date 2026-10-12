
import React, { useState, useEffect } from "react";
import { ArrowRight, X, UserRound } from "lucide-react";

const founders = [
  {
    name: "Saeem Rizvi",
    role: "Founder & CEO",
    src: "/images/saeem-rizvi.jpeg",
    bio: "Meet Saeem Rizvi, Founder and CEO of Circulogy. He leads the company's vision, strategy, and mission to create a more sustainable future.",
  },
  {
    name: "Abhishek Tiwari",
    role: "Co-Founder & COO",
    src: "/images/abhishek-tiwari.jpeg",
    bio: "Meet Abhishek Tiwari, Co-Founder and COO of Circulogy. He helps drive operations, execution, and the company's day-to-day growth.",
  },
  {
    name: "Azeem Rizwi",
    role: "Director",
    src: "/images/azeem-sir.jpeg",
    bio: "Meet Azeem Rizwi, Director at Circulogy. He contributes to the company's leadership and long-term direction.",
  },
];

function FounderCard({ founder, onViewProfile }) {
  const { name, role, src } = founder;

  return (
    <div className="group relative overflow-hidden rounded-[18px] border border-[#d9ebe7] bg-white shadow-[0_12px_35px_rgba(28,110,99,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(28,110,99,0.12)]">
      {/* Top Accent */}
      <div className="absolute left-0 right-0 top-0 z-20 h-[5px] bg-[#36a294]" />

      {/* Founder Image */}
      <div className="relative mx-[7px] mt-[7px] aspect-[1.06/1] overflow-hidden rounded-[13px] bg-[#252525]">
        <img
          src={src}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>

      {/* Founder Details */}
      <div className="px-7 pb-7 pt-5 sm:px-6">
        <h3 className="text-[26px] font-bold leading-[1.05] tracking-[-0.035em] text-[#0d1110] sm:text-[24px] lg:text-[26px]">
          {name}
        </h3>

        <p className="mt-2 text-[17px] leading-normal text-[#73807e] sm:text-[16px]">
          {role}
        </p>

        {/* View Profile Button */}
        <button
          type="button"
          onClick={() => onViewProfile(founder)}
          aria-label={`View ${name}'s profile`}
          className="mt-7 flex h-[51px] w-full max-w-[220px] items-center justify-center gap-3 rounded-[12px] border-[1.5px] border-[#72c4b9] bg-white text-[16px] font-medium text-[#3ba394] transition-all duration-300 hover:bg-[#eef9f7] focus:outline-none focus:ring-2 focus:ring-[#36a294] focus:ring-offset-2"
        >
          View Profile
          <ArrowRight
            size={19}
            strokeWidth={1.8}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </div>
    </div>
  );
}

function FounderModal({ founder, onClose }) {
  useEffect(() => {
    if (!founder) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Prevent background scrolling while the modal is open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [founder, onClose]);

  if (!founder) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#071b18]/65 p-4 backdrop-blur-sm sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="founder-modal-title"
        className="relative my-auto w-full max-w-[760px] overflow-hidden rounded-[24px] border border-[#d9ebe7] bg-white shadow-[0_30px_100px_rgba(0,0,0,0.25)] animate-[modalIn_0.25s_ease-out]"
      >
        {/* Accent Line */}
        <div className="absolute left-0 right-0 top-0 z-10 h-[5px] bg-[#36a294]" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close profile"
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-[#d9ebe7] bg-white text-[#263a36] transition hover:bg-[#eef9f7] hover:text-[#269484] focus:outline-none focus:ring-2 focus:ring-[#36a294]"
        >
          <X size={21} />
        </button>

        <div className="grid md:grid-cols-[0.85fr_1.15fr]">
          {/* Profile Photo */}
          <div className="relative min-h-[260px] bg-[#edf6f3] sm:min-h-[330px] md:min-h-[430px]">
            <img
              src={founder.src}
              alt={founder.name}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent md:hidden" />

            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/50 bg-white/90 px-3 py-2 text-xs font-semibold tracking-wide text-[#278f82] backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#36a294]" />
              CIRCULOGY LEADERSHIP
            </div>
          </div>

          {/* Profile Information */}
          <div className="flex flex-col justify-center p-6 sm:p-9 md:p-10">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#eef9f7] text-[#36a294]">
              <UserRound size={25} strokeWidth={1.7} />
            </div>

            <p className="mb-3 text-[11px] font-bold tracking-[0.24em] text-[#36a294]">
              MEET OUR TEAM
            </p>

            <h2
              id="founder-modal-title"
              className="text-[32px] font-bold leading-tight tracking-[-0.045em] text-[#101716] sm:text-[38px]"
            >
              {founder.name}
            </h2>

            <p className="mt-2 text-[16px] font-medium text-[#36a294]">
              {founder.role}
            </p>

            <div className="my-6 h-px w-full bg-[#e4efec]" />

            <p className="text-[15px] leading-[1.9] text-[#697875] sm:text-[16px]">
              {founder.bio}
            </p>

            <div className="mt-8">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-[48px] items-center justify-center gap-3 rounded-[12px] bg-[#36a294] px-6 text-[15px] font-semibold text-white transition hover:bg-[#278f82] focus:outline-none focus:ring-2 focus:ring-[#36a294] focus:ring-offset-2"
              >
                Close Profile
                <X size={17} />
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

export default function OurFounders() {
  const [selectedFounder, setSelectedFounder] = useState(null);

  const closeModal = React.useCallback(() => {
    setSelectedFounder(null);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#f8fbfa] px-5 py-14 text-[#101716] sm:px-8 md:px-12 lg:px-[5vw] lg:py-[78px]">
      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e4eeeb_1px,transparent_1px),linear-gradient(to_bottom,#e4eeeb_1px,transparent_1px)] bg-[size:54px_54px] opacity-60" />

      {/* Top Right Orbit */}
      <div className="pointer-events-none absolute -right-[95px] -top-[105px] h-[510px] w-[510px] rounded-full border border-[#dcece9]" />
      <div className="pointer-events-none absolute right-[-30px] top-[-35px] h-[370px] w-[370px] rounded-full border border-[#dcece9]" />
      <div className="pointer-events-none absolute right-[55px] top-[25px] h-[255px] w-[255px] rounded-full border border-[#dcece9]" />

      {/* Top Right Dot */}
      <div className="pointer-events-none absolute right-[9px] top-[142px] flex h-[29px] w-[29px] items-center justify-center rounded-full border border-[#a9dcd4] bg-[#f8fbfa]">
        <span className="h-[9px] w-[9px] rounded-full bg-[#35a293] shadow-[0_0_0_5px_rgba(53,162,147,0.08)]" />
      </div>

      {/* Bottom Left Orbit */}
      <div className="pointer-events-none absolute -bottom-[240px] left-[29%] h-[610px] w-[610px] rounded-full border border-[#dcece9]" />
      <div className="pointer-events-none absolute -bottom-[170px] left-[33%] h-[470px] w-[470px] rounded-full border border-[#dcece9]" />
      <div className="pointer-events-none absolute -bottom-[90px] left-[38%] h-[310px] w-[310px] rounded-full border border-[#dcece9]" />

      {/* Bottom Orbit Dot */}
      <div className="pointer-events-none absolute bottom-[290px] left-[30.5%] flex h-[29px] w-[29px] items-center justify-center rounded-full border border-[#a9dcd4] bg-[#f8fbfa]">
        <span className="h-[8px] w-[8px] rounded-full bg-[#35a293]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1450px]">
        <div className="grid items-start gap-12 lg:grid-cols-[38%_62%] lg:gap-8 xl:grid-cols-[37%_63%]">
          {/* Left Content */}
          <div className="pt-2 lg:pt-[25px]">
            <div className="flex items-center gap-4">
              <span className="text-[11px] font-black tracking-[0.25em] text-[#409e93] sm:text-[12px]">
                OUR FOUNDERS
              </span>
              <span />
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

          {/* Founder Cards */}
          <div className="mt-8 grid gap-6 sm:grid-cols-3 lg:gap-7 xl:gap-8">
            {founders.map((founder) => (
              <FounderCard
                key={founder.name}
                founder={founder}
                onViewProfile={setSelectedFounder}
              />
            ))}
          </div>
        </div>

        {/* Bottom Label */}
        <div className="mt-16 flex items-center gap-4 pb-1 lg:mt-[35px]">
          <span />
          <span className="text-[9px] font-bold tracking-[0.24em] text-[#9ec7c2] sm:text-[10px]">
            RECOVER · REFINE · REBUILD
          </span>
        </div>
      </div>

      {/* Founder Profile Modal */}
      <FounderModal
        founder={selectedFounder}
        onClose={closeModal}
      />
    </section>
  );
}
