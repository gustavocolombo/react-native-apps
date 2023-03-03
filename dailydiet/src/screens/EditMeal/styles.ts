import { TouchableOpacity } from "react-native";
import MaskInput from "react-native-mask-input";
import styled, { css } from "styled-components/native";

export type ViewCircleColorHealthyOptions = "yes" | "no";
export type ButtonPressedOptions = true | false;

type ButtonPressedProps = {
  pressed: ButtonPressedOptions;
};

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLOR.gray_300};
`;

export const ContainerGray = styled.View`
  background-color: ${({ theme }) => theme.COLOR.gray_300};
  padding: 24px;
`;

export const ContainerWhite = styled.View`
  background-color: ${({ theme }) => theme.COLOR.white};
  padding: 24px;
  flex: 1;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-color: transparent;
`;

export const ContainerForm = styled.Text`
  border: 20px;
`;

export const InputFieldNameView = styled.View`
  margin-bottom: 20px;
  align-self: center;
  width: 100%;
`;

export const DescriptionTextArea = styled.TextInput`
  max-height: 120px;
  min-height: 120px;
  border: 1px solid ${({ theme }) => theme.COLOR.gray_300};
  height: 50px;
  border-radius: 6px;
  padding: 15px;
  margin: 10px;
  align-self: center;
  width: 100%;
  max-width: 100%;
`;

export const TextForm = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLOR.gray_700};
    line-height: 18.2px;
  `}
`;

export const InputForm = styled.TextInput`
  border: 1px solid ${({ theme }) => theme.COLOR.gray_300};
  height: 50px;
  border-radius: 6px;
  padding: 15px;
  margin: 10px;
  align-self: center;
  width: 100%;
`;

export const InputDate = styled(MaskInput)`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.COLOR.gray_300};
  height: 50px;
  border-radius: 6px;
  padding: 15px;
  align-self: center;
`;

export const InputTime = styled(MaskInput)`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.COLOR.gray_300};
  height: 50px;
  border-radius: 6px;
  padding: 15px;
  align-self: center;
`;

export const ContainerDateTime = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 10px;
  align-self: center;
`;

export const ContentDateTime = styled.View`
  width: 45%;
`;

export const ContainerInsideDiet = styled.View`
  align-self: center;
  width: 100%;
  margin: 20px;
  align-self: center;
  flex: 1;
`;

export const ButtonDietOptionYes = styled(TouchableOpacity)<ButtonPressedProps>`
  background-color: ${({ theme, pressed }) =>
    pressed ? theme.COLOR.green_100 : theme.COLOR.gray_200};
  width: 45%;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 6px;
  height: 50px;
  flex-direction: row;
  border: ${({ theme, pressed }) => (pressed ? theme.COLOR.green_300 : "none")};
`;

export const ButtonDietOptionNo = styled(TouchableOpacity)<ButtonPressedProps>`
  background-color: ${({ theme, pressed }) =>
    pressed ? theme.COLOR.red_100 : theme.COLOR.gray_200};
  width: 45%;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 6px;
  height: 50px;
  flex-direction: row;
  border: ${({ theme, pressed }) => (pressed ? theme.COLOR.red_300 : "none")};
`;

export const ContainerButtonsDiet = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const TextHeaderButton = styled.Text`
  margin-top: 10px;
  margin-bottom: 10px;
  align-self: flex-start;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLOR.gray_700};
    line-height: 18.2px;
  `}
`;
