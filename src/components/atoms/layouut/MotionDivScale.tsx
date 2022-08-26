import { motion } from "framer-motion"
import { Children } from "react"

export const MotionDivScale = (props: any) => {
    const { children } = props;

    return(
        <motion.p
        whileHover={{

            scale: 1.1,
            textShadow: "0px 0px 4px gray"
        }}
        >
          {children}
        </motion.p>
    )
}
