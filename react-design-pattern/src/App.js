import { CurrentUserLoader } from "./container/currentuserloader/CurrentUserLoader";
import { UserInfo } from "./container/userinfor/UserInfo";


function App() {
  return (
      <>
          <h1>User and Products</h1>
          <CurrentUserLoader>
            <UserInfo />
          </CurrentUserLoader>
      </>
  );
}

export default App;
