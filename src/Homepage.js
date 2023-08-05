import { useContext } from "react";
import userContext from "./userContext";
import { Link } from "react-router-dom";
import { Box, Button, Stack, Typography } from '@mui/material';
import StyledBox from './custom-components/Box/Box';

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
    <StyledBox>

      <Box
        component="img"
        sx={{ maxWidth: '30%' }}
        alt="Logo"
        src="../logo-large.png"
        m={1}
      />
      <Box m={1}>
        <Typography variant='h1'>Jobly</Typography>
        <Typography variant='h4' sx={{ fontStyle: 'italic' }}>Find your dream job in minutes.</Typography>
      </Box>

      {localStorage.getItem("token") &&
        <Typography variant="h5" sx={{
          margin: '32px 0 24px'
        }}>
          Welcome back, <b>{user.user.username}</b>!
        </Typography>
      }

      {!localStorage.getItem("token") &&
        <Stack direction="row" justifyContent="center" spacing={2} sx={{
          margin: '32px 0 24px'
        }}>
          <Button
            component={Link}
            to="/login"
            variant="contained"
            size="large"
            disableElevation
          >
            Login
          </Button>
          <Button
            component={Link}
            to="/signup"
            variant="contained"
            size="large"
            disableElevation
          >
            Signup
          </Button>
        </Stack>
      }

    </StyledBox>
  );
}

export default Homepage;