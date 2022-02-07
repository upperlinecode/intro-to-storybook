import styled from "styled-components";
import { Status } from "./Badge";

export const BadgeRoot = styled.span<{
  type: Status;
}>`
  border-radius: 16px;
  padding: 2px 8px;
  color: white;
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 100;
  font-size: 0.8rem;
  background-color: ${({ type }) => (type === "success" ? "green" : "grey")};
`;
