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

function RoutesList() {
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
        path="/companies/:name"
        element={<CompanyDetail />}
      />

      <Route
        path="/jobs"
        element={<JobList />}
      />
      <Route
        path="/*"
        element={<Navigate to={'/'} />}
      />
    </Routes>
  );
}

export default RoutesList;