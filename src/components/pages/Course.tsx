import { Link } from "react-router-dom";
import styled from "styled-components";
import { Headline } from "../atoms/layouut/Headline";
import { Table } from "../molecules/Table";
import { DefaultLayout } from "../templates/DefaultLayout";
import header from "../../img/pexels-photo-112989.webp"
import { MotionDiv } from "../atoms/layouut/MotionDiv";
import { ScrollToTop } from "../atoms/layouut/ScrollToTop";
import { MotionDivY } from "../atoms/layouut/MotionDivY";
import { ApplayButton } from "../atoms/button/ApplayButton";

export const Course = () => {

    const backgroundImg = {
        backgroundImage: `url(${header})`
    }
    
    const tableData = [
        {
            count: "1回",
            onece: "￥46,000",
            per: "￥46,000"
        },
        {
            count: "2回",
            onece: "￥90,000",
            per: "￥45,000"
        },
        {
            count: "3回",
            onece: "￥132,000",
            per: "￥44,000"
        },
        {
            count: "4回",
            onece: "￥172,000",
            per: "￥43,000"
        },
        {
            count: "5回以上",
            onece: "一回追加ごと　￥42,000",
            per: ""
        },
    ]

    const tableData_2 = [
        {
            count: "1回",
            onece: "￥30,000",
            per: "￥30,000"
        },
    ]

    const tableHead = {
        count: "月レッスン回数",
        onece: "月額料金",
        per: "一回当たりのレッスン料"
    }

    const tableHead_2 = {
        count: "レッスン回数",
        onece: "月額料金",
        per: "一回当たりのレッスン料"
    }

    return(
      <DefaultLayout backgroundImg={backgroundImg}>
        <ScrollToTop />
        <Headline headword="Course"/>
            <MotionDivY>
                <h3 style={{marginTop: "100px"}}>ベーシックコース</h3>
                <Table tableData = {tableData} tableHead= {tableHead}/>
            </MotionDivY>
            <MotionDivY>
                <h3>プロコース</h3>
                <Table tableData = {tableData} tableHead= {tableHead}/>
            </MotionDivY>
            <MotionDivY >
                <h3>お試しコース</h3>
                <Table tableData = {tableData_2} tableHead= {tableHead_2}/>
            </MotionDivY>
            <MotionDivY>
                <ApplayButton />
            </MotionDivY>
      </DefaultLayout>
    )
};
