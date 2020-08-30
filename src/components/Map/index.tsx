import React from "react";
import MapView, { Marker, MapViewProps } from "react-native-maps";
import { StyleSheet, Dimensions, Image } from "react-native";

import * as Location from "expo-location";

import Search from "../Search";
import { SearchProps } from "../Search/search";
import Directions from "../Directions";
import { MapPropsRegion } from "./map";
import { getPixelRatio } from "../../helpers/helpers";

const markerImage = require("../../assets/marker.png");
const backImage = require("../../assets/back.png");

import { Title, ContainerBox, Duration, Hour, Minute, Back } from "./styles";
import Price from "../Price";
import { PriceProvider, PriceContext } from "../../context/PriceProvider";

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0143;

export default function Map() {
  // const [mapRef, setMapRef] = React.useState<any | null>(null);
  const mapRef = React.useRef<any>(null);
  const [destination, setDestination] = React.useState<any | null>(null);
  const [duration, setDuration] = React.useState(0);
  const [address, setAddress] = React.useState<Location.Address | null>(null);
  const { setDistance } = React.useContext(PriceContext);
  const [map, setMap] = React.useState<any>(null);
  const [region, setRegion] = React.useState<MapPropsRegion>({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
  } as MapPropsRegion);

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        return;
      }
      let location = await Location.getCurrentPositionAsync({
        maximumAge: 1000,
        // timeout: 4000,
        enableHighAccuracy: true,
      });

      let geo = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      setAddress(geo[0]);

      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        longitudeDelta: LATITUDE_DELTA * ASPECT_RATIO,
        latitudeDelta: LATITUDE_DELTA,
      });
    })();
  }, []);

  const handleLocationSelected = (data: any, details: any) => {
    const { geometry } = details;
    const {
      location: { lat: latitude, lng: longitude },
    } = geometry;

    setDestination({
      latitude,
      longitude,
      title: data.structured_formatting.main_text,
    });
  };

  const resetDestination = () => {
    setDestination(null);
  };
  return (
    <React.Fragment>
      <MapView
        style={styles.mapStyle}
        region={!!region && region}
        showsUserLocation
        loadingEnabled
        ref={(c) => setMap(c)}
      >
        {destination && (
          <React.Fragment>
            <Directions
              optimizeWaypoints={true}
              apikey="AIzaSyDcOsXiERss0-qm37I_UKaKd0ZzPzamrKs"
              origin={region}
              destination={destination}
              onReady={(result: any) => {
                map.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                    right: width / 5,
                    left: width / 30,
                    top: height / 30,
                    bottom: getPixelRatio(330),
                  },
                });
                setDuration(Math.floor(result.duration));
                setDistance(result.distance);
              }}
            />
            <Marker
              coordinate={region}
              anchor={{
                x: 0,
                y: 0,
              }}
            >
              <ContainerBox>
                <Duration>
                  <Hour>{duration}</Hour>
                  <Minute>MIN</Minute>
                </Duration>
                <Title>{address?.street}</Title>
              </ContainerBox>
            </Marker>
            <Marker
              coordinate={destination}
              anchor={{
                x: 0,
                y: 0,
              }}
              image={markerImage}
            >
              <ContainerBox>
                <Title>{destination.title}</Title>
              </ContainerBox>
            </Marker>
          </React.Fragment>
        )}
      </MapView>
      {destination ? (
        <React.Fragment>
          <Back onPress={resetDestination}>
            <Image source={backImage} />
          </Back>
          <Price />
        </React.Fragment>
      ) : (
        <Search onSelected={handleLocationSelected} />
      )}
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
