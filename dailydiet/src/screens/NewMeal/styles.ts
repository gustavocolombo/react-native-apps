import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const ContainerGray = styled.View`
  background-color: ${({ theme }) => theme.COLOR.gray_300};
  padding: 24px;
  border-bottom-right-radius: -15px;
  border-bottom-left-radius: -15px;
`;

export const ContainerWhite = styled.View`
  background-color: ${({ theme }) => theme.COLOR.white};
  padding: 24px;
  flex: 1;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export const ContainerForm = styled.Text`
  border: 20px;
`;
