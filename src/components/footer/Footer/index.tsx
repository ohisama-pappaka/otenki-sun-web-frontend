import React from "react";
import { HStack } from "@chakra-ui/react";

import { SelectButton } from "../SelectButton/index";
// FIXME: 絶対パスで指定するとうまくいかない
// import { SelectButton } from "@/components/footer/SelectButton/index";
import { FooterSelectButtonType } from "@/types/types";

export const Footer = () => {
  const selectButtonList: FooterSelectButtonType[] = [
    { selectType: "POINT_REGI" },
    { selectType: "DATE_REGI" },
    { selectType: "OTHERS" },
  ];

  return (
    <HStack h="10" justifyContent="center" bg="blue.100">
      {selectButtonList.map((selectButton) => {
        return (
          <SelectButton
            key={selectButton.selectType}
            selectType={selectButton.selectType}
          />
        );
      })}
    </HStack>
  );
};
