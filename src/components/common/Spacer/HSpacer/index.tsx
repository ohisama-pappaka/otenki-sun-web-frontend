import { Box } from "@chakra-ui/react";
import React from "react";

type Props = {
  size: number;
};

export const HSpacer = ({ size }: Props) => {
  return <Box w={size} h="auto" />;
};
