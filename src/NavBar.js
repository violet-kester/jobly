import { NavLink } from "react-router-dom";
import { useContext } from "react";
import userContext from "./userContext";
// import "./NavBar.css";

/** NavBar with links to main routes.
 *
 * Props: N/A
 *
 * State: N/A
 *
 * App -> NavBar
 */

function NavBar() {
  const user = useContext(userContext);
  console.log("NavBar user=", user);

  return (
    <nav className="NavBar">
      <NavLink to="/">
        Jobly
      </NavLink>
      <NavLink to="/companies">
        Companies
      </NavLink>
      <NavLink to="/jobs">
        Jobs
      </NavLink>
      {!user.user.isLoggedIn &&
        <NavLink to="/login">
          Login
        </NavLink>
      }
      {!user.user.isLoggedIn &&
        <NavLink to="/signup">
          Signup
        </NavLink>
      }
      <NavLink to="/profile">
        Profile
      </NavLink>
    </nav>
  );
}

export default NavBar;