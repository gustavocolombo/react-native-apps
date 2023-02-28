import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 60px;
  width: 65%;
`;

export const TextHeader = styled.Text`
  align-self: center;
  ${({ theme }) => css`
    color: ${theme.COLOR.gray_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
  `}
`;

export const BackButton = styled(TouchableOpacity)`
  flex: 1;
`;

export const ArrowLeftStyle = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLOR.gray_600,
}))``;
