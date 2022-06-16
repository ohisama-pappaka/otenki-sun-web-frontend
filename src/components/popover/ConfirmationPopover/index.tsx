import React from "react";
import { Box, Button, HStack, Text } from "@chakra-ui/react";

import { VSpacer } from "../../common/Spacer/VSpacer/index";
// FIXME: 絶対パスで指定できない
// import { VSpacer } from "@/components/common/Spacer/VSpacer/index";

type Props = {
  prefectureName: string;
  cityName: string;
};

export const ConfirmationPopover = ({ prefectureName, cityName }: Props) => {
  return (
    <Box>
      <VSpacer size={10} />
      <Text textAlign="center">
        {prefectureName}
        {cityName}を登録しますか？
      </Text>
      <VSpacer size={10} />
      <HStack justifyContent="center">
        <Button colorScheme="black" variant="outline" size="sm">
          登録する
        </Button>
        <Button colorScheme="red" size="sm">
          キャンセル
        </Button>
      </HStack>
      <VSpacer size={10} />
    </Box>
  );
};
