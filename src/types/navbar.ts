import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";

export type BaseNavItem = {
    id: string;
    label: string;
    url: string;
};

export type ImageNavItem = BaseNavItem & {
    type: "image";
    src: string;
};

export type IconNavItem = BaseNavItem & {
    type: "icon";
    icon: IconDefinition;
};

export type NavItem = ImageNavItem | IconNavItem;