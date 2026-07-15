import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion"; 
import TechIcons from "./techIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeFork } from "@fortawesome/free-solid-svg-icons";
import type { Project } from "../types/projects";

const PROJECTS_DATA: Project[] = [
    {
        id: "boutique-dashboard",
        title: "Boutique Dashboard App",
        githubUrl: "https://github.com/chantelVee/Boutique-Dashboard-App/tree/development",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ullam tempore ipsum deserunt, eius iusto totam quae aspernatur repellat sed facilis dolorum, saepe dolor provident aperiam consequatur porro nobis incidunt recusandae culpa. Fugit eum quae officiis hic, nisi laudantium quidem veritatis libero porro voluptas accusantium ducimus similique tempore, quos itaque obcaecati? Similique .",
        images: [
            "src/assets/placeholder.jpg",
            "src/assets/placeholder.jpg",
            "src/assets/placeholder.jpg",
            "src/assets/placeholder.jpg",
        ],
    },
    {
        id: "portfolio",
        title: "Portfolio V1",
        githubUrl: "https://github.com/chantelVee/Portfolio.v1/tree/development",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ullam tempore ipsum deserunt, eius iusto totam quae aspernatur repellat sed facilis dolorum, saepe dolor provident aperiam consequatur porro nobis incidunt recusandae culpa. Fugit eum quae officiis hic, nisi laudantium quidem veritatis libero porro voluptas accusantium ducimus similique tempore, quos itaque obcaecati? Similique .",
        images: [
            "src/assets/placeholder.jpg",
            "src/assets/placeholder.jpg",
            "src/assets/placeholder.jpg",
            "src/assets/placeholder.jpg",
        ],
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
                y: 30,
                transition: {
                    duration: 7,
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
                <p className='text'>{project.description}</p>
            </div>
        ))}
    </motion.div>
    <TechIcons />

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
