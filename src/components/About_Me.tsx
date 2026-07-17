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
                    duration: 3,
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
                y: 30
            },
            visible: {
                opacity: 1,
                y: 10,
                transition: {
                    duration: 3,
                    ease: "easeOut"
                }
            }
        }}>
        <h2 className='header'
            
        >About Me</h2>
        <p className='text-experience'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, voluptates tempore earum eveniet, ratione fuga explicabo exercitationem omnis, qui mollitia cum eius. Facere quas velit eos esse magnam doloribus obcaecati quibusdam tenetur, laborum cumque, dolor recusandae asperiores maiores provident nihil ducimus, sit alias quae? Quae, velit! Illum libero rerum ullam consequatur dolores eos veniam, enim ratione labore iste quos deserunt inventore, in deleniti vitae? Quae laudantium itaque quaerat excepturi commodi, repellat optio molestiae . Laborum, consequuntur!</p>
    </motion.div>
    </>
   
  )
}
