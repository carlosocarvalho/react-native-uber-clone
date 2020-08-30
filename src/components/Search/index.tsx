import React from "react";
import { Image, Text, Platform } from "react-native";
import { InputSearch } from "./styles";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import { SearchProps } from "./search";

const GooglePlacesInput: React.FC<SearchProps> = ({ onSelected }) => {
  const [focusIn, setFocusIn] = React.useState(false);

  return (
    <GooglePlacesAutocomplete
      styles={{
        container: {
          position: "absolute",
          top: Platform.select({ ios: 60, android: 40 }),
          width: "100%",
        },
        textInputContainer: {
          flex: 1,
          backgroundColor: "transparent",
          height: 54,
          marginHorizontal: 20,
          borderBottomWidth: 0,
          borderTopWidth: 0,
        },
        textInput: {
          height: 54,
          margin: 0,
          borderRadius: 3,
          paddingBottom: 0,
          paddingLeft: 20,
          paddingTop: 0,
          paddingRight: 20,
          marginBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          elevation: 5,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 0 },
          shadowRadius: 15,
          borderWidth: 1,
          borderColor: "#DDD",
          fontSize: 18,
          lineHeight: 18,
        },
        listView: {
          borderWidth: 1,
          borderColor: "#ddd",
          backgroundColor: "#FFF",
          marginHorizontal: 20,
          elevation: 5,
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 0 },
          shadowRadius: 15,
          marginTop: 10,
        },
        description: {
          fontSize: 15,
        },
        row: {
          padding: 20,
          height: 58,
        },
      }}
      placeholder="Para onde ?"
      onPress={onSelected}
      listViewDisplayed={focusIn}
      query={{
        key: "AIzaSyDcOsXiERss0-qm37I_UKaKd0ZzPzamrKs",
        language: "pt-BR",
      }}
      textInputProps={{
        autoCapitalize: "none",
        autoCorrect: false,
        onFocus: () => {
          setFocusIn(true);
        },
        onBlur: () => {
          setFocusIn(false);
        },
      }}
      fetchDetails
      placeholderTextColor="#333"
      enablePoweredByContainer={false}
    />
  );
};

export default GooglePlacesInput;
