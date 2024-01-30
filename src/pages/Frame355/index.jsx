import React from "react";

import { Button, Img, Input, SelectBox, Text } from "components";

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

const Frame355Page = () => {
  return (
    <>
      <div className="bg-black-900_28 flex flex-col font-montserrat items-start justify-center mx-auto md:px-10 sm:px-5 px-[397px] py-[60px] w-auto sm:w-full md:w-full">
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
              <Input
                name="frame252_Four"
                placeholder="00-000-0000"
                className="font-semibold md:h-auto p-0 placeholder:text-blue_gray-500 sm:h-auto text-[15px] text-left w-full"
                wrapClassName="w-full"
                shape="round"
                color="blue_gray_50_01"
                size="sm"
                variant="fill"
              ></Input>
            </div>
            <div className="flex flex-col gap-3 items-start justify-start w-full">
              <Text
                className="text-[15px] text-blue_gray-500 w-full"
                size="txtMontserratRomanSemiBold15"
              >
                Phone 2
              </Text>
              <Input
                name="frame252_Five"
                placeholder="00-000-0000"
                className="font-semibold md:h-auto p-0 placeholder:text-blue_gray-500 sm:h-auto text-[15px] text-left w-full"
                wrapClassName="w-full"
                shape="round"
                color="blue_gray_50_01"
                size="sm"
                variant="fill"
              ></Input>
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
    </>
  );
};

export default Frame355Page;
