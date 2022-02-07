import styled from "styled-components";

export const ReviewRoot = styled.div`
  width: 400px;
  font-family: "Work Sans", "Circular", Verdana, Tahoma, sans-serif;
`;

export const ReviewHeader = styled.div`
  display: flex;
`;

export const ReviewHeaderText = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & h4 {
    margin: 0;
    font-weight: 500;
  }

  & h5 {
    margin: 0;
    font-weight: 200;
    color: slategray;
  }
`;

export const ImageContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: clip;

  & img {
    width: 100%;
    height: 100%;
  }
`;

export const ReviewText = styled.p`
  font-weight: 100;
`;
