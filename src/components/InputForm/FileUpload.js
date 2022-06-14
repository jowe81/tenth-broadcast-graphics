import { Form } from 'react-bootstrap';

const FileUpload = () => {
  return (
    <div className='file-upload'>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Select Image File</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
    </div>  
  );
};

export default FileUpload;