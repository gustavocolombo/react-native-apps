import {
  ViewCircleColorContainer,
  ViewCircleColorHealthyOptions,
} from "./styles";

type ViewCircleColorProps = {
  healthy?: ViewCircleColorHealthyOptions;
};

export function ViewCircleColorComponent({
  healthy = "no",
}: ViewCircleColorProps) {
  return <ViewCircleColorContainer healthy={healthy} />;
}
