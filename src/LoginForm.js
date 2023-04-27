import { useState } from 'react';
import { Navigate, useHistory } from 'react-router-dom';


function LoginForm({login}) {
  const [formData, setFormData] = useState({username: '', password: ''});

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
    setFormData(formData);
    console.log('I am form data after setFormData', formData);
    await login(formData.username, formData.password);
    <Navigate to={'/'} />
  }

  return (
    <form className="LoginForm" onSubmit={handleSubmit}>
      <div className="LoginForm-div" key={'LoginForm-div'} >
        <div>
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
    </form>
  );

}

export default LoginForm;