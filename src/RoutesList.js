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
import ProfileForm from './ProfileForm';

/** RoutesList for routing
 *
 * Props:
 * - login: login func to be called in parent
 * - signup: signup func to be called in parent
 * - update: update func to be called in parent
 *
 * State: N/A
 *
 * App -> RoutesList -> [
 *   Homepage,
 *   CompanyList,
 *   CompanyDetail,
 *   JobList,
 *   LoginForm,
 *   SignupForm,
 *   Profile
 * ]
 *
 */

function RoutesList({login, signup, update}) {
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
        element={<LoginForm login={login} />}
      />

      <Route
        path="/signup"
        element={<SignupForm signup={signup} />}
      />

      <Route
        path="/profile"
        element={<ProfileForm update={update} />}
      />

      <Route
        path="/*"
        element={<Navigate to={'/'} />}
      />
    </Routes>
  );
}

export default RoutesList;