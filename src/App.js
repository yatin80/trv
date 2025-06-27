import logo from './logo.svg';
import './App.scss';
import Sidebar from './components/sidebar/Sidebar';
import RoutesNav from './routes/Routes';
import Header from './components/header/Header';
import { useState } from 'react';

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const handleNavToggle = () => {
    // const sidebar = document.querySelector('.sidebar');
    // const contentWrapper = document.querySelector('.content-wrapper');
    // sidebar.classList.toggle('active');
    // contentWrapper.classList.toggle('active');
    setNavOpen(!navOpen);
  };
  return (
    <div className={`App ${!navOpen ? 'nav-open' : ''}`}>
      <Sidebar />

      <div className='content-wrapper'>
        <Header handleNavToggle={handleNavToggle} navOpen={navOpen} />
        <div className='content-main'>
          <RoutesNav />
        </div>
      </div>
    </div>
  );
}

export default App;
