import { RiReactjsLine } from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { SiMongodb } from "react-icons/si"
// import { DiRedis } from "react-icons/di"
import { FaNodeJs } from "react-icons/fa"
import { BiLogoPostgresql } from "react-icons/bi"
import { FaDocker } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { SiPrisma } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

import { motion } from "framer-motion"

const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})

function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.5}}
        className="my-20 text-center text-4xl">
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate= "animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiJavascriptFill className="text-6xl text-yellow-300"/>
        </motion.div>
        <motion.div 
          variants={iconVariants(8.75)}
          initial="initial"
          animate= "animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-6xl text-cyan-400"/>
        </motion.div>
        <motion.div
          variants={iconVariants(5.85)}
          initial="initial"
          animate= "animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
            <BiLogoTypescript className="text-6xl text-blue-500"/>
        </motion.div>
        <motion.div
          variants={iconVariants(9.7)}
          initial="initial"
          animate= "animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandNextjs className="text-6xl "/>
        </motion.div>
        <motion.div 
          variants={iconVariants(7.3)}
          initial="initial"
          animate= "animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiTailwindcss className="text-6xl text-cyan-600"/>
        </motion.div>
        <motion.div 
          variants={iconVariants(6.7)}
          initial="initial"
          animate= "animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className="text-6xl text-green-500"/>
        </motion.div>
        {/* <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiRedis className="text-6xl text-red-700"/>
        </div> */}
        <motion.div 
          variants={iconVariants(8)}
          initial="initial"
          animate= "animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <BiLogoPostgresql className="text-6xl text-sky-700"/>
        </motion.div>
        <motion.div 
          variants={iconVariants(4.5)}
          initial="initial"
          animate= "animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiPrisma className="text-6xl text-cyan-900"/>
        </motion.div>
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate= "animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className="text-6xl text-green-500"/>
        </motion.div>
        <motion.div 
          variants={iconVariants(3)}
          initial="initial"
          animate= "animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaDocker className="text-6xl text-blue-900"/>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
