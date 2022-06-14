import { Heading } from "@chakra-ui/react";
import React from "react";

type Props = {
  headlineTitle: "週間天気" | "予定日の天気";
};

export const Headline = ({ headlineTitle }: Props) => {
  return <Heading size="md" color="blue.300">{headlineTitle}</Heading>;
};
