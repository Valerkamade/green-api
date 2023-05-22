import styled from "styled-components";

export const StyledButton = styled.a`
  display: block;
  min-height: 24px;
  font-size: ${(props) => props.theme.fontSizeDefault};
  min-width: ${(props) => `${props.$minWidth}px` || "100%"};
  color: ${(props) => props.theme.colorWhiteForText};
  background-color: transparent;
  text-align: center;
  border-radius: 5px;
  border: none;
  background-image: none;
  box-shadow: none;
  cursor: pointer;
  transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out;

  &:hover,
  &:active {
    color: ${(props) => props.theme.colorForButtonHover};
  }

  &:active {
    box-shadow: none;
  }
`;
