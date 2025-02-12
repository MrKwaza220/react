import { useState } from "react";
import "./App.css";
import Support from "./components/Support";
import Welcome from "./components/Welcome";
import ListCast from "./components/ListCast";

function App() {
  const name = "Stargazers";
  return (
    <div className="container">
      <hgroup>
        <img src="images/group.svg" alt="StarGazers Group" />
        <Welcome name="StarGazers" />
        <p>
          Members of an <b>intergalactic alliance</b> paving the way for peace
          and benevolence among all species. They are known for their enthusiasm
          for science, for their love of fun, and their dedication to education.
        </p>
        <ListCast />
        <Support />
      </hgroup>
    </div>
  );
}

export default App;
