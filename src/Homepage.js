import { useContext } from "react";
import userContext from "./userContext";
import { Link } from "react-router-dom";
import "./Homepage.css";

/** Homepage.
 *
 * Props: N/A
 *
 * State: N/A
 *
 * RoutesList -> Homepage
 */

function Homepage() {
  const user = useContext(userContext);

  return (
    <div className='Homepage'>
      <h1>Jobly</h1>
      <h3>All the jobs in one, convenient place</h3>
      {localStorage.getItem("token") &&
        <h2>Welcome back, {user.user.username}</h2>}
      {!localStorage.getItem("token") &&
        <div>
          <button><Link to="/login">Login</Link></button>
          <button><Link to="/signup">Sign up</Link></button>
        </div>}
    </div>
  );
}

export default Homepage;