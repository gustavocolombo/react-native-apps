import { Trash } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  background-color: ${({ theme }) => theme.COLOR.white};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 10px;
  border-radius: 6px;
  height: 50px;
  margin: 9px;
  align-self: center;
  border: 1px solid ${({ theme }) => theme.COLOR.gray_600};
  border-radius: 6px;
`;

export const TextButton = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLOR.gray_700};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Icon = styled(Trash).attrs(({ theme }) => ({
  color: theme.COLOR.gray_700,
  size: 18,
}))`
  margin-right: 12px;
`;
