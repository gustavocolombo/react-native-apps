import { FontAwesome5 } from '@expo/vector-icons';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  align-items: center;
  flex-direction: row;
  height: 54px;
  border-radius: 6px;
  margin-top: 10px;
`;

export const UserStyle = styled(FontAwesome5).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_200,
  size: 24,
  weight: 'fill',
}))`
  margin-left: 20px;
`;

export const TextStyle = styled.Text`
  flex: 1;
  margin-left: 10px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;
