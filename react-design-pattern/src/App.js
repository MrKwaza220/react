import { CurrentUserLoader } from "./container/currentuserloader/CurrentUserLoader";
import { UserInfo } from "./container/userinfor/UserInfo";
import { UserLoader } from "./container/userloader/UserLoader";


function App() {
  return (
      <>
          <h1>User and Products</h1>
          <UserLoader userId='123'>
            <UserInfo />
          </UserLoader>
      </>
  );
}

export default App;
