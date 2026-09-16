import React from "react";

const processSteps = [
  "CONNECT",
  "DIGITIZE",
  "ENABLE",
  "COLLABORATE",
  "IMPACT",
];

const stakeholders = [
  { name: "OEMs", position: "top" },
  { name: "Importers", position: "topRight" },
  { name: "Citizens", position: "right" },
  { name: "Brand Owners", position: "bottomRight" },
  { name: "Recyclers", position: "bottom" },
  { name: "Refurbishers", position: "bottomLeft" },
  { name: "Policymakers", position: "topLeft" },
];

const ImpactSystem = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#f5fbfa] font-[Inter,sans-serif] text-[#07343b]">

      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Top Left Circle */}
        <div className="absolute -left-[150px] -top-[180px] h-[430px] w-[430px] rounded-full border border-[#b8e6df]/60"></div>

        {/* Bottom Right Circle */}
        <div className="absolute -right-[180px] -bottom-[200px] h-[480px] w-[480px] rounded-full border border-[#b8e6df]/50"></div>

        {/* Top Left Dots */}
        <div className="absolute left-0 top-0 h-[230px] w-[300px] opacity-50 [background-image:radial-gradient(#b5ded9_1px,transparent_1px)] [background-size:10px_10px]"></div>

        {/* Top Right Dots */}
        <div className="absolute right-0 top-[40px] h-[180px] w-[280px] opacity-40 [background-image:radial-gradient(#b5ded9_1px,transparent_1px)] [background-size:10px_10px]"></div>

        {/* Bottom Left Dots */}
        <div className="absolute bottom-0 left-0 h-[170px] w-[260px] opacity-40 [background-image:radial-gradient(#b5ded9_1px,transparent_1px)] [background-size:10px_10px]"></div>

        {/* Center Glow */}
        <div className="absolute left-[52%] top-[38%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9f8f3] opacity-30 blur-[80px]"></div>
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] items-center px-6 py-20 sm:px-10 lg:px-[6%]">

        <div className="grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-[42%_58%]">

          {/* ================= LEFT CONTENT ================= */}
          <div className="relative z-20">

            <p className="mb-9 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#4e7b7d] sm:text-[12px]">
              HOW WE CREATE IMPACT
            </p>

            <h1 className="max-w-[560px] text-[48px] font-normal leading-[1.08] tracking-[-0.045em] text-[#07343b] sm:text-[60px] lg:text-[66px] xl:text-[72px]">
              Every part of
              <br />
              the system, in
              <br />
              motion.
            </h1>

            {/* ================= PROCESS FLOW ================= */}
            <div className="relative mt-12 max-w-[590px]">

              {/* Static Line */}
              <div className="absolute left-0 top-[5px] h-[2px] w-full bg-gradient-to-r from-[#12cdb1]/60 via-[#bde9e3] to-transparent"></div>

              {/* Process Items */}
              <div className="relative flex items-start justify-between gap-2 pt-5">

                {processSteps.map((step, index) => (
                  <React.Fragment key={step}>

                    <div className="relative whitespace-nowrap text-[10px] font-semibold tracking-[0.18em] text-[#54777b] sm:text-[11px]">
                      {step}
                    </div>

                    {index < processSteps.length - 1 && (
                      <span className="text-[15px] leading-none text-[#4f8889]">
                        →
                      </span>
                    )}

                  </React.Fragment>
                ))}

              </div>
            </div>
          </div>

          {/* ================= ORBIT SYSTEM ================= */}
          <div className="relative mx-auto h-[520px] w-full max-w-[700px] sm:h-[620px] lg:h-[680px]">

            {/* Outer Glow - Static */}
            <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#baf2e9] opacity-20 blur-[60px] sm:h-[500px] sm:w-[500px]"></div>

            {/* Outer Orbit - Static */}
            <div className="absolute left-1/2 top-1/2 h-[470px] w-[470px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#8ed8cf] sm:h-[580px] sm:w-[580px] lg:h-[620px] lg:w-[620px]"></div>

            {/* Orbit 1 - Static */}
            <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#a7deda] sm:h-[470px] sm:w-[470px] lg:h-[500px] lg:w-[500px]"></div>

            {/* Orbit 2 - Static */}
            <div className="absolute left-1/2 top-1/2 h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b9e5df] sm:h-[390px] sm:w-[390px] lg:h-[420px] lg:w-[420px]"></div>

            {/* Orbit 3 - Static */}
            <div className="absolute left-1/2 top-1/2 h-[245px] w-[245px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c5ebe6] sm:h-[310px] sm:w-[310px] lg:h-[340px] lg:w-[340px]"></div>

            {/* ================= CONNECTING LINES ================= */}

            <div className="absolute left-1/2 top-[10%] h-[32%] w-px -translate-x-1/2 border-l border-dashed border-[#65cfc4]"></div>

            <div className="absolute left-[25%] top-[25%] h-px w-[25%] rotate-[28deg] border-t border-dashed border-[#65cfc4]"></div>

            <div className="absolute right-[25%] top-[25%] h-px w-[25%] -rotate-[28deg] border-t border-dashed border-[#65cfc4]"></div>

            <div className="absolute left-[50%] top-[50%] h-px w-[36%] border-t border-dashed border-[#65cfc4]"></div>

            <div className="absolute left-[50%] top-[50%] h-px w-[35%] rotate-[31deg] border-t border-dashed border-[#65cfc4]"></div>

            <div className="absolute bottom-[24%] left-[27%] h-px w-[25%] -rotate-[29deg] border-t border-dashed border-[#65cfc4]"></div>

            <div className="absolute bottom-[24%] right-[27%] h-px w-[25%] rotate-[29deg] border-t border-dashed border-[#65cfc4]"></div>

            <div className="absolute bottom-[10%] left-1/2 h-[32%] w-px -translate-x-1/2 border-l border-dashed border-[#65cfc4]"></div>

            {/* ================= CENTER ================= */}
            <div className="absolute left-1/2 top-1/2 flex h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#91d9d0] bg-white/80 shadow-[0_15px_50px_rgba(27,147,135,0.10)] backdrop-blur-sm sm:h-[230px] sm:w-[230px] lg:h-[250px] lg:w-[250px]">

              {/* Center Inner Ring */}
              <div className="absolute inset-[-12px] rounded-full border border-[#c2eae5]/60"></div>

              <span className="text-[18px] font-medium tracking-[0.14em] text-[#16474d] sm:text-[20px]">
                CIRCULOGY
              </span>

            </div>

            {/* ================= STAKEHOLDERS ================= */}
            {stakeholders.map((item) => (
              <div
                key={item.name}
                className={`absolute ${getPosition(item.position)}`}
              >
                <div className="flex min-w-[135px] items-center gap-3 rounded-full border border-[#a9dcd7] bg-white/85 px-4 py-3 shadow-[0_8px_25px_rgba(38,130,121,0.08)] backdrop-blur-sm sm:min-w-[150px]">

                  <span className="h-[11px] w-[11px] shrink-0 rounded-full bg-[#087e78]"></span>

                  <span className="text-[13px] font-medium text-[#173f45] sm:text-[15px]">
                    {item.name}
                  </span>

                </div>
              </div>
            ))}

            {/* ================= STATIC ORBIT DOTS ================= */}

            <span className="absolute left-[22%] top-[45%] h-[8px] w-[8px] rounded-full bg-[#42bdb0]"></span>

            <span className="absolute left-[35%] top-[22%] h-[8px] w-[8px] rounded-full bg-[#65cfc4]"></span>

            <span className="absolute right-[28%] top-[30%] h-[9px] w-[9px] rounded-full bg-[#65cfc4]"></span>

            <span className="absolute right-[22%] top-[58%] h-[7px] w-[7px] rounded-full bg-[#39b8aa]"></span>

            <span className="absolute left-[35%] bottom-[25%] h-[8px] w-[8px] rounded-full bg-[#65cfc4]"></span>

            <span className="absolute right-[38%] bottom-[23%] h-[8px] w-[8px] rounded-full bg-[#42bdb0]"></span>

          </div>
        </div>
      </div>

    </section>
  );
};

/* ================= STAKEHOLDER POSITIONS ================= */

const getPosition = (position) => {
  const positions = {
    top: "left-1/2 top-[0%] -translate-x-1/2",

    topRight: "right-[1%] top-[21%]",

    right: "right-[-1%] top-1/2 -translate-y-1/2",

    bottomRight: "right-[1%] bottom-[19%]",

    bottom: "bottom-[0%] left-1/2 -translate-x-1/2",

    bottomLeft: "left-[1%] bottom-[19%]",

    topLeft: "left-[1%] top-[21%]",
  };

  return positions[position];
};

export default ImpactSystem;