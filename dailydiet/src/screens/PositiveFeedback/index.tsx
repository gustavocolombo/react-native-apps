import happy_person from "@assets/happy_person.png";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";

import { Container, Image } from "./styles";

export function PositiveFeedback() {
  return (
    <Container>
      <Highlight
        title="Continue assim!"
        subtitle="Você continua dentro da dieta. Muito bem!"
        type="positive"
      />
      <Image source={happy_person} />
      <Button textButton="Ir para a página inicial" style={{ width: "50%" }} />
    </Container>
  );
}
