
'use client'
import {motion} from "motion/react"


export default function YoutubeLogo(){
    return(
<motion.svg  xmlns="http://www.w3.org/2000/svg"  
    width="92"
    height="92"  
    viewBox="0 0 24 24"  
    fill="none"  
    stroke="currentColor"  
    strokeWidth="1"  
    strokeLinecap="round"  
    strokeLinejoin="round"  
    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-youtube">
    <motion.path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <motion.path 
    // initial={{pathLength:0}}
    // animate={{pathLength:1}}   
    // transition={{
    //     duration:2 ,
    //     ease :"easeInOut",
    //     repeat:Infinity,
    //     repeatType:"reverse" ,
    // }}
    className="stroke-none fill-red-600"
    d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
    <motion.path 
    d="M10 9l5 3l-5 3z" 
    className="fill-white stroke-none"
    />
    </motion.svg>
    )
}
