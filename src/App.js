import logo from './logo.svg';
import './App.css';
import RoutesList from './RoutesList';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';

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
