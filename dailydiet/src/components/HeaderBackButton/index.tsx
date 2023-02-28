import { ArrowLeftStyle, BackButton, Container, TextHeader } from "./styles";

type HeaderBackButtonProps = {
  showHeaderText?: string;
};

export function HeaderBackButton({ showHeaderText }: HeaderBackButtonProps) {
  return (
    <Container>
      <BackButton>
        <ArrowLeftStyle />
      </BackButton>
      {showHeaderText && <TextHeader>{showHeaderText}</TextHeader>}
    </Container>
  );
}
