import { SmileySad } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TextEmptyList = styled.Text`
  margin-top: 10px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLOR.gray_500};
  `}
`;

export const IconEmptyList = styled(SmileySad).attrs(({ theme }) => ({
  color: theme.COLOR.gray_500,
  size: 40,
}))``;
