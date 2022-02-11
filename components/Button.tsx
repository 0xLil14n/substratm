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
    ${(props) =>
      props.variant !== 'contained' && `color:${props.theme.primary}`};
    transform: scale(1.1);
  }
  color: ${(props) => props.theme.colors.text};
  border: none;

  // outlined variant
  ${(props) =>
    props.variant === 'outlined' &&
    `background: none;  
      
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
