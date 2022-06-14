import './App.scss';
import InputForm from './components/InputForm';
import Canvas from './components/Canvas';

function App() {
  return (
    <div className="App">
      <InputForm/>
      <Canvas width="1920" height="1080"/>
    </div>
  );
}

export default App;
