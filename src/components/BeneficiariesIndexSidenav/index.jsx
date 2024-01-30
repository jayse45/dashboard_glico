import React from "react";

import { Img, Input, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const BeneficiariesIndexSidenav = (props) => {
  const [framevalue, setFramevalue] = React.useState("");

  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start px-3 w-[232px] md:w-full">
          <List
            className="flex flex-col gap-1.5 items-center w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 flex-col items-start justify-start rounded-lg w-full">
              <div className="flex flex-row gap-[7px] items-center justify-start p-3 rounded-lg w-[185px]">
                <div className="flex flex-col h-5 items-center justify-start w-5">
                  <Img
                    className="h-5 w-5"
                    src="images/img_home.svg"
                    alt="home"
                  />
                </div>
                <Text
                  className="flex-1 text-[15px] text-blue_gray-300 tracking-[0.50px] w-auto"
                  size="txtMontserratSemiBold15Bluegray300"
                >
                  {props?.hometext}
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start justify-start rounded-lg w-full">
              <div className="flex flex-row gap-[7px] items-center justify-start p-3 rounded-lg w-[185px]">
                <div className="flex flex-col h-5 items-center justify-start w-5">
                  <Img
                    className="h-5 w-5"
                    src="images/img_play.svg"
                    alt="play"
                  />
                </div>
                <Text
                  className="flex-1 text-[15px] text-blue_gray-300 tracking-[0.50px] w-auto"
                  size="txtMontserratSemiBold15Bluegray300"
                >
                  {props?.playtext}
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start justify-start rounded-lg w-full">
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
                  {props?.handhearttext}
                </Text>
              </div>
            </div>
            <Input
              name="frame"
              placeholder="Beneficiaries"
              value={framevalue}
              onChange={(e) => setFramevalue(e)}
              className="!placeholder:text-white-A700 !text-white-A700 font-montserrat font-semibold p-0 text-[15px] text-left tracking-[0.50px] w-full"
              wrapClassName="flex flex-1 rounded-lg w-full"
              prefix={
                <Img
                  className="cursor-pointer h-5"
                  src="images/img_search_white_a700.svg"
                  alt="search"
                />
              }
              suffix={
                <CloseSVG
                  fillColor="#ffffff"
                  className="cursor-pointer h-5"
                  onClick={() => setFramevalue("")}
                  style={{
                    visibility: framevalue?.length <= 0 ? "hidden" : "visible",
                  }}
                  height={20}
                  width={20}
                  viewBox="0 0 20 20"
                />
              }
              size="xs"
            ></Input>
            <div className="flex flex-1 flex-col items-start justify-start rounded-lg w-full">
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
      </div>
    </>
  );
};

BeneficiariesIndexSidenav.defaultProps = {
  hometext: "Dashboard",
  playtext: "Transactions",
  handhearttext: "Insurance Policies",
  settingstext: "Settings",
};

export default BeneficiariesIndexSidenav;
