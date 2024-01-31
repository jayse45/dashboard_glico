import React from "react";

import { useNavigate } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";

import {
  Button,
  CheckBox,
  Img,
  Input,
  List,
  Navbar,
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
const optionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const TransactionsPage = () => {
  const table1Data = React.useRef([
    {
      name: "Guy Hawkins",
      date: "9/18/16",
      amount: "¢30,000",
      product: "Enhanced",
      rowbeneficiary: "Success",
    },
    {
      name: "Esther Howard",
      date: "9/18/16",
      amount: "¢30,000",
      product: "Ultimate",
      rowbeneficiary: "Success",
    },
    {
      name: "Brooklyn Simmons",
      date: "9/18/16",
      amount: "¢30,000",
      product: "Enhanced",
      rowbeneficiary: "Success",
    },
    {
      name: "Cameron Williamson",
      date: "9/18/16",
      amount: "¢30,000",
      product: "Enhanced Plus",
      rowbeneficiary: "Success",
    },
    {
      name: "Leslie Alexander",
      date: "9/18/16",
      amount: "¢30,000",
      product: "Ultimate",
      rowbeneficiary: "Success",
    },
    {
      name: "Floyd Miles",
      date: "9/18/16",
      amount: "¢30,000",
      product: "Enhanced Plus",
      rowbeneficiary: "Success",
    },
  ]);
  const navigate = useNavigate();
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper();
    return [
      table1ColumnHelper.accessor("rowsettingsone", {
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
      table1ColumnHelper.accessor("name", {
        cell: (info) => (
          <div className="flex flex-row gap-[9px] items-center justify-start p-2">
            <Text
              className="bg-blue-50 flex h-8 items-center justify-center my-0.5 outline outline-[1px] outline-white-A700 rounded-[50%] text-center text-gray-900 text-sm w-8"
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
      table1ColumnHelper.accessor("date", {
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
            className="min-w-[220px] py-3 text-blue_gray-300 text-sm tracking-[0.50px] uppercase"
            size="txtMontserratSemiBold14"
          >
            Date
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("amount", {
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
            className="min-w-[216px] py-3 text-blue_gray-300 text-sm tracking-[0.50px] uppercase"
            size="txtMontserratSemiBold14"
          >
            Amount
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("product", {
        cell: (info) => (
          <div className="flex flex-row gap-2 items-center justify-start p-2">
            <Text
              className="text-[15px] text-blue_gray-700"
              size="txtMontserratMedium15Bluegray700"
            >
              Under 60
            </Text>
            <Button
              className="cursor-pointer font-medium min-w-[68px] my-1.5 text-[10px] text-center"
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
            className="min-w-[224px] pl-1 py-3 text-blue_gray-300 text-sm tracking-[0.50px] uppercase"
            size="txtMontserratSemiBold14"
          >
            Product
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("rowbeneficiary", {
        cell: (info) => (
          <div className="flex flex-row gap-[141px] items-center justify-start p-1">
            <div className="flex font-inter my-1.5 relative w-[19%]">
              <div className="flex my-auto w-[71%]">
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
              className="text-[15px] text-green-800 tracking-[0.15px]"
              size="txtMontserratMedium15Green800"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row gap-[193px] items-center justify-start min-w-[436px] pr-3 py-3">
            <Text
              className="text-blue_gray-300 text-sm tracking-[0.50px] uppercase"
              size="txtMontserratSemiBold14"
            >
              Beneficiary
            </Text>
            <Text
              className="text-blue_gray-300 text-center text-sm tracking-[0.50px] uppercase"
              size="txtMontserratSemiBold14"
            >
              Status
            </Text>
          </div>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-gray-100 flex flex-row gap-0 font-montserrat items-start justify-start pb-9 w-full">
        <div className="flex items-start justify-end md:mt-0 pt-10 min-w-[400px] h-screen flex-1 mr-0 pr-0">
          <Navbar path="Transactions"/>
        </div>
        <div className="flex flex-col gap-[31px] items-start justify-start w-full ml-0 pl-0">
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
        <List
          className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-[1450px] mt-4 md:px-5 w-full"
          orientation="horizontal"
        >
          <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col h-full items-start justify-between rounded-[12px] w-full">
            <div className="border-b border-blue_gray-50 border-solid flex flex-row gap-[7px] items-center justify-start p-3 w-full">
              <Text
                className="flex-1 text-[15px] text-blue_gray-400 tracking-[0.50px] w-auto"
                size="txtMontserratSemiBold15"
              >
                Total Transactions
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
                <div className="flex flex-row gap-1 items-center justify-start w-full">
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
          <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col h-full items-start justify-between rounded-[12px] w-full">
            <div className="border-b border-blue_gray-50 border-solid flex flex-row gap-[7px] items-center justify-start p-3 w-full">
              <Text
                className="flex-1 text-[15px] text-blue_gray-400 tracking-[0.50px] w-auto"
                size="txtMontserratSemiBold15"
              >
                Under 60
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
                <div className="flex flex-row gap-1 items-center justify-start w-full">
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
          <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col h-full items-start justify-between rounded-[12px] w-full">
            <div className="border-b border-blue_gray-50 border-solid flex flex-row gap-[7px] items-center justify-start p-3 w-full">
              <Text
                className="flex-1 text-[15px] text-blue_gray-400 tracking-[0.50px] w-auto"
                size="txtMontserratSemiBold15"
              >
                60& Above
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
                <div className="flex flex-row gap-1 items-center justify-start w-full">
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
        </List>
        <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-start max-w-[1450px] mt-3 p-3 md:px-5 rounded-[12px] w-full">
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
                columns={table1Columns}
                data={table1Data.current}
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
      </div>
    </>
  );
};

export default TransactionsPage;
