import React from "react";

export const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-1.5 py-7 sm:py-14">
      <h1 className="text-5xl md:text-[65px] sm:text-[81px] font-bold text-foreground">
        Get In{" "}
        <span className="bg-gradient-to-r from-white from-20% via-secondary via-75% to-primary to-95% bg-clip-text text-transparent">
          Touch
        </span>
      </h1>
      <p className="text-foreground text-xl tracking-[2%] leading-7">
        Contact me!
      </p>
    </div>
  );
};
