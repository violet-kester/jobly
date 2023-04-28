import { useContext } from "react";
import userContext from "./userContext";
import { Link } from "react-router-dom";
import "./Homepage.css";

/** Homepage.
 *
 * Props:
 * - login - login func to be called in parent
 * - sigunup - signup func to be called in parent
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
          <button><Link to="/login">Login</Link></button>
          <button><Link to="/signup">Sign up</Link></button>
        </div>}
    </div>
  );
}

export default Homepage;