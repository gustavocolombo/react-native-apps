import { ArrowLeft } from "phosphor-react-native";
import { View } from "react-native";
import styled, { css } from "styled-components/native";

export type AverageStatisticsColor = "green" | "red";

type AverageStatisticsProps = {
  color?: AverageStatisticsColor;
};

export const Container = styled(View)<AverageStatisticsProps>`
  flex: 1;
  background-color: ${({ theme, color }) =>
    color === "green" ? theme.COLOR.green_100 : theme.COLOR.red_100};
`;

export const ContainerColorized = styled(View)<AverageStatisticsProps>`
  margin-top: 60px;
  margin-bottom: 48px;
  padding: 24px;
  background-color: ${({ theme, color }) =>
    color === "green" ? theme.COLOR.green_100 : theme.COLOR.red_100};
  align-items: center;
  justify-content: center;
`;

export const ArrowLeftColorized = styled(
  ArrowLeft
).attrs<AverageStatisticsColor>(({ theme, color }) => ({
  size: 24,
  color: color === "green" ? theme.COLOR.green_300 : theme.COLOR.red_300,
}))`
  align-self: flex-start;
`;

export const ContainerWhite = styled.View`
  background-color: ${({ theme }) => theme.COLOR.white};
  padding: 24px;
  flex: 1;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-color: transparent;

  align-items: center;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
`;

export const StatisticPercentText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXXL}px;
    line-height: 41.6px;
    color: ${theme.COLOR.gray_700};
  `}
`;

export const TextStatistic = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLOR.gray_600};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `};
`;

export const ContainerContentGray = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLOR.gray_200};
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 16px;
  margin: 12px;
  align-self: center;
`;

export const TextTitleStatistic = styled.Text`
  margin-top: 33px;
  margin-bottom: 23px;
  ${({ theme }) => css`
    color: ${theme.COLOR.gray_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    line-height: 18px;
  `}
`;

export const TextBold = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLOR.gray_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
    line-height: 31.2px;
  `}
`;

export const TextSubtitle = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLOR.gray_600};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    line-height: 18.2px;
  `}
`;

export const ContainerTotalEachMeals = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ContainerTotalHealthyMeal = styled.View`
  align-items: center;
  justify-content: center;
  padding: 16px;
  background-color: ${({ theme }) => theme.COLOR.green_100};
  border-radius: 6px;
  width: 157px;
`;

export const ContainerTotalNoHealthyMeal = styled.View`
  align-items: center;
  justify-content: center;
  padding: 16px;
  background-color: ${({ theme }) => theme.COLOR.red_100};
  border-radius: 6px;
  width: 157px;
`;
