import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  logo?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      logo,
      placeholder,
      children,
      disabled,
      type = "text",
      ...props
    },
    ref
  ) => {
    return (
      <div className="bg-[#E8ECEF] rounded-xl w-full flex items-center px-4">
        <span>{logo}</span>
        <input
          className={twMerge(
            "bg-transparent text-sm font-medium outline-none w-full ring-0 border-none rounded-xl py-3.5 pl-3",
            className
          )}
          placeholder={placeholder}
          type={type}
          disabled={disabled}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
