import type { Meta, Story } from "@storybook/react/types-6-0";
import { ConfirmationPopover } from "./index";

export default {
  component: ConfirmationPopover,
  title: "popover/ConfirmationPopover",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} as Meta;

const Template: Story = ({ prefectureName, cityName }) => (
  <ConfirmationPopover prefectureName={prefectureName} cityName={cityName} />
);

export const confirmationPopover = Template.bind({});
confirmationPopover.args = {
  prefectureName: "山口県",
  cityName: "宇部市",
};
