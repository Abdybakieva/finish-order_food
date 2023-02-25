import React from "react";
import styled from "styled-components";
import { Button } from "../UI/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export const BasketItem = ({ title, price, amount,decrementAmount,incrementAmount }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>
        <PriceAndAmount>
          <Price>{price}</Price>
          <Amout>{amount}</Amout>
        </PriceAndAmount>
        <CounterContainer>
          <Button borderStyle="squared" variant="outlined" onClick={decrementAmount}>
            <RemoveIcon/>
          </Button>
          <Button borderStyle="squared" variant="outlined" onClick={incrementAmount}>
            <AddIcon/>
          </Button>
        </CounterContainer>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 24px 0;
  width: 100%;
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  margin: 0 0 12px 0;
  color: #222222;
`;

const Price = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #ad5502;
  margin: 0;
`;
const Amout = styled.span`
  border: 1px solid #d6d6d6;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  padding: 6px 14px;
  color: #222222;
  display: block;
`;
const PriceAndAmount = styled.div`
  display: flex;
  align-items: center;
  width: 153px;
  justify-content: space-between;
`;

const CounterContainer = styled.div`
  /* &:first-child {
    margin-right: 14px;
  } */
  display: flex;
  gap: 14px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
