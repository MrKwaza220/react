import { UserInfor } from "./customhooks/userinfor/UserInfor";

function App() {

  return (
    <>
      <h1>Custom Hooks</h1>
      <UserInfor userId= "124" />
      <UserInfor userId= "456" />
      <UserInfor userId= "789" />

    </>
  );
}

export default App;
