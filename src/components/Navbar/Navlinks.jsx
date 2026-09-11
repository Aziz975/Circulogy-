import React from "react";
import { Link } from "react-router-dom";

function NavLinks() {
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Services",
      path: "/services",
      dropdown: true,
    },
    {
      name: "Technology",
      path: "/technology",
      dropdown: true,
    },
    {
      name: "Resources",
      path: "/resources",
      dropdown: true,
    },
    {
      name: "Pledge",
      path: "/pledge",
    },
    {
      name: "Career",
      path: "/career",
    },
    {
      name: "About Us",
      path: "/about",
    },
  ];

  return (
    <nav className="flex items-center gap-[42px]">
      {navLinks.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className="
            flex
            items-center
            gap-1
            whitespace-nowrap
            text-[17px]
            font-bold
            text-white
            transition-colors
            duration-200
            hover:text-[#35a99b]
          "
        >
          <span>{item.name}</span>

          {item.dropdown && (
            <span className="text-[18px] font-normal">+</span>
          )}
        </Link>
      ))}
    </nav>
  );
}

export default NavLinks;