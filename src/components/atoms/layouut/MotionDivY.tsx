import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const MotionDivY = (props: any) => {
    const { children } = props;
    // const [scroll, setScroll] = useState(0);

    // useEffect(()=> {
    //     window.addEventListener('scroll', ()=>{
    //         setScroll(window.scrollY)
    //     })
    // },[])

    return(
        <motion.div
        variants={{
            offscreen: {
                y: 100,
                opacity: 0,
            },  
            
            onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
            },
            },
        }}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0}} 
        >
            {children}
        </motion.div>
    )
}