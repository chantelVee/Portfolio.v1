import image from '../assets/portfolio-Img.jpg'
import {motion} from 'framer-motion'
import type { AboutMeProps } from '../types/about-me'

export default function About_Me({isScrolled}: AboutMeProps) {
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
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    mass: 1
                }}
            />
        )}
        
    </div>
    
     <div >
       
        <h2 className='about-me-header'>About Me</h2>
        <p className='about-me-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, voluptates tempore earum eveniet, ratione fuga explicabo exercitationem omnis, qui mollitia cum eius. Facere quas velit eos esse magnam doloribus obcaecati quibusdam tenetur, laborum cumque, dolor recusandae asperiores maiores provident nihil ducimus, sit alias quae? Quae, velit! Illum libero rerum ullam consequatur dolores eos veniam, enim ratione labore iste quos deserunt inventore, in deleniti vitae? Quae laudantium itaque quaerat excepturi commodi, repellat optio molestiae . Laborum, consequuntur!</p>
    </div>
    </>
   
  )
}
