import React from "react";

import { Button, Img, Input, Text } from "components";
import PoliciesIndexSidenav from "components/PoliciesIndexSidenav";

const PoliciesDetailspagePage = () => {
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
            <div className="bg-white-A700 border border-indigo-50 border-solid flex md:flex-1 flex-col items-start justify-start p-5 rounded-[16px] w-[84%] md:w-full">
              <div className="flex flex-col gap-2 items-start justify-start mb-[757px] mt-[23px] w-[576px] sm:w-full">
                <div className="flex sm:flex-col flex-row gap-2 items-start justify-start w-full">
                  <Text
                    className="flex-1 text-indigo-800 text-xl tracking-[0.50px] uppercase w-auto"
                    size="txtMontserratBold20Indigo800"
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
                </div>
                <div className="flex flex-row gap-1 items-start justify-start w-full">
                  <Text
                    className="text-blue_gray-300 text-sm tracking-[0.50px] w-auto"
                    size="txtMontserratMedium14Bluegray300"
                  >
                    Home
                  </Text>
                  <Text
                    className="text-blue_gray-300 text-sm tracking-[0.50px] w-auto"
                    size="txtMontserratMedium14Bluegray300"
                  >
                    -
                  </Text>
                  <Text
                    className="text-blue_gray-300 text-sm tracking-[0.50px] w-auto"
                    size="txtMontserratMedium14Bluegray300"
                  >
                    Policies
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

export default PoliciesDetailspagePage;
