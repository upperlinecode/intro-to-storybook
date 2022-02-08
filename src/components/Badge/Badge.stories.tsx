import Badge, { BadgeProps } from "./Badge";
import { Story } from "@storybook/react";

export default {
  title: "UI Components/Badge",
  component: Badge,
};

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const Success = Template.bind({});
Success.args = {
  text: "Finished",
  type: "success",
};

export const Pending = Template.bind({});
Pending.args = {
  text: "In Progress",
  type: "pending",
};

export const Failed = Template.bind({});
Failed.args = {
  text: "Failed",
  type: "failed",
};

export const Other = Template.bind({});
Other.args = {
  text: "Not Submitted",
  type: "other",
};
