import styled from 'styled-components';
export interface IButton {
  color?: 'primary' | 'secondary';
  variant?: 'contained' | 'outlined';
}
const getContainedStyles = (bgColor: string, textColor: string) => `
  background-color: ${bgColor};
  color: ${textColor};
`;
const getOutlinedStyles = (
  bgColor: string,
  borderColor: string,
  textColor: string
) => `
  background-color: ${bgColor};
  color: ${textColor};
  border: 2px solid ${borderColor};
`;

export const Button = styled.button<IButton>`
  font-family: 'Sen', sans-serif;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
    color: ${(props) => props.theme.primary};
    background-color: ${(props) => props.theme.colors.darkGrey};
  }
  color: ${(props) => props.theme.colors.text};
  border: none;

  // outlined variant
  ${(props) =>
    props.variant === 'outlined' &&
    `background-color: white;
  color: black;
  border: 2px solid
    ${
      props.color === 'secondary'
        ? `${props.theme.colors.secondary}`
        : `${props.theme.colors.primary}`
    };`}

  // contained variant
  ${(props) =>
    props.variant === 'contained'
      ? props.color === 'primary'
        ? `${getContainedStyles(
            props.theme.colors.primary,
            props.theme.colors.text
          )}`
        : `${getContainedStyles(
            props.theme.colors.secondary,
            props.theme.colors.text
          )}`
      : ``};
`;
