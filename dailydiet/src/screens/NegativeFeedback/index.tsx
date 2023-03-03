import sad_person from "@assets/sad_person.png";
import { ButtonMI } from "@components/ButtonMI";
import { Highlight } from "@components/Highlight";

import { Container, Image } from "./styles";

export function NegativeFeedback() {
  return (
    <Container>
      <Highlight
        title="Que pena!"
        subtitle="Você saiu da dieta dessa vez, mas continue se esforçando e não desista!"
        type="negative"
      />
      <Image source={sad_person} />
      <ButtonMI
        textButton="Ir para a página inicial"
        style={{ width: "50%" }}
      />
    </Container>
  );
}
