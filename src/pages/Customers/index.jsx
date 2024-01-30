import React from "react";

import { useNavigate } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";

import {
  Button,
  CheckBox,
  Img,
  Input,
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
const weekOptionsList2 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const filterOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const exportOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const actionOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const optionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const CustomersPage = () => {
  const table2Data = React.useRef([
    {
      name: "Bessie Cooper",
      contact: "kenzi.lawson@example.com",
      datecreated: "10/28/12",
      beneficiaries: "8",
      status: "Inactive",
    },
    {
      name: "Bessie Cooper",
      contact: "kenzi.lawson@example.com",
      datecreated: "10/28/12",
      beneficiaries: "8",
      status: "Active",
    },
    {
      name: "Bessie Cooper",
      contact: "kenzi.lawson@example.com",
      datecreated: "10/28/12",
      beneficiaries: "4",
      status: "Active",
    },
    {
      name: "Bessie Cooper",
      contact: "kenzi.lawson@example.com",
      datecreated: "10/28/12",
      beneficiaries: "8",
      status: "Inactive",
    },
    {
      name: "Bessie Cooper",
      contact: "kenzi.lawson@example.com",
      datecreated: "10/28/12",
      beneficiaries: "8",
      status: "Active",
    },
  ]);
  const navigate = useNavigate();
  const table2Columns = React.useMemo(() => {
    const table2ColumnHelper = createColumnHelper();
    return [
      table2ColumnHelper.accessor("rowsettingsone", {
        cell: (info) => (
          <div className="flex sm:flex-1 flex-row items-center justify-evenly py-2 sm:w-full">
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
      table2ColumnHelper.accessor("name", {
        cell: (info) => (
          <div className="flex flex-row gap-[9px] items-center justify-start p-2">
            <Text
              className="bg-blue-50 flex h-8 items-center justify-center my-2.5 outline outline-[1px] outline-white-A700 rounded-[50%] text-center text-gray-900 text-sm w-8"
              size="txtInterSemiBold14"
            >
              GH
            </Text>
            <Text
              className="text-[15px] text-blue_gray-700"
              size="txtMontserratMedium15Bluegray700"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[224px] pl-1 py-3 text-blue_gray-300 text-sm tracking-[0.50px] uppercase"
            size="txtMontserratSemiBold14"
          >
            Name
          </Text>
        ),
      }),
      table2ColumnHelper.accessor("contact", {
        cell: (info) => (
          <Text
            className="pl-1 py-6 text-[15px] text-blue_gray-700 tracking-[0.15px]"
            size="txtMontserratMedium15Bluegray700"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[220px] py-3 text-blue_gray-300 text-sm tracking-[0.50px] uppercase"
            size="txtMontserratSemiBold14"
          >
            Contact
          </Text>
        ),
      }),
      table2ColumnHelper.accessor("datecreated", {
        cell: (info) => (
          <Text
            className="pl-1 py-6 text-[15px] text-blue_gray-700 tracking-[0.15px]"
            size="txtMontserratMedium15Bluegray700"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[220px] py-3 text-blue_gray-300 text-sm tracking-[0.50px] uppercase"
            size="txtMontserratSemiBold14"
          >
            Date Created
          </Text>
        ),
      }),
      table2ColumnHelper.accessor("beneficiaries", {
        cell: (info) => (
          <div className="flex font-inter p-1 relative">
            <div className="flex my-auto w-[37%]">
              <div className="flex my-auto w-[70%]">
                <div className="bg-blue-50 flex flex-col h-8 items-center justify-start my-auto outline outline-[1px] outline-white-A700 p-[5px] rounded-[50%] w-8">
                  <Text
                    className="my-0.5 text-center text-gray-900 text-sm"
                    size="txtInterSemiBold14"
                  >
                    GH
                  </Text>
                </div>
                <div className="bg-blue-50 flex flex-col h-8 items-center justify-start ml-[-8px] my-auto outline outline-[1px] outline-white-A700 p-[5px] rounded-[50%] w-8 z-[1]">
                  <Text
                    className="my-0.5 text-center text-gray-900 text-sm"
                    size="txtInterSemiBold14"
                  >
                    GH
                  </Text>
                </div>
              </div>
              <Text
                className="bg-blue-50 flex h-8 items-center justify-center ml-[-8px] my-auto outline outline-[1px] outline-white-A700 rounded-[50%] text-center text-gray-900 text-sm w-8 z-[1]"
                size="txtInterSemiBold14"
              >
                GH
              </Text>
            </div>
            <Text
              className="bg-blue-50 flex h-8 items-center justify-center ml-[-8px] my-auto rounded-[50%] text-center text-gray-900 text-sm w-8 z-[1]"
              size="txtInterSemiBold14"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[220px] py-3 text-blue_gray-300 text-sm tracking-[0.50px] uppercase"
            size="txtMontserratSemiBold14"
          >
            beneficiaries
          </Text>
        ),
      }),
      table2ColumnHelper.accessor("status", {
        cell: (info) => (
          <div className="flex flex-row font-montserrat items-center justify-start p-1">
            <Button
              className="cursor-pointer font-medium min-w-[61px] my-[18px] text-[11px] text-center"
              shape="round"
              color="deep_orange_50"
              size="sm"
              variant="fill"
            >
              {info?.getValue()}
            </Button>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[278px] py-3 text-blue_gray-300 text-sm tracking-[0.50px] uppercase"
            size="txtMontserratSemiBold14"
          >
            Status
          </Text>
        ),
      }),
      table2ColumnHelper.accessor("action", {
        cell: (info) => (
          <div className="flex sm:flex-1 flex-row font-montserrat items-center justify-center pr-4 py-4 sm:w-full">
            <SelectBox
              className="font-medium mr-[46px] text-[15px] text-left tracking-[0.15px] w-[68%] sm:w-full"
              placeholderClassName="text-blue_gray-700"
              indicator={
                <Img
                  className="h-4 mr-[0] w-4"
                  src="images/img_arrowdown.svg"
                  alt="arrow_down"
                />
              }
              isMulti={false}
              name="frame231_One"
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
            className="min-w-[157px] pl-[17px] py-3 text-blue_gray-300 text-center text-sm tracking-[0.50px] uppercase"
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
      <div className="bg-gray-100 flex flex-col font-montserrat items-center justify-start mx-auto pb-[74px] w-full">
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
                <Button
                  className="common-pointer cursor-pointer font-semibold min-w-[101px] text-[15px] text-blue_gray-300 text-center tracking-[0.50px]"
                  onClick={() => navigate("/desktopfifteen")}
                  shape="round"
                  size="lg"
                >
                  Overview
                </Button>
                <Button
                  className="cursor-pointer font-semibold min-w-[112px] text-[15px] text-center tracking-[0.50px]"
                  shape="round"
                  color="indigo_800"
                  size="lg"
                  variant="fill"
                >
                  Customers
                </Button>
                <Button
                  className="common-pointer cursor-pointer font-semibold min-w-[128px] text-[15px] text-blue_gray-300 text-center tracking-[0.50px]"
                  onClick={() => navigate("/transactions")}
                  shape="round"
                  size="lg"
                >
                  Transactions
                </Button>
                <Button
                  className="common-pointer cursor-pointer font-semibold min-w-[87px] text-[15px] text-blue_gray-300 text-center tracking-[0.50px]"
                  onClick={() => navigate("/policiestwo")}
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
          className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-[1373px] mt-4 mx-auto md:px-5 w-full"
          orientation="horizontal"
        >
          <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col h-full items-start justify-between rounded-[12px] w-full">
            <div className="border-b border-blue_gray-50 border-solid flex flex-row gap-[7px] items-center justify-start p-3 w-full">
              <Text
                className="flex-1 text-[15px] text-blue_gray-400 tracking-[0.50px] w-auto"
                size="txtMontserratSemiBold15"
              >
                Total Customers
              </Text>
              <SelectBox
                className="border border-blue_gray-50 border-solid sm:flex-1 font-medium text-[15px] text-left tracking-[0.15px] w-[22%] sm:w-full"
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
            <div className="flex flex-col gap-3 h-[95px] md:h-auto items-start justify-center p-3 w-full">
              <div className="flex flex-col items-end justify-start w-80">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-indigo-800 tracking-[0.50px] uppercase w-auto"
                  size="txtMontserratBold32Indigo800"
                >
                  20,0115
                </Text>
              </div>
              <div className="flex flex-row items-start justify-between w-full">
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
          </div>
          <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col h-full items-start justify-between rounded-[12px] w-full">
            <div className="border-b border-blue_gray-50 border-solid flex flex-row gap-[7px] items-center justify-start p-3 w-full">
              <Text
                className="flex-1 text-[15px] text-blue_gray-400 tracking-[0.50px] w-auto"
                size="txtMontserratSemiBold15"
              >
                Active Customers
              </Text>
              <SelectBox
                className="border border-blue_gray-50 border-solid sm:flex-1 font-medium text-[15px] text-left tracking-[0.15px] w-[22%] sm:w-full"
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
            <div className="flex flex-col gap-3 h-[95px] md:h-auto items-start justify-center p-3 w-full">
              <div className="flex flex-col items-end justify-start w-80">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-indigo-800 tracking-[0.50px] uppercase w-auto"
                  size="txtMontserratBold32Indigo800"
                >
                  20,0115
                </Text>
              </div>
              <div className="flex flex-row items-start justify-between w-full">
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
          </div>
          <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col h-full items-start justify-between rounded-[12px] w-full">
            <div className="border-b border-blue_gray-50 border-solid flex flex-row gap-[7px] items-center justify-start p-3 w-full">
              <Text
                className="flex-1 text-[15px] text-blue_gray-400 tracking-[0.50px] w-auto"
                size="txtMontserratSemiBold15"
              >
                Inactive customers
              </Text>
              <SelectBox
                className="border border-blue_gray-50 border-solid sm:flex-1 font-medium text-[15px] text-left tracking-[0.15px] w-[22%] sm:w-full"
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
            <div className="flex flex-col gap-3 h-[95px] md:h-auto items-start justify-center p-3 w-full">
              <div className="flex flex-col items-end justify-start w-80">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-indigo-800 tracking-[0.50px] uppercase w-auto"
                  size="txtMontserratBold32Indigo800"
                >
                  20,0115
                </Text>
              </div>
              <div className="flex flex-row items-start justify-between w-full">
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
          </div>
        </List>
        <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-start max-w-[1373px] mt-3 mx-auto p-3 md:px-5 rounded-[12px] w-full">
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <Input
                name="frame361_One"
                placeholder="Search..."
                className="font-semibold p-0 placeholder:text-blue_gray-300 text-[15px] text-left tracking-[0.50px] w-full"
                wrapClassName="border border-gray-300 border-solid md:flex-1 rounded-lg md:w-full"
                color="gray_100"
                size="xs"
                variant="fill"
              ></Input>
              <div className="flex sm:flex-1 flex-row gap-3 items-center justify-end w-[400px] sm:w-full">
                <SelectBox
                  className="border border-blue_gray-50 border-solid font-medium text-[15px] text-left tracking-[0.15px] w-[21%] sm:w-full"
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
                  options={filterOptionsList}
                  isSearchable={false}
                  placeholder="Filter"
                  shape="round"
                  color="gray_100"
                  size="xs"
                  variant="fill"
                />
                <SelectBox
                  className="border border-blue_gray-50 border-solid font-medium text-[15px] text-left tracking-[0.15px] w-[24%] sm:w-full"
                  placeholderClassName="text-blue_gray-700"
                  indicator={
                    <Img
                      className="h-4 w-4"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="frame422"
                  options={exportOptionsList}
                  isSearchable={false}
                  placeholder="Export"
                  shape="round"
                  color="gray_100"
                  size="xs"
                  variant="fill"
                />
              </div>
            </div>
            <div className="overflow-auto w-full">
              <ReactTable
                columns={table2Columns}
                data={table2Data.current}
                rowClass={"border border-blue_gray-50_01"}
                headerClass=""
              />
            </div>
            <div className="flex flex-row md:gap-10 items-center justify-between w-full">
              <SelectBox
                className="sm:flex-1 font-medium text-[15px] text-left tracking-[0.15px] w-[5%] sm:w-full"
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
    </>
  );
};

export default CustomersPage;
