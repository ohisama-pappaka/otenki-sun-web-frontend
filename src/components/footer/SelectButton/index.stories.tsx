import type { Meta, Story } from "@storybook/react/types-6-0";
import { SelectButton } from "./index";

export default {
  component: SelectButton,
  title: "footer/SelectButton",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} as Meta;

const Template: Story = ({ selectType }) => (
  <SelectButton selectType={selectType} />
);

export const selectButton = Template.bind({});
selectButton.args = {
  selectType: "POINT_REGI",
};
