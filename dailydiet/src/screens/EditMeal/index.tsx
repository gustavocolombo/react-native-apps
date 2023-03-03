import { ButtonMI } from "@components/ButtonMI";
import { HeaderBackButton } from "@components/HeaderBackButton";
import { ViewCircleColorComponent } from "@components/ViewCircleColor";
import { useState } from "react";
import { Masks } from "react-native-mask-input";

import {
  ButtonDietOptionNo,
  ButtonDietOptionYes,
  Container,
  ContainerButtonsDiet,
  ContainerDateTime,
  ContainerGray,
  ContainerInsideDiet,
  ContentDateTime,
  DescriptionTextArea,
  InputDate,
  InputFieldNameView,
  InputForm,
  InputTime,
  TextForm,
  TextHeaderButton,
} from "./styles";
import { ContainerWhite } from "../NewMeal/styles";

export function EditMeal() {
  const [buttonOptionYesIsPressed, setButtonOptionYesIsPressed] =
    useState(false);
  const [buttonOptionNoIsPressed, setButtonOptionNoIsPressed] = useState(false);
  const [date, setDate] = useState("");

  return (
    <Container>
      <ContainerGray>
        <HeaderBackButton showHeaderText="Editar refeição" />
      </ContainerGray>

      <ContainerWhite>
        <InputFieldNameView>
          <TextForm>Nome</TextForm>
          <InputForm />
        </InputFieldNameView>
        <InputFieldNameView>
          <TextForm>Descrição</TextForm>
          <DescriptionTextArea multiline style={{ textAlignVertical: "top" }} />
        </InputFieldNameView>

        <ContainerDateTime>
          <ContentDateTime>
            <TextForm>Data</TextForm>
            <InputDate
              mask={Masks.DATE_DDMMYYYY}
              value={date}
              onChangeText={(masked, unmasked) => {
                setDate(masked);
              }}
            />
          </ContentDateTime>
          <ContentDateTime>
            <TextForm>Hora</TextForm>
            <InputTime />
          </ContentDateTime>
        </ContainerDateTime>

        <ContainerInsideDiet>
          <TextHeaderButton>Está dentro da dieta?</TextHeaderButton>
          <ContainerButtonsDiet>
            <ButtonDietOptionYes
              pressed={buttonOptionYesIsPressed}
              disabled={buttonOptionNoIsPressed}
              onPress={
                !buttonOptionYesIsPressed
                  ? () => setButtonOptionYesIsPressed(true)
                  : () => setButtonOptionYesIsPressed(false)
              }
            >
              <ViewCircleColorComponent healthy="yes" />
              <TextForm style={{ marginLeft: 5 }}>Sim</TextForm>
            </ButtonDietOptionYes>

            <ButtonDietOptionNo
              pressed={buttonOptionNoIsPressed}
              disabled={buttonOptionYesIsPressed}
              onPress={
                !buttonOptionNoIsPressed
                  ? () => setButtonOptionNoIsPressed(true)
                  : () => setButtonOptionNoIsPressed(false)
              }
            >
              <ViewCircleColorComponent healthy="no" />
              <TextForm style={{ marginLeft: 5 }}>Não</TextForm>
            </ButtonDietOptionNo>
          </ContainerButtonsDiet>
        </ContainerInsideDiet>

        <ButtonMI textButton="Salvar alterações" style={{ marginBottom: 20 }} />
      </ContainerWhite>
    </Container>
  );
}
