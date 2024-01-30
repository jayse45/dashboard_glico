import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Text } from "components";

const BeneficiariesModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[26%]"
      overlayClassName="bg-black-900_28 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col gap-[22px] items-center justify-center mb-5 mt-[29px] p-8 md:px-5 rounded-[12px] w-[372px] sm:w-full">
          <Img
            className="h-[69px] w-[70px]"
            src="images/img_videocamera.svg"
            alt="videocamera"
          />
          <div className="flex flex-col gap-[22px] items-center justify-start w-full">
            <Text
              className="leading-[20.00px] text-[15px] text-blue_gray-500 text-center w-full"
              size="txtMontserratRomanSemiBold15"
            >
              Resetting would clear all the forms filled, Do you wish to
              continue?
            </Text>
            <div className="flex flex-row gap-1.5 items-center justify-center w-full">
              <Button
                className="cursor-pointer flex-1 font-semibold h-12 text-[15px] text-center w-full"
                shape="round"
                color="indigo_800"
                size="lg"
                variant="outline"
              >
                Cancel
              </Button>
              <Button
                className="cursor-pointer flex-1 font-semibold h-12 text-[15px] text-center w-full"
                shape="round"
                color="indigo_800"
                size="lg"
                variant="fill"
              >
                Yes, Reset
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default BeneficiariesModal;
