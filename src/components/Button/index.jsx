import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-none", round: "rounded-lg" };
const variants = {
  fill: {
    lime_50: "bg-lime-50 text-yellow-800",
    gray_50: "bg-gray-50 text-blue_gray-300",
    indigo_50_02: "bg-indigo-50_02",
    gray_50_01: "bg-gray-50_01 text-blue_gray-700",
    blue_gray_50_01: "bg-blue_gray-50_01 text-blue_gray-500",
    deep_orange_50: "bg-deep_orange-50 text-red-800",
    blue_50: "bg-blue-50",
    orange_50: "bg-orange-50 text-orange-A200",
    indigo_800_0f: "bg-indigo-800_0f text-indigo-800",
    indigo_50_01: "bg-indigo-50_01 text-indigo-A200",
    indigo_800: "bg-indigo-800 text-white-A700",
    green_50: "bg-green-50 text-green-900",
  },
  outline: {
    indigo_800: "border border-indigo-800 border-solid text-indigo-800",
  },
};
const sizes = {
  xs: "p-0.5",
  sm: "p-[5px]",
  md: "pl-[7px] pr-2 py-2",
  lg: "p-3",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "lime_50",
    "gray_50",
    "indigo_50_02",
    "gray_50_01",
    "blue_gray_50_01",
    "deep_orange_50",
    "blue_50",
    "orange_50",
    "indigo_800_0f",
    "indigo_50_01",
    "indigo_800",
    "green_50",
  ]),
};

export { Button };
