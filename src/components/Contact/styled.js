import styled from "styled-components";

export const ContactItem = styled.li`
  display: flex;
  height: 73px;
  align-items: center;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: var(--color-active);
  }

  &:focus {
    background-color: var(--color-active);
  }
`;

export const ContactName = styled.h2`
  font-weight: normal;
  line-height: 14px;
  font-size: 17px;
`

// .contact__wrapper {
//   border - bottom: 1px solid var(--color - main);
//   width: 100 %;
//   margin: 0 5px 0 0;
// }