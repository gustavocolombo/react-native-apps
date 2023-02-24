import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export type IsActiveProps = {
  isActive: boolean;
};

export const Container = styled(TouchableOpacity)<IsActiveProps>`
  ${({ theme, isActive }) =>
    isActive &&
    css`
      border: 1px solid ${theme.COLORS.GREEN_500};
    `}
  width: 70px;
  height: 38px;
  margin-right: 12px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
`;

export const TextStyle = styled.Text`
  text-transform: uppercase;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
  `}
`;
