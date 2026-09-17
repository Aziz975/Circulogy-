
import { Mail, MapPin, Building2, Share2, ShieldCheck, ArrowRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const contactItems = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "info@circulogy.com",
  },
  {
    icon: MapPin,
    label: "HEADQUARTERS",
    value: "Noida, Uttar Pradesh",
  },
  {
    icon: Building2,
    label: "REGISTERED OFFICE",
    value: "Meerut, Uttar Pradesh",
  },
  {
    icon: Share2,
    label: "COLLECTION NETWORK",
    value: "Pan-India Partner Network",
  },
  {
    icon: ShieldCheck,
    label: "RECOGNITION",
    value: "DPIIT-Recognised DeepTech Startup",
  },
  {
    icon: null,
    label: "LINKEDIN",
    value: "linkedin.com/company/circulogy",
    linkedin: true,
  },
];

function ContactItem({ icon: Icon, label, value, linkedin }) {
  return (
    <div className="flex items-center gap-6 border-b border-white/[0.09] py-[18px] last:border-b-0 sm:gap-7">
      <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[13px] border border-[#0b5b50] bg-[#073b35] text-[#27b5a2] shadow-[inset_0_0_20px_rgba(31,184,161,0.08)]">
        {linkedin ? (
          <span className="text-[23px] font-bold leading-none">in</span>
        ) : (
          <Icon size={23} strokeWidth={1.8} />
        )}
      </div>

      <div className="min-w-0">
        <p className="text-[10px] font-semibold tracking-[0.16em] text-[#6e7d79] sm:text-[11px]">
          {label}
        </p>
        <p className="mt-[5px] truncate text-[15px] font-semibold text-[#f0f5f3] sm:text-[16px]">
          {value}
        </p>
      </div>
    </div>
  );
}

export default function WorkWithUs() {
const [visible, setVisible] = useState(false);
const leftRef = useRef(null);

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
      threshold: 0.2,
    }
  );

  const element = leftRef.current;

  if (element) {
    observer.observe(element);
  }

  return () => {
    if (element) {
      observer.unobserve(element);
    }
    observer.disconnect();
  };
}, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020b09] px-5 py-16 text-white sm:px-8 md:px-12 lg:px-[9.3vw] lg:py-[105px]">
      
      {/* Grid Background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(112,166,158,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(112,166,158,0.07)_1px,transparent_1px)] bg-[size:54px_54px]" />

      {/* Left Green Glow */}
      <div className="pointer-events-none absolute -left-[180px] top-[-180px] h-[480px] w-[480px] rounded-full bg-[#0a9d87]/20 blur-[120px]" />

      {/* Right Green Glow */}
      <div className="pointer-events-none absolute -right-[190px] bottom-[-170px] h-[500px] w-[500px] rounded-full bg-[#0b8e7b]/20 blur-[130px]" />

      {/* Subtle Center Glow */}
      <div className="pointer-events-none absolute left-[45%] top-[30%] h-[450px] w-[450px] rounded-full bg-[#0a7769]/[0.04] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-[1305px]">
        
        <div className="grid items-center gap-14 lg:grid-cols-[52%_48%] lg:gap-10 xl:grid-cols-[51%_49%]">

          {/* ================= LEFT CONTENT ================= */}
        <div ref={leftRef} className="max-w-[690px]">
  {/* Section Label */}
  <div className={`mb-8 flex items-center gap-3 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}>
    <span className="h-[2px] w-[34px] bg-[#2db8a4]" />
    <span className="text-[11px] font-bold tracking-[0.2em] text-[#31b7a4] sm:text-[12px]">
      WORK WITH US
    </span>
  </div>

  {/* Main Heading */}
  <h1 className={`text-[48px] font-bold leading-[0.98] tracking-[-0.055em] text-white transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] sm:text-[58px] md:text-[66px] lg:text-[62px] xl:text-[70px] ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
    Building India's
    <br />
    <span className="text-white">critical </span>
    <span className="text-[#24b6a2]">mineral</span>
    <br />
    <span className="text-white">and </span>
    <span className="text-[#24b6a2]">rare earth</span>
    <br />
    independence,
    <br />
    together.
  </h1>

  {/* Description */}
  <p className={`mt-8 max-w-[650px] text-[15px] leading-[1.65] text-[#bdc8c5] transition-all duration-1000 delay-200 ease-[cubic-bezier(0.22,1,0.36,1)] sm:text-[17px] sm:leading-[1.65] ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
    Whether you are an investor, an industrial buyer of critical
    minerals or rare earths, an EPR-obligated producer, or a policy
    partner — Circulogy is building the infrastructure India needs.
  </p>

  {/* Buttons */}
  <div className={`mt-9 flex flex-wrap gap-4 transition-all duration-1000 delay-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
    <a href="#contact" className="group inline-flex h-[63px] items-center justify-center gap-3 rounded-full bg-[#29b6a2] px-8 text-[15px] font-bold text-white shadow-[0_10px_35px_rgba(25,181,160,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#32c3ae] hover:shadow-[0_15px_45px_rgba(25,181,160,0.3)] sm:px-9">
      Get in Touch
      <ArrowRight size={19} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-1" />
    </a>

    <a href="#solutions" className="inline-flex h-[63px] items-center justify-center rounded-full border border-white/[0.18] bg-white/[0.13] px-8 text-[15px] font-semibold text-[#edf2f0] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.18] sm:px-9">
      Explore Solutions
    </a>
  </div>
</div>


          {/* ================= RIGHT CONTACT CARD ================= */}
          <div className="relative">
            
            {/* Outer Glow */}
            <div className="absolute -inset-4 rounded-[30px] bg-[#17a996]/[0.03] blur-2xl" />

            <div className="relative overflow-hidden rounded-[24px] border border-white/[0.15] bg-[#101917]/95 px-7 py-7 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-9 sm:py-8 lg:px-9 lg:py-8">
              
              {/* Card Heading */}
              <h2 className="text-[13px] font-bold tracking-[0.19em] text-[#2bb5a2] sm:text-[14px]">
                CONNECT WITH CIRCULOGY
              </h2>

              {/* Contact Items */}
              <div className="mt-5">
                {contactItems.map((item) => (
                  <ContactItem key={item.label} {...item} />
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Optional bottom decorative grid fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-[#020b09] to-transparent" />

    </section>
  );
}