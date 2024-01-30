import React from "react";

import { Img, Input, Text } from "components";

const PoliciesIndexSidenav = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-1.5 items-start justify-start px-3 w-[232px] md:w-full">
          <div className="flex flex-col items-start justify-start rounded-lg w-full">
            <div className="flex flex-row gap-[7px] items-center justify-start p-3 rounded-lg w-[185px]">
              <div className="flex flex-col h-5 items-center justify-start w-5">
                <Img className="h-5 w-5" src="images/img_home.svg" alt="home" />
              </div>
              <Text
                className="flex-1 text-[15px] text-blue_gray-300 tracking-[0.50px] w-auto"
                size="txtMontserratSemiBold15Bluegray300"
              >
                {props?.dashboard}
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start rounded-lg w-full">
            <div className="flex flex-row gap-[7px] items-center justify-start p-3 rounded-lg w-[185px]">
              <div className="flex flex-col h-5 items-center justify-start w-5">
                <Img className="h-5 w-5" src="images/img_play.svg" alt="play" />
              </div>
              <Text
                className="flex-1 text-[15px] text-blue_gray-300 tracking-[0.50px] w-auto"
                size="txtMontserratSemiBold15Bluegray300"
              >
                {props?.dashboardOne}
              </Text>
            </div>
          </div>
          <Input
            name="frame339"
            placeholder="Insurance Policies"
            className="!placeholder:text-white-A700 !text-white-A700 font-montserrat font-semibold p-0 text-[15px] text-left tracking-[0.50px] w-full"
            wrapClassName="flex rounded-lg w-full"
            prefix={
              <Img
                className="mt-px mb-auto h-5 mr-[7px]"
                src="images/img_settings.svg"
                alt="settings"
              />
            }
            size="xs"
          ></Input>
          <div className="flex flex-col items-start justify-start rounded-lg w-full">
            <div className="flex flex-row gap-[7px] items-center justify-start p-3 rounded-lg w-full">
              <div className="flex flex-col h-5 items-center justify-start w-5">
                <Img
                  className="h-5 w-5"
                  src="images/img_usersthree.svg"
                  alt="usersthree"
                />
              </div>
              <Text
                className="flex-1 text-[15px] text-blue_gray-300 tracking-[0.50px] w-auto"
                size="txtMontserratSemiBold15Bluegray300"
              >
                {props?.dashboardTwo}
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start rounded-lg w-full">
            <div className="flex flex-row gap-[7px] items-center justify-start p-3 rounded-lg w-full">
              <div className="flex flex-col h-5 items-center justify-start w-5">
                <Img
                  className="h-5 w-5"
                  src="images/img_search.svg"
                  alt="search_One"
                />
              </div>
              <Text
                className="flex-1 text-[15px] text-blue_gray-300 tracking-[0.50px] w-auto"
                size="txtMontserratSemiBold15Bluegray300"
              >
                {props?.dashboardThree}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

PoliciesIndexSidenav.defaultProps = {
  dashboard: "Dashboard",
  dashboardOne: "Transactions",
  dashboardTwo: "Beneficiaries",
  dashboardThree: "Settings",
};

export default PoliciesIndexSidenav;
