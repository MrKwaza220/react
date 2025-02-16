import { SplitScreen } from "./SplitScreen";

const LeftHandComponent = ({firstName}) => {
  return <h1 style={{ backgroundColor: "green" }}>{firstName}</h1>;
};

const RightHandComponent = ({secondName}) => {
  return <h1 style={{ backgroundColor: "blue" }}>{secondName}</h1>;
};

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={1}>
      <LeftHandComponent firstName="Sakhumzi"/>
      <RightHandComponent secondName="Kwaza"/>
    </SplitScreen>
  );
}

export default App;
