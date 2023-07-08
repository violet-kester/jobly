import { NavLink } from "react-router-dom";
import { useContext } from "react";
import userContext from "./userContext";
import "./NavBar.css";

/** NavBar with links to main routes.
 *
 * Props:
 * - logout: logout func to be called in parent
 *
 * State: N/A
 *
 * App -> NavBar
 */

function NavBar({ logout }) {
  //TODO: user could be destructured problem
  const user = useContext(userContext);
  // console.log("NavBar user=", user);
  //TODO: loggedin navLinks could be apart of the same check
  return (
    <nav className="NavBar">
      <div className="NavBar-logo">
        <NavLink to="/">
          Jobly
        </NavLink>
      </div>
      <div className="NavBar-links">

        {!localStorage.getItem("token") &&
          <div className="NavBar-unprotected">

            <NavLink to="/login">
              Login
            </NavLink>

            <NavLink to="/signup">
              Signup
            </NavLink>
          </div>
        }
        {localStorage.getItem("token") &&
          <div className="NavBar-protected">

            <NavLink to="/companies">
              Companies
            </NavLink>

            <NavLink to="/jobs">
              Jobs
            </NavLink>

            {/* <NavLink to="/profile">
              Profile
            </NavLink> */}

            <button onClick={logout}>Logout {user.user.username}</button>

          </div>
        }
      </div>
    </nav>
  );
}

export default NavBar;