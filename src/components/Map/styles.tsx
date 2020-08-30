import styled, { css } from "styled-components/native";
import { Platform } from "react-native";

export const ContainerBox = styled.View`
  background: #fff;
  elevation: 1;
  border: 1px solid #ddd;
  border-radius: 3px;
  flex-direction: row;
  ${Platform.select({
    ios: css`
      margin-top: 20px;
    `,
    android: css`
      margin-top: 10px;
      margin-left: 10px;
    `,
  })}
`;

export const Title = styled.Text`
  margin: 8px 10px;
  font-size: 14px;
`;

export const Duration = styled.View`
  background: #222;
  padding: 3px 8px;
  align-items: center;
`;

export const Hour = styled.Text`
  color: #fff;
  font-size: 12px;
  font-weight: bold;
`;

export const Minute = styled.Text`
  color: #fff;
  font-size: 10px;
`;

export const Back = styled.TouchableOpacity`
  position: absolute;

  top: ${Platform.select({
    ios: 60,
    android: 40,
  })}px;
  left: 20px;
`;
