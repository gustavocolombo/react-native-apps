import { View } from "react-native";
import styled, { css } from "styled-components/native";

export type ContainerColorOptions = "green" | "red";

type ContainerColorProps = {
  color?: ContainerColorOptions;
};

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLOR.gray_300};
`;

export const ContainerRed = styled(View)<ContainerColorProps>`
  background-color: ${({ theme, color }) =>
    color === "green" ? theme.COLOR.green_100 : theme.COLOR.red_100};
  padding: 24px;
`;

export const TextMealContainer = styled.View`
  align-items: flex-start;
  margin-top: 40px;
`;

export const TextTitleMeal = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLOR.gray_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    line-height: 26px;
  `}
`;

export const TextSubtitleMeal = styled.Text`
  margin-top: 8px;
  ${({ theme }) => css`
    color: ${theme.COLOR.gray_600};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
    line-height: 20.8px;
  `}
`;

export const ContainerDateTime = styled.View`
  align-items: flex-start;
  margin-top: 24px;
`;

export const TextDateTime = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLOR.gray_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    line-height: 18.2px;
  `}
`;

export const TextSubtitleDateTime = styled.Text`
  margin-top: 8px;
  ${({ theme }) => css`
    color: ${theme.COLOR.gray_600};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
    line-height: 20.8px;
  `}
`;

export const ContainerTagMeal = styled.View`
  flex: 1;
`;

export const ContentTagMeal = styled.View`
  background-color: ${({ theme }) => theme.COLOR.gray_300};
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 127px;
  min-height: 34px;
  max-height: 4px;
  margin-top: 32px;
`;

export const TextTagMeal = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLOR.gray_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    line-height: 18.2px;
  `}
`;
