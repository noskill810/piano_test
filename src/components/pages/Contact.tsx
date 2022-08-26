import { Link } from "react-router-dom";
import styled from "styled-components";
import { Headline } from "../atoms/layouut/Headline";
import { Table } from "../molecules/Table";
import { DefaultLayout } from "../templates/DefaultLayout";
import header from "../../img/pexels-photo-2378209.webp"
import { MotionDiv } from "../atoms/layouut/MotionDiv";
import { ScrollToTop } from "../atoms/layouut/ScrollToTop";

export const Contact = () => {

    const backgroundImg = {
        backgroundImage: `url(${header})`
    }
    
   

    return(
      <DefaultLayout backgroundImg={backgroundImg}>
        <ScrollToTop />
        <Headline headword="Contact"/>
        <div className="wrapper" style={{textAlign: "center"}}> 
            <p>Life Pianoの体験コースにご興味を持っていただきありがとうございます。<br /><br />

            Life Pianoでは、60分間の体験レッスンをご受講いただいております。<br />
            詳細に関しては、<Link to="/course">こちら</Link>をご覧ください。<br />
            電話にて、お気軽に無料体験をお申し込みください。<br /><br />

            ※マンツーマンレッスンでのスタジオ料金は別途生徒様にご負担いただいております。</p>

          <form id="contact-form" action="#" method="post">
            <Stable border={1}>
              <tr>
                <Sth>お名前</Sth>
                <Std><Sinput type="text" id="name" name="name" style={{width: '90%'}}/></Std>
              </tr>
              <tr>
                <Sth>メールアドレス</Sth>
                <Std><Sinput type="email" id="email" name="email" style={{width: '90%'}}/></Std>
              </tr>
              <tr>
                <Sth>住所</Sth>
                <Std><Sinput type="text" id="address" name="address" style={{width: '90%'}}/></Std>
              </tr>
              <tr>
                <Sth>お問い合わせ内容</Sth>
                <Std><Stextarea name="query" id="query" rows={15}></Stextarea></Std>
              </tr>

            </Stable>
            <Buttondiv>
              <Buttoninput type="submit" value="送信" />
            </Buttondiv>

            {/* <form id="contact-form" action="#" method="post">
              <div className="input">
                <label htmlFor="name">名前</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className="input">
                <label htmlFor="email">メールアドレス</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className="input">
                <label htmlFor="address">住所</label>
                <input type="text" id="address" name="address" />
              </div>
              <div className="input">
              <label htmlFor="query">お問い合わせ内容</label>
               <textarea name="query" id="query"></textarea>
              </div>
            </form> */}

          </form>
         </div>  

      </DefaultLayout>
    )
};


const Stable = styled.table`
  width:90%;
  margin: 0 auto;
  border: 2px solid #fff;
  margin-top: 100px;
`
const Std = styled.td`
  padding: 10px 20px;
  border: 1px solid #fff;
`

const Sth = styled.th`
  padding: 10px 20px;
  border: 1px solid #fff;
  width: 10em;
  text-align: left;
`

const Sinput = styled.input`
  width: 100%;
  padding: 5px;
  border: 1px solid #cccccc;
  box-sizeing: border-box;
  font-size: 1em;
  text-align: left;
`

const Stextarea = styled.textarea`
  width: 90%;
  padding: 10px;
  margin: 10px;
  border: 1px solid #cccccc;
  box-sizeing: border-box;
  font-size: 1em;
`
const Buttondiv = styled.div`
  margin-top: 30px;

`

const Buttoninput = styled.input`
  padding: 8px 50px;
  cursor: pointer;
`