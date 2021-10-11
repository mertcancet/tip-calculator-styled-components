import React from "react";
import styled from "styled-components";
import { colors } from "themes/theme";

const Input = ({ label, icon, error, ...props }) => {
  return (
    <Container>
      <LabelWrapper>
        {label && <InfoLabel>{label}</InfoLabel>}
        {error && <ErrorLabel>{error}</ErrorLabel>}
      </LabelWrapper>
      <InputWrapper>
        {icon && <Icon> {icon}</Icon>}
        <StyledInput type="number" error={error} {...props} />
      </InputWrapper>
    </Container>
  );
};

export default Input;

const Container = styled.div``;
const InputWrapper = styled.div`
  position: relative;
`;
const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
`;

const InfoLabel = styled.label`
  color: ${colors.cyan.gray[100]};
  font-size: 16px;
  font-weight: 600;
`;

const ErrorLabel = styled.span`
  font-size: 18px;
  color: ${colors.error};
`;

const Icon = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 12px;
`;

const StyledInput = styled.input`
  background-color: ${colors.cyan.lightGray[100]};
  border: ${p =>
    !p.error
      ? `3px solid ${colors.cyan.gray[100]}`
      : `3px solid ${colors.error}`};
  color: ${colors.cyan.dark};
  padding: 8px 12px;
  border-radius: 3px;
  text-align: right;
  font-size: 24px;
  cursor: pointer;
  box-sizing: border-box;
  transition: all 0.3s ease;
  width: 100%;
  &:focus {
    border: 3px solid ${colors.cyan.primary};
  }
`;
