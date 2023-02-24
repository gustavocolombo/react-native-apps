import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export type ButtonIconStyleProps = 'PRIMARY' | 'SECONDARY';

type ButtonIconProps = {
  type: ButtonIconStyleProps;
};

export const Container = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  margin-right: 5px;
`;

export const Icon = styled(MaterialIcons).attrs<ButtonIconProps>(({ theme, type }) => ({
  size: 24,
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_500 : theme.COLORS.RED,
}))``;
