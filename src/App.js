
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Index';
import Sidebar from './components/Sidebar';
import Home from './Pages/Index';

function App() {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}

export default App;
