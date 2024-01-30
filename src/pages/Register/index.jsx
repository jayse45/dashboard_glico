import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const RegisterPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-montserrat sm:gap-10 md:gap-10 gap-[98px] items-start mx-auto md:pr-10 sm:pr-5 pr-[168px] w-full">
        <div className="bg-blue_gray-100_01 flex flex-col items-center justify-start md:px-5 w-[58%] md:w-full">
          <div className="h-[1024px] relative w-full">
            <Img
              className="h-[1024px] m-auto object-cover w-full"
              src="images/img_rectangle7.png"
              alt="rectangleSeven"
            />
            <div className="absolute flex flex-col md:gap-10 gap-[451px] items-start justify-start left-[16%] top-[12%] w-[62%]">
              <Img
                className="h-[27px] md:h-auto object-cover w-[47%]"
                src="images/img_logoinverted1.png"
                alt="logoinvertedOne"
              />
              <Text
                className="leading-[42.00px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-full"
                size="txtMontserratSemiBold32"
              >
                Bringing Quality Healthcare to Your Loved Ones in Ghana
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[52px] items-center justify-start md:mt-0 mt-[150px] w-auto sm:w-full">
          <a
            href="javascript:"
            className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-full"
          >
            <Text size="txtMontserratSemiBold24">Sign Up</Text>
          </a>
          <div className="flex flex-col gap-9 items-start justify-start w-auto sm:w-full">
            <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
              <Input
                name="frameTwentyNine"
                placeholder="Full name"
                className="p-0 placeholder:text-black-900 text-[15px] text-left w-full"
                wrapClassName="border border-blue_gray-100_02 border-solid w-full"
                type="text"
                shape="square"
                color="white_A700"
                size="sm"
                variant="fill"
              ></Input>
              <Input
                name="frameThirtyNine"
                placeholder="Email"
                className="p-0 placeholder:text-black-900 text-[15px] text-left w-full"
                wrapClassName="border border-blue_gray-100_02 border-solid w-full"
                type="email"
                shape="square"
                color="white_A700"
                size="sm"
                variant="fill"
              ></Input>
              <Input
                name="frameForty"
                placeholder="Phone"
                className="p-0 placeholder:text-black-900 text-[15px] text-left w-full"
                wrapClassName="border border-blue_gray-100_02 border-solid w-full"
                type="number"
                shape="square"
                color="white_A700"
                size="sm"
                variant="fill"
              ></Input>
              <Input
                name="frameThirty"
                placeholder="Gender"
                className="p-0 placeholder:text-black-900 text-[15px] text-left w-full"
                wrapClassName="border border-blue_gray-100_02 border-solid flex w-[444px] sm:w-full"
                suffix={
                  <Img
                    className="mt-px mb-auto h-5 ml-[35px]"
                    src="images/img_checkmark_blue_gray_900_01.svg"
                    alt="checkmark"
                  />
                }
                shape="square"
                color="white_A700"
                size="xs"
                variant="fill"
              ></Input>
              <Input
                name="frameFortyOne"
                placeholder="Password"
                className="p-0 placeholder:text-black-900 text-[15px] text-left w-full"
                wrapClassName="border border-blue_gray-100_02 border-solid w-full"
                type="password"
                shape="square"
                color="white_A700"
                size="sm"
                variant="fill"
              ></Input>
              <Input
                name="frameFortyTwo"
                placeholder="Repeat Password"
                className="p-0 placeholder:text-black-900 text-[15px] text-left w-full"
                wrapClassName="border border-blue_gray-100_02 border-solid w-full"
                type="password"
                shape="square"
                color="white_A700"
                size="xs"
                variant="fill"
              ></Input>
            </div>
            <Text
              className="leading-[20.00px] max-w-[444px] md:max-w-full text-[15px] text-black-900"
              size="txtMontserratRegular15"
            >
              <span className="text-black-900 font-montserrat text-left font-normal">
                By submitting this form you agree to our{" "}
              </span>
              <a
                href="javascript:"
                className="text-deep_purple-A700 font-montserrat text-left font-normal underline"
              >
                Terms & Conditions
              </a>
            </Text>
            <Button
              className="cursor-pointer text-[15px] text-center w-[444px]"
              shape="square"
              color="indigo_800"
              size="lg"
              variant="fill"
            >
              Register
            </Button>
          </div>
          <div className="flex flex-row gap-[9px] items-start justify-start w-auto">
            <Text
              className="text-[15px] text-black-900 w-auto"
              size="txtMontserratRegular15"
            >
              Already an existing user?
            </Text>
            <a className="text-[15px] text-deep_purple-A700 underline w-auto">
              <Text
                className="common-pointer"
                size="txtMontserratRegular15DeeppurpleA700"
                onClick={() => navigate("/")}
              >
                Log in
              </Text>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
