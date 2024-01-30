import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  fill: {
    indigo_800: "bg-indigo-800",
    gray_100: "bg-gray-100 text-blue_gray-300",
    white_A700: "bg-white-A700 text-black-900",
    blue_gray_50_01: "bg-blue_gray-50_01 text-blue_gray-500",
  },
  outline: {
    gray_300: "border border-gray-300 border-solid text-blue_gray-300",
  },
};
const shapes = { square: "rounded-none", round: "rounded-[12px]" };
const sizes = {
  xs: "p-3",
  sm: "pb-[15px] pt-[13px] px-[13px]",
  md: "pb-[15px] pt-[19px] px-[15px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      size = "",
      variant = "",
      color = "",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant]?.[color] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "indigo_800",
    "gray_100",
    "white_A700",
    "blue_gray_50_01",
    "gray_300",
  ]),
};

export { Input };
