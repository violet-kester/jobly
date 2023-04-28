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
  const user = useContext(userContext);
  // console.log("NavBar user=", user);

  return (
    <nav className="NavBar">
      <div className="NavBar-logo">
        <NavLink to="/">
          Jobly
        </NavLink>
      </div>
      <div className="NavBar-links">
        {user.user.isLoggedIn &&
          <NavLink to="/companies">
            Companies
          </NavLink>
        }
        {user.user.isLoggedIn &&
          <NavLink to="/jobs">
            Jobs
          </NavLink>
        }
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
        {user.user.isLoggedIn &&
          <NavLink to="/profile">
            Profile
          </NavLink>
        }
        {user.user.isLoggedIn &&
          <button onClick={logout}>Logout {user.user.username}</button>
        }
      </div>
    </nav>
  );
}

export default NavBar;