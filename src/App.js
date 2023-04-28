import './App.css';
import RoutesList from './RoutesList';
import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import userContext from "./userContext";
import JoblyApi from './api';
import jwt_decode from "jwt-decode";

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

  console.log('App component rendered', currentUser);

  /** User login */
  async function login(username, password) {
    // console.log('I am in login :)', username, password);
    //authenticate user and set token
    const response = await JoblyApi.loginUser(username, password);
    // console.log('i am the response', response);
    setToken(response);
    const user = await JoblyApi.getUser(username, password);
    setCurrentUser(user => ({ ...user, isLoggedIn: true }));

  }

  // useEffect(function setUserOnLogin() {
  //   console.debug("setUserOnLogin");
  //   async function fetchUser() {
  //     // get user details and set current user
  //     // TODO: move these inside login: 55, 60
  //     const decodedUser = jwt_decode(token);

  //     const user = await JoblyApi.getUser(decodedUser.username);
  //     // console.log('I am the user', user);
  //     // console.log("before setCurrentUser", currentUser);
  //     setCurrentUser(currUser => ({ ...user, isLoggedIn: true }));
  //     // console.log('I am currentUser in effect', currentUser);
  //   }
  //   if (token) {
  //     fetchUser();
  //   }
  // }, [token]);

  /** User logout */
  function logout() {
    setCurrentUser(defaultUser);
  }

  /** User signup */
  /** user: { username, password, firstName, lastName, email } */
  async function signup(user) {
    console.log('I am user in signup', user);
    const response = await JoblyApi.registerUser(user);
    console.log(response, 'I am in signup', response);
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
          <RoutesList login={login} signup={signup} update={update} />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
