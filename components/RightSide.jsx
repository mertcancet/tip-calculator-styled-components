import React from "react";
import styled from "styled-components";
import { colors } from "themes/theme";
import { Button } from "@/components/index";

const tip = [
  {
    header: "Tip Amount",
    per: "/ person",
    price: "0.00",
  },
  {
    header: "Total",
    per: "/ person",
    price: "0.00",
  },
];

const RightSide = () => {
  return (
    <Container>
      <div>
        {tip.map((item, i) => (
          <Tip key={`tip-${i}`}>
            <Description>
              <Header>{item.header}</Header>
              <Per>{item.per}</Per>
            </Description>
            <Price>${item.price}</Price>
          </Tip>
        ))}
      </div>
      <ResetButton>Reset</ResetButton>
    </Container>
  );
};

export default RightSide;

const Container = styled.div`
  background-color: ${colors.cyan.dark};
  border-radius: 16px;
  padding: 12px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Tip = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.span`
  color: ${colors.white};
  font-size: 18px;
`;

const Per = styled.span`
  color: ${colors.cyan.gray[100]};
  font-size: 12px;
  margin-top: 6px;
`;

const Price = styled.span`
  font-size: 32px;
`;

const ResetButton = styled(Button)`
  background-color: ${colors.cyan.gray[200]};
  margin-bottom: 12px;
`;
