import './App.css';
import { useState } from 'react';
import Header from './components/Header';

function App() {
  const [number,SetNumber] = useState(0);
  return (
    <div className="App">
    <Header number={number < 5 ? 0 : number} /><hr />
    <h1>{number}</h1>
    <button onClick={() => SetNumber(number + 1)}>Click</button>
    </div>
  );
}

export default App;
