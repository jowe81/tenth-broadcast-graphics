//The semi-transparent lower third bar
const drawLowerThird = context => {
  context.fillStyle = '#000000AA'
  context.fillRect(0, 820, context.canvas.width, context.canvas.height)
}


/**
 * Return lineHeight, fontSize, vertical offset based on # of lines
 * @param {*} text 
 * @returns 
 */
const getParams = (text) => {

  const lines = text.split('\n');

  let fontSize = 40;
  let lineHeight = 50;
  let offsetY = 0;

  switch (lines.length) {
    case 1:
      fontSize = 60;
      lineHeight = 100;
      offsetY = 80;
      break;    
    case 2:
      fontSize = 51;
      lineHeight = 60;
      offsetY = 30;
      break;
    case 3:
      fontSize = 47;
      lineHeight = 66;
      break;
    default:
  };

  return { fontSize, lineHeight, offsetY };
};

const drawLowerThirdText = (ctx, text) => {
  const lines = text.split('\n');

  const { fontSize, lineHeight, offsetY } = getParams(text);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${fontSize}px Locator`;

  for (let i = 0; i < lines.length; i++) {
    ctx.fillText(lines[i], 50, 880 + offsetY + i * lineHeight);    
  }

};

export {
  drawLowerThird,
  drawLowerThirdText,
}