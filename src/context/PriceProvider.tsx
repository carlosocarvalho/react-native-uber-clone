import React from "react";
import { PriceContextProps } from "./price";

export const PriceContext = React.createContext<PriceContextProps>(
  {} as PriceContextProps
);

export const PriceProvider: React.FC = ({ children }) => {
  const [price, setPrice] = React.useState(0);
  const [distance, setNewDistance] = React.useState(0);
  const PRICE_BY_KM = 2.2;
  function setDistance(value: any) {
    //setPrice( distance * PRI)
    setNewDistance(value);
    setPrice(value * PRICE_BY_KM);
  }
  return (
    <PriceContext.Provider
      value={{
        price,
        distance,
        setDistance,
      }}
    >
      {children}
    </PriceContext.Provider>
  );
};
