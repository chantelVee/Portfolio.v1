import { faCss3Alt, faHtml5, faReact, faSquareJs } from "@fortawesome/free-brands-svg-icons"
import type { IconTechItem } from "../types/career-history"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function CareerHistory() {

  const Tech_items: IconTechItem[] = [
      {id: "HTML", label: "HTML:", type: "icon", icon: faHtml5},
      {id: "CSS", label: "CSS", type: "icon", icon: faCss3Alt}, 
      {id: "JavaScript", label: "CSS", type: "icon", icon: faSquareJs},
      {id: "React", label: "React", type: "icon", icon: faReact}
     
  ]
  return (
    <>
      <h2 className="header">Career History</h2>
      <h1 className="sub-title">Relevant Experience</h1>
      <div className="company">
        <h4>March 2022 - Present</h4>
        <h4> <a href="https://lumen-research.com/" target="_blank" aria-label="Lumen Research">Lumen Research </a> </h4>
        
      </div>
      <p className="text-experience" style={{marginBottom: "0"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe cumque, sequi repellendus nulla, id ullam qui quaerat repellat modi debitis consequatur veniam assumenda quisquam excepturi cum sapiente cupiditate, pariatur enim. Odio, ullam alias exercitationem corporis vero debitis hic voluptatum cumque. Asperiores repudiandae porro doloribus numquam doloremque omnis hic quos at.</p>

      <ul className="tech">
        {Tech_items.map((item) => (
          <li key={item.id}>
            <FontAwesomeIcon icon={item.icon} />
            <span className="tooltip-text" role="tooltip">{item.label}</span>
          </li>
        ))}

      </ul>
      <h1 className="sub-title">Past Experience</h1>
      <p className="text-experience">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe cumque, sequi repellendus nulla, id ullam qui quaerat repellat modi debitis consequatur veniam assumenda quisquam excepturi cum sapiente cupiditate, pariatur enim. Odio, ullam alias exercitationem corporis vero debitis hic voluptatum cumque. Asperiores repudiandae porro doloribus numquam doloremque omnis hic quos at.</p>
    </>
  )
}
