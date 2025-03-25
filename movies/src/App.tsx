import "./App.css";
import Home from "./pages/home/Home";
import { UserProvider } from "./pages/usercontextprovider/UserContextProvider";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Home name={"Kwaza"} age={30} isMarried={false} />
        <Home name={"Sakhumzi"} age={30} isMarried={true} />
      </UserProvider>
    </div>
  );
}

export default App;
