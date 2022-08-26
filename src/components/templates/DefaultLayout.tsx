import { url } from "inspector";
import { Footer } from "../atoms/layouut/Footer";
import { Header } from "../atoms/layouut/Header";
import sss from "../../img/piano-1039450_960_720.jpg"

export const DefaultLayout = (props:any) => {
    const { children } = props;
    const backgroundImg = props.backgroundImg;

    return (
        <>
        <Header backgroundImg={backgroundImg}/>
            {children}
        <Footer/>
        </>
    )
}