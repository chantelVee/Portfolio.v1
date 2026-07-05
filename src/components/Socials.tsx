import { FontAwesomeIcon,} from "@fortawesome/react-fontawesome"
import { faGithub, faSquareLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Socials() {
  
  return (
    <>
    <div id='socials'>
      <FontAwesomeIcon icon={faGithub} style={{paddingRight: '0.5rem'}} />
      <FontAwesomeIcon icon={faSquareLinkedin} />
    </div>
    </>
    
  )
}
