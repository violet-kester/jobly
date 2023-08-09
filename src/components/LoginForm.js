import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
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

const DEFAULT_FORM_DATA = {
  username: '',
  password: '',
};

/** LoginForm
 *
 * Props:
 * - login: login function to be called in parent
 *
 * State:
 * - showPassword
 *
 * RoutesList -> LoginForm
 */

function LoginForm({ login }) {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(DEFAULT_FORM_DATA);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (evt) => {
    evt.preventDefault();
  };

  async function onSubmit(data) {
    await login(data.username, data.password);
    navigate('/');
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

          <StyledButton
            variant='contained'
            type='submit'
            size='large'
            disableElevation
          >
            Login
          </StyledButton>

        </Stack>
      </form>
    </GlassBox >
  );
}

export default LoginForm;