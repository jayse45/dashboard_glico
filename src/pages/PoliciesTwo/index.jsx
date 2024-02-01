import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Navbar, SelectBox, Text } from "components";

const weekOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const weekOptionsList1 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const weekOptionsList2 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const PoliciesTwoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex flex-row gap-0 font-montserrat items-start justify-start pb-9 w-full">
        <div className="flex items-start justify-end md:mt-0 pt-10 min-w-[400px] h-screen flex-1 mr-0 pr-0">
          <Navbar path="Policies" />
        </div>
        <div className="flex flex-col gap-[31px] items-start justify-start w-full ml-0 pl-0">
          <div className="bg-white-A700 flex flex-col gap-7 items-start justify-start max-w-[1450px] p-8 sm:px-5 w-full">
            <div className="flex flex-col gap-[13px] items-start justify-start max-w-[1376px] mx-auto md:px-5 w-full">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-indigo-800 w-full uppercase"
                size="txtMontserratBold28"
              >
                Policies
              </Text>
              <Text
                className="text-blue_gray-300 text-sm tracking-[0.50px] w-full"
                size="txtMontserratSemiBold14"
              >
                Policies Overview
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-4 items-start justify-start max-w-[1450px] mt-4 md:px-5 w-full">
            <List
              className="md:flex-1 sm:flex-col flex-row gap-24 grid md:grid-cols-1 grid-cols-2 w-full md:w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-[10px] md:h-auto items-start justify-start rounded-[12px] w-auto sm:w-full">
                <div className="border-b border-blue_gray-50 border-solid flex flex-row gap-[7px] items-center justify-between p-3 w-full sm:w-full">
                  <Text
                    className="flex-1 text-[18px] font-bold text-indigo-800 tracking-[0.50px] w-auto"
                    size="txtMontserratSemiBold15"
                  >
                    Under 60 Overview
                  </Text>
                  <SelectBox
                    className="border border-blue_gray-50 border-solid font-medium text-[15px] text-left tracking-[0.15px] w-[22%] sm:w-full"
                    placeholderClassName="text-blue_gray-700"
                    indicator={
                      <Img
                        className="h-4 w-4"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="frame231"
                    options={weekOptionsList1}
                    isSearchable={false}
                    placeholder="Week"
                    shape="round"
                    color="gray_100"
                    size="xs"
                    variant="fill"
                  />
                </div>
                <div className="flex flex-row items-center justify-start p-3 w-full">
                <Text
                  className="text-blue_gray-100 text-xl tracking-[1.50px] w-auto"
                  size="txtMontserratBold20"
                >
                  ¢
                </Text>
                <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-indigo-800 tracking-[0.50px] uppercase w-auto"
                    size="txtMontserratBold32Indigo800"
                  >
                    20,0115
                  </Text>
                </div>
                <div className="flex flex-col gap-3 items-start justify-start p-3 w-full">
                  <div className="flex flex-row items-start justify-between w-full">
                    <div className="flex flex-row gap-2 items-center justify-start w-[169px]">
                      <Text
                        className="text-blue_gray-900_01 text-sm tracking-[0.50px]"
                        size="txtMontserratSemiBold14Bluegray90001"
                      >
                        20
                      </Text>
                      <Text
                        className="text-blue_gray-300 text-sm tracking-[0.50px] w-auto"
                        size="txtMontserratSemiBold14"
                      >
                        Enhanced
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[59px] px-1"
                      leftIcon={
                        <Img
                          className="h-5 mr-1"
                          src="images/img_arrowleft.svg"
                          alt="arrow_left"
                        />
                      }
                      shape="round"
                      color="green_50"
                      variant="fill"
                    >
                      <div className="!text-green-800 font-semibold text-right text-sm tracking-[0.50px]">
                        12%
                      </div>
                    </Button>
                  </div>
                  <Line className="bg-indigo-50 h-px w-full" />
                  <div className="flex flex-row items-start justify-between w-full">
                    <div className="flex flex-row gap-3 items-center justify-start w-[188px]">
                      <Text
                        className="text-blue_gray-900_01 text-sm tracking-[0.50px] w-auto"
                        size="txtMontserratSemiBold14Bluegray90001"
                      >
                        2
                      </Text>
                      <Text
                        className="text-blue_gray-300 text-sm tracking-[0.50px] w-auto"
                        size="txtMontserratSemiBold14"
                      >
                        Enhanced Plus
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[59px] px-1"
                      leftIcon={
                        <Img
                          className="h-5 mr-1"
                          src="images/img_arrowleft.svg"
                          alt="arrow_left"
                        />
                      }
                      shape="round"
                      color="green_50"
                      variant="fill"
                    >
                      <div className="!text-green-800 font-semibold text-right text-sm tracking-[0.50px]">
                        12%
                      </div>
                    </Button>
                  </div>
                  <Line className="bg-indigo-50 h-px w-full" />
                  <div className="flex flex-row items-start justify-between w-full">
                    <div className="flex flex-row gap-2 items-center justify-start w-[164px]">
                      <Text
                        className="text-blue_gray-900_01 text-sm tracking-[0.50px] w-auto"
                        size="txtMontserratSemiBold14Bluegray90001"
                      >
                        12
                      </Text>
                      <Text
                        className="text-blue_gray-300 text-sm tracking-[0.50px] w-auto"
                        size="txtMontserratSemiBold14"
                      >
                        Ultimate
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[59px] px-1"
                      leftIcon={
                        <Img
                          className="h-5 mr-1"
                          src="images/img_arrowright.svg"
                          alt="arrow_right"
                        />
                      }
                      shape="round"
                      color="deep_orange_50"
                      variant="fill"
                    >
                      <div className="font-semibold text-right text-sm tracking-[0.50px]">
                        15%
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-[10px] md:h-auto items-start justify-start rounded-[12px] w-auto sm:w-full">
                <div className="border-b border-blue_gray-50 border-solid flex flex-row gap-[7px] items-center justify-between p-3 w-full sm:w-full">
                  <Text
                    className="flex-1 text-[18px] font-bold text-indigo-800 tracking-[0.50px] w-auto"
                    size="txtMontserratSemiBold15"
                  >
                    60 & Above Overview
                  </Text>
                  <SelectBox
                    className="border border-blue_gray-50 border-solid font-medium text-[15px] text-left tracking-[0.15px] w-[22%] sm:w-full"
                    placeholderClassName="text-blue_gray-700"
                    indicator={
                      <Img
                        className="h-4 w-4"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="frame231"
                    options={weekOptionsList1}
                    isSearchable={false}
                    placeholder="Week"
                    shape="round"
                    color="gray_100"
                    size="xs"
                    variant="fill"
                  />
                </div>
                <div className="flex flex-row items-center justify-start p-3 w-full">
                <Text
                  className="text-blue_gray-100 text-xl tracking-[1.50px] w-auto"
                  size="txtMontserratBold20"
                >
                  ¢
                </Text>
                <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-indigo-800 tracking-[0.50px] uppercase w-auto"
                    size="txtMontserratBold32Indigo800"
                  >
                    20,0115
                  </Text>
                </div>
                <div className="flex flex-col gap-3 items-start justify-start p-3 w-full">
                  <div className="flex flex-row items-start justify-between w-full">
                    <div className="flex flex-row gap-2 items-center justify-start w-[169px]">
                      <Text
                        className="text-blue_gray-900_01 text-sm tracking-[0.50px]"
                        size="txtMontserratSemiBold14Bluegray90001"
                      >
                        20
                      </Text>
                      <Text
                        className="text-blue_gray-300 text-sm tracking-[0.50px] w-auto"
                        size="txtMontserratSemiBold14"
                      >
                        Enhanced
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[59px] px-1"
                      leftIcon={
                        <Img
                          className="h-5 mr-1"
                          src="images/img_arrowleft.svg"
                          alt="arrow_left"
                        />
                      }
                      shape="round"
                      color="green_50"
                      variant="fill"
                    >
                      <div className="!text-green-800 font-semibold text-right text-sm tracking-[0.50px]">
                        12%
                      </div>
                    </Button>
                  </div>
                  <Line className="bg-indigo-50 h-px w-full" />
                  <div className="flex flex-row items-start justify-between w-full">
                    <div className="flex flex-row gap-3 items-center justify-start w-[188px]">
                      <Text
                        className="text-blue_gray-900_01 text-sm tracking-[0.50px] w-auto"
                        size="txtMontserratSemiBold14Bluegray90001"
                      >
                        2
                      </Text>
                      <Text
                        className="text-blue_gray-300 text-sm tracking-[0.50px] w-auto"
                        size="txtMontserratSemiBold14"
                      >
                        Enhanced Plus
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[59px] px-1"
                      leftIcon={
                        <Img
                          className="h-5 mr-1"
                          src="images/img_arrowleft.svg"
                          alt="arrow_left"
                        />
                      }
                      shape="round"
                      color="green_50"
                      variant="fill"
                    >
                      <div className="!text-green-800 font-semibold text-right text-sm tracking-[0.50px]">
                        12%
                      </div>
                    </Button>
                  </div>
                  <Line className="bg-indigo-50 h-px w-full" />
                  <div className="flex flex-row items-start justify-between w-full">
                    <div className="flex flex-row gap-2 items-center justify-start w-[164px]">
                      <Text
                        className="text-blue_gray-900_01 text-sm tracking-[0.50px] w-auto"
                        size="txtMontserratSemiBold14Bluegray90001"
                      >
                        12
                      </Text>
                      <Text
                        className="text-blue_gray-300 text-sm tracking-[0.50px] w-auto"
                        size="txtMontserratSemiBold14"
                      >
                        Ultimate
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[59px] px-1"
                      leftIcon={
                        <Img
                          className="h-5 mr-1"
                          src="images/img_arrowright.svg"
                          alt="arrow_right"
                        />
                      }
                      shape="round"
                      color="deep_orange_50"
                      variant="fill"
                    >
                      <div className="font-semibold text-right text-sm tracking-[0.50px]">
                        15%
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </List>
          </div>
          <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-start justify-start max-w-[1450px] rounded-[12px] w-full">
                <div className="border-b border-blue_gray-50 border-solid flex md:flex-col flex-row gap-[13px] items-start justify-start p-3 w-full">
                  <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="text-[15px] text-indigo-800 tracking-[0.50px] uppercase w-full"
                      size="txtMontserratBold15"
                    >
                      Policy Growth
                    </Text>
                    <div className="flex flex-row gap-1 items-center justify-start w-[303px]">
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[43px]"
                        leftIcon={
                          <Img
                            className="h-2.5 mb-px mr-0.5"
                            src="images/img_arrowleft.svg"
                            alt="arrow_left"
                          />
                        }
                        shape="round"
                        color="green_50"
                        size="xs"
                        variant="fill"
                      >
                        <div className="!text-green-800 font-semibold text-[8px] text-right tracking-[0.50px]">
                          1.2%
                        </div>
                      </Button>
                      <Text
                        className="flex-1 text-blue_gray-300 text-xs w-auto"
                        size="txtMontserratMedium12"
                      >
                        last month
                      </Text>
                    </div>
                  </div>
                  <SelectBox
                    className="border border-blue_gray-50 border-solid md:flex-1 font-medium text-[15px] text-left tracking-[0.15px] w-[14%] md:w-full"
                    placeholderClassName="text-blue_gray-700"
                    indicator={
                      <Img
                        className="h-4 w-4"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="frame231"
                    options={weekOptionsList}
                    isSearchable={false}
                    placeholder="Week"
                    shape="round"
                    color="gray_100"
                    size="xs"
                    variant="fill"
                  />
                </div>
                <div className="flex flex-row gap-2 items-start justify-start p-3 w-full">
                  <Button
                    className="cursor-pointer font-medium min-w-[85px] text-center text-xs tracking-[0.50px]"
                    shape="round"
                    color="gray_50"
                    size="lg"
                    variant="fill"
                  >
                    Under 60
                  </Button>
                  <Button
                    className="cursor-pointer font-medium min-w-[97px] text-center text-xs tracking-[0.50px]"
                    shape="round"
                    color="gray_50"
                    size="lg"
                    variant="fill"
                  >
                    60 & Above
                  </Button>
                </div>
                <Img
                  className="h-[281px] w-full"
                  src="images/img_frame520.svg"
                  alt="frame520"
                />
                <div className="flex flex-col items-start justify-start p-3 w-[454px] sm:w-full">
                  <div className="flex flex-col gap-3 items-start justify-start w-full">
                    <div className="flex flex-row gap-3 items-center justify-start w-[67%] md:w-full">
                      <div className="flex flex-row gap-2 items-center justify-start w-[140px]">
                        <div className="bg-blue-A400 h-2 rounded-[50%] w-2"></div>
                        <Text
                          className="flex-1 text-blue_gray-300 text-xs tracking-[0.50px] w-auto"
                          size="txtMontserratSemiBold12"
                        >
                          Under 60
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-[140px]">
                        <div className="bg-pink-500 h-2 rounded-[50%] w-2"></div>
                        <Text
                          className="flex-1 text-blue_gray-300 text-xs tracking-[0.50px] w-auto"
                          size="txtMontserratSemiBold12"
                        >
                          60 & Above
                        </Text>
                      </div>
                    </div>
                    <List
                      className="sm:flex-col flex-row gap-3 grid sm:grid-cols-1 grid-cols-3 justify-start w-auto sm:w-full"
                      orientation="horizontal"
                    >
                      <div className="flex flex-row gap-2 items-center justify-start w-[140px]">
                        <div className="bg-deep_purple-A200 h-2 rounded-[50%] w-2"></div>
                        <Text
                          className="flex-1 text-blue_gray-300 text-xs tracking-[0.50px] w-auto"
                          size="txtMontserratSemiBold12"
                        >
                          Enhanced Plus
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-[140px]">
                        <div className="bg-orange-A200 h-2 rounded-[50%] w-2"></div>
                        <Text
                          className="flex-1 text-blue_gray-300 text-xs tracking-[0.50px] w-auto"
                          size="txtMontserratSemiBold12"
                        >
                          Ultimate
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-[138px]">
                        <div className="bg-green-A700 h-2 rounded-[50%] w-2"></div>
                        <Text
                          className="flex-1 text-blue_gray-300 text-xs tracking-[0.50px] w-auto"
                          size="txtMontserratSemiBold12"
                        >
                          Enhanced
                        </Text>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </>
  );
};

export default PoliciesTwoPage;
