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
  orientation: "horizontal" | "vertical";
  title: string;
  imageURL: string;
  imageDescription: string;
  bodyText: string;
  price: number;
  maxOccupancy: number;
  city: string;
  active: boolean;
}

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
