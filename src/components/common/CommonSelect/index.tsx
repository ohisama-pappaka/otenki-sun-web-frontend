import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Select } from "@chakra-ui/react";

type Props = {
  placeholderData: string;
  selectDataList: string[];
  setSelectedData: Dispatch<SetStateAction<string>>;
};

export const CommonSelect = ({
  placeholderData,
  selectDataList,
  setSelectedData,
}: Props) => {
  const handleValue = (event: ChangeEvent<HTMLSelectElement>): void => {
    if (event.target.value !== placeholderData) {
      setSelectedData(event.target.value);
    } else {
      setSelectedData("");
    }
  };

  return (
    <Select
      bg="white"
      borderColor="gray.200"
      placeholder={placeholderData}
      onChange={handleValue}
    >
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
