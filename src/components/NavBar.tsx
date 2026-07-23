import { faLaptopCode, faBookOpenReader, faCodeBranch, faAt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import image from '../assets/portfolio-Img.jpg'
import type { NavBarProps, NavItem } from "../types/navbar"
import {motion} from "framer-motion"

const nav_items: NavItem[] = [
    {id: "about", label: "about me", type: "image", src: image, url: "#about"},
    {id: "employment", label: "employment", type: "icon", icon: faLaptopCode, url: "#employment"},
    {id: "education", label: "education", type: "icon", icon: faBookOpenReader, url: "#education"},
    {id: "projects", label: "projects", type: "icon", icon: faCodeBranch, url: "#projects"},
    {id: "contact", label: "contact me", type: "icon", icon: faAt, url: "#contact"},
]

export default function NavBar({isScrolled}: NavBarProps) {
  return (
        <nav className="nav-bar-container" aria-label="Main Navigation">
            <ul className="nav-bar-contents">
                {nav_items.map((item) => (
                    <li key={item.id} className="nav-item">
                        <a href={item.url} className="nav-link" aria-label={item.label}>
                            {item.type === "image" ? (
                                isScrolled ? (
                                    <motion.img 
                                        layout
                                        layoutId="profile-picture" 
                                        src={item.src} 
                                        alt={item.label} 
                                        className="nav-avatar"
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 30,
                                            mass: 1
                                        }} />
                                ) : (
                                    <div style={{width: '32px', height: '32px'}}></div>
                                )
                            ) : (
                                <FontAwesomeIcon className="icon" icon={item.icon} />
                            )}
                            <span className="tooltip-text" role="tooltip">{item.label}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
  )
}
