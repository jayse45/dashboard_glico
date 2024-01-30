import React from "react";

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
import BeneficiariesIndexSidenav from "components/BeneficiariesIndexSidenav";

import { CloseSVG } from "../../assets/images";

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

const BeneficiariesindexPage = () => {
  const table4Data = React.useRef([
    {
      name: "Mother",
      address: "2715 Ash Dr. San Jose, South Dakota 83475",
      contact: "+233-25-321-1235",
      dateadded: "21/12/23",
      age: "60 & Above",
    },
    {
      name: "Mother",
      address: "4140 Parker Rd. Allentown, New Mexico 31134",
      contact: "+233-25-321-1235",
      dateadded: "21/12/23",
      age: "60 & Above",
    },
    {
      name: "Mother",
      address: "3517 W. Gray St. Utica, Pennsylvania 57867",
      contact: "Kay@gmail.com",
      dateadded: "21/12/23",
      age: "Under 60",
    },
    {
      name: "Mother",
      address: "3517 W. Gray St. Utica, Pennsylvania 57867",
      contact: "+233-25-321-1235",
      dateadded: "21/12/23",
      age: "60 & Above",
    },
    {
      name: "Mother",
      address: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      contact: "kenzi.lawson@example.com",
      dateadded: "21/12/23",
      age: "60 & Above",
    },
    {
      name: "Mother",
      address: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
      contact: "deanna.curtis@example.com",
      dateadded: "21/12/23",
      age: "60 & Above",
    },
  ]);
  const table4Columns = React.useMemo(() => {
    const table4ColumnHelper = createColumnHelper();
    return [
      table4ColumnHelper.accessor("rowrectangletwo", {
        cell: (info) => (
          <div className="flex sm:flex-1 flex-row items-center justify-start pr-4 py-4 sm:w-full">
            <CheckBox
              className="my-4"
              inputClassName="mr-[5px] rounded"
              name="rectangleThree"
              id="rectangleThree"
              color="blue_gray_100_01"
              variant="outline"
            ></CheckBox>
          </div>
        ),
        header: (info) => (
          <div className="flex sm:flex-1 flex-row items-center justify-start min-w-[28px] pr-4 py-4 sm:w-full">
            <CheckBox
              className="my-1"
              inputClassName="mr-[5px] rounded"
              name="rectangleTwo"
              id="rectangleTwo"
              color="blue_gray_100_01"
              variant="outline"
            ></CheckBox>
          </div>
        ),
      }),
      table4ColumnHelper.accessor("name", {
        cell: (info) => (
          <div className="flex flex-row font-inter gap-2 items-center justify-start p-1">
            <Text
              className="bg-deep_orange-50_01 flex h-12 items-center justify-center my-2.5 outline outline-[1px] outline-white-A700 rounded-[50%] text-center text-gray-900 text-lg w-12"
              size="txtInterSemiBold18"
            >
              AB
            </Text>
            <div className="flex flex-col font-montserrat gap-[5px] items-start justify-start">
              <Text
                className="text-[15px] text-black-900"
                size="txtMontserratMedium15"
              >
                Annette Black
              </Text>
              <Text
                className="text-blue_gray-500 text-xs"
                size="txtMontserratMedium12Bluegray500"
              >
                {info?.getValue()}
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[229px] py-4 text-blue_gray-500 text-sm tracking-[0.50px] uppercase"
            size="txtMontserratSemiBold14Bluegray500"
          >
            Name
          </Text>
        ),
      }),
      table4ColumnHelper.accessor("address", {
        cell: (info) => (
          <Text
            className="pl-1 py-7 text-[15px] text-blue_gray-700 tracking-[0.15px]"
            size="txtMontserratMedium15Bluegray700"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[180px] py-4 text-blue_gray-500 text-sm tracking-[0.50px] uppercase"
            size="txtMontserratSemiBold14Bluegray500"
          >
            Address
          </Text>
        ),
      }),
      table4ColumnHelper.accessor("contact", {
        cell: (info) => (
          <Text
            className="pl-1 py-7 text-[15px] text-blue_gray-700 tracking-[0.15px] underline"
            size="txtMontserratMedium15Bluegray700"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[180px] py-4 text-blue_gray-500 text-sm tracking-[0.50px] uppercase"
            size="txtMontserratSemiBold14Bluegray500"
          >
            Contact
          </Text>
        ),
      }),
      table4ColumnHelper.accessor("dateadded", {
        cell: (info) => (
          <Text
            className="pl-1 py-7 text-[15px] text-blue_gray-700 tracking-[0.15px]"
            size="txtMontserratMedium15Bluegray700"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[166px] py-4 text-blue_gray-500 text-sm tracking-[0.50px] uppercase"
            size="txtMontserratSemiBold14Bluegray500"
          >
            Date Added
          </Text>
        ),
      }),
      table4ColumnHelper.accessor("age", {
        cell: (info) => (
          <div className="flex flex-row font-montserrat gap-2 items-center justify-start p-2">
            <Text
              className="text-[15px] text-blue_gray-700 tracking-[0.15px]"
              size="txtMontserratMedium15Bluegray700"
            >
              62 yrs
            </Text>
            <Button
              className="cursor-pointer font-medium min-w-[79px] my-[18px] text-[11px] text-center"
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
            className="min-w-[183px] pl-[3px] py-4 text-blue_gray-500 text-sm tracking-[0.50px] uppercase"
            size="txtMontserratSemiBold14Bluegray500"
          >
            Age
          </Text>
        ),
      }),
      table4ColumnHelper.accessor("action", {
        cell: (info) => (
          <div className="flex sm:flex-1 flex-row font-montserrat items-center justify-center p-5 sm:w-full">
            <SelectBox
              className="font-medium ml-[18px] mr-[22px] text-[15px] text-left tracking-[0.15px] w-[70%] sm:w-full"
              placeholderClassName="text-blue_gray-700"
              indicator={
                <Img
                  className="h-4 mr-[0] w-4"
                  src="images/img_arrowdown.svg"
                  alt="arrow_down"
                />
              }
              isMulti={false}
              name="frame230"
              options={actionOptionsList}
              isSearchable={false}
              placeholder="Action"
              shape="round"
              color="blue_gray_50_01"
              size="xs"
              variant="fill"
            />
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[176px] py-4 text-blue_gray-500 text-center text-sm tracking-[0.50px] uppercase"
            size="txtMontserratSemiBold14Bluegray500"
          >
            Action
          </Text>
        ),
      }),
    ];
  }, []);

  const [framevalue, setFramevalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-50_03 flex flex-col font-montserrat items-center justify-start mx-auto sm:pr-5 pr-[21px] py-[21px] w-full">
        <div className="flex flex-col gap-8 items-center justify-start max-w-[1416px] mb-[41px] mx-auto md:px-5 w-full">
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
            <BeneficiariesIndexSidenav className="flex flex-col items-start justify-start md:mt-0 mt-[46px] w-auto" />
            <div className="bg-white-A700 border border-indigo-50 border-solid flex md:flex-1 flex-col items-start justify-start p-5 rounded-[16px] w-[84%] md:w-full">
              <div className="flex flex-col gap-2 items-start justify-start mt-[23px] w-[543px] sm:w-full">
                <Text
                  className="text-indigo-800 text-xl tracking-[0.50px] uppercase w-full"
                  size="txtMontserratSemiBold20"
                >
                  Beneficiaries
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
                    Total Beneficiaries
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between max-w-[1144px] mt-[31px] w-full">
                <Input
                  name="frame252"
                  placeholder="Name, Age, Date"
                  className="font-semibold p-0 placeholder:text-blue_gray-500 text-[15px] text-left w-full"
                  wrapClassName="flex sm:flex-1 rounded-[9px] sm:w-full"
                  type="text"
                  prefix={
                    <Img
                      className="h-6 my-auto"
                      src="images/img_search_blue_gray_500_24x24.svg"
                      alt="search"
                    />
                  }
                  color="blue_gray_50_01"
                  size="xs"
                  variant="fill"
                ></Input>
                <div className="flex flex-row gap-4 items-center justify-end w-auto">
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[100px] rounded-[12px]"
                    leftIcon={
                      <Img
                        className="h-6 mr-[11px]"
                        src="images/img_plus.svg"
                        alt="plus"
                      />
                    }
                    color="indigo_800"
                    size="lg"
                    variant="fill"
                  >
                    <div className="font-semibold text-[15px] text-left">
                      Add
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[120px] rounded-[12px]"
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
              </div>
              <div className="overflow-auto mt-[45px] w-full">
                <ReactTable
                  columns={table4Columns}
                  data={table4Data.current}
                  rowClass={"border border-blue_gray-50_01"}
                  headerClass=""
                />
              </div>
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1144px] mb-6 mt-[68px] w-full">
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
                  name="frame230_Six"
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

export default BeneficiariesindexPage;
