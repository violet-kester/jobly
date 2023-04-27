import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Homepage from './Homepage';
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetail';
import JobList from './JobList';

/** RoutesList for routing .
 *
 * Props: N/A
 *
 * State: N/A
 *
 * App -> RoutesList -> [Homepage, CompanyList, CompanyDetail, JobList]
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
        element={<Login handleSave={login} />}
      />

      <Route
        path="/signup"
        element={<Signup handleSave={signup} />}
      />

      <Route
        path="/profile"
        element={<Profile handleSave={update} />}
      />

      <Route
        path="/*"
        element={<Navigate to={'/'} />}
      />
    </Routes>
  );
}

export default RoutesList;