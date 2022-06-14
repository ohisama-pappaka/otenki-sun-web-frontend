import type { Meta, Story } from "@storybook/react/types-6-0";
import { VSpacer } from "./index";

export default {
  component: VSpacer,
  title: "common/Spacer/VSpacer",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} as Meta;

const Template: Story = ({ size }) => <VSpacer size={size} />;

export const vSpacer = Template.bind({});
vSpacer.args = {
  size: 10,
};
