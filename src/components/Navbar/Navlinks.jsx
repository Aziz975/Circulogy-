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
    <nav
      className="
        flex
        items-center
        gap-5

        sm:gap-6
        md:gap-7
        lg:gap-8
        xl:gap-[42px]
      "
    >
      {navLinks.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className="
            flex
            items-center
            gap-1
            whitespace-nowrap
            text-[13px]
            font-bold
            text-white
            transition-colors
            duration-200
            hover:text-[#35a99b]

            sm:text-[14px]
            md:text-[15px]
            lg:text-[16px]
            xl:text-[17px]
          "
        >
          <span>{item.name}</span>

          {item.dropdown && (
            <span
              className="
                text-[14px]
                font-normal

                sm:text-[15px]
                md:text-[16px]
                lg:text-[17px]
                xl:text-[18px]
              "
            >
              +
            </span>
          )}
        </Link>
      ))}
    </nav>
  );
}

export default NavLinks;