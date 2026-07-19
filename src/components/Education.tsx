import { motion } from "framer-motion"

export default function Education() {
  return (
    <>
    <motion.div className='education'
      initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.75}}
        variants={{
            hidden: {
                opacity: 0,
                y: 90
            },
            visible: {
                opacity: 1,
                y: 10,
                transition: {
                    duration: 5,
                    ease: "easeIn"
                }
            }
        }}
    >
        <h2 className="header">Education</h2>
        <div className="company">
            <h4>Dec 2021 - Jan 2022</h4>
            <h4> <a href="https://www.inhouserecruitment.co.uk/partner/justit/" target="_blank" aria-label="Lumen Research">Just IT </a> </h4>
        </div>
         <p className='text-experience'>My technical journey began with an intensive 12-week Software Development Bootcamp at Just IT Training Ltd in London. During this time, I built a strong foundation in full-stack development, creating projects with HTML, CSS, JavaScript, MySQL, and Python. Since then, I have transitioned into a dedicated software development career, continuously upskilling and adapting to new technologies to build robust web applications.
         </p>
    </motion.div>
    </>
    
  )
}
