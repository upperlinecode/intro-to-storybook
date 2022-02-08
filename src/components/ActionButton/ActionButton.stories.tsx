import ActionButton, { ButtonProps } from "./ActionButton";
import { Story } from "@storybook/react";
// import { ComponentStory, ComponentMeta } from "@storybook/react";
// What's the difference here?

export default {
  title: "UI Components/Action Button",
  component: ActionButton,
  argTypes: {
    onClick: { action: "clicked" },
  },
};

const Template: Story<ButtonProps> = (args) => <ActionButton {...args} />;

export const CheckAvailable = Template.bind({});
CheckAvailable.args = {
  text: "Check availability",
  active: true,
  size: "large",
};

export const InactiveButton = Template.bind({});
InactiveButton.args = {
  text: "Sold Out",
  onClick: () => {
    console.log("ERROR: Inactive button press allowed");
  },
  active: false,
  size: "large",
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  text: "Small Button",
  active: true,
  size: "small",
};

export const InactiveSmallButton = Template.bind({});
InactiveSmallButton.args = {
  text: "Small Inactive Button",
  active: false,
  size: "small",
};
