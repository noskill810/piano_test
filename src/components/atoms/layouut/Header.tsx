import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import logo from "../../../img/pexels-photo-573914.webp";
import { MenuButton } from "../button/MenuButton";
import media from "styled-media-query";
import { MotionDivScale } from "./MotionDivScale";
import { Button } from "../button/Button";

export const Header = (props: any) => {

    const [scroll, setScroll] = useState(0);

    useEffect(()=> {
        window.addEventListener('scroll', ()=>{
            setScroll(window.scrollY)
        })
    },[])
    
    const backgroundImg = props.backgroundImg;
    
    return(
        <Sheader style={backgroundImg}>
            <div style={{position: "absolute"}}>
                <SLink to="/"><Simg src={logo} alt="" /></SLink> 
            </div>
            <motion.div         
                style = {{
                    width: "100%",
                    position: "fixed",
                    zIndex: 10,
                    height: "80px",
                    background: "rgba(0, 0, 0, 0.8)"
                }}
                animate={{
                    opacity: scroll > 700 ? 1 : 0
                }}
                initial={{
                    opacity: 0
                }}
                transition={{
                    duration: 0.5
                }}
                >
            </motion.div>

            <Sdiv>
            <MotionDivScale><SLink to="/">Home</SLink></MotionDivScale>
            <MotionDivScale> <SLink to="/concept">Concept</SLink> </MotionDivScale>
            <MotionDivScale> <SLink to="/instructor">Instructor</SLink> </MotionDivScale>
            <MotionDivScale> <SLink to="/contact">Contact</SLink> </MotionDivScale>
            <MotionDivScale> <SLink to="/course" style={{ paddingRight:"70px" }}>Course</SLink> </MotionDivScale>
            </Sdiv>
            <MenuButton />

        </Sheader>
    )
};

const Sheader = styled.header`
text-align: right;
width:100%;
display:flex;

`
const Sdiv = styled.div`
width: 100%;
position: fixed;
z-index: 10;
display: flex;
justify-content: end;


${media.lessThan("medium")`
  display: none;
`}

`
const SLink = styled(Link)`
margin:0 30px;
color: #fff;
font-size: 1.2rem;
text-decoration: none;
line-height: 50px;
`

const Simg = styled.img`
width: 100px;
height: 100px;
padding-top: 20px;
`