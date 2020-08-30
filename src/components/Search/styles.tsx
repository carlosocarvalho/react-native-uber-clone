import styled from "styled-components";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export const InputSearch = styled(GooglePlacesAutocomplete).attrs((props) => ({
  container: {
    position: "absolute",
    top: 60,
    width: "100%",
    zIndex: 10,
  },
}))``;
