import './index.scss';
import { Form } from 'react-bootstrap';
import Textbox from './Textbox';
import FileUpload from './FileUpload';
import SubmitButton from './SubmitButton';

const InputForm = (props) => {
  return (
    <div className='input-form'>
      <Form>
        <Textbox onTextChange={props.onTextChange}/>
        <FileUpload/>
        <SubmitButton/>
      </Form>
    </div>  
  );
};

export default InputForm;