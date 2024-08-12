import { SiHtml5, SiCss3, SiJavascript, SiCplusplus, SiPython, SiMysql, SiMongodb, SiUnity } from "react-icons/si";
import { RiReactjsLine, RiNodejsLine, RiTerminalBoxLine } from "react-icons/ri";
import { DiJava } from "react-icons/di";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y:[10,-10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 
        whileInView={{opacity:1,y:0}}
        initial = {{opacity :0, y: -100}}
        transition={{duration: 1.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h2> 
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial = {{opacity :0, x: -100}}
        transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-3">
                <SiHtml5 className="text-7xl text-orange-600"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-3">
                <SiCss3 className="text-7xl text-blue-600"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"  className="rounded-2xl border-4 border-neutral-800 p-3">
                <SiJavascript className="text-7xl text-yellow-500"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-3">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-3">
                <RiNodejsLine className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-3">
                <DiJava className="text-7xl text-red-600"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-3">
                <SiCplusplus className="text-7xl text-blue-600"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-3">
                <SiPython className="text-7xl text-blue-400"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-3">
                <SiMysql className="text-7xl text-blue-700"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-3">
                <SiMongodb className="text-7xl text-green-600"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"  
            className="rounded-2xl border-4 border-neutral-800 p-3">
                <SiUnity className="text-7xl text-white"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"  className="rounded-2xl border-4 border-neutral-800 p-3">
                <RiTerminalBoxLine className="text-7xl text-gray-700"/>
            </motion.div>
        </motion.div>     
    </div>
  )
}

export default Technologies;
