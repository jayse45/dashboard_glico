import React from "react";

import { Img, List, Text } from "components";

const TransactionsIndexSidenav = (props) => {
  return (
    <>
      <div className={props.className}>
        <List
          className="flex flex-col gap-1.5 items-start px-3 w-[232px] md:w-full"
          orientation="vertical"
        >
          <div className="flex flex-col items-start justify-start my-0 rounded-lg w-full">
            <div className="flex flex-row gap-[7px] items-center justify-start p-3 rounded-lg w-[185px]">
              <div className="flex flex-col h-5 items-center justify-start w-5">
                <Img className="h-5 w-5" src="images/img_home.svg" alt="home" />
              </div>
              <Text
                className="flex-1 text-[15px] text-blue_gray-300 tracking-[0.50px] w-auto"
                size="txtMontserratSemiBold15Bluegray300"
              >
                {props?.dashboardtext}
              </Text>
            </div>
          </div>
          <div className="bg-indigo-800 flex flex-col items-start justify-start my-0 rounded-lg w-full">
            <div className="flex flex-row gap-[7px] items-center justify-start p-3 rounded-lg w-[185px]">
              <div className="flex flex-col h-5 items-center justify-start w-5">
                {!!props?.coins ? (
                  <Img className="h-5 w-5" alt="coins" src={props?.coins} />
                ) : null}
              </div>
              {!!props?.transactionstext ? (
                <Text
                  className="flex-1 text-[15px] text-white-A700 tracking-[0.50px] w-auto"
                  size="txtMontserratSemiBold15WhiteA700"
                >
                  {props?.transactionstext}
                </Text>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col items-start justify-start my-0 rounded-lg w-full">
            <div className="flex flex-row gap-[7px] items-center justify-start p-3 rounded-lg w-full">
              <div className="flex flex-col h-5 items-center justify-start w-5">
                <Img
                  className="h-5 w-5"
                  src="images/img_handheart.svg"
                  alt="handheart"
                />
              </div>
              <Text
                className="flex-1 text-[15px] text-blue_gray-300 tracking-[0.50px] w-auto"
                size="txtMontserratSemiBold15Bluegray300"
              >
                {props?.insurancepoliciestext}
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start my-0 rounded-lg w-full">
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
                {props?.beneficiariestext}
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start my-0 rounded-lg w-full">
            <div className="flex flex-row gap-[7px] items-center justify-start p-3 rounded-lg w-full">
              <div className="flex flex-col h-5 items-center justify-start w-5">
                <Img
                  className="h-5 w-5"
                  src="images/img_search.svg"
                  alt="search"
                />
              </div>
              <Text
                className="flex-1 text-[15px] text-blue_gray-300 tracking-[0.50px] w-auto"
                size="txtMontserratSemiBold15Bluegray300"
              >
                {props?.settingstext}
              </Text>
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

TransactionsIndexSidenav.defaultProps = {
  dashboardtext: "Dashboard",
  insurancepoliciestext: "Insurance Policies",
  beneficiariestext: "Beneficiaries",
  settingstext: "Settings",
};

export default TransactionsIndexSidenav;
