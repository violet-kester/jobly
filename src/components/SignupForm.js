import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  InputAdornment,
  IconButton,
  Stack,
  TextField,
} from '@mui/material';
import {
  AccountCircle,
  Email,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import GlassBox from './Box/Box';
import StyledButton from './Button/Button';

const DEFAULT_FORM_DATA = {
  username: '',
  firstName: '',
  lastName: '',
  password: '',
  email: '',
};

/** SignupForm
 *
 * Props:
 * - signup: signup function to be called App component
 * - login: login function to be called in App component
 *
 * State:
 * - showPassword: boolean
 *
 * Component hierarchy:
 * RoutesList -> SignupForm
 *
 */

function SignupForm({ signup, login }) {
  const [showPassword, setShowPassword] = useState(false);
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm(DEFAULT_FORM_DATA);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (evt) => {
    evt.preventDefault();
  };

  async function onSubmit(data) {
    await signup(data);
    await login(data.username, data.password);
  }

  return (
    <GlassBox>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack spacing={3} width={400} sx={{ margin: '0 auto' }}>

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
          />

          <TextField
            label='First name'
            type='text'
            {...register('firstName')}
          />

          <TextField
            label='Last name'
            type='text'
            {...register('lastName')}
          />

          <TextField
            label='Email'
            type='email'
            {...register('email', {
              required: 'Invalid username'
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Email />
                </InputAdornment>
              ),
            }}
          />

          <StyledButton
            variant='contained'
            type='submit'
            size='large'
            disableElevation
          >
            Sign up
          </StyledButton>

        </Stack>
      </form>
    </GlassBox >
  );
}

export default SignupForm;