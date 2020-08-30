import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

import Map from "./src/components/Map";
import { PriceProvider } from "./src/context/PriceProvider";

export default function App() {
  return (
    <View style={styles.container}>
      <PriceProvider>
        <Map />
      </PriceProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
