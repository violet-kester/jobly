import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import userContext from '../userContext';
import {
  AppBar,
  Box,
  IconButton,
  Stack,
  styled,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import {
  MapsHomeWork,
  Work,
} from '@mui/icons-material';
import StyledButton from './Button/Button';

/** Styled components --------------------------------------------- */

const StyledAppBar = styled(AppBar)({
  width: '100%',
  padding: {
    xs:'0',
    md:'12px',
  },
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

const IconGroup = styled(Stack)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  }
}));

const ButtonGroup = styled(Stack)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  }
}));

/** NavBar --------------------------------------------------------
 *
 * Props:
 * - logout: logout function to be called in App component
 *
 * Component hierarchy:
 * App -> NavBar
 *
 */

function NavBar({ logout }) {
  const { user } = useContext(userContext);
  const theme = useTheme();

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
              [theme.breakpoints.down('sm')]: {
                fontSize: '1.5rem',
              }
            }}>
              Jobly
            </Typography>
          </Box>
        </NavLink>

        {/* unprotected routes */}

        {!localStorage.getItem('token') &&
          <Stack direction='row' spacing={{
            xs: 1,
            sm: 2
          }}>

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
          <Box>

            <IconGroup direction='row' spacing={2}>
              <IconButton
                component={NavLink}
                to='/companies'
                color='primary'
                size='small'
              >
                <MapsHomeWork />
              </IconButton>
              <IconButton
                component={NavLink}
                to='/jobs'
                color='primary'
                size='small'
              >
                <Work />
              </IconButton>
              <StyledButton
                onClick={logout}
                variant='outlined'
              >
                Logout
              </StyledButton>
            </IconGroup>

            <ButtonGroup direction='row' spacing={2}>
              <StyledButton
                component={NavLink}
                to='/companies'
                variant='outlined'
                startIcon={<MapsHomeWork />}
              >
                Companies
              </StyledButton>
              <StyledButton
                component={NavLink}
                to='/jobs'
                variant='outlined'
                startIcon={<Work />}
              >
                Jobs
              </StyledButton>
              <StyledButton
                onClick={logout}
                variant='outlined'
              >
                Logout {user.username}
              </StyledButton>
            </ButtonGroup>

          </Box>
        }

      </StyledToolbar>
    </StyledAppBar>
  );
}

export default NavBar;