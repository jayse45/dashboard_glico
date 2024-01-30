import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Text } from "components";

const BeneficiariesThreeModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[26%]"
      overlayClassName="bg-black-900_28 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start my-[21px] p-[22px] md:px-5 rounded-[12px] w-full">
          <Img
            className="h-[70px] w-[70px]"
            src="images/img_checkmark.svg"
            alt="checkmark"
          />
          <Text
            className="leading-[20.00px] mt-[34px] text-[15px] text-blue_gray-500 text-center w-[72%] sm:w-full"
            size="txtMontserratRomanSemiBold15"
          >
            Form has been successfully submitted
          </Text>
          <Button
            className="cursor-pointer font-semibold h-12 mb-1 min-w-[116px] mt-[26px] rounded-[12px] text-[15px] text-center"
            color="indigo_800"
            size="lg"
            variant="fill"
          >
            Ok, got it!
          </Button>
        </div>
      </div>
    </ModalProvider>
  );
};

export default BeneficiariesThreeModal;
