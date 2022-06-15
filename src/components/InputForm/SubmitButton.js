import { Button } from 'react-bootstrap';
import { useContext } from 'react';

import AppContext from '../../context/AppContext';

const SubmitButton = () => {

  const appData = useContext(AppContext);

  const handleClick = () => {
    //Download image as png file
    const canvas = appData.canvasRef.current;
    const image = canvas.toDataURL();
    const aDownloadLink = document.createElement('a');
    aDownloadLink.download = 'canvas_image.png';
    aDownloadLink.href = image;
    aDownloadLink.click();
  }

  return (
    <div className='submit-button'>
      <Button onClick={handleClick}>Process</Button>
    </div>  
  );
};

export default SubmitButton;