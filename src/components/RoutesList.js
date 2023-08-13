import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Homepage from './Homepage';
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetail';
import JobList from './JobList';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

/** RoutesList
 *
 * Props:
 * - login: login function to be called in App component
 * - signup: signup function to be called in App component
 * - error: API error message
 * - setError: function for setting error state in App component
 *
 * Component hierarchy:
 * App -> RoutesList -> [
 *   Homepage,
 *   CompanyList,
 *   CompanyDetail,
 *   JobList,
 *   LoginForm,
 *   SignupForm,
 *   Profile,
 * ]
 *
 */

function RoutesList({ login, signup, error, setError }) {

  return (
    <Routes>
      <Route
        path="/"
        element={<Homepage />}
      />

      <Route
        path="/companies"
        element={<CompanyList />}
      />

      <Route
        path="/companies/:handle"
        element={<CompanyDetail />}
      />

      <Route
        path="/jobs"
        element={<JobList />}
      />

      <Route
        path="/login"
        element={<LoginForm
          login={login}
          error={error}
          setError={setError}
        />}
      />

      <Route
        path="/signup"
        element={<SignupForm
          signup={signup}
          login={login}
          error={error}
          setError={setError}
        />}
      />

      {/* <Route
        path="/profile"
        element={<ProfileForm update={update} />}
      /> */}

      <Route
        path="/*"
        element={<Navigate to={'/'} />}
      />
    </Routes>
  );
}

export default RoutesList;