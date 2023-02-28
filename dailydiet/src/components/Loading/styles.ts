import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLOR.gray_100};
`;

export const LoadingStyle = styled(ActivityIndicator).attrs(({ theme }) => ({
  color: theme.COLOR.green_300,
  size: 30,
}))``;
