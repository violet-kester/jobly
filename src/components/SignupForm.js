import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


/** SearchForm.
 *
 * Props:
 * - signup: signup func to be called in parent
 *
 * State: formData {
      username: '',
      firstName: '',
      lastName: '',
      password: '',
      email: ''
    }
 *
 * RoutesList -> SignupForm
 */
//TODO: initial state could be variable
function SignupForm({ signup }) {
  const [formData, setFormData] = useState(
    {
      username: '',
      firstName: '',
      lastName: '',
      password: '',
      email: ''
    });

  const navigate = useNavigate();

  function handleChange(evt) {
    const fieldName = evt.target.name;
    const value = evt.target.value;

    setFormData(currData => {
      currData[fieldName] = value;
      return { ...currData };
    });
  }
  //TODO: docstrings for these and in loginForm
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      // console.log('I am form data after setFormData', formData);
      await signup(formData);
      navigate("/");
    } catch (error) {
      console.log("error in loginform login", error);
      setFormData(currData => ({ ...currData, errors: error }));
    }
  }

  return (
    <form className="SignupForm" onSubmit={handleSubmit}>
      <div className="SignupForm-div" key={'SignupForm-div'} >
        <div>
          {/* Labels yo */}
          <input
            id='SignupForm-username'
            key='username'
            name='username'
            type='text'
            placeholder='username'
            value={formData.username}
            onChange={handleChange}
            aria-label="Title"
          />
        </div>
        <div>
          <input
            id='SignupForm-firstName'
            key='firstName'
            name='firstName'
            type='text'
            placeholder='firstName'
            value={formData.firstName}
            onChange={handleChange}
            aria-label="Title"
          />
        </div>
        <div>
          <input
            id='SignupForm-lastName'
            key='lastName'
            name='lastName'
            type='text'
            placeholder='lastName'
            value={formData.lastName}
            onChange={handleChange}
            aria-label="Title"
          />
        </div>
        <div>
          <input
            id='SignupForm-password'
            key='password'
            name='password'
            type='password'
            placeholder='password'
            value={formData.password}
            onChange={handleChange}
            aria-label="Title"
          />
        </div>
        <div>
          <input
            id='SignupForm-email'
            key='email'
            name='email'
            type='text'
            placeholder='email'
            value={formData.email}
            onChange={handleChange}
            aria-label="Title"
          />
        </div>
      </div>

      <input className='SignupForm-submit' type='submit' value='Sign up!'>
      </input>

      <div className="SignupForm-error">
        {/* Conditional here too. Map these for formatting */}
        {formData.errors}
      </div>
    </form>
  );

}

export default SignupForm;