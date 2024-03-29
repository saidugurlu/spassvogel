import styled from "styled-components";
import { DefaultTheme } from "styled-components";

interface ButtonProps {
  theme: DefaultTheme;
}

const Button = styled.button<ButtonProps>`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors?.secondary};
  color: ${({ theme }) => theme.colors?.white};
  border-radius:10px;
  border: none;
  font-weight:bold;
`;

export default Button;