import { faLaptopCode, faBookOpenReader, faCodeBranch, faAt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import image from '../assets/portfolio-Img.jpg'

export default function NavBar() {
  return (
    <>
        <div className="nav-bar-container">
            <div className="nav-bar-contents">
                <div className="about-me">
                <img src={image} alt="" />
                </div>
                <div className="career-history">
                    <FontAwesomeIcon icon={faLaptopCode}/>
                </div>
                <div className="education">
                    <FontAwesomeIcon icon={faBookOpenReader} />
                </div>
                <div className="projects">
                    <FontAwesomeIcon icon={faCodeBranch} />
                </div>
                <div className="contact-me">
                    <FontAwesomeIcon icon={faAt} />
                </div>
            </div>
        </div>
    </>
  )
}
