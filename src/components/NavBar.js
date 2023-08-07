import { NavLink } from "react-router-dom";
import { useContext } from "react";
import userContext from "../userContext";
import {
  AppBar,
  Box,
  Button,
  Stack,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';

const StyledAppBar = styled(AppBar)({
  width: '100%',
  backgroundColor: 'rgba(165, 235, 200, 0.5)',
  backdropFilter: 'blur(10px)',
  marginBottom: '24px',
  boxShadow: '0px 1px 3px 2px rgba(0,0,0,0.1)',

});

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
})

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
  //TODO: user could be destructured
  const user = useContext(userContext);

  return (
    <StyledAppBar position="sticky">
      <StyledToolbar>

        {/* logo */}

        <NavLink to="/">
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
          }}>
            <Box
              component="img"
              sx={{ height: "36px" }}
              alt="Logo icon"
              src="../logo.png"
            />
            <Typography variant="h4" sx={{
              color: (theme) => theme.palette.primary.main,
              marginLeft: '16px',
              letterSpacing: '3px',
              textDecoration: 'none',
            }}>
              Jobly
            </Typography>
          </Box>
        </NavLink>

        {/* unprotected routes */}

        {!localStorage.getItem("token") &&
          <Stack direction="row" spacing={2}>
            <Button component={NavLink} to="/login" variant="outlined">Login</Button>
            <Button component={NavLink} to="/signup" variant="outlined">Signup</Button>
          </Stack>
        }

        {/* protected routes */}

        {localStorage.getItem("token") &&
          <Stack direction="row" spacing={2}>
            <Button component={NavLink} to="/companies" variant="outlined">Companies</Button>
            <Button component={NavLink} to="/jobs" variant="outlined">Jobs</Button>
            <Button onClick={logout} variant="outlined">Logout {user.user.username}</Button>
          </Stack>
        }

      </StyledToolbar>
    </StyledAppBar>
  );
}

export default NavBar;