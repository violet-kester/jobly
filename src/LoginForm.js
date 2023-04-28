import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


/** SearchForm.
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
  const navigate = useNavigate();

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
    // console.log('I am form data after setFormData', formData);
    try {
      await login(formData.username, formData.password);
      navigate("/");
    } catch (error) {
      console.log("error in loginform login", error);
      setFormData(currData => ({ ...currData, errors: error }));
    }
  }

  return (
    <form className="LoginForm" onSubmit={handleSubmit}>
      <div className="LoginForm-div" key={'LoginForm-div'} >
        <div>
          {/* {TODO: labels for inputs} */}
          <input
            id='LoginForm-username'
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
            id='LoginForm-password'
            key='password'
            name='password'
            type='password'
            placeholder='password'
            value={formData.password}
            onChange={handleChange}
            aria-label="Title"
          />
        </div>
      </div>

      <input className='LoginForm-submit' type='submit' value='Log In!'>
      </input>
      <div className="LoginForm-error">
        {/* Add conditional for displaying errors */}
        {formData.errors}
      </div>
    </form>
  );

}

export default LoginForm;