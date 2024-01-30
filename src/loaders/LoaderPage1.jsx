import React from 'react'
import LoaderGif from "../../assets/homePage/d o t _ _ II.gif"
import {motion} from "framer-motion"

const LoaderPage1 = () => {
  return (
    <motion.div  className='h-screen w-screen fixed bg-white top-0 right-0 left-0 bottom-0 z-50 flex justify-center items-center'>
        <motion.img src={LoaderGif} alt="" exit={{scale:8}} transition={{duration:0.5,ease: "linear",type: "tween" }}  />
    </motion.div>
  )
}

export default LoaderPage1