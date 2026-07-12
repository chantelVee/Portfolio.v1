import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";

export type BaseTechItem = {
  id: string;
  label: string;
};

export type IconTechItem = BaseTechItem & {
  type: "icon";
  icon: IconDefinition;
};