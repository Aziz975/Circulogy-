import { useEffect, useRef, useState } from "react";

/**
 * CirculogyHero
 * Single self-contained React component.
 *
 * Features:
 * - Animated starfield
 * - Scroll-based orbit speed
 * - Horizontal stretch letter reveal
 * - Animation restarts whenever hero enters viewport
 */
export default function CirculogyHero() {
  const canvasRef = useRef(null);
  const heroRef = useRef(null);

  const [scrollSpeed, setScrollSpeed] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  // =========================================
  // HERO LETTER REVEAL
  // =========================================
  useEffect(() => {
    const section = heroRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset first
          setIsVisible(false);

          // Restart animation
          requestAnimationFrame(() => {
            setIsVisible(true);
          });
        } else {
          // Reset when leaving viewport
          setIsVisible(false);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  // =========================================
  // SCROLL-BASED ORBIT SPEED
  // =========================================
  useEffect(() => {
    let ticking = false;

    const updateScrollSpeed = () => {
      const scrollY = window.scrollY;

      const speed = Math.min(
        1 + (scrollY / 3000) * 2,
        3
      );

      setScrollSpeed(speed);

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollSpeed);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    updateScrollSpeed();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =========================================
  // STARFIELD BACKGROUND
  // =========================================
  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let w;
    let h;
    let stars;
    let rafId;

    function resize() {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;

      stars = Array.from(
        {
          length: Math.floor((w * h) / 9000),
        },
        () => ({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.3 + 0.2,
          a: Math.random() * 0.6 + 0.2,
          tw: Math.random() * 0.02 + 0.005,
          dir: Math.random() > 0.5 ? 1 : -1,
        })
      );
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);

      for (const s of stars) {
        s.a += s.tw * s.dir;

        if (s.a > 0.9 || s.a < 0.15) {
          s.dir *= -1;
        }

        ctx.beginPath();

        ctx.arc(
          s.x,
          s.y,
          s.r,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(200,255,240,${s.a})`;

        ctx.fill();
      }

      rafId = requestAnimationFrame(draw);
    }

    const ro = new ResizeObserver(resize);

    ro.observe(canvas);

    resize();
    draw();

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="circulogy-hero"
    >
      {/* =========================================
          STARFIELD
      ========================================= */}
      <canvas
        ref={canvasRef}
        className="ch-stars"
      />

      {/* =========================================
          HERO
      ========================================= */}
      <section className="ch-hero">

        {/* =========================================
            LEFT CONTENT
        ========================================= */}
        <div className="ch-left">

          {/* BADGE */}
          <div
            className={`ch-badge reveal-content ${
              isVisible
                ? "reveal-content-visible"
                : ""
            }`}
            style={{
              transitionDelay: "0ms",
            }}
          >
            <span className="ch-dot" />

            Circular Critical Minerals
          </div>

          {/* =========================================
              HEADING
          ========================================= */}
          <h1 className="ch-h1">

            {/* Building the Mine */}
            {"Building the Mine".split("").map(
              (letter, index) => (
                <span
                  key={`building-${index}`}
                  className={`horizontal-letter ${
                    isVisible
                      ? "horizontal-letter-visible"
                      : ""
                  }`}
                  style={{
                    transitionDelay: `${
                      index * 40
                    }ms`,
                  }}
                >
                  {letter === " "
                    ? "\u00A0"
                    : letter}
                </span>
              )
            )}

            {/* Above Ground */}
            <span className="ch-grad">

              {"Above Ground".split("").map(
                (letter, index) => (
                  <span
                    key={`above-${index}`}
                    className={`horizontal-letter ${
                      isVisible
                        ? "horizontal-letter-visible"
                        : ""
                    }`}
                    style={{
                      transitionDelay: `${
                        750 + index * 40
                      }ms`,
                    }}
                  >
                    {letter === " "
                      ? "\u00A0"
                      : letter}
                  </span>
                )
              )}

            </span>

          </h1>

          {/* =========================================
              SUBTITLE
          ========================================= */}
          <p
            className={`ch-sub reveal-content ${
              isVisible
                ? "reveal-content-visible"
                : ""
            }`}
            style={{
              transitionDelay: "1350ms",
            }}
          >
            Recovering critical minerals.
            Securing tomorrow.
          </p>

          {/* =========================================
              DESCRIPTION
          ========================================= */}
          <p
            className={`ch-desc reveal-content ${
              isVisible
                ? "reveal-content-visible"
                : ""
            }`}
            style={{
              transitionDelay: "1500ms",
            }}
          >
            The critical minerals powering
            tomorrow&apos;s economy already exist
            in the products we use today.
            Circulogy closes the loop — recovering
            high-value materials from end-of-life
            electronics and batteries to build a
            resilient, circular supply chain.
          </p>

          {/* =========================================
              BUTTONS
          ========================================= */}
          <div
            className={`ch-cta-row reveal-content ${
              isVisible
                ? "reveal-content-visible"
                : ""
            }`}
            style={{
              transitionDelay: "1650ms",
            }}
          >

            <a
              href="#"
              className="ch-btn ch-btn-primary"
            >
              Explore Urban Mining

              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line
                  x1="5"
                  y1="12"
                  x2="19"
                  y2="12"
                />

                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>

            <a
              href="#"
              className="ch-btn ch-btn-ghost"
            >
              Talk to Us
            </a>

          </div>

          {/* =========================================
              TRUST
          ========================================= */}
          <div
            className={`ch-trust reveal-content ${
              isVisible
                ? "reveal-content-visible"
                : ""
            }`}
            style={{
              transitionDelay: "1800ms",
            }}
          >

            <div className="ch-avatars">

              <span className="ch-a1" />
              <span className="ch-a2" />
              <span className="ch-a3" />
              <span className="ch-a4" />

            </div>

            <p>
              Trusted by leading OEMs, recyclers,
              and innovators

              <span className="ch-pulse" />
            </p>

          </div>

        </div>

        {/* =========================================
            RIGHT ORBIT
        ========================================= */}
        <div
          className={`ch-right reveal-orbit ${
            isVisible
              ? "reveal-orbit-visible"
              : ""
          }`}
          style={{
            transitionDelay: "500ms",
          }}
        >

          <OrbitStage
            scrollSpeed={scrollSpeed}
          />

        </div>

      </section>

      <style>{CSS}</style>
    </div>
  );
}


/* =============================================
   ORBIT STAGE
============================================= */

function OrbitStage({ scrollSpeed }) {
  return (
    <div
      className="ch-orbit-stage"
      style={{
        "--scroll-speed": scrollSpeed,
      }}
    >

      {/* ORBIT LINES */}
      <svg
        className="ch-orbit-svg"
        viewBox="0 0 100 100"
      >

        <ellipse
          cx="50"
          cy="50"
          rx="41"
          ry="25.4"
          transform="rotate(-18 50 50)"
        />

        <ellipse
          cx="50"
          cy="50"
          rx="38"
          ry="22"
          transform="rotate(12 50 50)"
        />

        <ellipse
          cx="50"
          cy="50"
          rx="40"
          ry="28"
          transform="rotate(-6 50 50)"
        />

      </svg>

      {/* CENTER */}
      <div className="ch-center-core">

        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
        >

          <path d="M6 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4zM14 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />

        </svg>

      </div>

      {/* NICKEL */}
      <Planet
        orbitClass="ch-orbit1"
        ballClass="ch-ni"
        src="images/nickel2.jpeg"
        label=""
        scrollSpeed={scrollSpeed}
      />

      {/* LITHIUM */}
      <Planet
        orbitClass="ch-orbit2"
        ballClass="ch-li"
        src="images/lithium2.jpeg"
        label=""
        scrollSpeed={scrollSpeed}
      />

      {/* COPPER */}
      <Planet
        orbitClass="ch-orbit3"
        ballClass="ch-cu"
        src="images/copper2.jpeg"
        label=""
        scrollSpeed={scrollSpeed}
      />

    </div>
  );
}


/* =============================================
   PLANET
============================================= */

function Planet({
  orbitClass,
  ballClass,
  src,
  label,
  scrollSpeed,
}) {
  return (
    <div
      className={`${orbitClass} ch-path`}
      style={{
        "--scroll-speed": scrollSpeed,
      }}
    >

      <div className="ch-spin">

        <div className="ch-pos">

          <div className="ch-counter">

            <div
              className={`ch-planet ${ballClass}`}
            >
              <img
                className="ch-planet-img"
                src={src}
                alt={label}
              />
            </div>

            <div className="ch-label">
              {label}
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}


/* =============================================
   CSS
============================================= */

const CSS = `

.circulogy-hero{

  --bg:#04120f;
  --teal:#2fd9b8;
  --text:#eef6f3;
  --muted:#a9c4bd;

  position:relative;

  background:
    radial-gradient(
      ellipse at 78% 40%,
      #0a2b25 0%,
      var(--bg) 55%
    ),
    var(--bg);

  font-family:
    'Inter',
    system-ui,
    -apple-system,
    Segoe UI,
    Roboto,
    Helvetica,
    Arial,
    sans-serif;

  color:var(--text);

  overflow:hidden;

  min-height:100vh;

  padding-top:
    env(
      safe-area-inset-top,
      0px
    );

  padding-bottom:
    env(
      safe-area-inset-bottom,
      0px
    );
}

.circulogy-hero *{
  box-sizing:border-box;
}


/* =============================================
   LETTER REVEAL
============================================= */

.horizontal-letter{

  display:inline-block;

  opacity:0;

  transform:
    scaleX(0);

  transform-origin:
    left center;

  transition:
    opacity 500ms ease,
    transform 750ms
      cubic-bezier(
        0.22,
        1,
        0.36,
        1
      );

}


.horizontal-letter-visible{

  opacity:1;

  transform:
    scaleX(1);

}


/* =============================================
   CONTENT REVEAL
============================================= */

.reveal-content{

  opacity:0;

  transform:
    scaleX(0);

  transform-origin:
    left center;

  transition:
    opacity 700ms ease,
    transform 900ms
      cubic-bezier(
        0.22,
        1,
        0.36,
        1
      );

}


.reveal-content-visible{

  opacity:1;

  transform:
    scaleX(1);

}


/* =============================================
   ORBIT REVEAL
============================================= */

.reveal-orbit{

  opacity:0;

  transform:
    translateX(80px)
    scale(.92);

  transition:
    opacity 1000ms ease,
    transform 1200ms
      cubic-bezier(
        0.22,
        1,
        0.36,
        1
      );

}


.reveal-orbit-visible{

  opacity:1;

  transform:
    translateX(0)
    scale(1);

}


/* =============================================
   STARFIELD
============================================= */

.ch-stars{

  position:absolute;

  inset:0;

  z-index:0;

  pointer-events:none;

  width:100%;
  height:100%;

}


/* =============================================
   HERO GRID
============================================= */

.ch-hero{

  position:relative;

  z-index:1;

  max-width:1400px;

  margin:0 auto;

  min-height:100vh;

  display:grid;

  grid-template-columns:
    1.05fr 1fr;

  align-items:center;

  gap:2rem;

  padding:
    4rem 4vw;

}


/* =============================================
   MOBILE
============================================= */

@media (max-width:920px){

  .ch-hero{

    grid-template-columns:1fr;

    padding:
      3rem 6vw;

  }

}


/* =============================================
   BADGE
============================================= */

.ch-badge{

  display:inline-flex;

  align-items:center;

  gap:.55rem;

  border:
    1px solid
    rgba(47,217,184,.35);

  border-radius:999px;

  padding:
    .5rem 1rem;

  font-size:.72rem;

  letter-spacing:.14em;

  color:var(--teal);

  background:
    rgba(47,217,184,.05);

  margin-bottom:2rem;

}


.ch-dot{

  width:7px;
  height:7px;

  border-radius:50%;

  background:var(--teal);

  box-shadow:
    0 0 10px
    var(--teal);

}


/* =============================================
   HEADING
============================================= */

.ch-h1{

  font-size:
    clamp(
      2.4rem,
      5vw,
      4.2rem
    );

  line-height:1.02;

  font-weight:700;

  margin:
    0 0 1.6rem 0;

  letter-spacing:
    -0.02em;

}


.ch-grad{

  display:block;

  background:
    linear-gradient(
      90deg,
      #2fd9b8,
      #7fe9d3
    );

  -webkit-background-clip:text;

  background-clip:text;

  color:transparent;

}


/* =============================================
   TEXT
============================================= */

.ch-sub{

  font-size:1.3rem;

  font-weight:500;

  margin:
    0 0 1rem 0;

}


.ch-desc{

  max-width:46ch;

  color:var(--muted);

  line-height:1.65;

  font-size:1.02rem;

  margin:
    0 0 2.4rem 0;

}


/* =============================================
   BUTTONS
============================================= */

.ch-cta-row{

  display:flex;

  gap:.9rem;

  flex-wrap:wrap;

  margin-bottom:3.2rem;

}


.ch-btn{

  display:inline-flex;

  align-items:center;

  gap:.6rem;

  padding:
    .95rem 1.6rem;

  border-radius:999px;

  font-weight:600;

  font-size:.98rem;

  text-decoration:none;

  cursor:pointer;

  border:
    1px solid transparent;

  transition:
    transform .15s ease,
    box-shadow .15s ease;

}


.ch-btn:hover{

  transform:
    translateY(-2px);

}


.ch-btn-primary{

  background:
    linear-gradient(
      90deg,
      #2fd9b8,
      #25c2a4
    );

  color:#04120f;

  box-shadow:
    0 10px 30px -10px
    rgba(47,217,184,.55);

}


.ch-btn-primary:hover{

  box-shadow:
    0 14px 34px -8px
    rgba(47,217,184,.7);

}


.ch-btn-primary svg{

  transition:
    transform .15s ease;

}


.ch-btn-primary:hover svg{

  transform:
    translateX(3px);

}


.ch-btn-ghost{

  background:transparent;

  color:var(--text);

  border-color:
    rgba(255,255,255,.18);

}


.ch-btn-ghost:hover{

  border-color:
    rgba(255,255,255,.4);

}


/* =============================================
   TRUST
============================================= */

.ch-trust{

  display:flex;

  align-items:center;

  gap:1rem;

}


.ch-avatars{

  display:flex;

}


.ch-avatars span{

  width:34px;
  height:34px;

  border-radius:50%;

  border:
    2px solid
    var(--bg);

  margin-left:-10px;

}


.ch-avatars span:first-child{

  margin-left:0;

}


.ch-a1{

  background:#5a6b68;

}


.ch-a2{

  background:#6f7a76;

}


.ch-a3{

  background:#8b8f86;

}


.ch-a4{

  background:#c9b98a;

}


.ch-trust p{

  margin:0;

  color:var(--muted);

  font-size:.9rem;

  display:flex;

  align-items:center;

  gap:.5rem;

}


.ch-pulse{

  width:6px;
  height:6px;

  border-radius:50%;

  background:var(--teal);

  box-shadow:
    0 0 8px
    var(--teal);

  animation:
    ch-pulse 2s
    ease-in-out
    infinite;

}


@keyframes ch-pulse{

  0%,100%{
    opacity:1;
  }

  50%{
    opacity:.3;
  }

}


/* =============================================
   ORBIT STAGE
============================================= */

.ch-orbit-stage{

  position:relative;

  width:100%;

  aspect-ratio:1/1;

  max-width:640px;

  margin:0 auto;

}


/* =============================================
   ORBIT LINES
============================================= */

.ch-orbit-svg{

  position:absolute;

  inset:0;

  width:100%;
  height:100%;

}


.ch-orbit-svg ellipse{

  fill:none;

  stroke:
    rgba(47,217,184,.35);

  stroke-width:1;

}


/* =============================================
   CENTER CORE
============================================= */

.ch-center-core{

  position:absolute;

  top:50%;
  left:50%;

  width:15%;
  height:15%;

  transform:
    translate(-50%,-50%);

  border-radius:50%;

  background:
    radial-gradient(
      circle at 40% 35%,
      #0d3b34,
      #04120f 70%
    );

  border:
    1px solid
    rgba(47,217,184,.5);

  display:flex;

  align-items:center;

  justify-content:center;

  box-shadow:
    0 0 40px
    rgba(47,217,184,.25),

    inset 0 0 20px
    rgba(47,217,184,.15);

  z-index:5;

}


.ch-center-core svg{

  width:34%;

  stroke:
    var(--teal);

}


/* =============================================
   ORBIT PATH
============================================= */

.ch-path{

  position:absolute;

  inset:0;

}


.ch-spin{

  position:absolute;

  inset:0;

  transform-origin:
    50% 50%;

}


.ch-pos{

  position:absolute;

  top:50%;
  left:50%;

}


.ch-counter{

  position:absolute;

  top:50%;
  left:50%;

}


/* =============================================
   PLANET
============================================= */

.ch-planet{

  position:relative;

  transform:
    translate(-50%,-50%);

  border-radius:50%;

  overflow:hidden;

  background:
    radial-gradient(
      circle at 32% 28%,
      #1c433c,
      #0a201b 100%
    );

  border:
    1px solid
    rgba(47,217,184,.25);

  box-shadow:
    0 0 30px -4px
    rgba(47,217,184,.35),

    0 8px 24px
    rgba(0,0,0,.5);

}


.ch-planet-img{

  display:block;

  width:100%;
  height:100%;

  object-fit:cover;

  border-radius:50%;

}


.ch-label{

  position:absolute;

  top:100%;
  left:50%;

  transform:
    translate(-50%,10px);

  font-size:.85rem;

  color:var(--muted);

  white-space:nowrap;

}


/* =============================================
   ORBIT 1 - NICKEL
============================================= */

.ch-orbit1.ch-path{

  transform:
    rotate(-18deg)
    scaleY(.62);

}


.ch-orbit1 .ch-spin{

  animation:
    ch-spin 16s
    linear
    infinite;

  animation-duration:
    calc(
      16s /
      var(--scroll-speed, 1)
    );

}


.ch-orbit1 .ch-pos{

  transform:
    translate(41%,0);

}


.ch-orbit1 .ch-counter{

  animation:
    ch-counterspin 16s
    linear
    infinite;

  animation-duration:
    calc(
      16s /
      var(--scroll-speed, 1)
    );

  transform:
    scaleY(1.61)
    rotate(18deg);

}


.ch-ni{

  width:
    min(30vw,150px);

  height:
    min(30vw,150px);

}


/* =============================================
   ORBIT 2 - LITHIUM
============================================= */

.ch-orbit2.ch-path{

  transform:
    rotate(12deg)
    scaleY(.58);

}


.ch-orbit2 .ch-spin{

  animation:
    ch-spin 22s
    linear
    infinite reverse;

  animation-duration:
    calc(
      22s /
      var(--scroll-speed, 1)
    );

}


.ch-orbit2 .ch-pos{

  transform:
    translate(-38%,4%);

}


.ch-orbit2 .ch-counter{

  animation:
    ch-counterspin2 22s
    linear
    infinite;

  animation-duration:
    calc(
      22s /
      var(--scroll-speed, 1)
    );

  transform:
    scaleY(1.72)
    rotate(-12deg);

}


.ch-li{

  width:
    min(27vw,132px);

  height:
    min(27vw,132px);

}


/* =============================================
   ORBIT 3 - COPPER
============================================= */

.ch-orbit3.ch-path{

  transform:
    rotate(-6deg)
    scaleY(.7);

}


.ch-orbit3 .ch-spin{

  animation:
    ch-spin 28s
    linear
    infinite;

  animation-duration:
    calc(
      28s /
      var(--scroll-speed, 1)
    );

}


.ch-orbit3 .ch-pos{

  transform:
    translate(40%,10%);

}


.ch-orbit3 .ch-counter{

  animation:
    ch-counterspin3 28s
    linear
    infinite;

  animation-duration:
    calc(
      28s /
      var(--scroll-speed, 1)
    );

  transform:
    scaleY(1.43)
    rotate(6deg);

}


.ch-cu{

  width:
    min(29vw,142px);

  height:
    min(29vw,142px);

}


/* =============================================
   ROTATION
============================================= */

@keyframes ch-spin{

  from{
    transform:rotate(0deg);
  }

  to{
    transform:rotate(360deg);
  }

}


@keyframes ch-counterspin{

  from{

    transform:
      scaleY(1.61)
      rotate(18deg)
      rotate(0deg);

  }

  to{

    transform:
      scaleY(1.61)
      rotate(18deg)
      rotate(-360deg);

  }

}


@keyframes ch-counterspin2{

  from{

    transform:
      scaleY(1.72)
      rotate(-12deg)
      rotate(0deg);

  }

  to{

    transform:
      scaleY(1.72)
      rotate(-12deg)
      rotate(360deg);

  }

}


@keyframes ch-counterspin3{

  from{

    transform:
      scaleY(1.43)
      rotate(6deg)
      rotate(0deg);

  }

  to{

    transform:
      scaleY(1.43)
      rotate(6deg)
      rotate(-360deg);

  }

}


/* =============================================
   REDUCED MOTION
============================================= */

@media (prefers-reduced-motion: reduce){

  .ch-spin,
  .ch-counter,
  .ch-pulse,
  .horizontal-letter,
  .reveal-content,
  .reveal-orbit{

    animation:none !important;

    transition:none !important;

    opacity:1 !important;

    transform:none !important;

  }

}


/* =============================================
   MOBILE ORBIT
============================================= */

@media (max-width:920px){

  .ch-orbit-stage{

    max-width:560px;

  }

}


@media (max-width:600px){

  .ch-orbit-stage{

    max-width:430px;

  }

  .ch-h1{

    font-size:
      clamp(
        2.3rem,
        12vw,
        3.5rem
      );

  }

  .ch-sub{

    font-size:1.1rem;

  }

  .ch-desc{

    font-size:.95rem;

  }

  .ch-trust{

    align-items:flex-start;

  }

  .ch-trust p{

    font-size:.78rem;

  }

}

`;