import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to="/"
      className="
        flex
        items-center
        gap-1.5
        sm:gap-2
      "
    >
      {/* Logo Icon */}
      <div
        className="
          relative
          h-[25px]
          w-[41px]

          sm:h-[28px]
          sm:w-[46px]

          md:h-[30px]
          md:w-[49px]

          lg:h-[32px]
          lg:w-[52px]
        "
      >
        {/* Left Circle */}
        <span
          className="
            absolute
            left-0
            top-[3px]
            h-[19px]
            w-[24px]
            rounded-full
            border-[4px]
            border-white
            border-r-transparent

            sm:top-[3px]
            sm:h-[21px]
            sm:w-[26px]
            sm:border-[4px]

            md:h-[22px]
            md:w-[28px]

            lg:top-[4px]
            lg:h-[23px]
            lg:w-[29px]
            lg:border-[5px]
          "
        />

        {/* Right Circle */}
        <span
          className="
            absolute
            right-0
            top-[3px]
            h-[19px]
            w-[24px]
            rounded-full
            border-[4px]
            border-white
            border-l-transparent

            sm:top-[3px]
            sm:h-[21px]
            sm:w-[26px]
            sm:border-[4px]

            md:h-[22px]
            md:w-[28px]

            lg:top-[4px]
            lg:h-[23px]
            lg:w-[29px]
            lg:border-[5px]
          "
        />
      </div>

      {/* Logo Text */}
      <span
        className="
          whitespace-nowrap
          text-[21px]
          font-extrabold
          tracking-[-1px]

          sm:text-[23px]
          sm:tracking-[-1.2px]

          md:text-[25px]
          md:tracking-[-1.3px]

          lg:text-[28px]
          lg:tracking-[-1.5px]
        "
      >
        Circulogy
      </span>
    </Link>
  );
}

export default Logo;