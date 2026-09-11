import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      {/* Logo Icon */}
      <div className="relative h-[32px] w-[52px]">
        <span
          className="
            absolute
            left-0
            top-[4px]
            h-[23px]
            w-[29px]
            rounded-full
            border-[5px]
            border-white
            border-r-transparent
          "
        />

        <span
          className="
            absolute
            right-0
            top-[4px]
            h-[23px]
            w-[29px]
            rounded-full
            border-[5px]
            border-white
            border-l-transparent
          "
        />
      </div>

      {/* Logo Text */}
      <span className="text-[28px] font-extrabold tracking-[-1.5px]">
        Circulogy
      </span>
    </Link>
  );
}

export default Logo;