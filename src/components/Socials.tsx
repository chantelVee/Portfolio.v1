import { FontAwesomeIcon,} from "@fortawesome/react-fontawesome"
import { faGithub, faSquareLinkedin } from '@fortawesome/free-brands-svg-icons';
import type {IconSocialItem} from "../types/socials";

const social_items: IconSocialItem[] = [
    {id: "github", label: "Github", type: "icon", icon: faGithub, url: "https://github.com/chantelVee"},
    {id: "linkedIn", label: "LinkedIn", type: "icon", icon: faSquareLinkedin, url: "https://www.linkedin.com/in/chantel-boiro/"},
   
]

export default function Socials() {
  
  return (
    <>
      <ul id='socials'>
        {social_items.map((item) => (
          <li key={item.id}>
            <a href={item.url} target="_blank" aria-label={item.label} >
              <FontAwesomeIcon icon={item.icon} />
              <span className="tooltip-text" role="tooltip">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}