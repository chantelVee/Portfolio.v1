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
         <p className='text-experience'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ullam tempore ipsum deserunt, eius iusto totam quae aspernatur repellat sed facilis dolorum, saepe dolor provident aperiam consequatur porro nobis incidunt recusandae culpa. Fugit eum quae officiis hic, nisi laudantium quidem veritatis libero porro voluptas accusantium ducimus similique tempore, quos itaque obcaecati? Similique eligendi praesentium eaque! Inventore, tempore, non, maiores pariatur.
         </p>
    </motion.div>
    </>
    
  )
}
