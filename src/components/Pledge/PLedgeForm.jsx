import React, { useEffect, useRef, useState } from "react";

export default function PledgeForm() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(false);

          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              setVisible(true);
            });
          });
        } else {
          setVisible(false);
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`w-full bg-[#f5faf7] px-6 py-16 md:px-12 lg:px-20 ${visible ? "animate-[fadeUp_0.9s_ease-out_forwards]" : "opacity-0"}`}
    >
      <div className="mx-auto grid max-w-[1700px] overflow-hidden rounded-2xl bg-[#071211] lg:grid-cols-2">

        {/* LEFT */}
        <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">

          <p className="mb-6 text-xs font-bold uppercase tracking-[3px] text-[#35a98f]">
            Signature
          </p>

          <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            “Because caring for
            <br />
            Earth is not optional
            <br />
            it’s a responsibility we
            <br />
            all share.”
          </h2>

          <p className="mt-8 max-w-lg text-sm leading-6 text-gray-400">
            I hereby pledge to follow the sustainability practices outlined
            above and commit to acting responsibly for a greener,
            circular future.
          </p>

        </div>

        {/* RIGHT FORM */}
        <div className="bg-[#101615] p-8 md:p-12 lg:p-16">

          <form className="flex flex-col">

            <label className="mb-2 text-xs font-semibold uppercase tracking-[2px] text-white">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="mb-6 h-12 rounded-md border border-[#34403e] bg-[#181e1d] px-4 text-sm text-white outline-none placeholder:text-gray-600 focus:border-[#35a98f]"
            />

            <label className="mb-2 text-xs font-semibold uppercase tracking-[2px] text-white">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="mb-6 h-12 rounded-md border border-[#34403e] bg-[#181e1d] px-4 text-sm text-white outline-none placeholder:text-gray-600 focus:border-[#35a98f]"
            />

            <label className="mb-2 text-xs font-semibold uppercase tracking-[2px] text-white">
              Signature
            </label>

            <input
              type="text"
              placeholder="Type your signature"
              className="mb-7 h-12 rounded-md border border-[#34403e] bg-[#181e1d] px-4 text-sm text-white outline-none placeholder:text-gray-600 focus:border-[#35a98f]"
            />

            <button
              type="submit"
              className="animate-bounce rounded-full bg-[#35a98f] py-3 text-sm font-bold text-white transition hover:bg-[#258c75]"
            >
              I Pledge Now
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}