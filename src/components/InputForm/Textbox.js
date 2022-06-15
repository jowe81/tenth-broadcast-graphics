import { Form } from 'react-bootstrap';
import { useContext } from 'react';

import AppContext from '../../context/AppContext';

const Textbox = (props) => {

  const appData = useContext(AppContext);

  return (
    <div className='textbox'>
        <h2>{appData.appName}</h2>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Enter Text</Form.Label>
          <Form.Control as="textarea" rows={4} onChange={props.onTextChange}/>
        </Form.Group>
    </div>  
  );
};

export default Textbox;