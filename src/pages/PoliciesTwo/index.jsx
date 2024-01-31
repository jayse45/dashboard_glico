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
                className="sm:text-2xl md:text-[26px] text-[28px] text-indigo-800 w-full"
                size="txtMontserratBold28"
              >
                GLICO Sunkwa Health Plan
              </Text>
              <Text
                className="text-blue_gray-300 text-sm tracking-[0.50px] w-full"
                size="txtMontserratSemiBold14"
              >
                Policy Management System
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-4 items-start justify-start max-w-[1450px] mt-4 md:px-5 w-full">
            <div className="bg-white-A700 border border-gray-300 border-solid flex sm:flex-1 flex-col gap-[54px] h-[178px] md:h-auto items-start justify-between rounded-[12px] w-auto sm:w-full">
              <div className="border-b border-blue_gray-50 border-solid flex flex-row gap-[7px] items-center justify-start p-3 w-[447px] sm:w-full">
                <Text
                  className="flex-1 text-[15px] text-blue_gray-400 tracking-[0.50px] w-auto"
                  size="txtMontserratSemiBold15"
                >
                  Total Policies Sold Out
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
                  options={weekOptionsList}
                  isSearchable={false}
                  placeholder="Week"
                  shape="round"
                  color="gray_100"
                  size="xs"
                  variant="fill"
                />
              </div>
              <div className="flex flex-col items-end justify-start p-3 w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-indigo-800 tracking-[0.50px] uppercase w-auto"
                  size="txtMontserratBold32Indigo800"
                >
                  20,0115
                </Text>
              </div>
              <div className="flex flex-row items-center justify-between p-3 w-full">
                <Text
                  className="text-blue_gray-400 text-sm tracking-[0.50px] w-auto"
                  size="txtMontserratMedium14"
                >
                  4952 last week
                </Text>
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
            </div>
            <List
              className="md:flex-1 sm:flex-col flex-row gap-4 grid md:grid-cols-1 grid-cols-2 w-[67%] md:w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-[54px] h-[278px] md:h-auto items-start justify-between rounded-[12px] w-auto sm:w-full">
                <div className="border-b border-blue_gray-50 border-solid flex flex-row gap-[7px] items-center justify-start p-3 w-[447px] sm:w-full">
                  <Text
                    className="flex-1 text-[15px] text-blue_gray-400 tracking-[0.50px] w-auto"
                    size="txtMontserratSemiBold15"
                  >
                    Under 60
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
                <div className="flex flex-col items-end justify-start p-3 w-full">
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
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-[54px] h-[278px] md:h-auto items-start justify-between rounded-[12px] w-auto sm:w-full">
                <div className="border-b border-blue_gray-50 border-solid flex flex-row gap-[7px] items-center justify-start p-3 w-[447px] sm:w-full">
                  <Text
                    className="flex-1 text-[15px] text-blue_gray-400 tracking-[0.50px] w-auto"
                    size="txtMontserratSemiBold15"
                  >
                    60 & Above
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
                    options={weekOptionsList2}
                    isSearchable={false}
                    placeholder="Week"
                    shape="round"
                    color="gray_100"
                    size="xs"
                    variant="fill"
                  />
                </div>
                <div className="flex flex-col items-end justify-start p-3 w-full">
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
        </div>
      </div>
    </>
  );
};

export default PoliciesTwoPage;
