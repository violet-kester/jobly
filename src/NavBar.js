import { NavLink, Link } from "react-router-dom";
// import "./NavBar.css";

/** NavBar with links to main routes.
 *
 * Props: N/A
 *
 * State: N/A
 *
 * App -> NavBar
 *
 * TODO: navLink rather than link for styling
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
    </nav>
  );
}

export default NavBar;