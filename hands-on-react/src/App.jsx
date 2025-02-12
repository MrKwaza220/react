import React, {useState, Component} from "react";
import "./App.css";
import ListCast from "./components/ListCast";

function App() {
  const name = "Stargazers";
  let [memberInfo, setMemberInfo] = useState(null);
  return (
    <div className="container">
      <hgroup>
        <img src="images/group.svg" alt="StarGazers Group" />
        <h1>Meet the StarGazers </h1>
        <p>
          Members of an <b>intergalactic alliance</b> paving the way for peace
          and benevolence among all species. They are known for their enthusiasm
          for science, for their love of fun, and their dedication to education.
        </p>
        <ListCast />

        {memberInfo &&
        <article>
          <hgroup>
            <div>
              <img src={`images/${memberInfo.slug}`} alt={memberInfo.name} />
              <h1>{memberInfo.name}</h1>
              <p>{memberInfo.bio}</p>
            </div>
          </hgroup>
          </article>}
      </hgroup>
    </div>
  );
}

export default App;
