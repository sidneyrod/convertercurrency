import './App.css';
import Converter from './components/Converter';

function App() {
  return (
    <div className="App">
      <h1>Converter Currency</h1>
      <div className="line">
      <Converter coinA="USD" coinB="BRL"></Converter>
      <Converter coinA="BRL" coinB="USD"></Converter>
      </div>
      <div className="line">
      <Converter coinA="CAD" coinB="BRL"></Converter>
      <Converter coinA="BRL" coinB="CAD"></Converter>
      </div>
      <div className="line">
      <Converter coinA="EUR" coinB="BRL"></Converter>
      <Converter coinA="BRL" coinB="EUR"></Converter>
      </div>
    </div>
  );
}

export default App;
