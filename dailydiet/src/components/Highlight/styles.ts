import { Text } from "react-native";
import styled, { css } from "styled-components/native";

export type HightlightType = "positive" | "negative";

type HighlightProps = {
  type?: HightlightType;
};

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Title = styled(Text)<HighlightProps>`
  ${({ theme, type }) =>
    type === "positive"
      ? css`
          color: ${theme.COLOR.green_300};
          font-size: ${theme.FONT_SIZE.XXL}px;
          font-family: ${theme.FONT_FAMILY.BOLD};
        `
      : css`
          color: ${theme.COLOR.red_300}
          font-size: ${theme.FONT_SIZE.XXL}px;
          font-family: ${theme.FONT_FAMILY.BOLD};
        `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLOR.gray_700}
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  margin-top: 8px;
  max-width: 80%;
  text-align: center;
`;
