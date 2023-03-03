import { View } from "react-native";
import styled, { css } from "styled-components/native";

export type ViewCircleColorHealthyOptions = "yes" | "no";

type ViewColorProps = {
  healthy?: ViewCircleColorHealthyOptions;
};

export const ViewCircleColorContainer = styled(View)<ViewColorProps>`
  height: 7px;
  width: 7px;
  border-radius: 50px;
  margin-right: 8px;
  ${({ theme, healthy }) =>
    healthy === "yes"
      ? css`
          background-color: ${theme.COLOR.green_300};
        `
      : css`
          background-color: ${theme.COLOR.red_300};
        `}
`;
