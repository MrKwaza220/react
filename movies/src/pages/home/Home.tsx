import React, { useState } from "react";

export interface HomeProps {
  name: string;
  age: number;
  isMarried: boolean;
}

const Home = (props: HomeProps) => {
  const [isShowInfo, setIsShowInfo] = useState<boolean>(false);

  const toggleInfo = () => {
    setIsShowInfo((prev) => !prev);
  };
  return (
    <div>
      {isShowInfo && (
        <>
          <p>Name: {props.name}</p>
          <p>Age: {props.age}</p>
          <p>Status: {props.isMarried ? "is Married" : "is Single"}</p>
        </>
      )}
        <button onClick={toggleInfo}>Show Info</button>
    </div>
  );
};

export default Home;
