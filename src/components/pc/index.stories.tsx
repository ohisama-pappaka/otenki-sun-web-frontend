import type { Meta, Story } from "@storybook/react/types-6-0";
import { Pc } from "./index";

export default {
  component: Pc,
  title: "pc",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} as Meta;

const Template: Story = () => <Pc />;

export const pc = Template.bind({});
