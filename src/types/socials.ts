import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";

export type BaseSocialItem = {
  id: string;
  label: string;
  url: string;
};

export type IconSocialItem = BaseSocialItem & {
  type: "icon";
  icon: IconDefinition;
};
