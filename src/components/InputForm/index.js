import './index.scss';
import { Form } from 'react-bootstrap';
import Textbox from './Textbox';
import FileUpload from './FileUpload';
import SubmitButton from './SubmitButton';

const InputForm = () => {
  return (
    <div className='input-form'>
      <Form>
        <Textbox/>
        <FileUpload/>
        <SubmitButton/>
      </Form>
    </div>  
  );
};

export default InputForm;