import { Form } from 'react-bootstrap';

const Textbox = () => {
  return (
    <div className='textbox'>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Enter Text</Form.Label>
          <Form.Control as="textarea" rows={4} />
        </Form.Group>
    </div>  
  );
};

export default Textbox;