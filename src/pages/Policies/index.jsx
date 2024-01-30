import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";

const PoliciesPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto pb-[489px] w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="bg-white-A700 flex flex-col gap-7 items-start justify-start max-w-[1440px] p-8 sm:px-5 w-full">
            <Img
              className="h-[18px] md:h-auto object-cover w-[180px] sm:w-full"
              src="images/img_glicohealthcarelogo300x301.png"
              alt="glicohealthcare"
            />
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
          <div className="bg-white-A700 flex flex-col items-start justify-start outline outline-[1px] outline-gray-300 sm:px-5 px-8 py-3 w-auto md:w-full">
            <div className="flex flex-col items-center justify-start max-w-[1376px] mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1376px] w-full">
                <div className="flex sm:flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col items-center justify-start p-3 rounded-lg w-auto">
                    <Text
                      className="text-[15px] text-blue_gray-300 tracking-[0.50px] w-auto"
                      size="txtMontserratSemiBold15Bluegray300"
                    >
                      Overview
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start p-3 rounded-lg w-auto">
                    <Text
                      className="text-[15px] text-blue_gray-300 tracking-[0.50px] w-auto"
                      size="txtMontserratSemiBold15Bluegray300"
                    >
                      Customers
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start p-3 rounded-lg w-auto">
                    <Text
                      className="text-[15px] text-blue_gray-300 tracking-[0.50px] w-auto"
                      size="txtMontserratSemiBold15Bluegray300"
                    >
                      Transactions
                    </Text>
                  </div>
                  <Button
                    className="common-pointer cursor-pointer font-semibold min-w-[87px] text-[15px] text-blue_gray-300 text-center tracking-[0.50px]"
                    onClick={() => navigate("/policiestwo")}
                    shape="round"
                    size="lg"
                  >
                    Policies
                  </Button>
                  <div className="flex flex-col items-center justify-start p-3 rounded-lg w-auto">
                    <Text
                      className="text-[15px] text-blue_gray-300 tracking-[0.50px] w-auto"
                      size="txtMontserratSemiBold15Bluegray300"
                    >
                      Settings
                    </Text>
                  </div>
                </div>
                <div className="flex sm:flex-1 sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                  <Input
                    name="frame361"
                    placeholder="Search..."
                    className="font-semibold p-0 placeholder:text-blue_gray-300 text-[15px] text-left tracking-[0.50px] w-full"
                    wrapClassName="rounded-lg w-[85%] sm:w-full"
                    color="gray_300"
                    size="xs"
                    variant="outline"
                  ></Input>
                  <Img
                    className="h-11 md:h-auto rounded-[50%] w-11"
                    src="images/img_image.png"
                    alt="image_One"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-7 items-start justify-start ml-8 md:ml-[0] mt-[30px] md:px-5 w-[55%] md:w-full">
            <div className="flex flex-col items-start justify-start md:mt-0 mt-2.5 w-[221px]">
              <div className="flex flex-col items-center justify-start p-3 rounded-lg w-full">
                <Text
                  className="text-[15px] text-blue_gray-300_01 tracking-[0.50px] w-auto"
                  size="txtMontserratSemiBold15Bluegray30001"
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
                  className="text-[15px] text-blue_gray-800 tracking-[0.50px] w-auto"
                  size="txtMontserratSemiBold15Bluegray800"
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
            <div className="flex flex-col items-start justify-start w-[69%] md:w-full">
              <div className="flex flex-row gap-3 items-start justify-start w-auto">
                <Text
                  className="border-b border-blue_gray-800_01 border-solid py-3 text-[15px] text-blue_gray-800_01 tracking-[0.50px] w-auto"
                  size="txtMontserratSemiBold15Bluegray80001"
                >
                  Import Data
                </Text>
                <div className="flex flex-col items-center justify-center py-3 w-auto">
                  <Text
                    className="text-[15px] text-blue_gray-300_01 tracking-[0.50px] w-auto"
                    size="txtMontserratSemiBold15Bluegray30001"
                  >
                    Export Data
                  </Text>
                </div>
              </div>
              <Text
                className="leading-[20.00px] mt-[17px] text-blue_gray-700_01 text-sm w-full"
                size="txtMontserratMedium14Bluegray70001"
              >
                Easily import records from your existing CRM with our migration
                tools. Select your existing CRM below to get started.
              </Text>
              <div className="flex flex-row gap-[31px] items-start justify-start mt-[30px] w-auto">
                <List
                  className="sm:flex-col flex-row gap-[31px] grid grid-cols-2 w-3/5"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-2 items-center justify-start w-auto">
                    <div className="bg-gray-100 border border-blue_gray-50 border-solid h-[87px] rounded-[12px] w-[87px]"></div>
                    <Text
                      className="text-blue_gray-300 text-sm w-auto"
                      size="txtMontserratMedium14Bluegray300"
                    >
                      Excel
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2 items-center justify-start w-auto">
                    <div className="bg-gray-100 border border-blue_gray-50 border-solid h-[87px] rounded-[12px] w-[87px]"></div>
                    <Text
                      className="text-blue_gray-300 text-sm w-auto"
                      size="txtMontserratMedium14Bluegray300"
                    >
                      Salesforce
                    </Text>
                  </div>
                </List>
                <div className="flex flex-col gap-2 items-center justify-start w-auto">
                  <div className="bg-gray-100 border border-blue_gray-50 border-solid h-[87px] rounded-[12px] w-[87px]"></div>
                  <Text
                    className="text-blue_gray-300 text-sm w-auto"
                    size="txtMontserratMedium14Bluegray300"
                  >
                    Platform Name
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PoliciesPage;
