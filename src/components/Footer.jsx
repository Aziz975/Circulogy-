import React from "react";

const Footer = () => {
  return (
    <footer className="min-h-screen w-full bg-[#151515] px-5 py-10 text-white sm:px-8 md:px-10 lg:px-14 xl:px-20">

      <div className="mx-auto w-full max-w-[1600px]">

        {/* ================= MAIN FOOTER ================= */}
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-16">

          {/* ================= LEFT PART ================= */}
          <div className="w-full lg:max-w-[800px]">

            {/* Main Heading */}
            <h1 className="text-4xl font-bold leading-[1.15] sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">

              Be part of the

              <br />

              <span className="inline-flex items-center justify-center rounded-full bg-white px-5 py-1 text-green-500 sm:px-6 sm:py-2">
                circular
              </span>

              <br />

              Movement

            </h1>

            {/* ================= FOOTER LINKS ================= */}
            <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-12 lg:mt-20 lg:gap-16">

              {/* Quick Links */}
              <div>
                <h3 className="mb-4 text-sm font-bold tracking-wide">
                  QUICK LINKS
                </h3>

                <div className="flex flex-col gap-2 text-sm text-gray-400">
                  <a href="#" className="transition hover:text-white">
                    Services
                  </a>

                  <a href="#" className="transition hover:text-white">
                    Home
                  </a>

                  <a href="#" className="transition hover:text-white">
                    Technology
                  </a>

                  <a href="#" className="transition hover:text-white">
                    Resources
                  </a>

                  <a href="#" className="transition hover:text-white">
                    Pledge
                  </a>

                  <a href="#" className="transition hover:text-white">
                    Career
                  </a>

                  <a href="#" className="transition hover:text-white">
                    About Us
                  </a>
                </div>
              </div>

              {/* Solutions */}
              <div>
                <h3 className="mb-4 text-sm font-bold tracking-wide">
                  SOLUTIONS
                </h3>

                <div className="flex flex-col gap-2 text-sm text-gray-400">

                  <a href="#" className="transition hover:text-white">
                    Services
                  </a>

                  <a href="#" className="transition hover:text-white">
                    For OEMs
                  </a>

                  <a href="#" className="transition hover:text-white">
                    For Importers
                  </a>

                  <a href="#" className="transition hover:text-white">
                    For Brand Owners
                  </a>

                  <a href="#" className="transition hover:text-white">
                    For Recyclers
                  </a>

                  <a href="#" className="transition hover:text-white">
                    For Refurbishers
                  </a>

                </div>
              </div>

              {/* Policies */}
              <div>
                <h3 className="mb-4 text-sm font-bold tracking-wide">
                  POLICIES
                </h3>

                <div className="flex flex-col gap-2 text-sm text-gray-400">

                  <a href="#" className="transition hover:text-white">
                    Services
                  </a>

                  <a href="#" className="transition hover:text-white">
                    Terms and Conditions
                  </a>

                  <a href="#" className="transition hover:text-white">
                    Privacy Policy
                  </a>

                  <a href="#" className="transition hover:text-white">
                    Disclaimer
                  </a>

                  <a href="#" className="transition hover:text-white">
                    Contact Us
                  </a>

                </div>
              </div>

            </div>
          </div>

          {/* ================= RIGHT PART ================= */}
          <div className="flex w-full flex-col gap-10 lg:w-[360px] lg:gap-16">

            {/* Partner Button */}
            <div className="lg:mt-16">

              <button
                type="button"
                className="inline-flex w-full items-center justify-center rounded-full bg-green-500 px-6 py-3 text-base font-medium text-white transition duration-300 hover:bg-green-400 sm:w-auto sm:px-10 sm:py-4 sm:text-lg"
              >
                Partner with Circulogy
              </button>

            </div>

            {/* Company Card */}
            <div className="flex w-full flex-col gap-7 rounded-xl border border-gray-600 p-5 sm:p-6">

              <h2 className="text-2xl font-semibold">
                Circulogy
              </h2>

              <p className="w-full text-sm leading-6 text-gray-400 sm:text-base">
                At Circulogy, we empower recyclers and buyers with a
                transparent, trusted marketplace designed to maximize value
                and foster growth.
              </p>

              <p className="text-sm sm:text-base">
                +91451554662
              </p>

              <p className="break-all text-sm sm:text-base">
                support@circulogy.com
              </p>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;