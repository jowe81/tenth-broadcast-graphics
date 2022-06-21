import Canvas from "./Canvas";
import { drawLowerThird, drawLowerThirdText } from "../helpers/canvasFunctions";

const LowerThird = props => {  
  return (<Canvas {...props} drawBg={drawLowerThird} drawFg={drawLowerThirdText}/>);
};

export default LowerThird;