import ActionButton, {
  ButtonProps,
} from "../components/ActionButton/ActionButton";
import { Story } from "@storybook/react";
// import { ComponentStory, ComponentMeta } from "@storybook/react";
// What's the difference here?

export default {
  title: "Action Button",
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

export const SmallButton = () => (
  <ActionButton
    text="Small Button"
    onClick={() => {
      console.log("Small button pressed");
    }}
    active={true}
    size="small"
  />
);
