import Canvas from "./Canvas";

const LowerThird = props => {

  //The semi-transparent lower third bar
  const drawLowerThird = context => {
    context.fillStyle = '#000000AA'
    context.fillRect(0, 820, context.canvas.width, context.canvas.height)
  }

  const drawText = context => {
    context.fillStyle = '#FFFFFF';
    context.font = "30px Arial";
    context.fillText(props.text || '', 50, 950);    
  };
  
  return (<Canvas {...props} drawBg={drawLowerThird} drawFg={drawText}/>);
};

export default LowerThird;