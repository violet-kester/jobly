import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  InputAdornment,
  IconButton,
  Stack,
  TextField,
} from '@mui/material';
import {
  AccountCircle,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import GlassBox from './Box/Box';
import StyledButton from './Button/Button';
import { StyledTypography } from './Typography/Typography.styles';

const DEFAULT_FORM_DATA = {
  username: '',
  password: '',
};

/** LoginForm -----------------------------------------------------
 *
 * Props:
 * - login: login function to be called in App component
 * - error: API error message
 * - setError: function for setting error state in App component
 *
 * State:
 * - showPassword: boolean
 *
 * Component hierarchy:
 * RoutesList -> LoginForm
 *
 */

function LoginForm({ login, error, setError }) {
  const [showPassword, setShowPassword] = useState(false);
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm(DEFAULT_FORM_DATA);
  const navigate = useNavigate();

  // reset error state when component mounts
  useEffect(() => {
    setError(null);
  }, [setError]);

  // show and hide password
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (evt) => {
    evt.preventDefault();
  };

  // handle form submission
  async function onSubmit(data) {
    try {
      await login(data.username, data.password);
      navigate('/');
    } catch (err) {
      console.debug('Login error: ', err);
    }
  }

  return (
    <GlassBox>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack
          spacing={3}
          width={{
            xs: 250,
            sm: 400,
          }}
          sx={{
            margin: '0 auto',
            alignItems: 'center',
          }}
        >

          <TextField
            label='Username'
            type='text'
            {...register('username', {
              required: 'Invalid username'
            })}
            error={!!errors.username}
            helperText={errors.username?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            fullWidth
          />

          <TextField
            label='Password'
            type={showPassword ? 'text' : 'password'}
            {...register('password', {
              required: 'Invalid password'
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            fullWidth
          />

          <StyledButton
            variant='contained'
            type='submit'
            disableElevation
          >
            Login
          </StyledButton>

          {error && (
            <StyledTypography color='error'>{error[0]}</StyledTypography>
          )}

        </Stack>
      </form>
    </GlassBox >
  );
}

export default LoginForm;