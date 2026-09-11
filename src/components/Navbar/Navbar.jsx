import React from "react";
import Logo from "./Logo";
import NavLinks from "./Navlinks";
import ContactButton from "./ContactButton";

function Navbar() {
  return (
    <header
      className="
        h-[70px]
        bg-[#151515]
        text-white

        sm:h-[80px]
        md:h-[90px]
        lg:h-[100px]
      "
    >
      <div
        className="
          mx-auto
          flex
          h-full
          w-full
          max-w-[1600px]
          items-center
          justify-between

          px-4
          sm:px-6
          md:px-8
          lg:px-10
          xl:px-[72px]
        "
      >
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center">
          <NavLinks />
        </div>

        {/* Contact Button */}
        <div className="hidden lg:flex">
          <ContactButton />
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="
            flex
            items-center
            justify-center
            rounded-md
            p-2
            text-white
            transition
            hover:bg-white/10

            lg:hidden
          "
          aria-label="Open menu"
        >
          <span className="text-[28px] leading-none">☰</span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;