import { useState } from 'react';
import image from '../assets/portfolio-Img.jpg'
import {motion} from 'framer-motion'
import type { AboutMeProps } from '../types/about-me'

export default function About_Me({isScrolled}: AboutMeProps) {
    const [isFirstLoad, setIsFirstLoad] = useState(true);
  return (
    <>
    <div className="profile-img" style={{height: '350px', display: 'flex'}}>
        {!isScrolled && (
            <motion.img 
                layout
                layoutId="profile-picture"
                id="main-Img" 
                src={image} 
                alt="My profile"
                initial={isFirstLoad ? {opacity: 0, scale: 0.5} : false}
                animate={{opacity: 1, scale: 1}}
                onAnimationComplete={() => setIsFirstLoad(false)}
                transition={isFirstLoad ? {
                    duration: 2,
                    delay: 3,
                    ease: [0, 0.71, 0.2, 1.01],

                    layout: {
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                        mass: 1
                    }
                } : {
                    layout: {
                        type: "spring",
                        stiffness: 250,
                        damping: 30,
                        mass: 1
                    }
                }}
            />
        )}
        
    </div>
    
     <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.75}}
        variants={{
            hidden: {
                opacity: 0,
                y: 50,
            },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 3,
                    ease: "easeOut"
                }
            }
        }}>
        <h2 className='header'
            
        >About Me</h2>
        <p className='text-experience'>Hi, thanks for stopping by! I'm Chantel, a Frontend Leaning Software Developer. I am some what of a latecomer to the tech world, starting my dev career 4 years ago learning HTML in my bedroom. I have since completed a bootcamp, and passed a Level 4 Software Development Apprenticeship, as well as working for an exciting Attention Measurement company
            <br/>
            <br/>
        Today I build intuitive, responsive, and data-driven web applications. My core expertise lies in React, HTML5, and CSS3, coupled with a strong focus on modern development practices and scalable architecture. I am deeply passionate about continuous learning and am actively expanding my full-stack capabilities by integrating TypeScript, Node.js, and Express.js into my workflow. I thrive in collaborative environments where I can partner with cross-functional teams to solve complex problems and deliver high-quality user experiences.
             </p>
    </motion.div>
    </>
   
  )
}
