import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLOR.gray_100};
  padding: 24px;
`;

export const NewMealContainer = styled.View`
  align-items: flex-start;
  margin-bottom: 50px;
`;

export const DateOfMeal = styled.Text`
  margin-bottom: 5px;
  ${({ theme }) => css`
    color: ${theme.COLOR.gray_700};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
