import ActionButton from "../ActionButton/ActionButton";
import {
  TileRoot,
  TileHeader,
  TileBody,
  TileFooter,
  TileDescription,
  TileStatHolder,
} from "./Tile.styles";

export interface TileProps {
  /** Vertical cards are fixed at a standard width for grid layouts or mobile lists. Horizontal tiles can be used for full-width list layouts. */
  orientation: "horizontal" | "vertical";
  /** Title of the property to be rented. */
  title: string;
  /** URL of image to be displayed. */
  imageURL: string;
  /** Description of image, for accessibility via an `alt` attribute. */
  imageDescription: string;
  /** Body of listing, advertising key features of the property. */
  bodyText: string;
  /** Price per night of staying on the property. */
  price: number;
  /** Maximum adult occupants per night on property. */
  maxOccupancy: number;
  /** Approximate location of listing - assumes "City, ST" format, but works with any string. */
  city: string;
  /** Indicates whether the button at the bottom of the card should show that a property is available for bookings, or be inactive. */
  active: boolean;
}

/** The Listing Tile is the primary component to show search results to a user who would like to make a booking. These tiles can be displayed vertically for grid or narrow displays, or horizontally for list displays.  */
const Tile = (props: TileProps) => {
  const {
    title,
    imageURL,
    imageDescription,
    bodyText,
    price,
    maxOccupancy,
    city,
    active,
    orientation,
  } = props;
  return (
    <TileRoot orientation={orientation}>
      <TileHeader>
        <img src={imageURL} alt={imageDescription} />
      </TileHeader>
      <TileBody>
        <div>
          <h4>{title}</h4>
          <h5>{city}</h5>
          <TileDescription>{bodyText}</TileDescription>
        </div>
        <TileFooter>
          <TileStatHolder orientation={orientation}>
            <p>
              <span>Max Occupancy:</span> {maxOccupancy}
            </p>
            <p>
              <span>Price:</span> ${price}/night
            </p>

            <ActionButton
              size={orientation === "vertical" ? "large" : "small"}
              active={active}
              onClick={handleTileClick}
              text={active ? "Book Now" : "No Vacancy"}
            />
          </TileStatHolder>
        </TileFooter>
      </TileBody>
    </TileRoot>
  );
};

const handleTileClick = () => console.log("Booking attempted");

export default Tile;
