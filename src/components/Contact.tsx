import { motion } from "framer-motion"

export default function Contact() {
  return (
    <motion.div
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
     className='contact'>
    <h2>Contact Me</h2>
    <div className="contact-wrapper">
      <h1 className="thankyou">Thank you for taking the time to visit my work</h1>
      <p>Keep visiting back to see my future projects. I have a lot of ideas in this head of mine!</p>
      <h3>I am open to discussing opportunities to further my skills and career, and would love to chat</h3>
      <p>Feel free to download a copy of my CV, add me on <a href="https://www.linkedin.com/in/chantel-boiro/" target="_blank" rel="noopener noreferrer" aria-label="Go to LinkedIn">LinkedIn</a>, or follow me on <a href="https://github.com/chantelVee" target="_blank" rel="noopener noreferrer" aria-label="Go to Github">Github</a></p>
    </div>
    </motion.div>
    
  )
}
