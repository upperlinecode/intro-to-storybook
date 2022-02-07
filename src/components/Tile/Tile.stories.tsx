import Tile, { TileProps } from "./Tile";
import { Story } from "@storybook/react";

export default {
  title: "Listing Tile",
  component: Tile,
};

const Template: Story<TileProps> = (args) => <Tile {...args} />;

export const VerticalListing = Template.bind({});
VerticalListing.args = {
  orientation: "vertical",
  title: "Cozy Cabin in Magical Landscape",
  imageURL: "https://placeimg.com/640/480/nature",
  imageDescription: "Magical verdant landscape where the cabin resides",
  bodyText:
    "Escape the city in this well-appointed cabin. This 2-bed, 1-bath getaway is the perfect place for you to take some time for yourself. Standard amenities include a coffee bar, some fresh local fruit, and some homemade snacks to enjoy. While the cabin comfortably sleeps 4, two additional guests are permitted to sleep in the main room on the couches if they wish.",
  price: 150,
  maxOccupancy: 6,
  city: "Franklin, TN",
  active: true,
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  orientation: "horizontal",
  title: "Cozy Cabin in Magical Landscape",
  imageURL: "https://placeimg.com/640/480/nature",
  imageDescription: "Magical verdant landscape where the cabin resides",
  bodyText:
    "Escape the city in this well-appointed cabin. This 2-bed, 1-bath getaway is the perfect place for you to take some time for yourself. Standard amenities include a coffee bar, some fresh local fruit, and some homemade snacks to enjoy. While the cabin comfortably sleeps 4, two additional guests are permitted to sleep in the main room on the couches if they wish.",
  price: 150,
  maxOccupancy: 6,
  city: "Franklin, TN",
  active: true,
};
