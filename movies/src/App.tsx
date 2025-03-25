import './App.css';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <Home name={"Kwaza"} age={30} isMarried={false}/>
      <Home name={"Sakhumzi"} age={30} isMarried={true}/>
    </div>
  );
}

export default App;
