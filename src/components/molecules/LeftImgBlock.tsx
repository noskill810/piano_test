import { Link } from "react-router-dom";
import styled from "styled-components";
import media from "styled-media-query";

export const LeftImgBlock = (props: any) => {
    // Limg.Limgの重複が気になりすぎるなんでだろう
    const {img, Ptext,Ptext_2, url, Totext, Htext, name, country, birthday } = props.blockData;

    // const [scroll, setScroll] = useState(0);
    // // const backgroundImg = {
    // //     backgroundImage: `url(${header})`
    // // }

    // useEffect(()=> {
    //     window.addEventListener('scroll', ()=>{
    //         setScroll(window.scrollY)
    //     })
    // },[])
    
    return(

                <Flexdiv>
                    <Idiv>
                        <img src={img} alt="Limg" style={{width: "100%"}} />
                        <Pdiv className="profile">
                            <h4 style={{margin: 0, fontSize:"25px"}}>{name}</h4>
                            <p>{country} <br /> {birthday}</p>
                        </Pdiv>
                    </Idiv>
                    <Tdiv className="Rtext">
                        <h2>{Htext}</h2>
                        <p>{Ptext}</p>
                        <br />
                        <p>{Ptext_2}</p>
                        <br />
                        <Link className="chart" to="/course">{Totext}</Link>
                    </Tdiv>
                </Flexdiv>
            // </MotionDiv>

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
  display: block;
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

${media.lessThan("medium")`
  justify-content:start;
  margin-top:20px;
`}
`

const Pdiv = styled.div`
position: absolute;
top: -30px;
left: -30px;
`