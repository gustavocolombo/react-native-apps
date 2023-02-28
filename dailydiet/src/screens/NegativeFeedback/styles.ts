import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLOR.gray_100};
  padding: 24px;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  margin: 40px 32px;
  align-self: center;
`;
