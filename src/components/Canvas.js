
import React, { useContext, useEffect } from 'react'
import AppContext from '../context/AppContext';

const Canvas = props => {
  
  const appData = useContext(AppContext);
  const canvasRef = appData.canvasRef;  
  
  const { drawBg, width, height, drawFg } = props;

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    const clearCanvas = context => context.clearRect(0, 0, 1920, 1080);

    const locator = new FontFace('Locator', 'url(../vendor/Locator-Regular.otf)');

    locator.load().then(font => {    
      document.fonts.add(font);
      clearCanvas(context);
      drawBg(context);
      drawFg(context);      
    });

  }, [drawBg, drawFg, canvasRef]);
  
  return <canvas ref={canvasRef} width={width} height={height}/>
}

export default Canvas;