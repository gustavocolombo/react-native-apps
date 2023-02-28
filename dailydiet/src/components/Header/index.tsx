import logo from "@assets/logo.png";
import profile from "@assets/profile.png";
import { Image } from "react-native";

import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <Image source={logo} />
      <Image source={profile} />
    </Container>
  );
}
