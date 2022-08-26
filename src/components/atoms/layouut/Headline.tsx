import { type } from "@testing-library/user-event/dist/type";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {
headword: string
}

export const Headline = (props:Props) => {

    const [scroll, setScroll] = useState(0);

    useEffect(()=> {
        window.addEventListener('scroll', ()=>{
            setScroll(window.scrollY)
        })
    },[])

    return(
     <>
        <motion.div
        animate = {{
            // x: scroll > 50 ? 0 : 100,
            opacity: scroll > 50 ? 1 : 0
        }}
        initial={{
            // x: 100,
            opacity: 0
        }}
        transition={{
            duration: 1
        }}
        >
            <Sh1>{props.headword}</Sh1>
        </motion.div>
     </>
    )
};

const Sh1 = styled.h1`
    font-size:150px;
    color: #fff;
    opacity: 0.3;
    font-weight: 300;
`