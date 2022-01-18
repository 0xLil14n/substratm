import styled from 'styled-components';
export interface IButton {
  color?: 'primary' | 'secondary';
  variant?: 'contained' | 'outlined';
}

export const Button = styled.button<IButton>`
  font-family: 'Sen', sans-serif;
  color: ${(props) => props.theme.colors.text};
  border: none;

  // outlined variant
  ${(props) =>
    props.variant === 'outlined'
      ? `background-color: white;
      color: ${props.theme.text.dark};
      border: 2px solid ${
        props.color === 'secondary'
          ? `${props.theme.colors.secondary}`
          : `${props.theme.colors.primary}`
      };`
      : ``};

  background-color: ${(props) =>
    props.color === 'primary' && props.variant === 'contained'
      ? `${props.theme.colors.primary};`
      : `${props.theme.colors.secondary}`};
`;
