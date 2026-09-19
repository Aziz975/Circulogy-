import React from "react";

const solutions = [
  "For OEMs",
  "For Importers",
  "For Brand Owners",
  "For Recyclers",
  "For Refurbishers",
  "EPR Compliance",
  "Circular Economy",
];

const quickLinks = [
  "Home",
  "Services",
  "Technology",
  "Resources",
  "Pledge",
  "Career",
  "Contact Us",
];

const company = [
  "About Us",
  "Our Impact",
  "Investor Relations",
  "News & Press",
  "Blog",
  "Events",
  "Partnerships",
];

const policies = [
  "Privacy Policy",
  "Terms & Conditions",
  "Cookies",
  "Disclaimer",
  "Accessibility",
];

const FooterColumn = ({ title, links }) => {
  return (
    <div>
      <h3 className="text-[13px] font-semibold tracking-[0.22em] text-white">{title}</h3>

      <div className="mt-3 mb-7 h-[2px] w-[27px] bg-[#20d8b1]"></div>

      <ul className="space-y-[17px]">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="group flex items-center gap-3 text-[15px] leading-[20px] text-[#b8c1c1] transition-all duration-300 hover:text-white">
              <svg className="h-[17px] w-[17px] shrink-0 text-[#19d5b0] transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m9 18 6-6-6-6" />
              </svg>
              <span>{link}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SocialIcon = ({ type }) => {
  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" className="h-[19px] w-[19px]" fill="currentColor">
        <path d="M6.5 8.3H3.2V21h3.3V8.3ZM4.85 3A2.02 2.02 0 1 0 4.85 7.04 2.02 2.02 0 0 0 4.85 3ZM21 13.72c0-3.83-2.04-5.61-4.76-5.61-2.2 0-3.18 1.21-3.73 2.06V8.3H9.18V21h3.33v-6.29c0-1.66.31-3.27 2.37-3.27 2.03 0 2.06 1.9 2.06 3.38V21H21v-7.28Z" />
      </svg>
    );
  }

  if (type === "x") {
    return (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M5 4.5 18.8 19.5M18.2 4.5 5.2 19.5" />
      </svg>
    );
  }

  if (type === "youtube") {
    return (
      <svg viewBox="0 0 24 24" className="h-[19px] w-[19px]" fill="currentColor">
        <path d="M23.5 6.2a3.05 3.05 0 0 0-2.14-2.16C19.47 3.5 12 3.5 12 3.5s-7.47 0-9.36.54A3.05 3.05 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3.05 3.05 0 0 0 2.14 2.16c1.89.54 9.36.54 9.36.54s7.47 0 9.36-.54a3.05 3.05 0 0 0 2.14-2.16c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.75v-7.5l6.3 3.75-6.3 3.75Z" />
      </svg>
    );
  }

  if (type === "instagram") {
    return (
      <svg viewBox="0 0 24 24" className="h-[19px] w-[19px]" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="4.5" />
        <circle cx="12" cy="12" r="4.1" />
        <circle cx="17.7" cy="6.4" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return null;
};




const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-[#061313] font-[Inter,sans-serif] text-white">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_15%,rgba(13,87,78,0.22),transparent_48%)]"></div>

        <div className="absolute -right-[150px] top-[20px] h-[620px] w-[420px] rotate-[18deg] rounded-[45%] bg-[radial-gradient(ellipse_at_center,#295b57_0%,#0b2928_48%,transparent_70%)] opacity-20"></div>

        <div className="absolute -bottom-[190px] -left-[140px] h-[360px] w-[360px] rounded-full border border-[#16423e]/70"></div>

        <div className="absolute -bottom-[155px] -left-[105px] h-[290px] w-[290px] rounded-full border border-[#16423e]/60"></div>

        <div className="absolute -bottom-[120px] -left-[70px] h-[220px] w-[220px] rounded-full border border-[#16423e]/50"></div>

        <div className="absolute -bottom-[300px] left-[48%] h-[430px] w-[600px] rounded-[50%] border border-[#123b38]/70"></div>

        <div className="absolute -bottom-[275px] left-[50%] h-[370px] w-[520px] rounded-[50%] border border-[#123b38]/60"></div>

        <div className="absolute left-[8%] top-[68%] h-[130px] w-[260px] opacity-20 [background-image:radial-gradient(#2b7770_1px,transparent_1px)] [background-size:9px_9px]"></div>
      </div>

      {/* Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1487px] px-5 pt-[50px] pb-[40px] sm:px-8 lg:px-[52px] lg:pt-[65px]">

        {/* CTA */}
        <section className="relative flex min-h-[194px] items-center overflow-hidden rounded-[19px] border border-[#3d9d91] bg-[#071918]/90 px-6 sm:px-8 lg:px-[45px]">

          {/* Decorative circles */}
          <div className="relative mr-[65px] hidden h-[145px] w-[145px] shrink-0 items-center justify-center lg:flex">

            <div className="absolute inset-0 rounded-full border border-[#1b7168]/30"></div>

            <div className="absolute inset-[13px] rounded-full border border-[#1b7168]/45"></div>

            <div className="absolute inset-[26px] rounded-full border border-[#26d5b4]"></div>

            <div className="h-[82px] w-[82px] rounded-full border border-[#22d5b5]"></div>
          </div>

          {/* CTA Text */}
          <div className="flex-1 py-8">

            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#b5c0bf]">
              A CLEANER, BRIGHTER TOMORROW
            </p>

            <h2 className="text-[28px] font-medium leading-[1.2] tracking-[-0.035em] sm:text-[34px] lg:text-[42px]">
              Be part of the <span className="text-[#65d9c2]">circular movement</span>
            </h2>

            <p className="mt-2 text-[15px] leading-[23px] text-[#aeb9b8] sm:text-[16px]">
              Let's build a more sustainable future together.
            </p>
          </div>

          {/* CTA Button */}
          <div className="hidden flex-col items-end gap-[17px] lg:flex">

            <a href="#" className="flex h-[60px] min-w-[292px] animate-bounce items-center justify-between rounded-full border border-[#4ebaa8] bg-[#118b79] px-[25px] text-[16px] font-medium transition-all duration-300 hover:bg-[#159c87] hover:shadow-[0_0_30px_rgba(27,216,179,0.15)]">
              <span>Partner with Circulogy</span>

              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
                <path d="M5 19 19 5M9 5h10v10" />
              </svg>
            </a>

            <p className="pr-1 text-[9px] font-semibold uppercase tracking-[0.38em] text-[#a8b5b3]">
              IDEAS / PEOPLE / REAL IMPACT
            </p>
          </div>

          {/* Mobile CTA Button */}
          <a href="#" className="absolute bottom-5 right-5 flex h-[45px] w-[45px] items-center justify-center rounded-full border border-[#4ebaa8] bg-[#118b79] lg:hidden">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
              <path d="M5 19 19 5M9 5h10v10" />
            </svg>
          </a>
        </section>

        {/* Footer Grid */}
        <section className="mt-[68px] grid grid-cols-1 gap-[50px] md:grid-cols-3 lg:grid-cols-[1.18fr_1fr_1fr_1fr_1fr] lg:gap-[52px]">

          {/* Brand */}
          <div className="border-b border-[#49605f]/50 pb-[45px] md:border-b-0 md:border-r md:pr-[42px] lg:pb-0">

            {/* Logo */}
            <a href="#" className="inline-flex items-center gap-[13px]">

              <div className="relative h-[30px] w-[55px]">

                <svg viewBox="0 0 56 30" className="h-[30px] w-[55px]" fill="none">
                  <path d="M27 15C27 21.1 22.1 26 16 26S5 21.1 5 15 9.9 4 16 4s11 4.9 11 11Z" stroke="white" strokeWidth="3.5" />
                  <path d="M29 15c0-6.1 4.9-11 11-11s11 4.9 11 11-4.9 11-11 11S29 21.1 29 15Z" stroke="white" strokeWidth="3.5" />
                </svg>

              </div>

              <div className="flex items-start">

                <span className="text-[27px] font-semibold leading-none tracking-[-0.055em]">
                  Circulogy
                </span>

                <span className="ml-[3px] mt-[-2px] text-[7px]">
                  TM
                </span>

              </div>
            </a>

            {/* Tagline */}
            <p className="mt-2 text-[13px] font-medium uppercase tracking-[0.13em] text-[#c7cfce]">
              ACT CIRCULAR NOW
            </p>

            {/* Description */}
            <p className="mt-[27px] max-w-[280px] text-[15px] leading-[23px] text-[#aeb9b8]">
              A tech-enabled platform connecting and empowering every player in India's circular economy.
            </p>

            {/* Email */}
            <a href="mailto:info@circulogy.com" className="mt-[30px] flex items-center gap-4 text-[14px] text-[#bfc8c7] transition-colors duration-300 hover:text-white">

              <svg viewBox="0 0 24 24" className="h-[21px] w-[21px] text-[#20d8b1]" fill="none" stroke="currentColor" strokeWidth="1.7">
                <rect x="3" y="5" width="18" height="14" rx="1.5"></rect>
                <path d="m4 7 8 6 8-6"></path>
              </svg>

              <span>info@circulogy.com</span>
            </a>

            {/* Phone */}
            <a href="tel:+910000000000" className="mt-4 flex items-center gap-4 text-[14px] text-[#bfc8c7] transition-colors duration-300 hover:text-white">

              <svg viewBox="0 0 24 24" className="h-[21px] w-[21px] text-[#20d8b1]" fill="none" stroke="currentColor" strokeWidth="1.7">
                <path d="M6.5 3.5 9 3l2.5 5-2.3 1.8a14.7 14.7 0 0 0 5.5 5.5l1.8-2.3 5 2.5-.5 2.5a3 3 0 0 1-3.3 2.4C10.3 19.4 4.6 13.7 3.6 6.8A3 3 0 0 1 6.5 3.5Z"></path>
              </svg>

              <span>+91 00000 00000</span>
            </a>

            {/* Social Icons */}
            <div className="mt-7 flex gap-[14px]">

              <a href="#" aria-label="LinkedIn" className="flex h-[45px] w-[45px] items-center justify-center rounded-full border border-[#435352] text-[#e5e9e8] transition-all duration-300 hover:border-[#20d8b1] hover:text-[#20d8b1]">
                <SocialIcon type="linkedin" />
              </a>

              <a href="#" aria-label="X" className="flex h-[45px] w-[45px] items-center justify-center rounded-full border border-[#435352] text-[#e5e9e8] transition-all duration-300 hover:border-[#20d8b1] hover:text-[#20d8b1]">
                <SocialIcon type="x" />
              </a>

              <a href="#" aria-label="YouTube" className="flex h-[45px] w-[45px] items-center justify-center rounded-full border border-[#435352] text-[#e5e9e8] transition-all duration-300 hover:border-[#20d8b1] hover:text-[#20d8b1]">
                <SocialIcon type="youtube" />
              </a>

              <a href="#" aria-label="Instagram" className="flex h-[45px] w-[45px] items-center justify-center rounded-full border border-[#435352] text-[#e5e9e8] transition-all duration-300 hover:border-[#20d8b1] hover:text-[#20d8b1]">
                <SocialIcon type="instagram" />
              </a>

            </div>
          </div>

          {/* Columns */}
          <FooterColumn title="SOLUTIONS" links={solutions} />

          <FooterColumn title="QUICK LINKS" links={quickLinks} />

          <FooterColumn title="COMPANY" links={company} />

          <FooterColumn title="POLICIES" links={policies} />

        </section>

        {/* Bottom */}
        <div className="mt-[63px] flex flex-col items-start justify-between gap-5 border-t border-[#63706f]/60 pt-[32px] sm:flex-row sm:items-center">

          <p className="text-[12px] leading-[18px] text-[#9ba7a5]">
            © 2024 Circulogy. All rights reserved.
          </p>

          <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#a6b0ae]">
            CIRCULAR TODAY. BRIGHTER TOMORROW.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;