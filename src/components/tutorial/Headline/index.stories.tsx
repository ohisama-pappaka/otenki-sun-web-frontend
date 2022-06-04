import type { Meta, Story } from "@storybook/react/types-6-0";
import { Headline } from "./index";

export default {
  component: Headline,
  title: "tutorial/Headline",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} as Meta;

const Template: Story = ({ headingSize }) => (
  <Headline headingSize={headingSize} />
);

export const headline = Template.bind({});
headline.args = {
  headingSize: "4xl",
};
