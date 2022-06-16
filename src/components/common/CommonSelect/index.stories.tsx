import type { Meta, Story } from "@storybook/react/types-6-0";
import { CommonSelect } from "./index";

export default {
  component: CommonSelect,
  title: "common/CommonSelect",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} as Meta;

const Template: Story = ({ placeholderData, selectDataList }) => (
  <CommonSelect
    placeholderData={placeholderData}
    selectDataList={selectDataList}
  />
);

export const commonSelect = Template.bind({});
commonSelect.args = {
  placeholderData: "placeholder",
  selectDataList: ["Option1", "Option2", "Option3"],
};
