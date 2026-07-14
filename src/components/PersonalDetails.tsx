import {motion} from "framer-motion"

export default function PersonalDetails({onOpenModal}: {onOpenModal: () => void}) {
 

  return (
    <>
      <motion.div 
        className="personal-details"
        initial={{opacity: 0, scale: 0.5}}
        animate={{opacity: 1, scale: 1}}
        transition={{
          duration: 5,
          delay: 1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <h2>Chantel Boiro</h2>
        <h1>SOFTWARE DEVELOPER</h1>
        <h3>Based in London, UK</h3>
      </motion.div>
      <motion.button 
        id="cv-download" 
        initial={{opacity: 0, scale: 0.5}}
        animate={{opacity: 1, scale: 1}}
        transition={{
          duration: 5,
          delay: 3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        onClick={onOpenModal}>
          Download CV
      </motion.button>
           
    </>
  )
}
