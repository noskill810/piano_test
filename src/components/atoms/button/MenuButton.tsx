import { motion } from "framer-motion";
import { relative } from "path";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"
import media from "styled-media-query"
import menu from "../../../img/menu-6681018_960_720.png";
import { MotionDivScale } from "../layouut/MotionDivScale";

export const MenuButton = () => {

    // const [openMenu, setOpenMenu] = useState(false);
    const clickOpenMenu = () => {
        const modalEl = document.getElementById("modal");
        modalEl?.style.setProperty("display","flex")
    }

    const clickCloseMenu = () => {
        const modalEl = document.getElementById("modal");
        modalEl?.style.setProperty("display","none")
    }

    return(
        <>
        <Sdiv onClick={clickOpenMenu}>
            <motion.div
                whileHover={{
                    scale:1.2
                }}
            >
                <img src={menu} alt="menu"/>
            </motion.div>
            
        </Sdiv> 
        <Mudlediv id="modal">
                <div style={{textAlign: "right"}}>
                    <BatsuButton onClick={clickCloseMenu}>
                    <motion.p
                        whileHover={{
                        scale:1.3
                    }}
                    >X</motion.p>
                </BatsuButton>
                </div>
                
                <SLink to="/"><MotionDivScale>Home</MotionDivScale></SLink>
                <SLink to="/concept"><MotionDivScale>Concept</MotionDivScale></SLink> 
                <SLink to="/instructor"><MotionDivScale>Instructor</MotionDivScale></SLink> 
                <SLink to="/contact"><MotionDivScale>Contact</MotionDivScale></SLink> 
                <SLink to="/course"><MotionDivScale>Course</MotionDivScale></SLink> 
        </Mudlediv>
        </>
    )
}

const Sdiv = styled.div`
cursor: pointer;
position: fixed;
right: 30px;
margin-top:10px;
width: 70px;
height: 30px;
display: block;
z-index: 10;
  ${media.greaterThan("medium")`
    display: none;
`}
`

const Mudlediv = styled.div`
position: fixed;
top: 0;
left: 0;
flex-direction: column;
width: 100%;
height: 100%;
text-align: center;
display: none;
background-color: #000;
z-index: 10;
height: 700px;
overflow-y: hidden;
`


const SLink = styled(Link)`
width: 100%;
color: #fff;
font-size: 1.2rem;
text-decoration: none;
line-height: 80px;
border: 1px solid #fff
`

const BatsuButton = styled.button`
cursor: pointer;
color: #fff;
font-size: 1.2rem;
width:100px;
background-color: transparent;
`


