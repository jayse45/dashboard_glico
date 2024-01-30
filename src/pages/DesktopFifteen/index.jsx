import React from "react";

import { useNavigate } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  List,
  ReactTable,
  SelectBox,
  Text,
} from "components";

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
const actionOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DesktopFifteenPage = () => {
  const tableData = React.useRef([
    {
      name: "Guy Hawkins",
      contact: "debra.holt@example.com",
      status: "Active",
      datecreated: "9/18/16",
    },
    {
      name: "Guy Hawkins",
      contact: "debra.holt@example.com",
      status: "Inactive",
      datecreated: "9/18/16",
    },
    {
      name: "Guy Hawkins",
      contact: "debra.holt@example.com",
      status: "Active",
      datecreated: "9/18/16",
    },
    {
      name: "Guy Hawkins",
      contact: "debra.holt@example.com",
      status: "Active",
      datecreated: "9/18/16",
    },
    {
      name: "Guy Hawkins",
      contact: "debra.holt@example.com",
      status: "Inactive",
      datecreated: "9/18/16",
    },
    {
      name: "Guy Hawkins",
      contact: "debra.holt@example.com",
      status: "Active",
      datecreated: "9/18/16",
    },
  ]);
  const navigate = useNavigate();
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("rowsettingsone", {
        cell: (info) => (
          <div className="flex sm:flex-1 flex-row items-center justify-evenly sm:w-full">
            <CheckBox
              className=""
              inputClassName="mr-[5px]"
              name="settings_Two"
              id="settings_Two"
              shape="square"
            ></CheckBox>
          </div>
        ),
        header: (info) => (
          <div className="flex sm:flex-1 flex-row items-center justify-evenly min-w-[28px] sm:w-full">
            <CheckBox
              className=""
              inputClassName="mr-[5px]"
              name="settings_One"
              id="settings_One"
              shape="square"
            ></CheckBox>
          </div>
        ),
      }),
      tableColumnHelper.accessor("name", {
        cell: (info) => (
          <div className="flex flex-row gap-[9px] items-center justify-start p-2">
            <Text
              className="bg-blue-50 flex h-8 items-center justify-center my-0.5 outline outline-[1px] outline-white-A700 rounded-[50%] text-center text-gray-900 text-sm w-8"
              size="txtInterSemiBold14"
            >
              GH
            </Text>
            <Text
              className="text-[15px] text-black-900"
              size="txtMontserratMedium15"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[267px] pl-1 py-3 text-blue_gray-300 text-sm tracking-[0.50px] uppercase"
            size="txtMontserratSemiBold14"
          >
            Name
          </Text>
        ),
      }),
      tableColumnHelper.accessor("contact", {
        cell: (info) => (
          <Text
            className="pl-1 py-4 text-[15px] text-blue_gray-700 tracking-[0.15px]"
            size="txtMontserratMedium15Bluegray700"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[263px] py-3 text-blue_gray-300 text-sm tracking-[0.50px] uppercase"
            size="txtMontserratSemiBold14"
          >
            Contact
          </Text>
        ),
      }),
      tableColumnHelper.accessor("status", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-start p-1">
            <Button
              className="cursor-pointer font-medium min-w-[51px] my-2.5 text-[11px] text-center"
              shape="round"
              color="green_50"
              size="sm"
              variant="fill"
            >
              {info?.getValue()}
            </Button>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[263px] py-3 text-blue_gray-300 text-sm tracking-[0.50px] uppercase"
            size="txtMontserratSemiBold14"
          >
            Status
          </Text>
        ),
      }),
      tableColumnHelper.accessor("datecreated", {
        cell: (info) => (
          <Text
            className="pl-1 py-4 text-[15px] text-blue_gray-700 tracking-[0.15px]"
            size="txtMontserratMedium15Bluegray700"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[343px] py-3 text-blue_gray-300 text-sm tracking-[0.50px] uppercase"
            size="txtMontserratSemiBold14"
          >
            Date Created
          </Text>
        ),
      }),
      tableColumnHelper.accessor("action", {
        cell: (info) => (
          <div className="flex sm:flex-1 flex-row items-center justify-center pr-2 py-2 sm:w-full">
            <SelectBox
              className="font-medium mr-[76px] text-[15px] text-left tracking-[0.15px] w-[56%] sm:w-full"
              placeholderClassName="text-blue_gray-700"
              indicator={
                <Img
                  className="h-4 mr-[0] w-4"
                  src="images/img_arrowdown.svg"
                  alt="arrow_down"
                />
              }
              isMulti={false}
              name="frame231_Two"
              options={actionOptionsList}
              isSearchable={false}
              placeholder="Action"
              shape="round"
              color="gray_50_01"
              size="xs"
              variant="fill"
            />
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[179px] pl-[17px] py-3 text-blue_gray-300 text-center text-sm tracking-[0.50px] uppercase"
            size="txtMontserratSemiBold14"
          >
            Action
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-montserrat items-center justify-start mx-auto pb-9 w-full">
        <div className="flex flex-col gap-[31px] items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
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
            <div className="bg-white-A700 flex flex-col items-start justify-start mt-3 outline outline-[1px] outline-gray-300 sm:px-5 px-8 py-3 w-auto md:w-full">
              <div className="flex flex-col items-center justify-start max-w-[1376px] mx-auto md:px-5 w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1376px] w-full">
                  <div className="flex sm:flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-start w-auto sm:w-full">
                    <Button
                      className="cursor-pointer font-semibold min-w-[101px] text-[15px] text-center tracking-[0.50px]"
                      shape="round"
                      color="indigo_800"
                      size="lg"
                      variant="fill"
                    >
                      Overview
                    </Button>
                    <Button
                      className="common-pointer cursor-pointer font-semibold min-w-[112px] text-[15px] text-blue_gray-300 text-center tracking-[0.50px]"
                      onClick={() => navigate("/customers")}
                      shape="round"
                      size="lg"
                    >
                      Customers
                    </Button>
                    <Button
                      className="cursor-pointer font-semibold min-w-[128px] text-[15px] text-blue_gray-300 text-center tracking-[0.50px]"
                      shape="round"
                      size="lg"
                    >
                      Transactions
                    </Button>
                    <Button
                      className="cursor-pointer font-semibold min-w-[87px] text-[15px] text-blue_gray-300 text-center tracking-[0.50px]"
                      shape="round"
                      size="lg"
                    >
                      Policies
                    </Button>
                    <Button
                      className="common-pointer cursor-pointer font-semibold min-w-[92px] text-[15px] text-blue_gray-300 text-center tracking-[0.50px]"
                      onClick={() => navigate("/policiesone")}
                      shape="round"
                      size="lg"
                    >
                      Settings
                    </Button>
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
            <List
              className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start max-w-[1373px] mt-6 mx-auto md:px-5 w-full"
              orientation="horizontal"
            >
              <div
                className="common-pointer bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-11 h-full items-start justify-between rounded-[12px] w-full"
                onClick={() => navigate("/customers")}
              >
                <div className="border-b border-blue_gray-50 border-solid flex flex-row gap-[7px] items-center justify-start p-3 w-full">
                  <Text
                    className="flex-1 text-[15px] text-blue_gray-400 tracking-[0.50px] w-auto"
                    size="txtMontserratSemiBold15"
                  >
                    Customers
                  </Text>
                  <div className="flex flex-col h-5 items-center justify-start w-5">
                    <Img
                      className="h-5 w-5"
                      src="images/img_play.svg"
                      alt="play"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3 h-[95px] md:h-auto items-start justify-center p-3 w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 tracking-[0.50px] uppercase w-auto"
                    size="txtMontserratBold32"
                  >
                    5000
                  </Text>
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="text-blue_gray-400 text-sm tracking-[0.50px] w-auto"
                      size="txtMontserratMedium14"
                    >
                      4952 last month
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
              </div>
              <div
                className="common-pointer bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-11 h-full items-start justify-between rounded-[12px] w-full"
                onClick={() => navigate("/transactions")}
              >
                <div className="border-b border-blue_gray-50 border-solid flex flex-row gap-[7px] items-center justify-start p-3 w-full">
                  <Text
                    className="flex-1 text-[15px] text-blue_gray-400 tracking-[0.50px] w-auto"
                    size="txtMontserratSemiBold15"
                  >
                    Transactions
                  </Text>
                  <div className="flex flex-col h-5 items-center justify-start w-5">
                    <Img
                      className="h-5 w-5"
                      src="images/img_play.svg"
                      alt="play"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3 h-[95px] md:h-auto items-start justify-center p-3 w-full">
                  <div className="flex flex-col items-end justify-start w-full">
                    <div className="flex flex-row gap-1 items-center justify-start w-full">
                      <Text
                        className="text-blue_gray-100 text-xl tracking-[1.50px] w-auto"
                        size="txtMontserratBold20"
                      >
                        ¢
                      </Text>
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 tracking-[0.50px] uppercase w-auto"
                        size="txtMontserratBold32"
                      >
                        20,0115
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="text-blue_gray-400 text-sm tracking-[0.50px] w-auto"
                      size="txtMontserratMedium14"
                    >
                      4952 last month
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
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-11 h-full items-start justify-between rounded-[12px] w-full">
                <div className="border-b border-blue_gray-50 border-solid flex flex-row gap-[7px] items-center justify-start p-3 w-full">
                  <Text
                    className="flex-1 text-[15px] text-blue_gray-400 tracking-[0.50px] w-auto"
                    size="txtMontserratSemiBold15"
                  >
                    Pending Approvals
                  </Text>
                  <div className="flex flex-col h-5 items-center justify-start w-5">
                    <Img
                      className="h-5 w-5"
                      src="images/img_play.svg"
                      alt="play"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3 h-[95px] md:h-auto items-start justify-center p-3 w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 tracking-[0.50px] uppercase w-auto"
                    size="txtMontserratBold32"
                  >
                    5000
                  </Text>
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="text-blue_gray-400 text-sm tracking-[0.50px] w-auto"
                      size="txtMontserratMedium14"
                    >
                      4952 last month
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
              </div>
              <div
                className="common-pointer bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col items-start justify-start rounded-[12px] w-full"
                onClick={() => navigate("/policiestwo")}
              >
                <div className="border-b border-blue_gray-50 border-solid flex flex-row gap-[7px] items-center justify-start p-3 w-full">
                  <Text
                    className="flex-1 text-[15px] text-blue_gray-400 tracking-[0.50px] w-auto"
                    size="txtMontserratSemiBold15"
                  >
                    Policies
                  </Text>
                  <div className="flex flex-col h-5 items-center justify-start w-5">
                    <Img
                      className="h-5 w-5"
                      src="images/img_play.svg"
                      alt="play"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3 items-start justify-start p-3 w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 tracking-[0.50px] uppercase w-auto"
                    size="txtMontserratBold32"
                  >
                    5000
                  </Text>
                  <div className="flex flex-col gap-3 items-start justify-start w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="flex-1 text-blue_gray-600 text-sm tracking-[0.50px] w-auto"
                        size="txtMontserratSemiBold14Bluegray600"
                      >
                        Under 60
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
                    <Line className="bg-indigo-50 h-px w-full" />
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="flex-1 text-blue_gray-600 text-sm tracking-[0.50px] w-auto"
                        size="txtMontserratSemiBold14Bluegray600"
                      >
                        60 & Above
                      </Text>
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
              </div>
            </List>
            <div className="flex md:flex-col flex-row gap-5 items-center justify-start max-w-[1376px] mt-[31px] mx-auto md:px-5 w-full">
              <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col items-start justify-start max-w-[678px] rounded-[12px] w-full">
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
              <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-1 flex-col h-[485px] md:h-auto items-start justify-start max-w-[678px] rounded-[12px] w-full">
                <div className="border-b border-blue_gray-50 border-solid flex md:flex-col flex-row gap-[13px] items-start justify-start p-3 w-full">
                  <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="text-[15px] text-indigo-800 tracking-[0.50px] uppercase w-full"
                      size="txtMontserratBold15"
                    >
                      Customers Growth
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
                    name="frame231_One"
                    options={weekOptionsList1}
                    isSearchable={false}
                    placeholder="Week"
                    shape="round"
                    color="gray_100"
                    size="xs"
                    variant="fill"
                  />
                </div>
                <div className="flex flex-col gap-[18px] h-full items-start justify-between p-4 w-full">
                  <div className="flex flex-col gap-[15px] items-center justify-end p-1 w-full">
                    <div className="h-[252px] md:h-[281px] mt-[29px] relative w-full">
                      <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                        <div className="flex flex-col gap-14 items-center justify-start w-full">
                          <Line className="bg-indigo-50 h-px w-full" />
                          <Line className="bg-indigo-50 h-px w-full" />
                          <Line className="bg-indigo-50 h-px w-full" />
                          <Line className="bg-indigo-50 h-px w-full" />
                          <Line className="bg-indigo-50 h-px w-full" />
                        </div>
                      </div>
                      <div
                        className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto pt-[83px] w-[96%]"
                        style={{
                          backgroundImage: "url('images/img_group763.svg')",
                        }}
                      >
                        <Img
                          className="h-[169px] w-[608px]"
                          src="images/img_customers.svg"
                          alt="customers_One"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row sm:gap-[50px] h-7 md:h-auto items-center justify-between mb-[7px] w-[608px] md:w-full">
                      <Text
                        className="text-blue_gray-300 text-center text-xs tracking-[0.50px] w-auto"
                        size="txtMontserratSemiBold12"
                      >
                        JAN
                      </Text>
                      <Text
                        className="text-blue_gray-300 text-center text-xs tracking-[0.50px] w-auto"
                        size="txtMontserratSemiBold12"
                      >
                        FEB
                      </Text>
                      <Text
                        className="text-blue_gray-300 text-center text-xs tracking-[0.50px] w-auto"
                        size="txtMontserratSemiBold12"
                      >
                        MAR
                      </Text>
                      <Text
                        className="text-blue_gray-300 text-center text-xs tracking-[0.50px] w-auto"
                        size="txtMontserratSemiBold12"
                      >
                        APR
                      </Text>
                      <Text
                        className="text-blue_gray-300 text-center text-xs tracking-[0.50px] w-auto"
                        size="txtMontserratSemiBold12"
                      >
                        MAY
                      </Text>
                      <Text
                        className="text-blue_gray-300 text-center text-xs tracking-[0.50px] w-auto"
                        size="txtMontserratSemiBold12"
                      >
                        JUN
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-3 items-start justify-start w-[454px] sm:w-full">
                    <div className="flex flex-row gap-2 items-center justify-start w-[140px]">
                      <div className="bg-blue-A400 h-2 rounded-[50%] w-2"></div>
                      <Text
                        className="flex-1 text-blue_gray-300 text-xs tracking-[0.50px] w-auto"
                        size="txtMontserratSemiBold12"
                      >
                        Customers
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start w-[140px]">
                      <div className="bg-pink-500 h-2 rounded-[50%] w-2"></div>
                      <Text
                        className="flex-1 text-blue_gray-300 text-xs tracking-[0.50px] w-auto"
                        size="txtMontserratSemiBold12"
                      >
                        Beneficiaries
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 border border-indigo-50 border-solid flex flex-col items-start justify-start max-w-[1376px] mx-auto p-4 md:px-5 rounded-[12px] w-full">
            <div className="flex flex-col gap-4 items-center justify-start w-full">
              <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                <Text
                  className="text-[15px] text-indigo-800 tracking-[0.50px] uppercase w-auto"
                  size="txtMontserratBold15"
                >
                  Customers List
                </Text>
                <Button
                  className="common-pointer cursor-pointer flex items-center justify-center min-w-[102px] rounded-[12px]"
                  onClick={() => navigate("/customers")}
                  rightIcon={
                    <Img
                      className="h-5 ml-1"
                      src="images/img_arrowleft_blue_gray_800.svg"
                      alt="arrow_left"
                    />
                  }
                  color="blue_gray_50_01"
                  size="md"
                  variant="fill"
                >
                  <div className="!text-blue_gray-800 font-semibold text-left text-sm tracking-[0.50px]">
                    View All
                  </div>
                </Button>
              </div>
              <div className="overflow-auto w-full">
                <ReactTable
                  columns={tableColumns}
                  data={tableData.current}
                  rowClass={"border border-blue_gray-50_01"}
                  headerClass=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopFifteenPage;
