import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import userContext from '../userContext';
import {
  AppBar,
  Box,
  Stack,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import StyledButton from './Button/Button';

const StyledAppBar = styled(AppBar)({
  width: '100%',
  padding: '4px',
  marginBottom: '16px',
  backgroundColor: 'rgba(165, 235, 200, 0.4)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0px 1px 3px 2px rgba(0,0,0,0.1)',
  borderRadius: '8px',
});

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

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
  const user = useContext(userContext); //TODO: user could be destructured

  return (
    <StyledAppBar position='sticky'>
      <StyledToolbar>

        {/* logo */}

        <NavLink to='/'>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
          }}>
            <Box
              component='img'
              sx={{ height: '36px' }}
              alt='Logo icon'
              src='logos/jobly-logo.png'
            />
            <Typography variant='h4' sx={{
              color: (theme) => theme.palette.primary.main,
              marginLeft: '12px',
              letterSpacing: '3px',
            }}>
              Jobly
            </Typography>
          </Box>
        </NavLink>

        {/* unprotected routes */}

        {!localStorage.getItem('token') &&
          <Stack direction='row' spacing={2}>
            <StyledButton
              component={NavLink}
              to='/login'
              variant='outlined'
            >
              Login
            </StyledButton>
            <StyledButton
              component={NavLink}
              to='/signup'
              variant='outlined'
            >
              Signup
            </StyledButton>
          </Stack>
        }

        {/* protected routes */}

        {localStorage.getItem('token') &&
          <Stack direction='row' spacing={2}>
            <StyledButton component={NavLink} to='/companies' variant='outlined'>Companies</StyledButton>
            <StyledButton component={NavLink} to='/jobs' variant='outlined'>Jobs</StyledButton>
            <StyledButton onClick={logout} variant='outlined'>Logout {user.user.username}</StyledButton>
          </Stack>
        }

      </StyledToolbar>
    </StyledAppBar>
  );
}

export default NavBar;