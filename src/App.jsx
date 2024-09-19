import { Outlet } from 'react-router-dom';
import Header from './components/NavBar.jsx'
import Footer from './components/Footer.jsx';
import Navbar from './components/NavBar.jsx';

function App() {
  return (
    <>
      <Navbar/>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;