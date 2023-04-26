import logo from './logo.svg';
import './App.css';
import RoutesList from './RoutesList';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';

/** App for Jobly!
 *
 * Props: N/A
 *
 * State: N/A
 *
 * App -> [NavBar, RoutesList]
 */

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
