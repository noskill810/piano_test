import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const MotionDiv = (props: any) => {
    const { children, dipalayTiming } = props;
    const [scroll, setScroll] = useState(0);
    console.log(dipalayTiming)

    useEffect(()=> {
        window.addEventListener('scroll', ()=>{
            setScroll(window.scrollY)
        })
    },[])

    return(
        <motion.div
        animate={{
            y: scroll > dipalayTiming ? 0 : "",
            opacity: scroll > dipalayTiming ? 1 : 0,
        }}
        initial={{
            y: 100,
            opacity: 0
        }}
        transition={{
            duration: 1
        }}
        >
            {children}
        </motion.div>
    )
}