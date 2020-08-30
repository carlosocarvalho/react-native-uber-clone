import React from "react";

import MapViewDirections from "react-native-maps-directions";
import { DirectionsProps } from "./direction";

const Directions: React.FC<DirectionsProps> = ({
  origin,
  destination,
  apikey,
  onReady,
}) => {
  return (
    <MapViewDirections
      origin={origin}
      destination={destination}
      apikey={apikey}
      onReady={onReady}
      strokeWidth={3}
    />
  );
};

export default Directions;
