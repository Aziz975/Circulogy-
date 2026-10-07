import React, { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "motion/react";

const OpenPositions = () => {
  const [activeRole, setActiveRole] = useState(0);
  const [hoveredRole, setHoveredRole] = useState(null);

  const sectionRef = useRef(null);

  // Animation restarts every time the section enters viewport
  const isInView = useInView(sectionRef, {
    amount: 0.15,
    once: false,
  });

  const positions = [
    {
      number: "01",
      category: "GROWTH & PARTNERSHIPS",
      title: "Business Development",
    },
    {
      number: "02",
      category: "BUSINESS OPERATIONS",
      title: "Executive Assistant",
    },
    {
      number: "03",
      category: "COMMUNICATIONS",
      title: "Public Relation",
    },
    {
      number: "04",
      category: "STRATEGY & FINANCE",
      title: "Equity / Capital Raising Specialist",
    },
    {
      number: "05",
      category: "CIRCULAR OPERATIONS",
      title:
        "Sr. Manager / Manager – Commodity, Waste Management / Trading",
    },
    {
      number: "06",
      category: "PARTNER NETWORK",
      title: "Partner Onboarding Executive",
    },
  ];

  const handleRoleClick = (index, title) => {
    setActiveRole(index);
    console.log("Selected role:", title);
  };

  /*
  ============================================================
  PREMIUM HEADING WORD REVEAL
  ============================================================
  */

  const renderWords = (text, className = "", startDelay = 0) => {
    return (
      <span className={`block ${className}`}>
        {text.split(" ").map((word, index) => (
          <span
            key={`${word}-${index}`}
            className="mr-[0.25em] inline-block overflow-hidden align-bottom"
          >
            <motion.span
              className="inline-block"
              initial={{
                y: "115%",
                opacity: 0,
                rotateX: 35,
                filter: "blur(8px)",
              }}
              animate={
                isInView
                  ? {
                      y: "0%",
                      opacity: 1,
                      rotateX: 0,
                      filter: "blur(0px)",
                    }
                  : {
                      y: "115%",
                      opacity: 0,
                      rotateX: 35,
                      filter: "blur(8px)",
                    }
              }
              transition={{
                duration: 0.85,
                delay: startDelay + index * 0.13,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                transformOrigin: "bottom center",
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </span>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#f5faf8] px-5 py-10 sm:px-8 sm:py-12 md:px-10 md:py-14 lg:px-[4.7%] lg:py-16 xl:px-[4.7%]"
    >
      {/* =====================================================
          BACKGROUND AMBIENT GLOW
      ===================================================== */}

      <motion.div
        className="pointer-events-none absolute -left-[180px] top-[15%] h-[400px] w-[400px] rounded-full bg-[#299f8f]/10 blur-[110px]"
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        animate={
          isInView
            ? {
                x: [0, 35, 0],
                y: [0, -25, 0],
                opacity: [0.18, 0.4, 0.18],
                scale: [0.9, 1.08, 0.9],
              }
            : {
                opacity: 0,
                scale: 0.7,
              }
        }
        transition={{
          duration: 8,
          repeat: isInView ? Infinity : 0,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="pointer-events-none absolute -right-[200px] bottom-0 h-[450px] w-[450px] rounded-full bg-[#58c5b4]/10 blur-[120px]"
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        animate={
          isInView
            ? {
                x: [0, -35, 0],
                y: [0, 25, 0],
                opacity: [0.18, 0.38, 0.18],
                scale: [0.9, 1.08, 0.9],
              }
            : {
                opacity: 0,
                scale: 0.7,
              }
        }
        transition={{
          duration: 9,
          repeat: isInView ? Infinity : 0,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* =====================================================
          SUBTLE CENTER LIGHT
      ===================================================== */}

      <motion.div
        className="pointer-events-none absolute left-1/2 top-[38%] h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-[#299f8f]/[0.035] blur-[100px]"
        initial={{ opacity: 0 }}
        animate={
          isInView
            ? {
                opacity: [0, 0.8, 0],
                scale: [0.7, 1, 0.7],
              }
            : {
                opacity: 0,
              }
        }
        transition={{
          duration: 6,
          repeat: isInView ? Infinity : 0,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <motion.div
        className="relative mx-auto w-full max-w-[1400px]"
        initial={{
          opacity: 0,
          y: 25,
          scale: 0.985,
        }}
        animate={
          isInView
            ? {
                opacity: 1,
                y: 0,
                scale: 1,
              }
            : {
                opacity: 0,
                y: 25,
                scale: 0.985,
              }
        }
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mb-10 flex flex-col gap-8 sm:mb-12 md:mb-14 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          {/* =================================================
              LEFT HEADING
          ================================================= */}

          <div className="flex flex-col">
            {/* EYEBROW */}

            <motion.span
              className="mb-5 text-[13px] font-extrabold tracking-[0.15em] text-[#318f84] sm:text-[13px]"
              initial={{
                opacity: 0,
                x: -25,
                filter: "blur(6px)",
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      x: 0,
                      filter: "blur(0px)",
                    }
                  : {
                      opacity: 0,
                      x: -25,
                      filter: "blur(6px)",
                    }
              }
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              OPEN POSITIONS
            </motion.span>

            {/* MAIN HEADING */}

            <h2
              className="max-w-[620px] text-[42px] font-bold leading-[0.98] tracking-[-0.045em] text-[#071514] sm:text-[50px] md:text-[56px] lg:text-[58px] xl:text-[60px]"
              style={{
                perspective: "900px",
              }}
            >
              {renderWords(
                "Find Your Place in the",
                "",
                0.25
              )}

              <span className="relative block">
                {renderWords(
                  "Circular Movement",
                  "text-[#299f8f]",
                  0.62
                )}

                {/* Small animated underline */}

                <motion.span
                  className="absolute bottom-[-8px] left-0 h-[3px] rounded-full bg-[#299f8f]"
                  initial={{
                    width: 0,
                    opacity: 0,
                  }}
                  animate={
                    isInView
                      ? {
                          width: "42%",
                          opacity: 1,
                        }
                      : {
                          width: 0,
                          opacity: 0,
                        }
                  }
                  transition={{
                    duration: 0.9,
                    delay: 1.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

                <motion.span
                  className="absolute bottom-[-8px] left-0 h-[3px] w-[8px] rounded-full bg-[#58c5b4]"
                  initial={{
                    x: 0,
                    opacity: 0,
                  }}
                  animate={
                    isInView
                      ? {
                          x: ["0%", "520%"],
                          opacity: [0, 1, 0],
                        }
                      : {
                          x: 0,
                          opacity: 0,
                        }
                  }
                  transition={{
                    duration: 1.6,
                    delay: 1.45,
                    ease: "easeInOut",
                  }}
                />
              </span>
            </h2>
          </div>

          {/* =================================================
              RIGHT HEADER
          ================================================= */}

          <motion.div
            className="flex w-full items-center justify-between gap-6 lg:w-[43%] lg:pt-12 xl:w-[42%]"
            initial={{
              opacity: 0,
              x: 45,
              filter: "blur(7px)",
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    x: 0,
                    filter: "blur(0px)",
                  }
                : {
                    opacity: 0,
                    x: 45,
                    filter: "blur(7px)",
                  }
            }
            transition={{
              duration: 0.85,
              delay: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="max-w-[400px] text-[14px] font-normal leading-[1.6] text-[#71807d] sm:text-[15px] md:text-[16px]">
              Explore opportunities to work with a team
              that’s helping shape the future of India’s
              circular economy.
            </p>

            <motion.button
              type="button"
              className="hidden shrink-0 items-center gap-2 rounded-full border border-[#d2e8e3] bg-[#f8fcfa] px-6 py-3 text-[12px] font-bold tracking-[0.12em] text-[#318f84] shadow-[0_5px_20px_rgba(35,120,108,0.04)] transition-colors duration-300 hover:border-[#9ccfc5] hover:bg-[#e0f2ee] sm:flex"
              initial={{
                opacity: 0,
                scale: 0.8,
                x: 20,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      scale: 1,
                      x: 0,
                    }
                  : {
                      opacity: 0,
                      scale: 0.8,
                      x: 20,
                    }
              }
              transition={{
                duration: 0.65,
                delay: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -3,
                boxShadow:
                  "0 12px 28px rgba(41,159,143,0.14)",
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              <span>06 OPEN ROLES</span>
            </motion.button>
          </motion.div>
        </div>

        {/* =====================================================
            POSITIONS GRID
        ===================================================== */}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4 lg:gap-[15px]">
          {positions.map((position, index) => {
            const isHovered = hoveredRole === index;

            return (
              <motion.button
                key={position.number}
                type="button"
                onClick={() =>
                  handleRoleClick(
                    index,
                    position.title
                  )
                }
                onMouseEnter={() =>
                  setHoveredRole(index)
                }
                onMouseLeave={() =>
                  setHoveredRole(null)
                }
                className="
                  group
                  relative
                  flex
                  min-h-[145px]
                  w-full
                  flex-col
                  justify-between
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-[#dbe8e5]
                  bg-white
                  px-6
                  py-6
                  text-left
                  sm:min-h-[155px]
                  sm:rounded-[24px]
                  sm:px-7
                  sm:py-7
                  md:min-h-[145px]
                  lg:min-h-[145px]
                  lg:px-7
                  lg:py-6
                  xl:min-h-[145px]
                "
                initial={{
                  opacity: 0,
                  y: 45,
                  scale: 0.94,
                  rotateX: 7,
                  filter: "blur(7px)",
                }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        rotateX: 0,
                        filter: "blur(0px)",
                      }
                    : {
                        opacity: 0,
                        y: 45,
                        scale: 0.94,
                        rotateX: 7,
                        filter: "blur(7px)",
                      }
                }
                transition={{
                  duration: 0.75,
                  delay: 1.05 + index * 0.11,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -5,
                  scale: 1.012,
                }}
                whileTap={{
                  scale: 0.99,
                }}
                style={{
                  transformPerspective: 1000,
                }}
              >
                {/* =================================================
                    HOVER BACKGROUND
                ================================================= */}

                <motion.div
                  className="pointer-events-none absolute inset-0 rounded-[22px]"
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    backgroundColor: isHovered
                      ? "rgba(224,243,239,1)"
                      : "rgba(224,243,239,0)",
                  }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

                {/* =================================================
                    HOVER GLOW
                ================================================= */}

                <motion.div
                  className="pointer-events-none absolute -inset-[1px] rounded-[23px]"
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    boxShadow: isHovered
                      ? "0 18px 45px rgba(41,159,143,0.17), 0 0 0 1px rgba(41,159,143,0.18)"
                      : "0 0 0 rgba(41,159,143,0)",
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                />

                {/* =================================================
                    SOFT INNER GLOW
                ================================================= */}

                <motion.div
                  className="pointer-events-none absolute right-[-80px] top-[-100px] h-[220px] w-[220px] rounded-full bg-[#49b8a7] blur-[80px]"
                  animate={{
                    opacity: isHovered ? 0.14 : 0,
                    scale: isHovered ? 1 : 0.7,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                />

                {/* =================================================
                    TOP ROW
                ================================================= */}

                <div className="relative z-10 flex w-full items-start justify-between gap-5">
                  <div className="flex items-center gap-8 sm:gap-9">
                    {/* NUMBER */}

                    <motion.span
                      className="text-[11px] font-semibold tracking-[0.1em] sm:text-[19px]"
                      animate={{
                        color: isHovered
                          ? "#299f8f"
                          : "#4da79a",
                        x: isHovered ? 2 : 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      {position.number}
                    </motion.span>

                    {/* CATEGORY */}

                    <motion.span
                      className="text-[10px] font-semibold tracking-[0.16em] sm:text-[12px]"
                      animate={{
                        color: isHovered
                          ? "#318f84"
                          : "#7d918d",
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      {position.category}
                    </motion.span>
                  </div>
                </div>

                {/* =================================================
                    BOTTOM ROW
                ================================================= */}

                <div className="relative z-10 flex items-end justify-between gap-5">
                  {/* TITLE */}

                  <motion.span
                    className="max-w-[540px] text-[21px] font-semibold leading-[1.3] tracking-[-0.015em] text-[#182522] sm:text-[19px] md:text-[20px] lg:text-[21px] xl:text-[22px]"
                    animate={{
                      x: isHovered ? 4 : 0,
                    }}
                    transition={{
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {position.title}
                  </motion.span>

                  {/* =================================================
                      ARROW
                  ================================================= */}

                  <motion.span
                    className="
                      flex
                      h-[47px]
                      w-[47px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      sm:h-[49px]
                      sm:w-[49px]
                    "
                    animate={{
                      backgroundColor: isHovered
                        ? "#148d80"
                        : "rgba(255,255,255,0)",
                      borderColor: isHovered
                        ? "#148d80"
                        : "#cfe2de",
                      color: isHovered
                        ? "#ffffff"
                        : "#148d80",
                      scale: isHovered ? 1.08 : 1,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <motion.span
                      animate={{
                        x: isHovered ? 3 : 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <ArrowRight
                        size={21}
                        strokeWidth={2.5}
                      />
                    </motion.span>
                  </motion.span>
                </div>

                {/* =================================================
                    BOTTOM TEAL ACCENT
                ================================================= */}

                <motion.div
                  className="absolute bottom-0 left-0 h-[3px] w-full origin-left bg-[#299f8f]"
                  initial={{
                    scaleX: 0,
                  }}
                  animate={{
                    scaleX: isHovered ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

                {/* =================================================
                    SMALL HOVER LIGHT
                ================================================= */}

                <motion.div
                  className="pointer-events-none absolute bottom-[-45px] left-[30%] h-[90px] w-[40%] rounded-full bg-[#299f8f]/10 blur-[35px]"
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    scale: isHovered ? 1 : 0.5,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                />
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default OpenPositions;