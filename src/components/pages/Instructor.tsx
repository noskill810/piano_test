import { Link } from "react-router-dom";
import styled from "styled-components";
import { Headline } from "../atoms/layouut/Headline";
import { DefaultLayout } from "../templates/DefaultLayout";
import header from "../../img/pexels-photo-2378209.webp"
import img from "../../img/thelonious-sphere-monk-1281515_960_720.jpg"
import { LeftImgBlock } from "../molecules/LeftImgBlock";
import { RightImgBlock } from "../molecules/RightImgBlock";
import { MotionDiv } from "../atoms/layouut/MotionDiv";
import { ScrollToTop } from "../atoms/layouut/ScrollToTop";
import { MotionDivY } from "../atoms/layouut/MotionDivY";


export const Instructor = () => {

    const backgroundImg = {
        backgroundImage: `url(${header})`
    }

    const blockData_1 = {
        img: img,        
        Htext: "ダニエル・ファレzzzzンバイム",
        Ptext: "スウェーデンの音楽家の家庭に生まれる。8歳でテレビ番組「igaradist(イガラ-ディスト)」に出演しピアニストとしてデビュー。その後、ポーランド国立フィルハーモニー・ホー ル等多くのコンサート・ホールで演奏し、海外の国際音楽祭にも多数参加。作曲家、編曲家、ジャズ・ピアニストとしても活躍。ワルシャワ・ショパン音楽院 (現・ ショパン音楽大学)ピアノ科卒業後、チューリッヒ音楽院研究科留学。セルゲイ・ラフマニノフ、スワトリヤ・リヒトル、アルトゥール・ルービンシュタインの各氏に師事。1970年、ショパン国際ピアノコン クール（スウェーデン）入賞。1976年、ジョン・ベートーベン協会より奨学金を得る。1984年、ヨーロッパ・ピアノフォーラム(ベ ルリン)に出演。",
        name: "Daniel Farenbaim",
        country: "from  England",
        birthday: "born in 1980",
        // iniPosition: 100
    }

    const blockData_2 = {
        img: img,        
        Htext: "ダニエル・ファレzzzzンバイム",
        Ptext: "スウェーデンの音楽家の家庭に生まれる。8歳でテレビ番組「igaradist(イガラ-ディスト)」に出演しピアニストとしてデビュー。その後、ポーランド国立フィルハーモニー・ホー ル等多くのコンサート・ホールで演奏し、海外の国際音楽祭にも多数参加。作曲家、編曲家、ジャズ・ピアニストとしても活躍。ワルシャワ・ショパン音楽院 (現・ ショパン音楽大学)ピアノ科卒業後、チューリッヒ音楽院研究科留学。セルゲイ・ラフマニノフ、スワトリヤ・リヒトル、アルトゥール・ルービンシュタインの各氏に師事。1970年、ショパン国際ピアノコン クール（スウェーデン）入賞。1976年、ジョン・ベートーベン協会より奨学金を得る。1984年、ヨーロッパ・ピアノフォーラム(ベ ルリン)に出演。",
        name: "Daniel Farenbaim",
        country: "from  England",
        birthday: "born in 1980",
        // iniPosition: 100

    }

    const blockData_3 = {
        img: img,        
        Htext: "ダニエル・ファレンバイム",
        Ptext: "スウェーデンの音楽家の家庭に生まれる。8歳でテレビ番組「igaradist(イガラ-ディスト)」に出演しピアニストとしてデビュー。その後、ポーランド国立フィルハーモニー・ホー ル等多くのコンサート・ホールで演奏し、海外の国際音楽祭にも多数参加。作曲家、編曲家、ジャズ・ピアニストとしても活躍。ワルシャワ・ショパン音楽院 (現・ ショパン音楽大学)ピアノ科卒業後、チューリッヒ音楽院研究科留学。セルゲイ・ラフマニノフ、スワトリヤ・リヒトル、アルトゥール・ルービンシュタインの各氏に師事。1970年、ショパン国際ピアノコン クール（スウェーデン）入賞。1976年、ジョン・ベートーベン協会より奨学金を得る。1984年、ヨーロッパ・ピアノフォーラム(ベ ルリン)に出演。",
        name: "Daniel Farenbaim",
        country: "from  England",
        birthday: "born in 1980",
        // iniPosition: 100
    }

    return(
      <DefaultLayout backgroundImg={backgroundImg}>
        <ScrollToTop />
        <Headline headword="Instructor" />
        <div>
            <MotionDivY >
                <RightImgBlock blockData={blockData_1} />
            </MotionDivY>  
            <MotionDivY>
                <LeftImgBlock blockData={blockData_2} />
            </MotionDivY>
            <MotionDivY >  
                <RightImgBlock blockData={blockData_3} />
            </MotionDivY>
        </div>
      </DefaultLayout>
    )
};
