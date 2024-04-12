import { PROJECTS } from "../constants"
import { motion } from "framer-motion"

function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 0.5}}
        className="my-20 text-center text-4xl">Projects</motion.h2>
      <div>
        {PROJECTS.map((project, index) => {
            return(
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div  
                      whileInView={{opacity: 1, x: 0}}
                      initial={{opacity: 0, x: -100}}
                      transition={{duration: 1}}
                      className="w-full lg:w-1/4">
                        <img width={150} height={150} className="mb-6 rounded" src={project.image} alt={project.title} />
                    </motion.div>
                    <motion.div 
                      whileInView={{opacity: 1, x: 0}}
                      initial={{opacity: 0, x: 100}}
                      transition={{duration: 1}}
                      className="w-full max-w-xl lg:w-3/4">
                        <div className="flex items-center justify-between ">
                          <h5 className="mb-2 items-center font-semibold">{project.title}</h5>
                          <div className="flex justify-center items-center gap-3 ">
                            <a className="text-blue-500 hover:text-blue-700" href={project.code} >Code</a>
                            <h5 className="text-gray-500">|</h5>
                            <a className="text-blue-500 hover:text-blue-700 " href={project.link}>Live</a>
                          </div>
                        </div>
                        <p className="mb-4 text-neutral-400">{project.description}</p>
                        {project.technologies.map((tech, index) => {
                            return (<span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                                {tech}
                            </span>)
                        })}
                    </motion.div>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default Projects
