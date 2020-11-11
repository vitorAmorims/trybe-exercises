import './App.css';
import data from './data';

function App() {
  return (
    <div className="App">
      {data.map(({color, value}) => {
       return (<li key={value}>{color} come as {value}</li>);
      })}
    </div>
  );
}

export default App;
