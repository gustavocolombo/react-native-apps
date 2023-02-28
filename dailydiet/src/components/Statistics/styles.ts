import { ArrowUpRight } from "phosphor-react-native";
import { TouchableOpacity, View } from "react-native";
import styled, { css } from "styled-components/native";

export type ContainerColor = "primary" | "secondary";

type ContainerProps = {
  color?: ContainerColor;
};

export const Container = styled(View)<ContainerProps>`
  background-color: ${({ theme, color }) =>
    color === "primary" ? theme.COLOR.green_100 : theme.COLOR.red_200};
  border-radius: 8px;
  min-height: 110px;
  max-height: 110px;
  width: 100%;
  margin: 50px;
  align-self: center;
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

export const ArrowUpRightStyle = styled(ArrowUpRight).attrs(({ theme }) => ({
  color: theme.COLOR.green_300,
  size: 24,
}))`
  align-self: flex-end;
  margin-right: 10px;
  margin-top: 5px;
`;
