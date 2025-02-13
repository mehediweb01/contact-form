import React, { ButtonHTMLAttributes, FC } from "react";
type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
export const Button: FC<IButtonProps> = (props) => {
  const { children, className, ...others } = props;
  return (
    <button
      {...others}
      type="button"
      className={`${className} text-sm px-5 py-1 rounded-full bg-slate-300/20 hover:bg-secondary/30 transition-all delay-100 active:bg-gradient-to-r from-secondary to-primary`}
    >
      {children}
    </button>
  );
};
