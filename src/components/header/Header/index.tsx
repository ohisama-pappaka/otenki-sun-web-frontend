import { Box } from "@chakra-ui/react";
import React from "react";

type Props = {
  headerText: string;
};

export const Header = ({ headerText }: Props) => {
  return (
    <Box w="100%" p={4} bg="blue.300" color="white" textAlign="center">
      {headerText}
    </Box>
  );
};
