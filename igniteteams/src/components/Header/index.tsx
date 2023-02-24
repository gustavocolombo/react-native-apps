import logo from '@assets/logo.png';
import { useNavigation } from '@react-navigation/native';

import { BackButton, BackIcon, Container, LogoImg } from './styles';

type HeaderProps = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: HeaderProps) {
  const navigation = useNavigation();

  function handleBackHome() {
    navigation.navigate('groups');
  }

  return (
    <Container>
      {showBackButton ? (
        <>
          <BackButton onPress={handleBackHome}>
            <BackIcon />
          </BackButton>
          <LogoImg source={logo} />
        </>
      ) : (
        <LogoImg source={logo} />
      )}
    </Container>
  );
}
