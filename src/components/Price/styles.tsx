import styled from "styled-components/native";

export const Container = styled.View`
  background: #fff;
  height: 300px;
  width: 100%;
  position: absolute;
  bottom: 0;
  shadow-color: #000;
  shadow-offset: 0 0;
  shadow-opacity: 0.1;
  elevation: 3;
  border: 1px solid #ddd;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #222;
`;

export const Description = styled.Text`
  font-size: 14px;
  color: #555;
`;

export const DriverImage = styled.Image`
  height: 80px;
  margin: 10px 0px;
`;

export const DriverButton = styled.TouchableOpacity`
  background: #222;
  justify-content: center;
  align-items: center;
  height: 44px;
  align-self: stretch;
  margin-top: 10px;
  border-radius: 3px;
`;

export const DriverButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
`;
