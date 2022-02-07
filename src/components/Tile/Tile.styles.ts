import styled from "styled-components";

export const TileRoot = styled.div<{ orientation: "vertical" | "horizontal" }>`
  padding: 20px;
  font-family: "Work Sans", "Circular", "IBM Plex Sans", sans-serif;
  font-weight: 200;

  /* BORDERS */
  border: solid #eee;
  /* Draw border on right if vertical, on bottom if horizontal */
  border-width: ${({ orientation }) =>
    orientation === "vertical" ? "0 1px 0 0" : "0 0 1px 0"};

  /* LAYOUT */
  width: ${({ orientation }) =>
    orientation === "vertical" ? "300px" : "auto"};
  /* Display will always be a grid - Horizontal card is just a 2-column grid, and vertical is a single-column grid. */
  display: grid;
  ${({ orientation }) =>
    orientation === "horizontal" &&
    "grid-template-columns: 300px auto; grid-gap: 30px"};
`;

export const TileHeader = styled.div`
  max-height: 200px;
  overflow: clip;
  border-radius: 8px;
  margin-bottom: 20px;

  & img {
    width: 300px;
    min-width: 100%;
    min-height: 100%;
  }
`;

export const TileBody = styled.div`
  & h4 {
    font-weight: 200;
    margin-top: 0;
  }

  & h5 {
    color: #bbb;
  }
`;

export const TileDescription = styled.p``;

export const TileStatHolder = styled.div<{
  orientation: "vertical" | "horizontal";
}>`
  ${({ orientation }) =>
    orientation === "horizontal" &&
    "display: flex; justify-content: space-between; align-items: center;"}
`;

export const TileFooter = styled.div`
  & span {
    font-weight: 500;
  }
`;
