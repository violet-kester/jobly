import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FormControl,
  InputAdornment,
  IconButton,
  TextField,
} from '@mui/material';
import {
  AccountCircle,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import GlassBox from './Box/Box';
import StyledButton from './Button/Button';

/** LoginForm.
 *
 * Props:
 * - login: login func to be called in parent
 *
 * State: formData
 *
 * RoutesList -> LoginForm
 */

function LoginForm({ login }) {
  //TODO: move the initial state to a variable for concision
  const [formData, setFormData] = useState({ username: '', password: '', errors: null });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  function handleChange(evt) {
    const fieldName = evt.target.name;
    const value = evt.target.value;

    setFormData(currData => {
      currData[fieldName] = value;
      return { ...currData };
    });
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await login(formData.username, formData.password);
      navigate('/');
    } catch (error) {
      setFormData(currData => ({ ...currData, errors: error }));
    }
  }

  return (
    <GlassBox sx={{
      width: '50vw',
      minWidth: '350px',
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      justifyContent: 'center'
    }}>
      <form color='secondary' onSubmit={handleSubmit}>

        <FormControl fullWidth sx={{ marginBottom: '8px' }}>
          <TextField
            variant='outlined'
            id='input-with-icon-textfield'
            name='username'
            label='Username'
            type='text'
            margin='normal'
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>

        <FormControl variant='outlined' fullWidth sx={{ marginBottom: '16px' }}>
          <TextField
            variant='outlined'
            id='standard-adornment-password'
            name='password'
            label='Password'
            type={showPassword ? 'text' : 'password'}
            margin='normal'
            onChange={handleChange}
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
        </FormControl>

        <StyledButton
          variant='contained'
          type='submit'
          size='large'
          disableElevation
        >
          Login
        </StyledButton>

      </form>
    </GlassBox >




    // <form className='LoginForm' onSubmit={handleSubmit}>
    //   <div className='LoginForm-div' key={'LoginForm-div'} >
    //     <div>
    //       {/* {TODO: labels form inputs} */}
    //       <input
    //         id='LoginForm-username'
    //         key='username'
    //         name='username'
    //         type='text'
    //         placeholder='username'
    //         value={formData.username}
    //         onChange={handleChange}
    //         aria-label='Title'
    //       />
    //     </div>
    //     <div>
    //       <input
    //         id='LoginForm-password'
    //         key='password'
    //         name='password'
    //         type='password'
    //         placeholder='password'
    //         value={formData.password}
    //         onChange={handleChange}
    //         aria-label='Title'
    //       />
    //     </div>
    //   </div>

    //   <input className='LoginForm-submit' type='submit' value='Log In!'>
    //   </input>
    //   <div className='LoginForm-error'>
    //     {/* Add conditional for displaying errors */}
    //     {formData.errors}
    //   </div>
    // </form>
  );

}

export default LoginForm;