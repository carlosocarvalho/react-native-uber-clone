import React from "react";

import { PixelRatio, Platform } from "react-native";

export const getPixelRatio = (pixels: number) =>
  Platform.select({
    ios: pixels,
    android: PixelRatio.getPixelSizeForLayoutSize(pixels),
  });
