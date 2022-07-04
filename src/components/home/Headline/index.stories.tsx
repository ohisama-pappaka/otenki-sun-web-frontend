import type { Meta, Story } from "@storybook/react/types-6-0";
import { Headline } from "./index";

export default {
  component: Headline,
  title: "home/Headline",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} as Meta;

const Template: Story = ({ headlineTitle }) => (
  <Headline headlineTitle={headlineTitle} />
);

export const headline = Template.bind({});
headline.args = {
  headlineTitle: "週間天気",
};
