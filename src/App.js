import './App.css';
import RoutesList from './RoutesList';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import userContext from "./userContext";
import JoblyApi from './api';

/** App for Jobly! TODO: UPDATE ME
 *
 * Props: N/A
 *
 * State: N/A
 *
 * App -> [NavBar, RoutesList]
 */

function App() {


  const defaultUser = {
    username: '',
    isLoggedIn: false,
    isAdmin: false
  };
  const [currentUser, setCurrentUser] = useState(defaultUser);
  // user: {
  //   applied: [],
  //   username: '',
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   isLoggedIn: false,
  //   isAdmin: false
  // }
  const [token, setToken] = useState(null);

  /** User login */
  async function login(username, password) {
    // console.log('I am in login :)', username, password);
    //authenticate user and set token
    const response = await JoblyApi.loginUser(username, password);
    // console.log('i am the response', response);
    setToken(response);
    // get user details and set current user
    const user = await JoblyApi.getUser(username);
    // console.log('I am the user', user);
    setCurrentUser(user);
    // console.log('I am currentUser', currentUser);
  }

  /** User logout */
  function logout() {
    setCurrentUser(defaultUser);
  }

  /** User signup */
  /** user: { username, password, firstName, lastName, email } */
  async function signup(user) {
    const response = await JoblyApi.registerUser(user);
    login(user.username, user.password);
  }

  /** User update */
  /** user: { username, password, firstName, lastName, email } */
  async function update(user) {
    const response = await JoblyApi.registerUser(user);
    login(user.username, user.password);
  }



  return (
    <div className="App">
      {/* // TODO: does it matter if Provider is in/outside of router? */}
      <userContext.Provider value={{
        user: {
          username: currentUser.username,
          isLoggedIn: currentUser.isLoggedIn,
          isAdmin: currentUser.isAdmin
        }
      }}>
        <BrowserRouter>
          <NavBar logout={logout} />
          <RoutesList login={login} signup={signup} update={update}/>
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
