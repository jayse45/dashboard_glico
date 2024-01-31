import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Navbar, SelectBox, Text } from "components";

const salutationFirstNameLastNameOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const lastNameFirstNameOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const PoliciesOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
       <div className="bg-gray-100 flex flex-row gap-0 font-montserrat items-start justify-start pb-9 w-full">
        <div className="flex items-start justify-end md:mt-0 pt-10 min-w-[400px] h-screen flex-1 mr-0 pr-0">
          <Navbar path="Settings" />
        </div>
        <div className="flex flex-col gap-[31px] items-start justify-start w-full ml-0 pl-0">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="bg-white-A700 flex flex-col gap-7 items-start justify-start max-w-[1440px] p-8 sm:px-5 w-full">
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
          <div className="flex md:flex-col flex-row gap-[39px] items-start justify-start ml-8 md:ml-[0] mt-10 md:px-5 w-full md:w-full">
            <div className="flex flex-col items-start justify-start w-[221px]">
              <div className="flex flex-col items-center justify-start p-3 rounded-lg w-full">
                <Text
                  className="text-[15px] text-blue_gray-900 tracking-[0.50px] w-auto"
                  size="txtMontserratSemiBold15Bluegray900"
                >
                  General
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start p-3 rounded-lg w-full">
                <Text
                  className="text-[15px] text-blue_gray-300_01 tracking-[0.50px] w-auto"
                  size="txtMontserratMedium15Bluegray30001"
                >
                  Policy Info
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start p-3 rounded-lg w-full">
                <Text
                  className="text-[15px] text-blue_gray-300_01 tracking-[0.50px] w-auto"
                  size="txtMontserratSemiBold15Bluegray30001"
                >
                  Data Administration
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start p-3 rounded-lg w-full">
                <Text
                  className="text-[15px] text-blue_gray-300_01 tracking-[0.50px] w-auto"
                  size="txtMontserratMedium15Bluegray30001"
                >
                  Notifications
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start p-3 rounded-lg w-full">
                <Text
                  className="text-[15px] text-blue_gray-300_01 tracking-[0.50px] w-auto"
                  size="txtMontserratMedium15Bluegray30001"
                >
                  Delete Account
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start p-3 rounded-lg w-full">
                <Text
                  className="text-[15px] text-blue_gray-300_01 tracking-[0.50px] w-auto"
                  size="txtMontserratMedium15Bluegray30001"
                >
                  Billing and Subscription
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start md:mt-0 mt-1 w-[72%] md:w-full">
              <div className="flex sm:flex-col flex-row font-inter gap-[17px] items-start justify-start w-full md:w-full">
                <Text
                  className="bg-blue-50 flex h-16 items-center justify-center mb-[15px] outline outline-[1px] outline-white-A700 rounded-[50%] text-center text-gray-900 text-xl tracking-[-0.40px] w-16"
                  size="txtInterSemiBold20"
                >
                  GH
                </Text>
                <div className="flex flex-col font-montserrat items-start justify-start w-full sm:w-full">
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <Text
                      className="text-[15px] text-blue_gray-700 w-auto"
                      size="txtMontserratBold15Bluegray700"
                    >
                      Guy Hawkins
                    </Text>
                    <Button
                      className="border border-solid border-yellow-800 cursor-pointer font-medium min-w-[101px] rounded-[12px] text-center text-xs"
                      color="lime_50"
                      size="xs"
                      variant="fill"
                    >
                      Administrator
                    </Button>
                  </div>
                  <Text
                    className="mt-0.5 text-blue_gray-300 text-xs"
                    size="txtMontserratMedium12"
                  >
                    Position
                  </Text>
                  <div className="flex flex-row gap-6 items-start justify-start mt-[18px] w-[396px] sm:w-full">
                    <Text
                      className="flex-1 text-blue_gray-300 text-xs w-auto"
                      size="txtMontserratMedium12"
                    >
                      willie.jennings@example.com
                    </Text>
                    <Text
                      className="flex-1 text-blue_gray-300 text-xs w-auto"
                      size="txtMontserratMedium12"
                    >
                      +233 25 236 2354
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="bg-gray-300 h-px mt-[42px] w-full" />
              <Text
                className="mt-[33px] text-[15px] text-blue_gray-900_01 tracking-[0.50px]"
                size="txtMontserratSemiBold15Bluegray90001"
              >
                Local Information
              </Text>
              <div className="flex flex-col font-montserrat gap-2 items-start justify-start mt-[18px] w-[460px] sm:w-full">
                <div className="flex flex-row gap-3 items-center justify-center w-full">
                  <Text
                    className="flex-1 text-blue_gray-300 text-right text-sm w-auto"
                    size="txtMontserratMedium14Bluegray300"
                  >
                    Language
                  </Text>
                  <Text
                    className="flex-1 text-blue_gray-900_01 text-sm w-auto"
                    size="txtMontserratSemiBold14Bluegray90001"
                  >
                    English(United States)
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-center justify-center w-full">
                  <Text
                    className="flex-1 text-blue_gray-300 text-right text-sm w-auto"
                    size="txtMontserratMedium14Bluegray300"
                  >
                    Country Local
                  </Text>
                  <Text
                    className="flex-1 text-blue_gray-900_01 text-sm w-auto"
                    size="txtMontserratSemiBold14Bluegray90001"
                  >
                    United States
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-center justify-center w-full">
                  <Text
                    className="flex-1 text-blue_gray-300 text-right text-sm w-auto"
                    size="txtMontserratMedium14Bluegray300"
                  >
                    Date Format
                  </Text>
                  <Text
                    className="flex-1 text-blue_gray-900_01 text-sm w-auto"
                    size="txtMontserratSemiBold14Bluegray90001"
                  >
                    MM/DD/YYYY
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-3 items-center justify-center w-full">
                  <Text
                    className="flex-1 text-blue_gray-300 text-right text-sm w-auto"
                    size="txtMontserratMedium14Bluegray300"
                  >
                    Time Format
                  </Text>
                  <Text
                    className="flex-1 text-blue_gray-900_01 text-sm w-auto"
                    size="txtMontserratSemiBold14Bluegray90001"
                  >
                    (GMT 0:0) Ghana Mean Time (Africa/Accra)
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-center justify-center w-full">
                  <Text
                    className="flex-1 text-blue_gray-300 text-right text-sm w-auto"
                    size="txtMontserratMedium14Bluegray300"
                  >
                    Number Format
                  </Text>
                  <Text
                    className="flex-1 text-blue_gray-900_01 text-sm w-auto"
                    size="txtMontserratSemiBold14Bluegray90001"
                  >
                    123,456.789
                  </Text>
                </div>
              </div>
              <Line className="bg-gray-300 h-px mt-[57px] w-full" />
              <div className="flex flex-col font-montserrat gap-2 items-start justify-start mt-6 w-auto sm:w-full">
                <Text
                  className="text-[15px] text-blue_gray-900_01 tracking-[0.50px] w-auto"
                  size="txtMontserratSemiBold15Bluegray90001"
                >
                  Display Name Format & Preferences
                </Text>
                <Text
                  className="text-blue_gray-300 text-sm w-auto"
                  size="txtMontserratMedium14Bluegray300"
                >
                  It applies to fullname in column of list view, lookup fields
                  and user name
                </Text>
              </div>
              <div className="flex flex-col font-montserrat gap-2 items-start justify-start mt-[29px] w-[460px] sm:w-full">
                <div className="flex sm:flex-col flex-row gap-3 items-center justify-center w-full">
                  <Text
                    className="flex-1 text-blue_gray-300 text-right text-sm w-auto"
                    size="txtMontserratMedium14Bluegray300"
                  >
                    Name Format
                  </Text>
                  <SelectBox
                    className="sm:flex-1 font-semibold text-left text-sm tracking-[0.50px] w-[72%] sm:w-full"
                    placeholderClassName="text-blue_gray-900_01"
                    indicator={
                      <Img
                        className="h-4 w-4"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="frame361_One"
                    options={salutationFirstNameLastNameOptionsList}
                    isSearchable={false}
                    placeholder="Salutation, First Name, Last Name"
                    shape="round"
                    color="gray_300"
                    size="sm"
                    variant="outline"
                  />
                </div>
                <div className="flex sm:flex-col flex-row gap-3 items-center justify-center w-full">
                  <Text
                    className="flex-1 leading-[20.00px] max-w-[119px] md:max-w-full text-blue_gray-300 text-right text-sm"
                    size="txtMontserratMedium14Bluegray300"
                  >
                    Set Order Preference
                  </Text>
                  <SelectBox
                    className="sm:flex-1 font-semibold text-left text-sm tracking-[0.50px] w-[72%] sm:w-full"
                    placeholderClassName="text-blue_gray-900_01"
                    indicator={
                      <Img
                        className="h-4 w-4"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="frame361_Two"
                    options={lastNameFirstNameOptionsList}
                    isSearchable={false}
                    placeholder="Last Name, First Name"
                    shape="round"
                    color="gray_300"
                    size="sm"
                    variant="outline"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default PoliciesOnePage;
