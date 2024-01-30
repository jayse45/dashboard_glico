import React from "react";

import { useNavigate } from "react-router-dom";

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
import DashboardSidenav from "components/DashboardSidenav";

const whoIsTheBeneficiaryToYouOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const selectCountryOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const enterAddressOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DashboardAddbeneficiaryPage = () => {
  const table7Data = React.useRef([
    { plan: "Enhanced", rowbeneficiary: "¢3000", date: "12/02/23" },
    { plan: "Enhanced Plus", rowbeneficiary: "¢3000", date: "12/02/23" },
    { plan: "Ultimate", rowbeneficiary: "¢3000", date: "12/02/23" },
    { plan: "Enhanced Plus", rowbeneficiary: "¢3000", date: "12/02/23" },
  ]);
  const navigate = useNavigate();
  const table7Columns = React.useMemo(() => {
    const table7ColumnHelper = createColumnHelper();
    return [
      table7ColumnHelper.accessor("rowrectangletwo", {
        cell: (info) => (
          <div className="flex sm:flex-1 flex-row items-center justify-start sm:pr-5 pr-6 py-6 sm:w-full">
            <CheckBox
              className="my-1.5"
              inputClassName="mr-[5px] rounded"
              name="rectangleOne"
              id="rectangleOne"
              color="blue_gray_100_01"
              variant="outline"
            ></CheckBox>
          </div>
        ),
        header: (info) => (
          <div className="flex sm:flex-1 flex-row items-center justify-start min-w-[36px] pr-4 py-4 sm:w-full">
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
      table7ColumnHelper.accessor("plan", {
        cell: (info) => (
          <div className="flex flex-row gap-2 items-center justify-center sm:pr-5 pr-6 py-6">
            <Text
              className="text-[15px] text-black-900"
              size="txtMontserratMedium15"
            >
              Under 60
            </Text>
            <Button
              className="cursor-pointer font-medium min-w-[73px] mr-[15px] text-[11px] text-center"
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
            className="min-w-[192px] pl-0.5 py-3 text-blue_gray-500 text-center text-sm tracking-[0.50px] uppercase"
            size="txtMontserratSemiBold14Bluegray500"
          >
            Plan
          </Text>
        ),
      }),
      table7ColumnHelper.accessor("rowbeneficiary", {
        cell: (info) => (
          <div className="flex flex-row gap-2 items-center justify-center pr-2 py-2">
            <div className="flex flex-row gap-[9px] items-center justify-between p-2 w-[59%]">
              <Text
                className="bg-deep_orange-50_01 flex h-8 items-center justify-center my-1 outline outline-[1px] outline-white-A700 rounded-[50%] text-center text-gray-900 text-sm w-8"
                size="txtInterSemiBold14"
              >
                AB
              </Text>
              <Text
                className="leading-[20.00px] text-[15px] text-black-900"
                size="txtMontserratMedium15"
              >
                Annette Black
              </Text>
            </div>
            <Text
              className="mr-[51px] text-[15px] text-green-800"
              size="txtMontserratRegular15Green800"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row gap-9 items-center justify-center min-w-[271px] p-2.5">
            <Text
              className="my-0.5 text-blue_gray-500 text-sm tracking-[0.50px] uppercase"
              size="txtMontserratSemiBold14Bluegray500"
            >
              Beneficiary
            </Text>
            <Text
              className="my-0.5 text-blue_gray-500 text-sm tracking-[0.50px] uppercase"
              size="txtMontserratSemiBold14Bluegray500"
            >
              Amount
            </Text>
          </div>
        ),
      }),
      table7ColumnHelper.accessor("date", {
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
            className="min-w-[124px] py-3 text-blue_gray-500 text-sm tracking-[0.50px] uppercase"
            size="txtMontserratSemiBold14Bluegray500"
          >
            Date
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-gray-50_03 font-montserrat h-[1024px] mx-auto relative w-full">
        <DashboardSidenav className="absolute flex flex-col items-center justify-start left-[0] md:px-5 top-[13%] w-auto" />
        <div className="absolute bg-white-A700 border border-indigo-50 border-solid flex flex-col h-max inset-y-[0] items-center justify-start my-auto p-5 md:px-5 right-[1%] rounded-[16px] w-[83%]">
          <div className="flex flex-col items-center justify-start mb-[174px] mt-[39px] w-full">
            <Text
              className="text-[15px] text-blue_gray-900_01 text-center"
              size="txtMontserratMedium15Bluegray90001"
            >
              Thursday December 14
            </Text>
            <Text
              className="mt-[13px] sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900_01 text-center"
              size="txtMontserratMedium28"
            >
              Hey there, Neequaye
            </Text>
            <div className="flex flex-row gap-1 items-center justify-between mt-[30px] w-[400px] sm:w-full">
              <div className="flex flex-col items-center justify-start w-[95px]">
                <Text
                  className="text-[15px] text-blue_gray-500 w-auto"
                  size="txtMontserratRegular15Bluegray500"
                >
                  <span className="text-blue_gray-900_01 font-montserrat text-left font-semibold">
                    2
                  </span>
                  <span className="text-blue_gray-500 font-montserrat text-left font-semibold">
                    {" "}
                  </span>
                  <span className="text-blue_gray-500 font-montserrat text-left font-normal">
                    Insurances
                  </span>
                </Text>
              </div>
              <div className="bg-blue_gray-100_01 h-1 rounded-[50%] w-1"></div>
              <div className="flex flex-col items-center justify-start w-[67px]">
                <Text
                  className="text-[15px] text-blue_gray-500 w-auto"
                  size="txtMontserratRegular15Bluegray500"
                >
                  <span className="text-blue_gray-900_01 font-montserrat text-left font-semibold">
                    1
                  </span>
                  <span className="text-blue_gray-900_01 font-montserrat text-left font-normal">
                    {" "}
                  </span>
                  <span className="text-blue_gray-500 font-montserrat text-left font-normal">
                    Expired
                  </span>
                </Text>
              </div>
              <div className="bg-blue_gray-100_01 h-1 rounded-[50%] w-1"></div>
              <div className="flex flex-col items-center justify-start w-[111px]">
                <Text
                  className="text-[15px] text-blue_gray-500 w-auto"
                  size="txtMontserratRegular15Bluegray500"
                >
                  <span className="text-blue_gray-900_01 font-montserrat text-left font-semibold">
                    3{" "}
                  </span>
                  <span className="text-blue_gray-500 font-montserrat text-left font-normal">
                    Beneficiaries
                  </span>
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-4 items-center justify-between mt-16 w-full">
              <div className="flex md:flex-1 flex-col gap-4 items-center justify-start w-[41%] md:w-full">
                <div className="bg-white-A700 border border-indigo-50 border-solid flex flex-col gap-[30px] items-end justify-start p-5 rounded-[12px] shadow-bs w-[469px] sm:w-full">
                  <div className="flex sm:flex-col flex-row gap-3 items-center justify-start w-full">
                    <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-[15px] text-indigo-800 tracking-[0.50px] uppercase w-full"
                        size="txtMontserratBold15"
                      >
                        Policies
                      </Text>
                      <div className="flex flex-row gap-2 items-start justify-start w-full">
                        <Text
                          className="text-blue_gray-500 text-sm tracking-[0.50px] w-auto"
                          size="txtMontserratMedium14Bluegray500"
                        >
                          5
                        </Text>
                        <Text
                          className="flex-1 text-blue_gray-500 text-sm tracking-[0.50px] w-auto"
                          size="txtMontserratMedium14Bluegray500"
                        >
                          Total Policies
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="common-pointer !text-gray-50_02 cursor-pointer font-medium min-w-[84px] text-[15px] text-center tracking-[0.15px]"
                      onClick={() => navigate("/policiesindex")}
                      shape="round"
                      color="indigo_800"
                      size="md"
                      variant="fill"
                    >
                      View all
                    </Button>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[9px] items-start justify-start w-full">
                    <div
                      className="common-pointer bg-gray-50_01 border border-blue_gray-50_01 border-solid flex flex-1 md:flex-1 flex-col gap-[9px] items-start justify-start p-3 rounded-[12px] w-auto md:w-full"
                      onClick={() => navigate("/policiesindex")}
                    >
                      <Text
                        className="leading-[20.00px] max-w-[176px] md:max-w-full text-[15px] text-indigo-800"
                        size="txtMontserratSemiBold15Indigo800"
                      >
                        GLICO Sunkwa Health Plan - Under 60
                      </Text>
                      <div className="flex flex-col items-center justify-start w-auto">
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
                      <div className="flex relative w-[100px]">
                        <div className="flex my-auto w-[81%]">
                          <div className="flex my-auto w-[77%]">
                            <div className="flex my-auto w-[70%]">
                              <Button
                                className="flex h-6 items-center justify-center my-auto rounded-[50%] w-6"
                                color="blue_50"
                                size="sm"
                                variant="fill"
                              >
                                <Img
                                  className="h-3"
                                  src="images/img_iconuser.svg"
                                  alt="iconuser"
                                />
                              </Button>
                              <div className="flex flex-col h-6 items-center justify-start ml-[-5px] my-auto w-6 z-[1]">
                                <Img
                                  className="h-6 md:h-auto rounded-[50%] w-6"
                                  src="images/img_image_24x24.png"
                                  alt="image"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col h-6 items-center justify-start ml-[-5px] my-auto w-6 z-[1]">
                              <Img
                                className="h-6 md:h-auto rounded-[50%] w-6"
                                src="images/img_image_4.png"
                                alt="image_One"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col h-6 items-center justify-start ml-[-5px] my-auto w-6 z-[1]">
                            <Img
                              className="h-6 md:h-auto rounded-[50%] w-6"
                              src="images/img_image_5.png"
                              alt="image_Two"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col h-6 items-center justify-start ml-[-5px] my-auto w-6 z-[1]">
                          <Img
                            className="h-6 md:h-auto rounded-[50%] w-6"
                            src="images/img_image_6.png"
                            alt="image_Three"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="common-pointer bg-gray-50_01 border border-blue_gray-50_01 border-solid flex flex-1 md:flex-1 flex-col gap-[9px] items-start justify-start p-3 rounded-[12px] w-auto md:w-full"
                      onClick={() => navigate("/policiesindex")}
                    >
                      <Text
                        className="leading-[20.00px] max-w-[176px] md:max-w-full text-[15px] text-indigo-800"
                        size="txtMontserratSemiBold15Indigo800"
                      >
                        GLICO Sunkwa Health Plan - Under 60
                      </Text>
                      <div className="flex flex-col items-center justify-start w-auto">
                        <div className="bg-orange-50 flex flex-col items-center justify-center px-2 py-1 rounded-lg w-auto">
                          <Text
                            className="text-[10px] text-orange-A200 w-auto"
                            size="txtMontserratMedium10"
                          >
                            Ultimate
                          </Text>
                        </div>
                      </div>
                      <div className="flex relative w-[43px]">
                        <Button
                          className="flex h-6 items-center justify-center my-auto rounded-[50%] w-6"
                          color="blue_50"
                          size="sm"
                          variant="fill"
                        >
                          <Img
                            className="h-3"
                            src="images/img_iconuser.svg"
                            alt="iconuser_One"
                          />
                        </Button>
                        <div className="flex flex-col h-6 items-center justify-start ml-[-5px] my-auto w-6 z-[1]">
                          <Img
                            className="h-6 md:h-auto rounded-[50%] w-6"
                            src="images/img_image_7.png"
                            alt="image_Four"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border border-indigo-50 border-solid flex flex-col gap-[30px] items-start justify-center p-5 rounded-[12px] shadow-bs w-[469px] sm:w-full">
                  <div className="flex sm:flex-col flex-row gap-3 items-center justify-start w-full">
                    <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-[15px] text-indigo-800 tracking-[0.50px] uppercase w-full"
                        size="txtMontserratBold15"
                      >
                        Beneficiaries
                      </Text>
                      <div className="flex flex-row gap-2 items-start justify-start w-full">
                        <Text
                          className="text-blue_gray-500 text-sm tracking-[0.50px] w-auto"
                          size="txtMontserratMedium14Bluegray500"
                        >
                          5
                        </Text>
                        <Text
                          className="flex-1 text-blue_gray-500 text-sm tracking-[0.50px] w-auto"
                          size="txtMontserratMedium14Bluegray500"
                        >
                          Total Beneficiaries
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="common-pointer !text-gray-50_02 cursor-pointer font-medium min-w-[84px] text-[15px] text-center tracking-[0.15px]"
                      onClick={() => navigate("/beneficiariesindex")}
                      shape="round"
                      color="indigo_800"
                      size="md"
                      variant="fill"
                    >
                      View all
                    </Button>
                  </div>
                  <div className="flex relative w-[268px]">
                    <div className="flex my-auto w-[84%]">
                      <div className="flex my-auto w-[81%]">
                        <div className="flex my-auto w-[76%]">
                          <div className="flex my-auto w-[68%]">
                            <div className="flex flex-col h-12 items-center justify-start my-auto w-12">
                              <Img
                                className="h-12 md:h-auto rounded-[50%] w-12"
                                src="images/img_image_48x48.png"
                                alt="image_Five"
                              />
                            </div>
                            <Img
                              className="h-12 ml-[-4px] my-auto rounded-[50%] w-12 z-[1]"
                              src="images/img_image_8.png"
                              alt="image_Six"
                            />
                          </div>
                          <Img
                            className="h-12 ml-[-4px] my-auto rounded-[50%] w-12 z-[1]"
                            src="images/img_image_9.png"
                            alt="image_Seven"
                          />
                        </div>
                        <Img
                          className="h-12 ml-[-4px] my-auto rounded-[50%] w-12 z-[1]"
                          src="images/img_image_10.png"
                          alt="image_Eight"
                        />
                      </div>
                      <Img
                        className="h-12 ml-[-4px] my-auto rounded-[50%] w-12 z-[1]"
                        src="images/img_image_11.png"
                        alt="image_Nine"
                      />
                    </div>
                    <Button
                      className="flex h-12 items-center justify-center ml-[-4px] my-auto outline-[0.5px] outline-dashed outline-indigo-800 rounded-[50%] w-12 z-[1]"
                      color="indigo_50_02"
                      size="lg"
                      variant="fill"
                    >
                      <Img
                        className="h-5"
                        src="images/img_plus_indigo_800.svg"
                        alt="plus"
                      />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border border-indigo-50 border-solid flex flex-1 flex-col gap-[30px] h-[440px] md:h-auto items-start justify-start max-w-[663px] p-5 rounded-[12px] shadow-bs w-full">
                <div className="flex md:flex-col flex-row gap-3 items-center justify-start w-full">
                  <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="text-[15px] text-indigo-800 tracking-[0.50px] uppercase w-full"
                      size="txtMontserratBold15"
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
                  <Button
                    className="common-pointer !text-gray-50_02 cursor-pointer font-medium min-w-[84px] text-[15px] text-center tracking-[0.15px]"
                    onClick={() => navigate("/transactionsindex")}
                    shape="round"
                    color="indigo_800"
                    size="md"
                    variant="fill"
                  >
                    View all
                  </Button>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col h-[342px] md:h-auto items-start justify-start w-full">
                    <div className="overflow-auto w-full">
                      <ReactTable
                        columns={table7Columns}
                        data={table7Data.current}
                        rowClass={"border border-blue_gray-50_01"}
                        headerClass=""
                      />
                    </div>
                    <div className="border-b border-blue_gray-50_01 border-solid h-0.5 w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row md:gap-10 gap-[1057px] h-full items-center justify-between max-w-[1381px] mt-[21px] mx-auto md:px-5 w-full">
          <Img
            className="h-[18px] md:h-auto object-cover w-[180px]"
            src="images/img_glicohealthcarelogo300x301.png"
            alt="glicohealthcare"
          />
          <div className="flex flex-row gap-8 items-center justify-start w-auto">
            <Img
              className="h-6 w-6"
              src="images/img_search_blue_gray_500.svg"
              alt="search_One"
            />
            <Img className="h-6 w-6" src="images/img_bell.svg" alt="bell" />
            <Img
              className="h-8 md:h-auto rounded-[50%] w-8"
              src="images/img_image_32x32.png"
              alt="image_Thirteen"
            />
          </div>
        </div>
        <div className="absolute bg-black-900_28 bottom-[0] flex flex-col inset-x-[0] items-center justify-center mx-auto md:px-10 sm:px-5 px-[397px] py-[60px] w-auto md:w-full">
          <div className="border border-blue_gray-50_01 border-solid flex flex-col items-start justify-start rounded-[12px] w-auto">
            <div className="bg-white-A700 border-b border-blue_gray-50_01 border-solid flex flex-col items-center justify-start max-w-[647px] p-5 w-full">
              <Text
                className="text-indigo-800 text-xl w-auto"
                size="txtMontserratBold20Indigo800"
              >
                Add Beneficiary
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-auto md:w-full">
              <Input
                name="frame355"
                placeholder="Upload Image"
                className="!placeholder:text-blue_gray-900_01 !text-blue_gray-900_01 font-semibold p-0 text-left text-xl w-full"
                wrapClassName="border-b border-blue_gray-50_01 border-solid w-full"
                shape="square"
                color="white_A700"
                size="md"
                variant="fill"
              ></Input>
              <div className="bg-white-A700 flex flex-col gap-9 items-start justify-start max-w-[647px] p-8 sm:px-5 w-full">
                <div className="sm:px-5 px-[21px] py-5 relative w-[135px]">
                  <div className="flex h-[122px] md:h-[134px] justify-end mt-auto mx-auto w-full">
                    <div className="bg-blue_gray-50_01 h-[134px] mt-auto mx-auto rounded-[12px] w-[135px]"></div>
                    <Img
                      className="absolute bottom-[7%] h-[94px] inset-x-[0] mx-auto w-[93px]"
                      src="images/img_television.svg"
                      alt="television"
                    />
                  </div>
                  <div className="absolute bg-white-A700 flex flex-col items-end justify-start pl-1.5 py-1.5 right-[16%] rounded-[11px] shadow-bs1 top-[15%] w-[17%]">
                    <Img className="h-5" src="images/img_edit.svg" alt="edit" />
                  </div>
                </div>
                <Text
                  className="text-[15px] text-blue_gray-500 w-auto"
                  size="txtMontserratRomanSemiBold15"
                >
                  Allowed file types: png, jpg, jpeg
                </Text>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col gap-5 items-start justify-start max-w-[647px] sm:px-5 px-8 py-5 w-full">
              <div className="flex flex-col gap-3 items-start justify-start w-full">
                <div className="flex flex-row gap-[3px] items-start justify-start w-auto">
                  <Text
                    className="text-[15px] text-blue_gray-500 w-auto"
                    size="txtMontserratRomanSemiBold15"
                  >
                    Full Name
                  </Text>
                  <Text
                    className="text-[15px] text-deep_orange-500 w-auto"
                    size="txtMontserratRomanSemiBold15Deeporange500"
                  >
                    *
                  </Text>
                </div>
                <Input
                  name="language"
                  placeholder="ie Kwabena "
                  className="font-semibold md:h-auto p-0 placeholder:text-blue_gray-500 sm:h-auto text-[15px] text-left w-full"
                  wrapClassName="w-full"
                  shape="round"
                  color="blue_gray_50_01"
                  size="sm"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-col gap-3 items-start justify-start w-full">
                <div className="flex flex-row gap-[3px] items-start justify-start w-auto">
                  <Text
                    className="text-[15px] text-blue_gray-500 w-auto"
                    size="txtMontserratRomanSemiBold15"
                  >
                    Relation
                  </Text>
                  <Text
                    className="text-[15px] text-deep_orange-500 w-auto"
                    size="txtMontserratRomanSemiBold15Deeporange500"
                  >
                    *
                  </Text>
                </div>
                <SelectBox
                  className="!text-blue_gray-500 font-semibold h-12 rounded-[12px] text-[15px] text-left w-full"
                  placeholderClassName="!text-blue_gray-500"
                  indicator={
                    <Img
                      className="h-4 w-4"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="frame252"
                  options={whoIsTheBeneficiaryToYouOptionsList}
                  isSearchable={false}
                  placeholder="who is the beneficiary to you?"
                  color="blue_gray_50_01"
                  size="sm"
                  variant="fill"
                />
              </div>
              <div className="flex flex-col gap-3 items-start justify-start w-full">
                <div className="flex flex-row gap-[3px] items-start justify-start w-auto">
                  <Text
                    className="text-[15px] text-blue_gray-500 w-auto"
                    size="txtMontserratRomanSemiBold15"
                  >
                    Date of Birth
                  </Text>
                  <Text
                    className="text-[15px] text-deep_orange-500 w-auto"
                    size="txtMontserratRomanSemiBold15Deeporange500"
                  >
                    *
                  </Text>
                </div>
                <Input
                  name="frame252_One"
                  placeholder="dd/mm/yyyy"
                  className="font-semibold md:h-auto p-0 placeholder:text-blue_gray-500 sm:h-auto text-[15px] text-left w-full"
                  wrapClassName="w-full"
                  shape="round"
                  color="blue_gray_50_01"
                  size="sm"
                  variant="fill"
                ></Input>
              </div>
            </div>
            <Input
              name="frame301"
              placeholder="Contact"
              className="!placeholder:text-blue_gray-900_01 !text-blue_gray-900_01 font-semibold p-0 text-left text-xl w-full"
              wrapClassName="border-b border-blue_gray-50_01 border-solid w-full"
              shape="square"
              color="white_A700"
              size="md"
              variant="fill"
            ></Input>
            <div className="bg-white-A700 flex flex-col gap-5 items-start justify-start max-w-[647px] sm:px-5 px-8 py-5 w-full">
              <div className="md:h-20 h-[82px] relative w-full">
                <div className="absolute bg-white-A700 flex-1 h-20 inset-[0] m-auto w-full"></div>
                <div className="absolute md:h-12 h-[82px] inset-y-[0] left-[0] my-auto w-full">
                  <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-end m-auto w-full">
                    <SelectBox
                      className="!text-blue_gray-500 font-semibold h-12 rounded-[12px] text-[15px] text-left w-full"
                      placeholderClassName="!text-blue_gray-500"
                      indicator={
                        <Img
                          className="h-4 w-4"
                          src="images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="frame252_Two"
                      options={selectCountryOptionsList}
                      isSearchable={false}
                      placeholder="Select country"
                      color="blue_gray_50_01"
                      size="sm"
                      variant="fill"
                    />
                  </div>
                  <div className="absolute flex flex-row gap-[3px] items-start justify-evenly left-[0] top-[0] w-auto">
                    <Text
                      className="text-[15px] text-blue_gray-500 w-auto"
                      size="txtMontserratRomanSemiBold15"
                    >
                      Country
                    </Text>
                    <Text
                      className="text-[15px] text-deep_orange-500 w-auto"
                      size="txtMontserratRomanSemiBold15Deeporange500"
                    >
                      *
                    </Text>
                  </div>
                </div>
                <div className="absolute md:h-12 h-[82px] inset-y-[0] my-auto right-[0] w-full">
                  <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-end m-auto w-full">
                    <SelectBox
                      className="!text-blue_gray-500 font-semibold h-12 rounded-[12px] text-[15px] text-left w-full"
                      placeholderClassName="!text-blue_gray-500"
                      indicator={
                        <Img
                          className="h-4 w-4"
                          src="images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="frame252_Three"
                      options={enterAddressOptionsList}
                      isSearchable={false}
                      placeholder="Enter Address"
                      color="blue_gray_50_01"
                      size="sm"
                      variant="fill"
                    />
                  </div>
                  <div className="absolute flex flex-row gap-[3px] items-start justify-evenly left-[0] top-[0] w-auto">
                    <Text
                      className="text-[15px] text-blue_gray-500 w-auto"
                      size="txtMontserratRomanSemiBold15"
                    >
                      Address
                    </Text>
                    <Text
                      className="text-[15px] text-deep_orange-500 w-auto"
                      size="txtMontserratRomanSemiBold15Deeporange500"
                    >
                      *
                    </Text>
                  </div>
                </div>
              </div>
              <div className="h-20 md:h-[43px] relative w-full">
                <div className="absolute bg-white-A700 flex flex-1 flex-col h-full inset-[0] items-center justify-end m-auto w-full">
                  <div className="bg-blue_gray-50_01 flex flex-col h-12 md:h-auto items-center justify-start px-4 py-3 rounded-[12px] w-full">
                    <Text
                      className="text-[15px] text-blue_gray-500 w-auto"
                      size="txtMontserratRomanSemiBold15"
                    >
                      i.e kwame@example.com
                    </Text>
                  </div>
                </div>
                <Text
                  className="absolute flex-1 left-[0] text-[15px] text-blue_gray-500 top-[0] w-full"
                  size="txtMontserratRomanSemiBold15"
                >
                  Email
                </Text>
              </div>
              <div className="flex flex-col gap-3 items-start justify-start w-full">
                <div className="flex flex-row gap-[3px] items-start justify-start w-auto">
                  <Text
                    className="text-[15px] text-blue_gray-500 w-auto"
                    size="txtMontserratRomanSemiBold15"
                  >
                    Phone 1
                  </Text>
                  <Text
                    className="text-[15px] text-deep_orange-500 w-auto"
                    size="txtMontserratRomanSemiBold15Deeporange500"
                  >
                    *
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-semibold h-12 rounded-[12px] text-[15px] text-center w-full"
                  color="blue_gray_50_01"
                  size="lg"
                  variant="fill"
                >
                  00-000-0000
                </Button>
              </div>
              <div className="flex flex-col gap-3 items-start justify-start w-full">
                <Text
                  className="text-[15px] text-blue_gray-500 w-full"
                  size="txtMontserratRomanSemiBold15"
                >
                  Phone 2
                </Text>
                <Button
                  className="cursor-pointer font-semibold h-12 rounded-[12px] text-[15px] text-center w-full"
                  color="blue_gray_50_01"
                  size="lg"
                  variant="fill"
                >
                  00-000-0000
                </Button>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-row flex-wrap gap-2 items-center justify-end max-w-[647px] p-5 w-full">
              <Button
                className="cursor-pointer font-semibold h-12 min-w-[84px] rounded-[12px] text-[15px] text-center"
                color="indigo_800_0f"
                size="lg"
                variant="fill"
              >
                Reset
              </Button>
              <Button
                className="cursor-pointer font-semibold h-12 min-w-[77px] rounded-[12px] text-[15px] text-center"
                color="indigo_800"
                size="lg"
                variant="fill"
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardAddbeneficiaryPage;
