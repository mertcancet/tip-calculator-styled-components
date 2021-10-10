import React from "react";
import styled from "styled-components";
import { LeftSide, RightSide } from "@/components/index";
import { colors } from "themes/theme";

const Card = () => {
  return (
    <Container>
      <LeftSide />
      <RightSide />
    </Container>
  );
};

export default Card;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  background-color: ${colors.white};
  border-radius: 16px;
  height: max-content;
  padding: 24px;
  max-width: 800px;
`;
