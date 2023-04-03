import './App.scss';
import InputForm from './components/InputForm';
import LowerThird from './components/LowerThird';
import AppContext from './context/AppContext';


import { useEffect, useState, useRef } from 'react';

function testFunction() {
  return <div>This is the test change</div>
}


function App() {

  const [text, setText] = useState('');

  const appData = {
    canvasRef: useRef(null),
    appName: "Broadcast Graphics",
  }


  const onTextChange = (e) => {
    setText(e.target.value);
  }

  useEffect(() => {

  }, []);

  return (
    <div className="App">
      <AppContext.Provider value={appData}>
        <InputForm onTextChange={onTextChange}/>
        <LowerThird width="1920" height="1080" text={text}/>
      </AppContext.Provider>
    </div>
  );
}

export default App;
