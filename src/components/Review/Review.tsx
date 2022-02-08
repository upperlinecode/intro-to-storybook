import {
  ReviewHeader,
  ReviewRoot,
  ImageContainer,
  ReviewHeaderText,
  ReviewText,
} from "./Review.styles";

export interface ReviewProps {
  /** Name of user who left the review */
  name: string;
  /** Time of submission */
  date: Date;
  /** Text of user's review. Limited to 800 characters by submission form. */
  reviewText: string;
  /** URL for user's profile picture - square dimensions will be enforced by submission form. */
  profileURL: string;
}

/** The Review component is rendered as a small tile with the reviewer's name, review, and the date it was left. These reviews are meant to be rendered on the page for a specific property, or on a user's profile page. */
const Review = (props: ReviewProps) => {
  const { name, date, reviewText, profileURL } = props;
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months[date.getMonth()];
  return (
    <ReviewRoot>
      <ReviewHeader>
        <ImageContainer>
          <img src={profileURL} alt={name + "Headshot"} />
        </ImageContainer>
        <ReviewHeaderText>
          <h4>{name}</h4>
          <h5>
            {month} {date.getFullYear()}
          </h5>
        </ReviewHeaderText>
      </ReviewHeader>
      <ReviewText>{reviewText}</ReviewText>
    </ReviewRoot>
  );
};

export default Review;
