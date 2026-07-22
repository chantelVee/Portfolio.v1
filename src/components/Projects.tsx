import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faCodeFork, faFilm } from "@fortawesome/free-solid-svg-icons";
import { faCss3Alt, faFigma, faMdb, faNode, faReact, faTypescript } from "@fortawesome/free-brands-svg-icons"
import type { Project } from "../types/projects";

const PROJECTS_DATA: Project[] = [
    {
        id: "boutique-dashboard",
        title: "Boutique Dashboard Web Application",
        githubUrl: "https://github.com/chantelVee/Boutique-Dashboard-App/tree/development",
        description: "A full-stack dashboard engineered to handle complex workflows and data management. Built utilizing React for a seamless, interactive frontend experience and Mongoose for robust data modeling. This project demonstrates my ability to design multi-step processes, manage version control effectively with Git, and deliver scalable solutions tailored to user needs.",
        images: [
            "src/assets/Project-images/Dashboard/Screenshot 2026-07-20 180009.png",
            "src/assets/Project-images/Dashboard/Screenshot 2026-07-20 180031.png",
            "src/assets/Project-images/Dashboard/Screenshot 2026-07-20 180104.png",
        ],
        icons: [
             
            {id: "react", label: "React", type: "icon", icon: faReact},
            {id: "typescript", label: "Typescript", type: "icon", icon: faTypescript},
            {id: "css", label: "CSS", type: "icon", icon: faCss3Alt},
            {id: "node", label: "Node", type: "icon", icon: faNode},
            {id: "mongodb", label: "MongoDb", type: "icon", icon: faMdb},
            {id: "figma", label: "Figma", type: "icon", icon: faFigma},
        ]
    },
    {
        id: "portfolio",
        title: "Portfolio V1",
        githubUrl: "https://github.com/chantelVee/Portfolio.v1/tree/development",
        description: "A bespoke frontend web application designed to showcase my engineering background and technical projects. This build prioritises a highly interactive and intuitive user experience, featuring responsive layouts and custom UI logic, including scroll-activated video motion components. It acts as a live technical showcase of my core competencies in modern web development",
        images: [
            // "src/assets/placeholder.jpg",
            // "src/assets/placeholder.jpg",
            // "src/assets/placeholder.jpg",
            // "src/assets/placeholder.jpg",
        ],
        icons: [
            {id: "react", label: "React", type: "icon", icon: faReact},
            {id: "typescript", label: "Typescript", type: "icon", icon: faTypescript},
            {id: "css", label: "CSS", type: "icon", icon: faCss3Alt},
            {id: "recharts", label: "Recharts", type: "icon", icon: faChartBar},
            {id: "framer", label: "Framer Motion", type: "icon", icon: faFilm},
        ]
    },
    {
        id: "comingsoon",
        title: "Project Coming Soon",
        githubUrl: "https://",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ullam tempore ipsum deserunt, eius iusto totam quae aspernatur repellat sed facilis dolorum, saepe dolor provident aperiam consequatur porro nobis incidunt recusandae culpa. Fugit eum quae officiis hic, nisi laudantium quidem veritatis libero porro voluptas accusantium ducimus similique tempore, quos itaque obcaecati? Similique .",
        images: [
            "src/assets/placeholder.jpg",
            "src/assets/placeholder.jpg",
            "src/assets/placeholder.jpg",
            "src/assets/placeholder.jpg",
        ],
        icons: []
    },
    
];

export default function Projects() {
    const [activeImage, setActiveImage] = useState<{
        projectIndex: number;
        imageIndex: number;
    } | null>(null);

  return (
    <>
    <motion.div className='projects'
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
                y: 110,
                transition: {
                    duration: 5,
                    ease: "easeIn"
                }
            }
        }}
    >
        <h2 className="header">Projects</h2>
        {PROJECTS_DATA.map((project, projectIndex) => (
            <div key={project.id} className="project-details">
                <div className="title-wrap">
                    <h1>{project.title}</h1>
                    <button 
                        className="github-repo"
                        onClick={() => window.open(project.githubUrl)}
                        aria-label={`${project.title} Github Repo`}
                    >
                        <FontAwesomeIcon icon={faCodeFork} />
                    </button>
                </div>
                {project.images.length > 0 && (
                    <div className="project-images">
                        {project.images.map((src, imageIndex) => (
                            <motion.img
                                key={imageIndex}
                                layoutId={`project-${projectIndex}-image-${imageIndex}`}
                                className="project-img"
                                src={src}
                                alt={`${project.title} screenshot ${imageIndex + 1}`}
                                onClick={() => setActiveImage({projectIndex, imageIndex})}
                            />
                        ))}
                    </div>
                )}
                
                <p className='text'>{project.description}</p>
                <div className="tech project-tech">
                    {project.icons.map((tech) => (
                        <li key={tech.id} className="icon-wrapper" title={tech.label}>
                            <FontAwesomeIcon icon={tech.icon} />
                            <span className="tooltip-text" role="tooltip">{tech.label}</span>
                        </li>
                    ))}

                </div>
                
                
            </div>
            
        ))}
    </motion.div>
    

    <AnimatePresence>
        {activeImage !== null && (
            <motion.div
                className="Lightbox-overlay"
                initial={{opacity:0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                onClick={() => setActiveImage(null)}
            >
            <motion.img 
                layoutId={`project-${activeImage.projectIndex}-image-${activeImage.imageIndex}`}
                src={PROJECTS_DATA[activeImage.projectIndex].images[activeImage.imageIndex]}
                className="lightbox-img"
                alt="Enlarged view"
            />

            </motion.div>
        )}
    </AnimatePresence>
    </>
  );
}
