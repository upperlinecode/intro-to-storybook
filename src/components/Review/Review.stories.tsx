import { Story } from "@storybook/react";
import Review, { ReviewProps } from "./Review";

export default {
  title: "Review",
  component: Review,
};

const Template: Story<ReviewProps> = (args) => <Review {...args} />;

export const ShortReview = Template.bind({});
ShortReview.args = {
  name: "Jesse Howard",
  date: new Date("October 17, 2021 03:24:00"),
  reviewText:
    "Mariano was an exceptionally welcoming host, and the neighborhood was just as charming as advertised. If you're coming from further north, be sure to bring sunscreen with you - the beach really is walking distance away.",
  profileURL: "https://placeimg.com/400/400/people",
};
