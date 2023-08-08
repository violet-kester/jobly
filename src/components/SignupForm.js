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
  Email,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import GlassBox from './Box/Box';
import StyledButton from './Button/Button';

/** SignupForm
 *
 * Props:
 * - signup: signup func to be called in parent
 *
 * State:
 * - formData: {
 *     username: '',
 *     firstName: '',
 *     lastName: '',
 *     password: '',
 *     email: ''
 *  }
 * - showPassword
 *
 * RoutesList -> SignupForm
 */
function SignupForm({ signup }) {
  const [formData, setFormData] = useState(
    {
      username: '',
      firstName: '',
      lastName: '',
      password: '',
      email: ''
    });
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
      await signup(formData);
      navigate("/");
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

        <FormControl variant='outlined' fullWidth sx={{ marginBottom: '8px' }}>
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

        <FormControl fullWidth sx={{ marginBottom: '8px' }}>
          <TextField
            variant='outlined'
            id='standard-required'
            name='firstName'
            label='First name'
            type='text'
            margin='normal'
            onChange={handleChange}
          />
        </FormControl>

        <FormControl fullWidth sx={{ marginBottom: '8px' }}>
          <TextField
            variant='outlined'
            id='standard-required'
            name='lastName'
            label='Last name'
            type='text'
            margin='normal'
            onChange={handleChange}
          />
        </FormControl>

        <FormControl fullWidth sx={{ marginBottom: '16px' }}>
          <TextField
            variant='outlined'
            id='input-with-icon-textfield'
            name='email'
            label='Email'
            type='text'
            margin='normal'
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Email />
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
          Sign up
        </StyledButton>

      </form>
    </GlassBox >



    // <form className="SignupForm" onSubmit={handleSubmit}>
    //   <div className="SignupForm-div" key={'SignupForm-div'} >
    //     <div>
    //       <input
    //         id='SignupForm-username'
    //         key='username'
    //         name='username'
    //         type='text'
    //         placeholder='username'
    //         value={formData.username}
    //         onChange={handleChange}
    //         aria-label="Title"
    //       />
    //     </div>
    //     <div>
    //       <input
    //         id='SignupForm-firstName'
    //         key='firstName'
    //         name='firstName'
    //         type='text'
    //         placeholder='firstName'
    //         value={formData.firstName}
    //         onChange={handleChange}
    //         aria-label="Title"
    //       />
    //     </div>
    //     <div>
    //       <input
    //         id='SignupForm-lastName'
    //         key='lastName'
    //         name='lastName'
    //         type='text'
    //         placeholder='lastName'
    //         value={formData.lastName}
    //         onChange={handleChange}
    //         aria-label="Title"
    //       />
    //     </div>
    //     <div>
    //       <input
    //         id='SignupForm-password'
    //         key='password'
    //         name='password'
    //         type='password'
    //         placeholder='password'
    //         value={formData.password}
    //         onChange={handleChange}
    //         aria-label="Title"
    //       />
    //     </div>
    //     <div>
    //       <input
    //         id='SignupForm-email'
    //         key='email'
    //         name='email'
    //         type='text'
    //         placeholder='email'
    //         value={formData.email}
    //         onChange={handleChange}
    //         aria-label="Title"
    //       />
    //     </div>
    //   </div>

    //   <input className='SignupForm-submit' type='submit' value='Sign up!'>
    //   </input>

    //   <div className="SignupForm-error">
    //     {/* Conditional here too. Map these for formatting */}
    //     {formData.errors}
    //   </div>
    // </form>
  );
}

export default SignupForm;