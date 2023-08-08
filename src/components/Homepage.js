import { useContext } from 'react';
import userContext from '../userContext';
import { Link } from 'react-router-dom';
import { Box, Stack, Typography } from '@mui/material';
import GlassBox from './Box/Box';
import StyledButton from './Button/Button';
import StyledTypography from './Typography/Typography';

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
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
    }}>

      <GlassBox>
        <Box sx={{
          paddingBottom: '24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>

          <Box
            component='img'
            sx={{ maxWidth: '50vw' }}
            alt='Jobly logo'
            src='/logos/jobly-logo-large.png'
            m={2}
          />
          <Box m={2}>
            <Typography variant='h1' sx={{ letterSpacing: '4px' }}>
              Jobly
            </Typography>
            <StyledTypography variant='h4' sx={{ fontStyle: 'italic' }}>
              Find your dream job in minutes.
            </StyledTypography>
          </Box>

        </Box>
      </GlassBox>

      <Box m={2}>
        {
          localStorage.getItem('token') &&
          <StyledTypography variant='h5'>
            Welcome back, <b>{user.user.username}</b>!
          </StyledTypography>
        }
        {
          !localStorage.getItem('token') &&
          <Stack direction='row' justifyContent='center' spacing={2}>
            <StyledButton
              component={Link}
              to='/login'
              variant='contained'
              size='large'
              disableElevation
            >
              Login
            </StyledButton>
            <StyledButton
              component={Link}
              to='/signup'
              variant='contained'
              size='large'
              disableElevation
            >
              Signup
            </StyledButton>
          </Stack>
        }
      </Box>

    </Box >
  );
}

export default Homepage;