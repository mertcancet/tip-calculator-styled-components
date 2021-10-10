import React from "react";
import styled from "styled-components";
import { colors } from "themes/theme";

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  display: inline-block;
  background-color: ${colors.cyan.dark};
  color: ${colors.white};
  padding: 12px 32px;
  font-size: 24px;
  border: transparent;
  border-radius: 3px;
  font-weight: 700;
  transition: all 0.2s ease;
  & :hover {
    background-color: ${colors.cyan.primary};
    color: ${colors.cyan.dark};
  }
`;
