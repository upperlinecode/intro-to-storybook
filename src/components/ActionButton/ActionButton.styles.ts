import styled from "styled-components";

export const ButtonRoot = styled.button<{
  size: "small" | "large";
  active: boolean;
}>`
  background-color: ${({ active }) =>
    active ? "rgb(28, 184, 227)" : "darkgrey"};
  color: white;
  padding: 14px 24px;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  border: none;
  width: ${({ size }) => (size === "small" ? "auto" : "100%")};
  font-family: "Work Sans", "Circular", Verdana, Tahoma, sans-serif;
`;
