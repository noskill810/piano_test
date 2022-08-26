
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const TopBUtton = (props: any) => {


    const dipalayTiming = props.dipalayTiming;
    console.log(dipalayTiming)

    const [scroll, setScroll] = useState(0);

    useEffect(()=> {
        window.addEventListener('scroll', ()=>{
            setScroll(window.scrollY)
        })
    },[])

    return (
        <>
        <motion.div 
        id="applay-button-bg"
        animate={{
            y:scroll > dipalayTiming ? 0 : 100,
            opacity:scroll > dipalayTiming ? 1 : 0,
        }}
        initial={{
            y: 100,
            opacity: 0
        }}
        transition={{
            type: "tween",
            duration: 1
        }}
        >
            <SLink id="applay-button" to="/contact">Applay from here</SLink>
        </motion.div>
        </>
    )
}

const SLink = styled(Link)`
position: absolute;
top: 50%;
left: 50%;
transform: translateY(-50%) translateX(-50%);
margin: 0;
padding: 10px 0;
width: 350px;
line-height: 80px;
text-align: center;
background-color: black;
display: inline-block;
font-size: 1.2rem;
color: #fff;
border: 1.5px solid #fff;
box-shadow: 0 0 13px 1px #ffd700;
`