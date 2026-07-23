import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import type { ReactNode } from "react";

export type BtnProp = {
children: ReactNode;
  cssClass?: string;       
  onClick?: () => void;    
  href?: string;           
  target?: string;         
  ariaLabel?: string;
}

export type Project = {
    id: string;
    title: string;
    githubUrl: string;
    description: string;
    images: string[];
    icons: {
      id: string;
      label: string;
      type: "icon";
      icon: IconDefinition;
    }[];
};


