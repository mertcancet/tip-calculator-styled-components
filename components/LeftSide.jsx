import React from "react";
import styled from "styled-components";
import { Input } from "@/components/index";
import SelectTipButtons from "./SelectTipButtons";

const LeftSide = () => {
  return (
    <Container>
      <Input label="Bill" placeholder="0" />
      <SelectTipButtons />
      <Input label="Number of People" placeholder="0" />
    </Container>
  );
};

export default LeftSide;

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  grid-template-columns: 1fr;
  row-gap: 12px;
`;
