import { Headline } from "../atoms/layouut/Headline";
import { DefaultLayout } from "../templates/DefaultLayout";
import concept_1 from "../../img/pexels-photo-6647845.webp";
import header from "../../img/pexels-photo-2378209.webp"
import { ScrollToTop } from "../atoms/layouut/ScrollToTop";
import { MotionDiv } from "../atoms/layouut/MotionDiv";
import { MotionDivY } from "../atoms/layouut/MotionDivY";

export const Concept = () => {
    const backgroundImg = {
        backgroundImage: `url(${header})`
    }
    return(
     <>
      <DefaultLayout backgroundImg={backgroundImg}>
        <ScrollToTop />
        <Headline headword="Concept"/>
        
          {/* <div id="concept"> */}
            <MotionDivY>
            <div id="concept-1">
                <div id="concept-1-img">
                  <img src={concept_1} alt="" />
                </div>
                <div id="concept-1-text">
                  <h1>Don't end your dreams <br /> as dreams.</h1>
                </div>
            </div>
          </MotionDivY>
          <MotionDivY >
            <div id="concept-2">
              <div id="concept-2-text">
                <h1>Don't end your dreams <br /> as dreams.</h1>
              </div>
            </div>
          </MotionDivY>
        {/* </div> */}
      </DefaultLayout>
     </>
    )
};