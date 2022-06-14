import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";

import { VSpacer } from "../common/Spacer/VSpacer";

type Props = {
  weather: string;
  weatherIconUrl: string;
  maxTemperature: string;
  minTemperature: string;
};

export const DailyWeatherCard = ({
  weather,
  weatherIconUrl,
  maxTemperature,
  minTemperature,
}: Props) => {
  return (
    <Box
      w="200px"
      bg="white"
      borderColor="gray.200"
      borderRadius="md"
      borderWidth="2px"
      textAlign="center"
    >
      <VSpacer size={2} />
      <Text fontSize="xl">{weather}</Text>
      <VSpacer size={2} />
      <Image
        boxSize="60px"
        src={weatherIconUrl}
        margin="0 auto"
        alt="Weather Icon"
      />
      <VSpacer size={2} />
      <Text fontSize="xl" textColor="orange">
        最高気温 {maxTemperature}℃
      </Text>
      <Text fontSize="xl" textColor="blue">
        最低気温 {minTemperature}℃
      </Text>
      <VSpacer size={2} />
    </Box>
  );
};
