import React from "react";
import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { AiFillQuestionCircle } from "react-icons/ai";
import { IconType } from "react-icons/lib";

type Props = {
  selectType: "POINT_REGI" | "DATE_REGI" | "OTHERS";
};

export const SelectButton = ({ selectType }: Props) => {
  // 使用されることは無いが iconPath の null を避けるための初期値
  let iconPath: IconType = AiFillQuestionCircle;
  let title = "NO DATA";

  switch (selectType) {
    case "POINT_REGI":
      iconPath = FaMapMarkerAlt;
      title = "地点登録";
      break;
    case "DATE_REGI":
      iconPath = MdDateRange;
      title = "予定日登録";
      break;
    case "OTHERS":
      iconPath = BsCheck;
      title = "その他";
      break;
    default:
      break;
  }

  return (
    <Box w={100} color="blue.400">
      <HStack>
        <Icon as={iconPath} />
        <Box>
          <Text fontSize="xs">{title}</Text>
        </Box>
      </HStack>
    </Box>
  );
};
