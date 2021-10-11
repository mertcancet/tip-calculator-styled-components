import React from "react";
import styled from "styled-components";
import { Input, SelectTipButtons } from "@/components/index";
import { Dolar, Person } from "@/icons/index";

const LeftSide = () => {
  console.log(Dolar);
  return (
    <Container>
      <Input label="Bill" placeholder="0" icon={<Dolar />} />
      <SelectTipButtons />
      <Input label="Number of People" placeholder="0" icon={<Person />} />
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
