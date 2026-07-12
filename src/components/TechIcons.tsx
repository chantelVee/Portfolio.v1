import { faCss3Alt, faFigma, faMdb, faNode, faReact, faTypescript, } from "@fortawesome/free-brands-svg-icons"
import type { IconTechItem } from "../types/career-history"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function TechIcons() {
    const Tech_items: IconTechItem[] = [
        {id: "css", label: "CSS", type: "icon", icon: faCss3Alt}, 
        {id: "react", label: "React", type: "icon", icon: faReact},
        {id: "typescript", label: "Typescript", type: "icon", icon: faTypescript},
        {id: "node", label: "Node", type: "icon", icon: faNode},
        {id: "mongodb", label: "MongoDb", type: "icon", icon: faMdb},
        {id: "figma", label: "Figma", type: "icon", icon: faFigma},
      ]

  return (
    <>
        <ul className="tech">
        {Tech_items.map((item) => (
          <li key={item.id}>
            <FontAwesomeIcon icon={item.icon} />
            <span className="tooltip-text" role="tooltip">{item.label}</span>
          </li>
        ))}

      </ul>
    </>
  )
}
