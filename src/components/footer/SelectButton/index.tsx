import React from "react";
import { useRouter } from "next/router";
import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { AiFillQuestionCircle } from "react-icons/ai";
import { IconType } from "react-icons/lib";

import { FooterSelectButtonType } from "@/types/types";

export const SelectButton = ({ selectType }: FooterSelectButtonType) => {
  const router = useRouter();

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

  const handleClick = () => {
    if (selectType === "POINT_REGI") {
      router.push("/position-regi");
    } else if (selectType === "DATE_REGI") {
      router.push("/date-regi");
    } else if (selectType === "OTHERS") {
      router.push("/others");
    }
  };

  return (
    <Box color="blue.400">
      <HStack w="100%" spacing="0" onClick={() => handleClick()}>
        <Icon as={iconPath} w="20%" />
        <Text w="80%" fontSize="xs">
          {title}
        </Text>
      </HStack>
    </Box>
  );
};
