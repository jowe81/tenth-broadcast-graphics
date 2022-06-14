import './App.scss';
import InputForm from './components/InputForm';
import LowerThird from './components/LowerThird';

import { useEffect, useState } from 'react';

function App() {

  const [text, setText] = useState('');

  const onTextChange = (e) => {
    setText(e.target.value);
  }

  useEffect(() => {

  }, []);

  return (
    <div className="App">
      <InputForm onTextChange={onTextChange}/>
      <LowerThird width="1920" height="1080" text={text}/>
    </div>
  );
}

export default App;
