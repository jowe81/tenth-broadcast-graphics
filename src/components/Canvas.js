
import React, { useRef, useEffect } from 'react'

const Canvas = props => {
  
  const canvasRef = useRef(null)
  
  const { drawBg, width, height, drawFg } = props;

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    drawBg(context);
    drawFg(context);
  }, [drawBg]);
  
  return <canvas ref={canvasRef} width={width} height={height}/>
}

export default Canvas;