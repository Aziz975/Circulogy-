import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Plus, UserRound } from "lucide-react";

const team = [
  {
    role: "Founder",
    name: "Saeed Rizvi",
    status: "View profile",
  },
  {
    role: "Co-Founder",
    name: "Abhishek Tiwari",
    status: "View profile",
  },
  {
    role: "Co-Founder",
    name: "Bhuvanesh S. Manhas",
    status: "View profile",
  },
  {
    role: "Director",
    name: "Azeem Rizvi",
    status: "Profile details to follow.",
  },
  {
    role: "Director",
    name: "Sajid Sahidi",
    status: "Profile details to follow.",
  },
];

const TeamAdvisors = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="team-section relative w-full overflow-hidden bg-[#f8fcfa] px-5 py-12 sm:px-8 lg:px-[3%] lg:py-12">

      {/* Top decorative dots */}
      <div className="pointer-events-none absolute left-0 top-0 h-[130px] w-[115px] opacity-50 [background-image:radial-gradient(#77c9c2_1px,transparent_1px)] [background-size:9px_9px]" />

      {/* Top-right decorative circle */}
      <div className="team-decoration team-decoration-top absolute -right-[20px] -top-[45px] h-[210px] w-[210px] rounded-full border border-[#a9ddd7]/60">
        <div className="absolute left-[15px] top-[20px] h-[145px] w-[145px] rounded-full border border-[#a9ddd7]/45" />
        <div className="absolute left-[16px] top-[45px] h-[22px] w-[22px] rounded-full bg-[#8bcfc6]/65" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1100px]">

        {/* ================= HEADER ================= */}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[55%_45%] lg:items-end">

          <div className={`transition-all duration-[1100ms] ease-out ${visible ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"}`}>

            <p className="mb-3 text-[8px] font-bold uppercase tracking-[0.34em] text-[#126a65] sm:text-[9px]">
              Team & Advisors
            </p>

            <h2 className="max-w-[510px] text-[37px] font-semibold leading-[0.98] tracking-[-0.045em] text-[#073f3d] sm:text-[42px] lg:text-[43px]">
              People Behind the
              <br />
              Circular Movement
            </h2>

            <div className="mt-4 flex items-center gap-3 text-[7px] font-semibold uppercase tracking-[0.24em] text-[#70918e] sm:text-[8px]">
              <span className="h-[2px] w-[34px] bg-[#319d96]" />
              <span>People</span>
              <span>•</span>
              <span>Ideas</span>
              <span>•</span>
              <span>A Cleaner Tomorrow</span>
            </div>
          </div>

          <p className={`max-w-[350px] pb-1 text-[11px] font-normal leading-[1.45] tracking-[-0.01em] text-[#587976] transition-all delay-[250ms] duration-[1100ms] ease-out sm:text-[12px] lg:justify-self-end ${visible ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"}`}>
            Behind Circulogy is a team of passionate sustainability advocates,
            systems thinkers, and technology enablers committed to transforming
            India’s circular economy landscape.
          </p>
        </div>

        {/* ================= TEAM GRID ================= */}

        <div className="mt-7 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">

          {team.map((person, index) => (
            <div
              key={person.name}
              className={`team-card group rounded-[10px] border border-[#cce8e3] bg-white/55 p-2 transition-all duration-[1000ms] ease-out hover:-translate-y-1 hover:border-[#9ed5ce] hover:shadow-[0_12px_30px_rgba(25,120,113,0.08)] ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: `${350 + index * 100}ms` }}
            >

              {/* Profile image area */}
              <div className="profile-box relative flex h-[180px] items-center justify-center overflow-hidden rounded-[9px] bg-[#c8e9e2] sm:h-[200px] lg:h-[290px]">

                {/* Background glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),transparent_65%)]" />

                {/* Outer rings */}
                <div className="profile-ring profile-ring-one absolute h-[145px] w-[145px] rounded-full border border-white/65" />

                <div className="profile-ring profile-ring-two absolute h-[105px] w-[105px] rounded-full border border-[#91cfc6]/60" />

                {/* Center */}
                <div className="relative flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#b4ded6]">
                  <UserRound size={23} strokeWidth={1.5} className="text-[#63a69e]" />
                </div>

                {/* Orbit dot */}
                <span className="profile-dot absolute left-[69%] top-[18%] h-[7px] w-[7px] rounded-full bg-[#62b6aa]" />
              </div>

              {/* Card content */}
              <div className="px-1 pb-2 pt-3">

                <p className="text-[7px] font-bold uppercase tracking-[0.28em] text-[#17726d] sm:text-[8px]">
                  {person.role}
                </p>

                <h3 className="mt-2 text-[16px] font-semibold leading-none tracking-[-0.025em] text-[#073f3d] sm:text-[17px]">
                  {person.name}
                </h3>

                {person.status === "View profile" ? (
                  <button className="profile-link mt-3 flex items-center gap-2 text-[10px] font-medium text-[#275f5c] transition-colors duration-300 group-hover:text-[#08766d]">
                    <span>{person.status}</span>
                    <ArrowUpRight size={13} strokeWidth={1.4} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                ) : (
                  <p className="mt-3 text-[10px] font-normal text-[#73908d]">
                    {person.status}
                  </p>
                )}

              </div>
            </div>
          ))}

          {/* ================= ROOM TO GROW ================= */}
<div className={`grow-card group relative min-h-[225px] overflow-hidden rounded-[10px] border border-dashed border-[#9dd5cf] bg-[#fbfdfc] transition-all delay-[850ms] duration-[1000ms] ease-out hover:border-[#5bb5ad] ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>

  {/* Outer ring */}
  <div className="absolute -bottom-[135px] -right-[85px] h-[300px] w-[300px] rounded-full border border-[#bce3dd]/70" />

  {/* Inner ring */}
  <div className="absolute -bottom-[85px] -right-[35px] h-[200px] w-[200px] rounded-full border border-[#9fd5ce]/55" />

  {/* Dot sitting directly on outer ring */}
  <span className="absolute bottom-[85px] right-[108px] h-[7px] w-[7px] rounded-full bg-[#62b6aa]" />

  {/* Center */}
  <div className="relative z-10 flex h-full flex-col items-center justify-center">

    <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-dashed border-[#76c4bd] bg-[#fbfdfc] transition-transform duration-500 group-hover:rotate-90">
      <Plus size={20} strokeWidth={1.2} className="text-[#63aaa4]" />
    </div>

    <p className="mt-4 text-[8px] font-bold uppercase tracking-[0.34em] text-[#71918e]">
      Room to grow
    </p>

  </div>
</div>

        </div>
      </div>

      {/* ================= ANIMATION ================= */}

      <style>{`
        .team-section{font-family:'Manrope',sans-serif}

        .team-decoration-top{animation:teamOrbit 16s linear infinite}

        .profile-ring-one{animation:profileRingOne 9s ease-in-out infinite alternate}

        .profile-ring-two{animation:profileRingTwo 7s ease-in-out infinite alternate}

        .profile-dot{animation:profileDot 5s ease-in-out infinite alternate}

        .team-card{will-change:transform,opacity}

        @keyframes teamOrbit{
          from{transform:rotate(0deg)}
          to{transform:rotate(360deg)}
        }

        @keyframes profileRingOne{
          0%{transform:scale(1);opacity:.5}
          100%{transform:scale(1.035);opacity:.8}
        }

        @keyframes profileRingTwo{
          0%{transform:scale(1);opacity:.4}
          100%{transform:scale(.96);opacity:.7}
        }

        @keyframes profileDot{
          0%{transform:translate(0,0);opacity:.55}
          100%{transform:translate(-4px,5px);opacity:1}
        }

        @media(prefers-reduced-motion:reduce){
          .team-decoration-top,.profile-ring-one,.profile-ring-two,.profile-dot{animation:none!important}
        }
      `}</style>
    </section>
  );
};

export default TeamAdvisors;