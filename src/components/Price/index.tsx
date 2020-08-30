import React from "react";
import {
  Container,
  Title,
  Description,
  DriverImage,
  DriverButton,
  DriverButtonText,
} from "./styles";
import { PriceContext } from "../../context/PriceProvider";

const image = require("../../assets/uberx.png");

const Price: React.FC = () => {
  const { price } = React.useContext(PriceContext);
  return (
    <Container>
      <Title>Popular</Title>
      <Description>Viagem mais barata</Description>
      <DriverImage source={image} />
      <Title>Uberx</Title>
      <Description>R$ {price}</Description>
      <DriverButton>
        <DriverButtonText>Chamar</DriverButtonText>
      </DriverButton>
    </Container>
  );
};

export default Price;
