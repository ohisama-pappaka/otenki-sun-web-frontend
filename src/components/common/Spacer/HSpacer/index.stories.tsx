import type { Meta, Story } from "@storybook/react/types-6-0";
import { HSpacer } from "./index";

export default {
  component: HSpacer,
  title: "common/Spacer/HSpacer",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} as Meta;

const Template: Story = ({ size }) => <HSpacer size={size} />;

export const hSpacer = Template.bind({});
hSpacer.args = {
  size: 10,
};
