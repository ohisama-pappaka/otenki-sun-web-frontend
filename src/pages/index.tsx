import React from "react";
import { useBreakpointValue } from "@chakra-ui/react";

import { VSpacer } from "@/components/common/Spacer/VSpacer";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { DailyWeatherCard } from "@/components/daily-weather-card/DailyWeatherCard";
import { Headline } from "@/components/home/Headline";
import { Pc } from "@/components/pc";

const Home = () => {
  const mediaType = useBreakpointValue({ base: "phone", sm: "pc" });

  return mediaType === "phone" ? (
    <div>
      <Header headerText={"ホーム"} />
      <VSpacer size={2} />
      <DailyWeatherCard
        weather={"晴れ"}
        weatherIconUrl={"http://openweathermap.org/img/w/04d.png"}
        maxTemperature={"30"}
        minTemperature={"-40"}
      />
      <VSpacer size={2} />
      <Headline headlineTitle={"週間天気"} />
      <VSpacer size={2} />
      <Headline headlineTitle={"予定日の天気"} />
      <VSpacer size={2} />
      <Footer />
    </div>
  ) : (
    <Pc />
  );
};

export default Home;
