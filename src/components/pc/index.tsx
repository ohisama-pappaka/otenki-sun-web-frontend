import React from "react";
import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";

import { VSpacer } from "../common/Spacer/VSpacer";

export const Pc = () => {
  return (
    <SimpleGrid justifyItems="center">
      <Box textAlign="left" borderWidth="1px" borderRadius="lg" p={4} mt={4}>
        <Text>現在はスマートフォン版のみサービスを提供しています！</Text>
        <Text>下の QR コードからアクセスが可能です！</Text>
        <VSpacer size={2} />
        <Box display="flex" alignItems="center" justifyContent="center">
          <Image
            src="gibbresh.png"
            fallbackSrc="https://via.placeholder.com/150"
          />
        </Box>
      </Box>
    </SimpleGrid>
  );
};
