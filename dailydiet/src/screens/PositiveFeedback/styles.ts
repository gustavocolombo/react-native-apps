import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLOR.gray_100};
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  margin: 40px 0px 32px 0px;
  align-self: center;
`;
