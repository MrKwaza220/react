interface Props {
    name: string;
    age: number;
    isMarried: boolean;
  }

const Home = (props: Props) => {
 
  return (

    <div>
      <>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Status: {props.isMarried ? "is Married" : "is Single"}</p>
      </>
    </div>
  );
};

export default Home;
