import ActionButton, { ButtonProps } from "./ActionButton";
import { Story } from "@storybook/react";
// import { ComponentStory, ComponentMeta } from "@storybook/react";
// What's the difference here?

export default {
  title: "UI Components/Action Button",
  component: ActionButton,
  // argTypes: {
  //   onClick: { action: "clicked" },
  // }, // Note that our action is connected automatically
};

const Template: Story<ButtonProps> = (args) => <ActionButton {...args} />;

export const CheckAvailable = Template.bind({});
CheckAvailable.args = {
  text: "Check availability",
  active: true,
  size: "large", // note that we do not pass in an onClick, so the actions tab will catch it instead.
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

export const ActionDemoButton = Template.bind({});
ActionDemoButton.args = {
  text: "Action Demo Button",
  active: true,
  size: "small",
  onClick: () => {
    alert(
      "This button will not register an action because it has a real function to execute instead."
    );
  },
};
