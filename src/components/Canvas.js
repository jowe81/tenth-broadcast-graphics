
import React, { useContext, useEffect } from 'react'
import AppContext from '../context/AppContext';
import './canvas.scss';

const Canvas = props => {
  
  const appData = useContext(AppContext);
  
  const canvasRef = appData.canvasRef;  
  
  const { drawBg, width, height, drawFg, text } = props;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const clearCanvas = context => context.clearRect(0, 0, 1920, 1080);

    const font = new FontFace('Locator', 'url(../vendor/Locator-Regular.otf)');

    font.load().then(font => {    
      document.fonts.add(font);
      clearCanvas(context);
      drawBg(context);
      drawFg(context, text);      
    });

  }, [drawBg, drawFg, canvasRef, text]);
  
  return (
    <div id="preview">
      <canvas ref={canvasRef} width={width} height={height}/>
    </div>
  );
}

export default Canvas;