import type { Meta, Story } from "@storybook/react/types-6-0";
import { Header } from "./index";

export default {
  component: Header,
  title: "header/Header",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} as Meta;

const Template: Story = ({ headerText }) => <Header headerText={headerText} />;

export const header = Template.bind({});
header.args = {
  headerText: "地点登録",
};
