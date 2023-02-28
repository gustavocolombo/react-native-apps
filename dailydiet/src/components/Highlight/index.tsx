import { Container, HightlightType, SubTitle, Title } from "./styles";

type HighlightProps = {
  title: string;
  subtitle: string;
  type: HightlightType;
};

export function Highlight({
  title,
  subtitle,
  type = "positive",
}: HighlightProps) {
  return (
    <Container>
      <Title type={type}>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Container>
  );
}
