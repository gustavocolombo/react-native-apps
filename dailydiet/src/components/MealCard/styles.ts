import { TouchableOpacity, View } from "react-native";
import styled, { css } from "styled-components/native";

export type ViewCircleProps = "yes" | "no";

type ViewCircleOptions = {
  healthy: ViewCircleProps;
};

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const ContentCard = styled(TouchableOpacity)`
  align-items: center;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.COLOR.gray_300};
  padding: 14px 16px 14px 12px;
  border-radius: 6px;
  width: 100%;
  margin: 3px;
  align-self: center;
`;

export const HourStyle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLOR.gray_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;

export const TextMealStyle = styled.Text`
  margin-left: 10px;

  ${({ theme }) => css`
    color: ${theme.COLOR.gray_600};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`;

export const ViewBorder = styled.View`
  border-left-color: ${({ theme }) => theme.COLOR.gray_400};
  border-left-width: 1px;
  border-left-style: solid;
  margin-left: 10px;
  flex: 1;
`;

export const ViewCircleColor = styled(View)<ViewCircleOptions>`
  width: 15px;
  height: 15px;
  border: 9px;
  border-radius: 30px;
  border-color: ${({ theme, healthy }) =>
    healthy === "yes" ? theme.COLOR.green_200 : theme.COLOR.red_200};
`;
