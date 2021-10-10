import React from "react";
import { Button, Input } from "@/components/index";
import styled from "styled-components";
import { colors } from "themes/theme";
const percentages = [
  {
    label: "5%",
  },
  {
    label: "10%",
  },
  {
    label: "15%",
  },
  {
    label: "25%",
  },
  {
    label: "50%",
  },
];

const SelectTipButtons = () => {
  return (
    <Container>
      <Header>Select Tip %</Header>
      <ButtonWrapper>
        {percentages.map((item, i) => (
          <Button key={`percantages-${i}`}>{item.label}</Button>
        ))}
        <Input placeholder="Custom" />
      </ButtonWrapper>
    </Container>
  );
};

export default SelectTipButtons;

const Container = styled.div``;

const Header = styled.span`
  display: block;
  color: ${colors.cyan.gray[100]};
  margin-bottom: 6px;
  font-size: 16px;
  font-weight: 600;
`;

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 12px;
  grid-column-gap: 6px;
  grid-template-rows: 1fr 1fr;
`;
