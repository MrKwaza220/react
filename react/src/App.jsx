import { useEffect, useState } from "react";
import "./App.css";
import imageToyota from "./images/Toyota.jpg";

function Header({name}) {
  return (
    <header>
      <h3>{name} React App</h3>

    </header>
  );
}

const listOfCars = [
  "Toyota",
  "BMW",
  "Mercedes",
  "Audi",
];

const carObjects = listOfCars.map((car, i) => ({
  id: i, 
  title: car
}));

console.log(carObjects);

function List({cars}){
  return(

    <>
    <div>
      <h2>List of Cars</h2>
    </div>
    <main>
      {/* <img src={imageToyota} height={200} alt="Toyota Corolla" /> */}
      <ul>
      {cars.map((car) => (
        <li key={car.id} style={{listStyleType: "none"}}>{car.title}</li>
      ))}
    </ul>
    </main>
    </>
  )
}

function App() {
  const [status, setStatus] = useState(true);
 // const [status, dispatch] = useReducer((status) => !status, true);
  return (
    <div>
      <h1>Car Dealership is currently {" "} {status ? "Open" : "Closed"} </h1>

      <button onClick={() => setStatus(!status)}>{status ? "Close" : "Open"} Dealership</button>
      <Header name="Sakhumzi's"/>

      <List cars={carObjects} />

      <main>
        
      </main>
    </div>
  );
}

export default App;
