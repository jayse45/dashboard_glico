import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import {
  Button,
  CheckBox,
  Img,
  Input,
  ReactTable,
  SelectBox,
  Text,
} from "components";
import TransactionsIndexSidenav from "components/TransactionsIndexSidenav";

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

const TransactionsFilterOnePage = () => {
  const table10Data = React.useRef([
    {
      plan: "Enhanced",
      beneficiary: "Annette Black",
      amount: "¢3000",
      date: "12/02/23",
    },
    {
      plan: "Enhanced Plus",
      beneficiary: "Jenny Wilson",
      amount: "¢3000",
      date: "12/02/23",
    },
    {
      plan: "Ultimate",
      beneficiary: "Devon Lane",
      amount: "¢3000",
      date: "12/02/23",
    },
    {
      plan: "Enhanced Plus",
      beneficiary: "Guy Hawkins",
      amount: "¢3000",
      date: "12/02/23",
    },
    {
      plan: "Enhanced",
      beneficiary: "Cameron Williamson",
      amount: "¢3000",
      date: "12/02/23",
    },
  ]);
  const table10Columns = React.useMemo(() => {
    const table10ColumnHelper = createColumnHelper();
    return [
      table10ColumnHelper.accessor("rowrectangletwo", {
        cell: (info) => (
          <div className="flex sm:flex-1 flex-row items-center justify-start pr-4 py-4 sm:w-full">
            <CheckBox
              className="my-3.5"
              inputClassName="mr-[5px] rounded"
              name="rectangleOne"
              id="rectangleOne"
              color="blue_gray_100_01"
              variant="outline"
            ></CheckBox>
          </div>
        ),
        header: (info) => (
          <div className="flex sm:flex-1 flex-row items-center justify-start min-w-[28px] pr-4 py-4 sm:w-full">
            <CheckBox
              className=""
              inputClassName="mr-[5px] rounded"
              name="rectangleTwo"
              id="rectangleTwo"
              color="blue_gray_100_01"
              variant="outline"
            ></CheckBox>
          </div>
        ),
      }),
      table10ColumnHelper.accessor("plan", {
        cell: (info) => (
          <div className="flex flex-row gap-2 items-center justify-start p-2">
            <Text
              className="text-[15px] text-black-900"
              size="txtMontserratMedium15"
            >
              Under 60
            </Text>
            <Button
              className="cursor-pointer font-medium min-w-[68px] my-4 text-[10px] text-center"
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
            className="min-w-[208px] pl-2.5 py-3 text-blue_gray-500 text-sm tracking-[0.50px] uppercase"
            size="txtMontserratSemiBold14Bluegray500"
          >
            Plan
          </Text>
        ),
      }),
      table10ColumnHelper.accessor("beneficiary", {
        cell: (info) => (
          <div className="flex sm:flex-col flex-row gap-2 items-center justify-center pr-5 py-5">
            <Text
              className="bg-deep_orange-50_01 flex h-8 items-center justify-center outline outline-[1px] outline-white-A700 rounded-[50%] text-center text-gray-900 text-sm w-8"
              size="txtInterSemiBold14"
            >
              AB
            </Text>
            <Text
              className="mr-[292px] text-[15px] text-black-900"
              size="txtMontserratMedium15"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[462px] pl-0.5 py-3 text-blue_gray-500 text-center text-sm tracking-[0.50px] uppercase"
            size="txtMontserratSemiBold14Bluegray500"
          >
            Beneficiary
          </Text>
        ),
      }),
      table10ColumnHelper.accessor("amount", {
        cell: (info) => (
          <Text
            className="pl-3 py-[26px] text-[15px] text-green-800"
            size="txtMontserratRegular15Green800"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[200px] py-3 text-blue_gray-500 text-sm tracking-[0.50px] uppercase"
            size="txtMontserratSemiBold14Bluegray500"
          >
            Amount
          </Text>
        ),
      }),
      table10ColumnHelper.accessor("date", {
        cell: (info) => (
          <Text
            className="pl-3 py-[26px] text-[15px] text-blue_gray-700 tracking-[0.15px]"
            size="txtMontserratMedium15Bluegray700"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[136px] py-3 text-blue_gray-500 text-sm tracking-[0.50px] uppercase"
            size="txtMontserratSemiBold14Bluegray500"
          >
            Date
          </Text>
        ),
      }),
      table10ColumnHelper.accessor("action", {
        cell: (info) => (
          <div className="flex sm:flex-1 flex-row items-center justify-center pr-3 py-3 sm:w-full">
            <SelectBox
              className="font-medium my-1.5 text-[15px] text-left tracking-[0.15px] w-full"
              placeholderClassName="text-blue_gray-700"
              indicator={
                <Img
                  className="h-4 mr-[0] w-4"
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
        ),
        header: (info) => (
          <Text
            className="min-w-[107px] pl-[9px] py-3 text-blue_gray-500 text-center text-sm tracking-[0.50px] uppercase"
            size="txtMontserratSemiBold14Bluegray500"
          >
            Action
          </Text>
        ),
      }),
    ];
  }, []);

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
                <div className="h-[468px] md:h-[478px] mt-2 relative w-full">
                  <div className="overflow-auto absolute inset-[0] justify-center m-auto w-full">
                    <ReactTable
                      columns={table10Columns}
                      data={table10Data.current}
                      rowClass={"border border-blue_gray-50_01"}
                      headerClass=""
                    />
                  </div>
                  <div className="absolute bg-white-A700 border border-blue_gray-50_01 border-solid flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[15%] rounded-[12px] shadow-bs1 w-auto">
                    <div className="border-b border-blue_gray-50_01 border-solid flex flex-col items-center justify-start p-5 rounded-[12px] w-full">
                      <Text
                        className="text-blue_gray-900_01 text-xl w-auto"
                        size="txtMontserratRomanSemiBold20"
                      >
                        Filter Options
                      </Text>
                    </div>
                    <div className="flex flex-col gap-5 items-start justify-start sm:px-5 px-8 py-5 w-auto sm:w-full">
                      <div className="flex flex-col gap-3 items-start justify-start w-auto">
                        <Text
                          className="text-[15px] text-blue_gray-500 w-auto"
                          size="txtMontserratRomanSemiBold15"
                        >
                          Months
                        </Text>
                        <Input
                          name="frame252"
                          placeholder="Search transactions..."
                          className="font-semibold p-0 placeholder:text-blue_gray-500 text-[15px] text-left w-full"
                          wrapClassName="flex md:h-auto w-[316px]"
                          suffix={
                            <Img
                              className="mt-0.5 mb-px h-4 ml-[35px]"
                              src="images/img_arrowdown.svg"
                              alt="arrow_down"
                            />
                          }
                          shape="round"
                          color="blue_gray_50_01"
                          size="sm"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-3 items-start justify-start w-auto">
                        <Text
                          className="text-[15px] text-blue_gray-500 w-auto"
                          size="txtMontserratRomanSemiBold15"
                        >
                          Plan
                        </Text>
                        <Input
                          name="frame252_One"
                          placeholder="Search transactions..."
                          className="font-semibold p-0 placeholder:text-blue_gray-500 text-[15px] text-left w-full"
                          wrapClassName="flex md:h-auto w-[316px]"
                          suffix={
                            <Img
                              className="mt-0.5 mb-px h-4 ml-[35px]"
                              src="images/img_arrowdown.svg"
                              alt="arrow_down"
                            />
                          }
                          shape="round"
                          color="blue_gray_50_01"
                          size="sm"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-3 items-start justify-start w-auto">
                        <Text
                          className="text-[15px] text-blue_gray-500 w-auto"
                          size="txtMontserratRomanSemiBold15"
                        >
                          Tier
                        </Text>
                        <Input
                          name="frame252_Two"
                          placeholder="Search transactions..."
                          className="font-semibold p-0 placeholder:text-blue_gray-500 text-[15px] text-left w-full"
                          wrapClassName="flex md:h-auto w-[316px]"
                          suffix={
                            <Img
                              className="mt-0.5 mb-px h-4 ml-[35px]"
                              src="images/img_arrowdown.svg"
                              alt="arrow_down"
                            />
                          }
                          shape="round"
                          color="blue_gray_50_01"
                          size="sm"
                          variant="fill"
                        ></Input>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-end p-5 w-full">
                      <Button
                        className="cursor-pointer font-semibold h-12 min-w-[84px] rounded-[12px] text-[15px] text-center"
                        color="indigo_800_0f"
                        size="lg"
                        variant="fill"
                      >
                        Reset
                      </Button>
                      <Button
                        className="cursor-pointer font-semibold h-12 min-w-[85px] rounded-[12px] text-[15px] text-center"
                        color="indigo_800"
                        size="lg"
                        variant="fill"
                      >
                        Apply
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1148px] mt-1 w-full">
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

export default TransactionsFilterOnePage;
