import type { Meta, Story } from "@storybook/react/types-6-0";
import { ButtonComponent } from "./index";

export default {
  component: ButtonComponent,
  title: "tutorial/ButtonComponent",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} as Meta;

const Template: Story = ({ buttonText, buttonSize }) => (
  <ButtonComponent buttonText={buttonText} buttonSize={buttonSize} />
);

export const button = Template.bind({});
button.args = {
  buttonText: "Button",
  buttonSize: "xs",
};
