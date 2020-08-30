import { GooglePlaceData, GooglePlaceDetail } from "react-native-google-places-autocomplete";

export interface SearchProps {
  onSelected?: (data: GooglePlaceData, detail: GooglePlaceDetail | null) => void
}
