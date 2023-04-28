import './App.css';
import RoutesList from './RoutesList';
import { useState, useEffect } from 'react';
import { Navigate, useNavigate, Route } from 'react-router-dom';
import NavBar from './NavBar';
import userContext from "./userContext";
import JoblyApi from './api';
import jwt_decode from "jwt-decode";

/** App for Jobly!
 *
 * Props: N/A
 *
 * State:
 * - currentUser:
 * {
 *   applications: [],
 *   email: "joel@joelburton.com",
 *   firstName: "Test",
 *   isAdmin: false,
 *   isLoggedIn: true,
 *   lastName: "User",
 *   username: "testuser"
 * }
 * - token: string token
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
  // TODO: could set default to localStorage token
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  // console.log('App component rendered', currentUser);

  /** User login */
  async function login(username, password) {
    // try {
    // console.log('I am in login :)', username, password);
    //authenticate user and set token
    const token = await JoblyApi.loginUser(username, password);
    // console.log('i am the response', response);
    localStorage.setItem("token", token);
    setToken(token);
    const user = await JoblyApi.getUser(username, password);
    // console.log('I am user in login', user)
    //TODO: don't need to use the cb pattern here because state is being overwritten
    setCurrentUser(currUser => ({ ...user, isLoggedIn: true }));
    // } catch (error) {
    //   console.log("error in app login", error[0]);
    //   return <h2>error: error[0]</h2>;
    // }
  }

  useEffect(function setLocalUserOnRefresh() {
    // console.log("setUserOnLogin");
    async function getLocalUser() {
      const localToken = localStorage.getItem("token");
      if (localToken) {
        JoblyApi.token = localToken;
        const decodedUser = jwt_decode(localToken);
        // console.log("localToken", localToken);
        // console.log("from useEffect jobly token", JoblyApi.token);
        // console.log(decodedUser.username);
        const localUser = await JoblyApi.getUser(decodedUser.username);
        // console.log("localUser", localUser);
        setCurrentUser({ ...localUser, isLoggedIn: true });
      }
    }
    getLocalUser();
  }, [token]);

  // useEffect(function setUserOnLogin() {
  //   console.debug("setUserOnLogin");
  //   async function fetchUser() {
  //     // get user details and set current user
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
    console.log('in logout after setCurrentUser', currentUser);
    setToken('');
    localStorage.removeItem("token");
    //TODO: we know this is wrong and why, but <Navigate to='/' /> wasnt working
    navigate('/');
  }

  /** User signup */
  /** user: { username, password, firstName, lastName, email } */
  async function signup(user) {
    console.log('I am user in signup', user);
    const token = await JoblyApi.registerUser(user);
    console.log('I am in signup', token);

    setToken(token);
    setCurrentUser(currUser => ({ ...user, isLoggedIn: true }));
    navigate('/');
  }
  //TODO: makes sure this is updated to not be a lie
  /** User update */
  /** user: { username, password, firstName, lastName, email } */
  async function update(user) {
    const response = await JoblyApi.registerUser(user);
    login(user.username, user.password);
  }


  return (
    <div className="App">
      <userContext.Provider value={{
        user: {
          username: currentUser.username,
          isLoggedIn: currentUser.isLoggedIn,
          isAdmin: currentUser.isAdmin
        }
      }}>
        <NavBar logout={logout} />
        <RoutesList login={login} signup={signup} update={update} />
      </userContext.Provider>
    </div>
  );
}

export default App;
