import { useState } from "react";
import "./App.css";
import imageToyota from "./images/Toyota.jpg";

function Header({name}) {
  return (
    <header>
      <h1>{name} React App</h1>

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
  return (
    <div>
      <Header name="Sakhumzi's"/>

      <List cars={carObjects} />

      <main>
        <p>Welcome to my React app!</p>
      </main>
    </div>
  );
}

export default App;
