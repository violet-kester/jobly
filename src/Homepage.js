import { useContext } from "react";
import userContext from "./userContext";

/** Homepage.
 *
 * Props:
 * - login
 * - sigunup
 *
 * State: N/A
 *
 * RoutesList -> Homepage
 */

function Homepage({ login, signup }) {
  const user = useContext(userContext);

  return (
    <div className='Homepage'>
      <h1>Jobly</h1>
      <h3>All the jobs in one, convenient place</h3>
      {user.user.isLoggedIn &&
        <h2>Welcome back, {user.user.username}</h2>}
      {!user.user.isLoggedIn &&
        <div>
          <button onClick={login}>Login</button>
          <button onClick={signup}>Sign up</button>
        </div>}
    </div>
  );
}

export default Homepage;