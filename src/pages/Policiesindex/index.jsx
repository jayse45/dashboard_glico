import React from "react";

import { Button, Img, Input, List, Text } from "components";
import PoliciesIndexSidenav from "components/PoliciesIndexSidenav";

const PoliciesindexPage = () => {
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
            <PoliciesIndexSidenav className="flex flex-col items-start justify-start md:mt-0 mt-[46px] w-auto" />
            <div className="bg-white-A700 border border-indigo-50 border-solid flex md:flex-1 flex-col gap-[52px] items-start justify-start p-5 rounded-[16px] w-[84%] md:w-full">
              <div className="flex flex-col gap-2 items-start justify-start mt-[23px] w-[543px] sm:w-full">
                <Text
                  className="text-indigo-800 text-xl tracking-[0.50px] uppercase w-full"
                  size="txtMontserratSemiBold20"
                >
                  Policies
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
                    Total Policies
                  </Text>
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start max-w-[1148px] mb-[579px] w-full"
                orientation="horizontal"
              >
                <div className="bg-gray-50_01 border border-blue_gray-50_01 border-solid flex flex-1 flex-col gap-[9px] items-start justify-start p-3 rounded-[12px] w-full">
                  <Text
                    className="leading-[20.00px] max-w-[251px] md:max-w-full text-[15px] text-indigo-800"
                    size="txtMontserratSemiBold15Indigo800"
                  >
                    GLICO Sunkwa Health Plan - Under 60
                  </Text>
                  <div className="flex flex-col items-center justify-start w-auto">
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
                  <div className="flex relative w-[81px]">
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
                            src="images/img_image_12.png"
                            alt="image"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col h-6 items-center justify-start ml-[-5px] my-auto w-6 z-[1]">
                        <Img
                          className="h-6 md:h-auto rounded-[50%] w-6"
                          src="images/img_image_6.png"
                          alt="image_One"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col h-6 items-center justify-start ml-[-5px] my-auto w-6 z-[1]">
                      <Img
                        className="h-6 md:h-auto rounded-[50%] w-6"
                        src="images/img_image_13.png"
                        alt="image_Two"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50_01 border border-blue_gray-50_01 border-solid flex flex-1 flex-col gap-[9px] items-start justify-start p-3 rounded-[12px] w-full">
                  <Text
                    className="leading-[20.00px] max-w-[251px] md:max-w-full text-[15px] text-indigo-800"
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
                <div className="bg-gray-50_01 border border-blue_gray-50_01 border-solid flex flex-1 flex-col gap-[9px] items-start justify-start p-3 rounded-[12px] w-full">
                  <Text
                    className="leading-[20.00px] max-w-[251px] md:max-w-full text-[15px] text-indigo-800"
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
                <div className="bg-gray-50_01 border border-blue_gray-50_01 border-solid flex flex-1 flex-col gap-[9px] items-start justify-start p-3 rounded-[12px] w-full">
                  <Text
                    className="leading-[20.00px] max-w-[251px] md:max-w-full text-[15px] text-indigo-800"
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
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PoliciesindexPage;
