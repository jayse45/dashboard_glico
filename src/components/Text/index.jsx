import React from "react";

const sizeClasses = {
  txtMontserratBold15: "font-bold font-montserrat",
  txtMontserratMedium15Green800: "font-medium font-montserrat",
  txtMontserratMedium15Bluegray700: "font-medium font-montserrat",
  txtMontserratRegular15DeeppurpleA700: "font-montserrat font-normal",
  txtMontserratSemiBold15WhiteA700: "font-montserrat font-semibold",
  txtMontserratBold32: "font-bold font-montserrat",
  txtMontserratMedium28: "font-medium font-montserrat",
  txtMontserratSemiBold15: "font-montserrat font-semibold",
  txtMontserratBold15Bluegray700: "font-bold font-montserrat",
  txtMontserratSemiBold14: "font-montserrat font-semibold",
  txtMontserratSemiBold15Bluegray30001: "font-montserrat font-semibold",
  txtMontserratRegular15Green800: "font-montserrat font-normal",
  txtMontserratSemiBold12: "font-montserrat font-semibold",
  txtMontserratSemiBold32: "font-montserrat font-semibold",
  txtMontserratRomanSemiBold15: "font-montserrat font-semibold",
  txtMontserratBold32Indigo800: "font-bold font-montserrat",
  txtMontserratMedium14Bluegray70001: "font-medium font-montserrat",
  txtMontserratSemiBold14Bluegray600: "font-montserrat font-semibold",
  txtMontserratRegular15: "font-montserrat font-normal",
  txtMontserratMedium12Bluegray500: "font-medium font-montserrat",
  txtMontserratSemiBold14Bluegray500: "font-montserrat font-semibold",
  txtMontserratRomanSemiBold15Bluegray90001: "font-montserrat font-semibold",
  txtMontserratMedium15Bluegray30001: "font-medium font-montserrat",
  txtMontserratSemiBold15Bluegray80001: "font-montserrat font-semibold",
  txtMontserratMedium10: "font-medium font-montserrat",
  txtMontserratMedium12: "font-medium font-montserrat",
  txtMontserratSemiBold15Bluegray800: "font-montserrat font-semibold",
  txtMontserratMedium14: "font-medium font-montserrat",
  txtMontserratBold20: "font-bold font-montserrat",
  txtMontserratSemiBold15Bluegray300: "font-montserrat font-semibold",
  txtMontserratBold20Indigo800: "font-bold font-montserrat",
  txtMontserratRomanSemiBold15Deeporange500: "font-montserrat font-semibold",
  txtMontserratMedium15: "font-medium font-montserrat",
  txtInterSemiBold14: "font-inter font-semibold",
  txtMontserratMedium15Bluegray90001: "font-medium font-montserrat",
  txtMontserratSemiBold15Bluegray90001: "font-montserrat font-semibold",
  txtMontserratSemiBold15Bluegray900: "font-montserrat font-semibold",
  txtInterSemiBold18: "font-inter font-semibold",
  txtMontserratSemiBold24: "font-montserrat font-semibold",
  txtMontserratBold28: "font-bold font-montserrat",
  txtMontserratSemiBold14Bluegray90001: "font-montserrat font-semibold",
  txtMontserratMedium14Bluegray500: "font-medium font-montserrat",
  txtMontserratSemiBold20: "font-montserrat font-semibold",
  txtMontserratSemiBold15Indigo800: "font-montserrat font-semibold",
  txtMontserratMedium14Bluegray300: "font-medium font-montserrat",
  txtMontserratRegular15Bluegray500: "font-montserrat font-normal",
  txtInterSemiBold20: "font-inter font-semibold",
  txtMontserratRomanSemiBold20: "font-montserrat font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
