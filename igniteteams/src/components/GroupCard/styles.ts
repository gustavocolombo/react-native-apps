import { UsersThree } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  align-items: center;
  flex-direction: row;
  padding: 24px;
  border-radius: 6px;
  margin-top: 10px;
`;

export const TextStyle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  line-height: 28px;
`;

export const UsersIcon = styled(UsersThree).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_500,
  size: 32,
  weight: 'fill',
}))`
  margin-right: 20px;
`;
