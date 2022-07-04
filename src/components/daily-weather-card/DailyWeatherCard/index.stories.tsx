import type { Meta, Story } from "@storybook/react/types-6-0";
import { DailyWeatherCard } from "./index";

export default {
  component: DailyWeatherCard,
  title: "daily-weather-card/DailyWeatherCard",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} as Meta;

const Template: Story = ({
  weather,
  weatherIconUrl,
  maxTemperature,
  minTemperature,
}) => (
  <DailyWeatherCard
    weather={weather}
    weatherIconUrl={weatherIconUrl}
    maxTemperature={maxTemperature}
    minTemperature={minTemperature}
  />
);

export const dailyWeatherCard = Template.bind({});
dailyWeatherCard.args = {
  weather: "晴れ",
  weatherIconUrl: "http://openweathermap.org/img/w/04d.png",
  maxTemperature: "30",
  minTemperature: "-40",
};
