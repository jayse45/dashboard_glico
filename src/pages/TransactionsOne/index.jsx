import React from "react";

import { Button, Img, Input, List, SelectBox, Text } from "components";
import TransactionsIndexSidenav from "components/TransactionsIndexSidenav";

const actionOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const actionOptionsList1 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const actionOptionsList2 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const actionOptionsList3 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const actionOptionsList4 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const optionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const TransactionsOnePage = () => {
  return (
    <>
      <div className="bg-gray-50_03 flex flex-col font-montserrat items-center justify-start mx-auto pr-5 py-5 w-full">
        <div className="flex flex-col gap-8 items-center justify-start max-w-[1420px] mb-[43px] mx-auto md:px-5 w-full">
          <div className="flex flex-row md:gap-10 gap-[1057px] items-center justify-between w-auto md:w-full">
            <Img
              className="h-[18px] md:h-auto object-cover w-[180px]"
              src="images/img_glicohealthcarelogo300x301.png"
              alt="glicohealthcare"
            />
            <div className="flex flex-row gap-8 items-center justify-start w-auto">
              <Img
                className="h-6 w-6"
                src="images/img_search_blue_gray_500.svg"
                alt="search"
              />
              <Img className="h-6 w-6" src="images/img_bell.svg" alt="bell" />
              <Img
                className="h-8 md:h-auto rounded-[50%] w-8"
                src="images/img_image_32x32.png"
                alt="image_One"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
            <TransactionsIndexSidenav className="flex flex-col items-start justify-start md:mt-0 mt-[46px] w-auto" />
            <div className="bg-white-A700 border border-indigo-50 border-solid flex md:flex-1 flex-col items-center justify-start p-[18px] rounded-[16px] w-[84%] md:w-full">
              <div className="flex flex-col items-start justify-start mb-[166px] mt-[25px] w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-[543px] sm:w-full">
                  <Text
                    className="text-indigo-800 text-xl tracking-[0.50px] uppercase w-full"
                    size="txtMontserratBold20Indigo800"
                  >
                    Transactions
                  </Text>
                  <div className="flex flex-row gap-2 items-start justify-start w-full">
                    <Text
                      className="text-blue_gray-500 text-sm tracking-[0.50px]"
                      size="txtMontserratMedium14Bluegray500"
                    >
                      50
                    </Text>
                    <Text
                      className="flex-1 text-blue_gray-500 text-sm tracking-[0.50px] w-auto"
                      size="txtMontserratMedium14Bluegray500"
                    >
                      Total Transactions
                    </Text>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-8 w-full">
                  <Input
                    name="frame292"
                    placeholder="Search transactions..."
                    className="font-semibold p-0 placeholder:text-blue_gray-500 text-[15px] text-left w-full"
                    wrapClassName="flex sm:flex-1 w-[28%] sm:w-full"
                    prefix={
                      <Img
                        className="h-6 mr-3 my-auto"
                        src="images/img_search_blue_gray_500_24x24.svg"
                        alt="search"
                      />
                    }
                    shape="round"
                    color="blue_gray_50_01"
                    size="xs"
                    variant="fill"
                  ></Input>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[109px] sm:ml-[0] ml-[593px] rounded-[12px]"
                    leftIcon={
                      <Img
                        className="h-6 mr-3"
                        src="images/img_filter.svg"
                        alt="filter"
                      />
                    }
                    color="indigo_800_0f"
                    size="lg"
                    variant="fill"
                  >
                    <div className="font-semibold text-[15px] text-left">
                      Filter
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[120px] ml-3 sm:ml-[0] rounded-[12px]"
                    leftIcon={
                      <Img
                        className="h-6 mr-3"
                        src="images/img_twitter.svg"
                        alt="twitter"
                      />
                    }
                    color="indigo_800_0f"
                    size="lg"
                    variant="fill"
                  >
                    <div className="font-semibold text-[15px] text-left">
                      Export
                    </div>
                  </Button>
                </div>
                <div className="flex flex-col items-start justify-start max-w-[1143px] mt-8 w-full">
                  <div className="flex md:flex-col flex-row gap-3.5 items-center justify-start w-full">
                    <div className="border border-blue_gray-100_01 border-solid h-3 rounded w-3"></div>
                    <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-2 w-full">
                      <div className="flex flex-col items-center justify-center p-1 w-[200px]">
                        <Text
                          className="text-blue_gray-500 text-sm tracking-[0.50px] uppercase w-auto"
                          size="txtMontserratSemiBold14Bluegray500"
                        >
                          Plan
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start p-1 w-full">
                        <Text
                          className="text-blue_gray-500 text-sm tracking-[0.50px] uppercase w-auto"
                          size="txtMontserratSemiBold14Bluegray500"
                        >
                          Beneficiary
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start p-1 w-[200px]">
                        <Text
                          className="text-blue_gray-500 text-sm tracking-[0.50px] uppercase w-auto"
                          size="txtMontserratSemiBold14Bluegray500"
                        >
                          Amount
                        </Text>
                      </div>
                      <List
                        className="md:flex-1 sm:flex-col flex-row gap-px grid grid-cols-2 w-[22%] md:w-full"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col items-center justify-start p-1 w-[120px]">
                          <Text
                            className="text-blue_gray-500 text-sm tracking-[0.50px] uppercase w-auto"
                            size="txtMontserratSemiBold14Bluegray500"
                          >
                            Date
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-center p-1 w-[120px]">
                          <Text
                            className="text-blue_gray-500 text-center text-sm tracking-[0.50px] uppercase w-auto"
                            size="txtMontserratSemiBold14Bluegray500"
                          >
                            Action
                          </Text>
                        </div>
                      </List>
                    </div>
                  </div>
                  <div className="flex flex-col h-[369px] md:h-auto items-start justify-start w-full">
                    <div className="border-b border-blue_gray-50_01 border-solid flex md:flex-col flex-row gap-4 h-full items-center justify-start py-1 w-full">
                      <div className="border border-blue_gray-100_01 border-solid h-3 rounded w-3"></div>
                      <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                        <div className="flex flex-1 flex-col h-[52px] md:h-auto items-start justify-center p-2 w-full">
                          <div className="flex flex-row gap-2 items-center justify-start w-auto">
                            <Text
                              className="text-[15px] text-black-900 w-auto"
                              size="txtMontserratMedium15"
                            >
                              Under 60
                            </Text>
                            <Button
                              className="cursor-pointer font-medium min-w-[68px] text-[10px] text-center"
                              shape="round"
                              color="green_50"
                              size="sm"
                              variant="fill"
                            >
                              Enhanced
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col h-full items-start justify-center p-2 w-full">
                          <div className="flex flex-row gap-[9px] items-center justify-start w-full">
                            <Text
                              className="bg-deep_orange-50_01 flex h-8 items-center justify-center outline outline-[1px] outline-white-A700 rounded-[50%] text-center text-gray-900 text-sm w-8"
                              size="txtInterSemiBold14"
                            >
                              AB
                            </Text>
                            <Text
                              className="flex-1 text-[15px] text-black-900 w-auto"
                              size="txtMontserratMedium15"
                            >
                              Annette Black
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col h-[52px] md:h-auto items-center justify-start p-2 w-full">
                          <Text
                            className="text-[15px] text-green-800 w-auto"
                            size="txtMontserratRegular15Green800"
                          >
                            <span className="text-green-800 tracking-[0.15px] font-montserrat text-left font-semibold">
                              ¢
                            </span>
                            <span className="text-green-800 font-montserrat text-left font-semibold">
                              3000
                            </span>
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-col h-[52px] md:h-auto items-center justify-start p-2 w-full">
                          <Text
                            className="text-[15px] text-blue_gray-700 tracking-[0.15px] w-auto"
                            size="txtMontserratMedium15Bluegray700"
                          >
                            12/02/23
                          </Text>
                        </div>
                        <div className="flex sm:flex-1 flex-col h-[52px] md:h-auto items-center justify-start p-2 w-[120px] sm:w-full">
                          <SelectBox
                            className="font-medium text-[15px] text-left tracking-[0.15px] w-[92%] sm:w-full"
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
                            options={actionOptionsList}
                            isSearchable={false}
                            placeholder="Action"
                            shape="round"
                            color="gray_50_01"
                            size="xs"
                            variant="fill"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="h-[221px] md:h-[980px] relative w-full">
                      <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                        <List
                          className="flex flex-col gap-px items-center w-full"
                          orientation="vertical"
                        >
                          <div className="border-b border-blue_gray-50_01 border-solid flex flex-1 md:flex-col flex-row gap-4 h-full items-center justify-start my-0 py-1 w-full">
                            <div className="border border-blue_gray-100_01 border-solid h-3 rounded w-3"></div>
                            <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                              <div className="flex flex-1 flex-col h-[52px] md:h-auto items-start justify-center p-2 w-full">
                                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                                  <Text
                                    className="text-[15px] text-black-900 w-auto"
                                    size="txtMontserratMedium15"
                                  >
                                    Under 60
                                  </Text>
                                  <Button
                                    className="cursor-pointer font-medium min-w-[93px] text-[10px] text-center"
                                    shape="round"
                                    color="indigo_50_01"
                                    size="sm"
                                    variant="fill"
                                  >
                                    Enhanced Plus
                                  </Button>
                                </div>
                              </div>
                              <div className="flex flex-1 flex-col h-full items-start justify-center p-2 w-full">
                                <div className="flex flex-row gap-[9px] items-center justify-start w-full">
                                  <div className="flex flex-col h-8 items-center justify-start w-8">
                                    <Img
                                      className="h-8 md:h-auto rounded-[50%] w-8"
                                      src="images/img_image_1.png"
                                      alt="image"
                                    />
                                  </div>
                                  <Text
                                    className="flex-1 text-[15px] text-black-900 w-auto"
                                    size="txtMontserratMedium15"
                                  >
                                    Jenny Wilson
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-1 flex-col h-[52px] md:h-auto items-center justify-start p-2 w-full">
                                <Text
                                  className="text-[15px] text-green-800 w-auto"
                                  size="txtMontserratRegular15Green800"
                                >
                                  <span className="text-green-800 tracking-[0.15px] font-montserrat text-left font-semibold">
                                    ¢
                                  </span>
                                  <span className="text-green-800 font-montserrat text-left font-semibold">
                                    3000
                                  </span>
                                </Text>
                              </div>
                              <div className="flex flex-1 flex-col h-[52px] md:h-auto items-center justify-start p-2 w-full">
                                <Text
                                  className="text-[15px] text-blue_gray-700 tracking-[0.15px] w-auto"
                                  size="txtMontserratMedium15Bluegray700"
                                >
                                  12/02/23
                                </Text>
                              </div>
                              <div className="flex sm:flex-1 flex-col h-[52px] md:h-auto items-center justify-start p-2 w-[120px] sm:w-full">
                                <SelectBox
                                  className="font-medium text-[15px] text-left tracking-[0.15px] w-[92%] sm:w-full"
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
                                  options={actionOptionsList1}
                                  isSearchable={false}
                                  placeholder="Action"
                                  shape="round"
                                  color="gray_50_01"
                                  size="xs"
                                  variant="fill"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="border-b border-blue_gray-50_01 border-solid flex flex-1 md:flex-col flex-row gap-4 h-full items-center justify-start my-0 py-1 w-full">
                            <div className="border border-blue_gray-100_01 border-solid h-3 rounded w-3"></div>
                            <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                              <div className="flex flex-1 flex-col h-[52px] md:h-auto items-start justify-center p-2 w-full">
                                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                                  <Text
                                    className="text-[15px] text-black-900 w-auto"
                                    size="txtMontserratMedium15"
                                  >
                                    60 & Above
                                  </Text>
                                  <Button
                                    className="cursor-pointer font-medium min-w-[61px] text-[10px] text-center"
                                    shape="round"
                                    color="orange_50"
                                    size="sm"
                                    variant="fill"
                                  >
                                    Ultimate
                                  </Button>
                                </div>
                              </div>
                              <div className="flex flex-1 flex-col h-full items-start justify-center p-2 w-full">
                                <div className="flex flex-row gap-[9px] items-center justify-start w-full">
                                  <div className="flex flex-col h-8 items-center justify-start w-8">
                                    <Img
                                      className="h-8 md:h-auto rounded-[50%] w-8"
                                      src="images/img_image_2.png"
                                      alt="image"
                                    />
                                  </div>
                                  <Text
                                    className="flex-1 text-[15px] text-black-900 w-auto"
                                    size="txtMontserratMedium15"
                                  >
                                    Devon Lane
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-1 flex-col h-[52px] md:h-auto items-center justify-start p-2 w-full">
                                <Text
                                  className="text-[15px] text-green-800 w-auto"
                                  size="txtMontserratRegular15Green800"
                                >
                                  <span className="text-green-800 tracking-[0.15px] font-montserrat text-left font-semibold">
                                    ¢
                                  </span>
                                  <span className="text-green-800 font-montserrat text-left font-semibold">
                                    3000
                                  </span>
                                </Text>
                              </div>
                              <div className="flex flex-1 flex-col h-[52px] md:h-auto items-center justify-start p-2 w-full">
                                <Text
                                  className="text-[15px] text-blue_gray-700 tracking-[0.15px] w-auto"
                                  size="txtMontserratMedium15Bluegray700"
                                >
                                  12/02/23
                                </Text>
                              </div>
                              <div className="flex sm:flex-1 flex-col h-[52px] md:h-auto items-center justify-start p-2 w-[120px] sm:w-full">
                                <SelectBox
                                  className="font-medium text-[15px] text-left tracking-[0.15px] w-[92%] sm:w-full"
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
                                  options={actionOptionsList2}
                                  isSearchable={false}
                                  placeholder="Action"
                                  shape="round"
                                  color="gray_50_01"
                                  size="xs"
                                  variant="fill"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="border-b border-blue_gray-50_01 border-solid flex flex-1 md:flex-col flex-row gap-4 h-full items-center justify-start my-0 py-1 w-full">
                            <div className="border border-blue_gray-100_01 border-solid h-3 rounded w-3"></div>
                            <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                              <div className="flex flex-1 flex-col h-[52px] md:h-auto items-start justify-center p-2 w-full">
                                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                                  <Text
                                    className="text-[15px] text-black-900 w-auto"
                                    size="txtMontserratMedium15"
                                  >
                                    Under 60
                                  </Text>
                                  <Button
                                    className="cursor-pointer font-medium min-w-[93px] text-[10px] text-center"
                                    shape="round"
                                    color="indigo_50_01"
                                    size="sm"
                                    variant="fill"
                                  >
                                    Enhanced Plus
                                  </Button>
                                </div>
                              </div>
                              <div className="flex flex-1 flex-col h-full items-start justify-center p-2 w-full">
                                <div className="flex flex-row gap-[9px] items-center justify-start w-full">
                                  <Text
                                    className="bg-blue-50 flex h-8 items-center justify-center outline outline-[1px] outline-white-A700 rounded-[50%] text-center text-gray-900 text-sm w-8"
                                    size="txtInterSemiBold14"
                                  >
                                    GH
                                  </Text>
                                  <Text
                                    className="flex-1 text-[15px] text-black-900 w-auto"
                                    size="txtMontserratMedium15"
                                  >
                                    Guy Hawkins
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-1 flex-col h-[52px] md:h-auto items-center justify-start p-2 w-full">
                                <Text
                                  className="text-[15px] text-green-800 w-auto"
                                  size="txtMontserratRegular15Green800"
                                >
                                  <span className="text-green-800 tracking-[0.15px] font-montserrat text-left font-semibold">
                                    ¢
                                  </span>
                                  <span className="text-green-800 font-montserrat text-left font-semibold">
                                    3000
                                  </span>
                                </Text>
                              </div>
                              <div className="flex flex-1 flex-col h-[52px] md:h-auto items-center justify-start p-2 w-full">
                                <Text
                                  className="text-[15px] text-blue_gray-700 tracking-[0.15px] w-auto"
                                  size="txtMontserratMedium15Bluegray700"
                                >
                                  12/02/23
                                </Text>
                              </div>
                              <div className="flex sm:flex-1 flex-col h-[52px] md:h-auto items-center justify-start p-2 w-[120px] sm:w-full">
                                <SelectBox
                                  className="font-medium text-[15px] text-left tracking-[0.15px] w-[92%] sm:w-full"
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
                                  options={actionOptionsList3}
                                  isSearchable={false}
                                  placeholder="Action"
                                  shape="round"
                                  color="gray_50_01"
                                  size="xs"
                                  variant="fill"
                                />
                              </div>
                            </div>
                          </div>
                        </List>
                      </div>
                      <div className="absolute bg-white-A700 border border-blue_gray-50_01 border-solid flex flex-col gap-2 h-max inset-y-[0] items-center justify-start my-auto p-2 right-[1%] rounded-[12px] shadow-bs2 w-[123px]">
                        <Button
                          className="!text-blue_gray-700 cursor-pointer font-medium text-[15px] text-center tracking-[0.15px] w-full"
                          shape="round"
                          color="blue_gray_50_01"
                          size="md"
                          variant="fill"
                        >
                          View
                        </Button>
                        <Button
                          className="!text-blue_gray-700 cursor-pointer font-medium text-[15px] text-center tracking-[0.15px] w-full"
                          shape="round"
                          color="blue_gray_50_01"
                          size="md"
                          variant="fill"
                        >
                          Export
                        </Button>
                      </div>
                    </div>
                    <div className="border-b border-blue_gray-50_01 border-solid flex md:flex-col flex-row gap-4 h-full items-center justify-start py-1 w-full">
                      <div className="border border-blue_gray-100_01 border-solid h-3 rounded w-3"></div>
                      <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                        <div className="flex flex-1 flex-col h-[52px] md:h-auto items-start justify-center p-2 w-full">
                          <div className="flex flex-row gap-2 items-center justify-start w-auto">
                            <Text
                              className="text-[15px] text-black-900 w-auto"
                              size="txtMontserratMedium15"
                            >
                              60 & Above
                            </Text>
                            <Button
                              className="cursor-pointer font-medium min-w-[68px] text-[10px] text-center"
                              shape="round"
                              color="green_50"
                              size="sm"
                              variant="fill"
                            >
                              Enhanced
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col h-full items-start justify-center p-2 w-full">
                          <div className="flex flex-row gap-[9px] items-center justify-start w-full">
                            <div className="flex flex-col h-8 items-center justify-start w-8">
                              <Img
                                className="h-8 md:h-auto rounded-[50%] w-8"
                                src="images/img_image_3.png"
                                alt="image_Two"
                              />
                            </div>
                            <Text
                              className="flex-1 text-[15px] text-black-900 w-auto"
                              size="txtMontserratMedium15"
                            >
                              Cameron Williamson
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col h-[52px] md:h-auto items-center justify-start p-2 w-full">
                          <Text
                            className="text-[15px] text-green-800 w-auto"
                            size="txtMontserratRegular15Green800"
                          >
                            <span className="text-green-800 tracking-[0.15px] font-montserrat text-left font-semibold">
                              ¢
                            </span>
                            <span className="text-green-800 font-montserrat text-left font-semibold">
                              3000
                            </span>
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-col h-[52px] md:h-auto items-center justify-start p-2 w-full">
                          <Text
                            className="text-[15px] text-blue_gray-700 tracking-[0.15px] w-auto"
                            size="txtMontserratMedium15Bluegray700"
                          >
                            12/02/23
                          </Text>
                        </div>
                        <div className="flex sm:flex-1 flex-col h-[52px] md:h-auto items-center justify-start p-2 w-[120px] sm:w-full">
                          <SelectBox
                            className="font-medium text-[15px] text-left tracking-[0.15px] w-[92%] sm:w-full"
                            placeholderClassName="text-blue_gray-700"
                            indicator={
                              <Img
                                className="h-4 w-4"
                                src="images/img_arrowdown.svg"
                                alt="arrow_down"
                              />
                            }
                            isMulti={false}
                            name="frame230"
                            options={actionOptionsList4}
                            isSearchable={false}
                            placeholder="Action"
                            shape="round"
                            color="gray_50_01"
                            size="xs"
                            variant="fill"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1148px] mt-9 w-full">
                  <SelectBox
                    className="sm:flex-1 font-medium text-[15px] text-left tracking-[0.15px] w-[6%] sm:w-full"
                    placeholderClassName="text-blue_gray-700"
                    indicator={
                      <Img
                        className="h-4 w-4"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="frame230_One"
                    options={optionsList}
                    isSearchable={false}
                    placeholder="10"
                    shape="round"
                    color="gray_50_01"
                    size="xs"
                    variant="fill"
                  />
                  <div className="flex flex-row gap-[5px] items-start justify-start w-auto">
                    <Img
                      className="h-9 w-9"
                      src="images/img_arrowleft_indigo_50.svg"
                      alt="arrowleft"
                    />
                    <Button
                      className="!text-gray-50_02 cursor-pointer font-medium h-9 text-[15px] text-center tracking-[0.15px] w-9"
                      shape="round"
                      color="indigo_800"
                      size="md"
                      variant="fill"
                    >
                      1
                    </Button>
                    <div className="flex flex-col h-9 md:h-auto items-center justify-center px-3 py-2 w-9">
                      <Text
                        className="text-[15px] text-blue_gray-700 tracking-[0.15px] w-auto"
                        size="txtMontserratMedium15Bluegray700"
                      >
                        2
                      </Text>
                    </div>
                    <div className="flex flex-col h-9 md:h-auto items-center justify-center px-3 py-2 w-9">
                      <Text
                        className="text-[15px] text-blue_gray-700 tracking-[0.15px] w-auto"
                        size="txtMontserratMedium15Bluegray700"
                      >
                        3
                      </Text>
                    </div>
                    <div className="flex flex-col h-9 md:h-auto items-center justify-center px-3 py-2 w-9">
                      <Text
                        className="text-[15px] text-blue_gray-700 tracking-[0.15px] w-auto"
                        size="txtMontserratMedium15Bluegray700"
                      >
                        4
                      </Text>
                    </div>
                    <div className="flex flex-col h-9 md:h-auto items-center justify-center px-3 py-2 w-9">
                      <Text
                        className="text-[15px] text-blue_gray-700 tracking-[0.15px] w-auto"
                        size="txtMontserratMedium15Bluegray700"
                      >
                        5
                      </Text>
                    </div>
                    <Img
                      className="h-9 w-9"
                      src="images/img_arrowright_blue_gray_700.svg"
                      alt="arrowright"
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

export default TransactionsOnePage;
