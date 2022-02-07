import {
  ReviewHeader,
  ReviewRoot,
  ImageContainer,
  ReviewHeaderText,
  ReviewText,
} from "./Review.styles";

export interface ReviewProps {
  name: string;
  date: Date;
  reviewText: string;
  profileURL: string;
}

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
