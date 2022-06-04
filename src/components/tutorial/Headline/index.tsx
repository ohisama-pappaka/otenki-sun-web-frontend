import { Heading } from "@chakra-ui/react";
import React from "react";

type Props = {
  headingSize: "4xl" | "3xl" | "2xl" | "xl";
};
export const Headline = ({ headingSize }: Props) => {
  return <Heading size={headingSize}>Headline</Heading>;
};
