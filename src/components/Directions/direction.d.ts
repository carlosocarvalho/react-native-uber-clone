export type DirectionsProps = {
  destination: string | { latitude: any, longitude: any},
  origin: string | { latitude: any, longitude: any} | undefined,
  apikey: string,
  onReady?: any,
  optimizeWaypoints?: boolean
}
