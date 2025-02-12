import { useState } from "react";
import "./App.css";
import Support from "./components/Support";

function App() {
  const name = "Stargazers";
  return (
    <div className="container">
      <hgroup>
        <img src="images/group.svg" alt="StarGazers Group" />
        <h1>
          Meet the <i>{name}</i>
        </h1>
        <p>
          Members of an <b>intergalactic alliance</b> paving the way for peace
          and benevolence among all species. They are known for their enthusiasm
          for science, for their love of fun, and their dedication to education.
        </p>

        <Support />
      </hgroup>
    </div>
  );
}

export default App;
