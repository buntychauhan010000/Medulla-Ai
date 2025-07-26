import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function PrimaryButton({
  label = "Try for Free", // default text
  className = "",
  icon = true,
  ...props
}) {
  const defaultClasses =
    "flex gap-2 items-center text-xs sm:text-sm md:text-base text-white bg-sky-900 py-3 px-6 rounded-full hover:bg-sky-800 transition";

  return (
    <button className={`${defaultClasses} ${className}`} {...props}>
      {label}
      {icon && (
        <span>
          <FaArrowRightLong />
        </span>
      )}
    </button>
  );
}

export default PrimaryButton;
