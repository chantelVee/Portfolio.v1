import { faCss3Alt, faHtml5, faReact, faSquareJs } from "@fortawesome/free-brands-svg-icons"
import type { IconTechItem } from "../types/career-history"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"

export default function CareerHistory() {

  const Tech_items: IconTechItem[] = [
      {id: "HTML", label: "HTML:", type: "icon", icon: faHtml5},
      {id: "CSS", label: "CSS", type: "icon", icon: faCss3Alt}, 
      {id: "JavaScript", label: "CSS", type: "icon", icon: faSquareJs},
      {id: "React", label: "React", type: "icon", icon: faReact}
     
  ]
  return (
    <motion.div
      initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.25}}
        variants={{
            hidden: {
                opacity: 0,
                y: 100
            },
            visible: {
                opacity: 1,
                y: 40,
                transition: {
                    duration: 5,
                    ease: "easeIn"
                }
            }
        }}
    >
      <h2 className="header">Career History</h2>
      <h1 className="sub-title">Relevant Experience</h1>
      <div className="company">
        <h4>2022 - Present</h4>
        <h4> <a href="https://lumen-research.com/" target="_blank" aria-label="Lumen Research">Lumen Research </a> </h4>
        
      </div>
      <p className="text-experience" style={{marginBottom: "0"}}>In my current role I focus on building dynamic frontend features and optimising platform architecture to support specialised data collection. I collaborate closely with operation teams to engineer custom cache pages and integrate ad tags utilised in eye tracking research. My day to day involes managing feature rollouts, translating complex datasets into accessible UI tables, developing dynaiic frontend logic for user localisation, and intergrating systems via RESTful APIs to ensure reliable, scalable data flows</p>

      <ul className="tech">
        {Tech_items.map((item) => (
          <li key={item.id}>
            <FontAwesomeIcon icon={item.icon} />
            <span className="tooltip-text" role="tooltip">{item.label}</span>
          </li>
        ))}

      </ul>
     
    </motion.div>
  )
}
