import './App.css';
import { useState, useEffect } from 'react';
import { Navigate, useNavigate, Route } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import JoblyApi from './api';
import NavBar from './NavBar';
import RoutesList from './RoutesList';
import userContext from "./userContext";

/** Jobly App
 *
 * Props: N/A
 *
 * State:
 * - currentUser:
 * {
 *   applications: [],
 *   email: "test@mail.com",
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
  // TODO:
  // could set default to localStorage token
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  /** User login */
  async function login(username, password) {
    const token = await JoblyApi.loginUser(username, password);
    localStorage.setItem("token", token);
    setToken(token);
    const user = await JoblyApi.getUser(username, password);
    // TODO:
    // don't need to use the cb pattern here because state is being overwritten
    setCurrentUser(currUser => ({ ...user, isLoggedIn: true }));
  }

  useEffect(function setLocalUserOnRefresh() {
    async function getLocalUser() {
      const localToken = localStorage.getItem("token");
      if (localToken) {
        JoblyApi.token = localToken;
        const decodedUser = jwt_decode(localToken);
        const localUser = await JoblyApi.getUser(decodedUser.username);
        setCurrentUser({ ...localUser, isLoggedIn: true });
      }
    }
    getLocalUser();
  }, [token]);

  /** User logout */
  function logout() {
    setCurrentUser(defaultUser);
    setToken('');
    localStorage.removeItem("token");
    // TODO:
    // wrong way to route
    // <Navigate to='/' /> isn't working
    navigate('/');
  }

  /** User signup
   *
   * Expected input:
   * { username, password, firstName, lastName, email }
   */
  async function signup(user) {
    const token = await JoblyApi.registerUser(user);
    setToken(token);
    setCurrentUser(currUser => ({ ...user, isLoggedIn: true }));
    navigate('/');
  }

  // TODO:
  // doc string is a lie?
  /** User update
   *
   * Expected input:
   * { username, password, firstName, lastName, email }
   */
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
