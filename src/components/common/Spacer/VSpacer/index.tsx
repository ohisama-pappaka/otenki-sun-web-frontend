import { Box } from "@chakra-ui/react";
import React from "react";

type Props = {
  size: number;
};

export const VSpacer = ({ size }: Props) => {
  return <Box w="auto" h={size} flexShrink={0} />;
};
