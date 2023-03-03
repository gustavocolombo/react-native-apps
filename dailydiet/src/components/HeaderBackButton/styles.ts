import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  width: 100%;
  text-align: center;
`;

export const TextHeader = styled.Text`
  margin-right: auto;
  margin-left: auto;
  ${({ theme }) => css`
    color: ${theme.COLOR.gray_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
  `};
`;

export const BackButton = styled(TouchableOpacity)`
  width: 0px;
`;

export const ArrowLeftStyle = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLOR.gray_600,
}))``;
