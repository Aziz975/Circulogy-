import React from "react";
import Logo from "./Logo";
import NavLinks from "./Navlinks";
import ContactButton from "./ContactButton";


function Navbar() {
  return (
    <header className="h-[100px] bg-[#151515] text-white">
      <div
        className="
          mx-auto
          flex
          h-full
          max-w-[1600px]
          items-center
          justify-between
          px-10
          xl:px-[72px]
        "
      >
        {/* Logo */}
        <Logo />

        {/* Navigation */}
        <NavLinks />

        {/* Contact Button */}
        <ContactButton />
      </div>
    </header>
  );
}

export default Navbar;