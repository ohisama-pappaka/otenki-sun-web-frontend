import React from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  buttonText: string;
  buttonSize: "xs" | "sm" | "md" | "lg";
};

export const ButtonComponent = ({ buttonText, buttonSize }: Props) => {
  return (
    <Button colorScheme="teal" size={buttonSize}>
      {buttonText}
    </Button>
  );
};
