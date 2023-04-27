import { NavLink, Link } from "react-router-dom";
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
      <NavLink to="/login">
        Login
      </NavLink>
      <NavLink to="/signup">
        Signup
      </NavLink>
      <NavLink to="/profile">
        Profile
      </NavLink>
    </nav>
  );
}

export default NavBar;