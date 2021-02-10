import './App.css';
import Converter from './components/Converter'
import Line from './components/Line'

function App() {
  return (
    <div className="App">
      <h1>CONVERSOR DE MOEDAS</h1>
      <Line>
        <Converter currencyA="USD" currencyB="BRL"/>
        <Converter currencyA="BRL" currencyB="USD"/>
      </Line>
    <Line>
      <Converter currencyA="CAD" currencyB="USD"/>
      <Converter currencyA="BRL" currencyB="CAD"/>
    </Line>
    </div>
  );
}

export default App;
