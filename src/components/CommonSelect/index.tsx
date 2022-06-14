import React from "react";
import { Select } from "@chakra-ui/react";

type Props = {
  placeholderData: string;
  selectDataList: string[];
};

export const CommonSelect = ({ placeholderData, selectDataList }: Props) => {
  return (
    <Select bg="white" borderColor="gray.200" placeholder={placeholderData}>
      {selectDataList.map((selectData) => {
        return (
          <option key={selectData} value={selectData}>
            {selectData}
          </option>
        );
      })}
    </Select>
  );
};
