import { NavLink } from "react-router-dom";
import { useContext } from "react";
import userContext from "./userContext";
import { Button, Stack, Typography } from '@mui/material';
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

      <NavLink to="/">
        <Typography className="NavBar-logo" variant="h4">Jobly</Typography>
      </NavLink>

      {/* unprotected routes */}
      {!localStorage.getItem("token") &&
        <Stack className="NavBar-unprotected" direction="row" spacing={1}>
          <Button component={NavLink} to="/login" variant="outlined">Login</Button>
          <Button component={NavLink} to="/signup" variant="outlined">Signup</Button>
        </Stack>
      }

      {/* protected routes */}
      {localStorage.getItem("token") &&
        <Stack className="NavBar-protected" direction="row" spacing={1}>
          <Button component={NavLink} to="/companies" variant="outlined">Companies</Button>
          <Button component={NavLink} to="/jobs" variant="outlined">Jobs</Button>
          <Button onClick={logout} variant="outlined">Logout {user.user.username}</Button>
        </Stack>
      }

    </nav>
  );
}

export default NavBar;