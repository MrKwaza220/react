import React from 'react';

const Child = ({name, age}) => {

    Child.defaultProps = {
        name: "Sakhumzi",
        age: 18
    };
  return (
    <div>
      <h2>Child Component</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};



export default Child;
