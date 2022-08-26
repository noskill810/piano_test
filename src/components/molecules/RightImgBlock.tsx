import { Link } from "react-router-dom";
import styled from "styled-components";
import media from 'styled-media-query';


export const RightImgBlock = (props: any) => {

    const {img ,Ptext, Ptext_2, url, Totext, Htext, name, country, birthday} = props.blockData;
console.log(Ptext)
    return(
        <Flexdiv>
            <Tdiv>
                <h2>{Htext}</h2>
                <p>{Ptext}</p>
                <br />
                <p>{Ptext_2}</p>
                <br />
                <Link className="chart" to='/instructor'>{Totext}</Link>
            </Tdiv>
            <Idiv className="Limg">
                <img src={img} alt="Limg"/>
                <Pdiv>
                    <h4 style={{margin: 0, fontSize:"25px"}}>{name}</h4>
                    <p>{country} <br /> {birthday}</p>
                </Pdiv>
            </Idiv>
        </Flexdiv>
        // </motion.div>
        
)
};

const Flexdiv = styled.div`
display: flex;
justify-content: space-around;
width: 1200px;
margin: 200px auto;

${media.lessThan("medium")`
  width: 360px;
  margin: 0 atuo;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;

`}

`

const Idiv = styled.div`
position: relative;
width: 425px;
height: 430px;
`

const Tdiv = styled.div`
width: 425px;
height: 430px;
display: flex;
flex-direction: column;
justify-content: center;


`
const Pdiv = styled.div`
position: absolute;
top: -30px;
left: -30px;
`