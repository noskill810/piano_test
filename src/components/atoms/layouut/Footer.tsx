import { Link } from "react-router-dom";
import styled from "styled-components";
import media from "styled-media-query";
import logo from "../../../img/pexels-photo-573914.webp";
import { MotionDivY } from "./MotionDivY";

export const Footer = () => {
    return(
    <MotionDivY>
        <Sfooter>
            <Sdiv>
                <div>
                    <SLink to="/home"><Simg src={logo} alt="" /></SLink> 
                </div>
                <Menudiv>
                    <Tdiv>Menu</Tdiv>
                    <Flexdiv> 
                        <SLink to="/">Home</SLink> 
                        <SLink to="/concept">Concept</SLink> 
                        <SLink to="/instructor">Instructor</SLink>
                        <SLink to="/contact">Contact</SLink>  
                        <SLink to="/course">Course</SLink>
                    </Flexdiv>
                    <Flexdiv> 
                        <SLink to="/home">Twitter</SLink> 
                        <SLink to="/concept">Instagram</SLink> 
                        <SLink to="/instructor">Facebook</SLink> 
                    </Flexdiv>
                </Menudiv>
            </Sdiv>
        </Sfooter>

    </MotionDivY>    
        
    )
};

const Sfooter = styled.footer`
margin: 300px auto 100px auto;
background-color: #1a1a1a;
line-height: 150px;
width: 1300px;
border-top: 1px solid #fff;

    ${media.lessThan("medium")`
    width: 390px;
    margin: 0 atuo;
    `}
`
const SLink = styled(Link)`
margin:0 30px;
color: #fff;
font-size: 1.2rem;
display: inlinelock;
line-height: 60px;
font-weight: 100;

`

const Sdiv = styled.div`
display: flex;
color: #fff;

    ${media.lessThan("medium")`
        display: block;
    `}

`
const Tdiv = styled.div`
margin: 0 80px 0 120px;

    ${media.lessThan("medium")`
    margin-left: 10px; 
    `}

`

const Menudiv = styled.div`
display: flex;
margin-left: 300px

    ${media.lessThan("medium")`
        display: block;
        width: 390px;
        margin: 0 atuo;
    `}

`

const Flexdiv = styled.div`
display:flex;
flex-direction: column;
padding-top:48px;

    ${media.lessThan("small")`
    display: block;
    width: 390px;
    margin: 0 atuo;
    `}

`

const Simg = styled.img`
width: 100px;
height: 100px;
padding-top:48px;
`