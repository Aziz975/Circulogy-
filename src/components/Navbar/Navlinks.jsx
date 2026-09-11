import React from "react";
import { Link } from "react-router-dom";

function NavLinks() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services", dropdown: true },
    { name: "Technology", path: "/technology", dropdown: true },
    { name: "Resources", path: "/resources", dropdown: true },
    { name: "Pledge", path: "/pledge" },
    { name: "Career", path: "/career" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <nav className="flex flex-col items-start gap-5 lg:flex-row lg:items-center lg:gap-8 xl:gap-[42px]">
      {navLinks.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className="flex w-full items-center gap-1 text-[16px] font-bold text-white transition-colors duration-200 hover:text-[#35a99b] lg:w-auto lg:text-[16px] xl:text-[17px]"
        >
          <span>{item.name}</span>

          {item.dropdown && (
            <span className="text-[17px] font-normal">+</span>
          )}
        </Link>
      ))}
    </nav>
  );
}

export default NavLinks;