import React from "react";

export const UncontrolledForm = () => {
  const nameInput = React.createRef();
  const ageInput = React.createRef();
  const hairColor = React.createRef();

  const handleSubmit = (event) => {
    console.log(nameInput.current.value);
    console.log(ageInput.current.value);
    console.log(hairColor.current.value);
    event.preventDefault();
  };
  return (
    <>
      <h1>Control File</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="name" ref={nameInput} />
        <input type="number" name="age" placeholder="age" ref={ageInput} />
        <input
          type="text"
          name="hairColor"
          placeholder="Hair Color"
          ref={hairColor}
        />
        <button type="submit"> submit</button>
      </form>
    </>
  );
};
