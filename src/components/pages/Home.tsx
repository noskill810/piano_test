import React from 'react';
import { DefaultLayout } from '../templates/DefaultLayout';
import header from "../../img/piano-1039450_960_720.jpg";
import concept from "../../img/pexels-photo-8128014.jpg";
import event from "../../img/pexels-photo-573914.webp";
import feature1 from "../../img/thelonious-sphere-monk-1281515_960_720.jpg";
import img from "../../img/thelonious-sphere-monk-1281515_960_720.jpg"
import img2 from "../../img/boy.png";
import img3 from "../../img/kizai.png";
import img4 from "../../img/toman.png";
import { ApplayButton } from '../atoms/button/ApplayButton';
import { LeftImgBlock } from '../molecules/LeftImgBlock';
import { RightImgBlock } from '../molecules/RightImgBlock';
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import styled from 'styled-components';
import { MotionDiv } from '../atoms/layouut/MotionDiv';
import { ScrollToTop } from '../atoms/layouut/ScrollToTop';
import { MotionDivY } from '../atoms/layouut/MotionDivY';


export const Home = () => {
    
    const [scroll, setScroll] = useState(0);
    console.log(scroll)

    useEffect(()=> {
        window.addEventListener('scroll', ()=>{
            setScroll(window.scrollY)
        })
    },[])

    const backgroundImg = {
        backgroundImage: `url(${header})`
    }

    const blockData_1 = {
        img: img2,        
        Htext: "現役ピアニストがレクチャー",
        Ptext: "当校のすべて講師は、第一線で活躍するプロのピアニスト。",
        Ptext_2: "あなたの演奏をプロの視点で改善し、ともにデビューを目指します。",
        Totext: "講師一覧"
    }

    const blockData_2 = {
        img: img4,        
        Htext: "マンツーマンの個人レッスン",
        Ptext: "当校のレッスンは、すべてマンツーマンで行われます。",
        Ptext_2: "あなたのレベルに合わせて最適化されたプログラムを作成します。",
        Totext: "レッスンコース一覧"
    }

    const blockData_3 = {
        img: img3 ,       
        Htext: "プロになるための充実の設備",
        Ptext: "設備、機材、楽器。\nすべて最高品質のものを用意しています。",
        Ptext_2: "充実の演奏環境で、あなたの成長をサポートします。",
    }


    return (
            <DefaultLayout backgroundImg={backgroundImg}>
                <ScrollToTop />
                <div className="wrapper">
                    <MotionDivY>
                        <div id="home-concept">
                            <div id="home-concept-img">
                                <img src={concept} alt="concept"/>
                            </div>
                            <div id="home-concept-text">
                                <p className="headline">concept</p>
                                <h1>Don't end your dreams <br /> as dreams.</h1>
                                <p>―夢を夢のまま終わらせない。当校では、現役ピアニストのレッスンの元、<br />ハチャメチャうれしいことを起こします。</p>
                            </div>
                        </div>
                    </MotionDivY>
                </div>
                <div id="feature">
                <MotionDivY>
                     <p className="headline" id="feature_p">feature</p>  
                     </MotionDivY>         
                        <MotionDivY>
                            <RightImgBlock blockData={blockData_1} />
                        </MotionDivY>    
                        <MotionDivY>
                            <LeftImgBlock blockData={blockData_2} />
                        </MotionDivY>
                        <MotionDivY>
                            <RightImgBlock blockData={blockData_3} />
                        </MotionDivY>   
                </div>
                <MotionDivY>
                    <ApplayButton />
                </MotionDivY>
                <div className="wrapper" style={{ marginBottom: "300px" }}> 
                    <MotionDivY>
                        <div id="home-event">
                            <div id="home-event-text">
                                <p className="headline">concept</p>
                                <h1>Reguler Concert</h1>
                                <p>毎月開催される定期演奏会。<br/>当校と契約する講師の他に、<br/>数多くのピアニストが出演します。</p>
                                <p>この演奏会に参加することで、<br/>プロのアーティストへ大きく近づくことができます。</p>
                            </div>
                            <div id="home-event-img">
                                <img src={event} alt="home-event-img"/>
                            </div>
                        </div>
                    </MotionDivY>
                </div>
            </DefaultLayout>
    )
}