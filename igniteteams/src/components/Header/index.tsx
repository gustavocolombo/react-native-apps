import logo from '@assets/logo.png';

import { BackButton, BackIcon, Container, LogoImg } from './styles';

type HeaderProps = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: HeaderProps) {
  return (
    <Container>
      {showBackButton ? (
        <>
          <BackButton>
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
