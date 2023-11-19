import React, { useState } from 'react';
import Dashboard from './Dashboard';
import SearchEmployee from './SearchEmployee';
import { useUserContext } from '../context/userContext';

const Home = () => {
  const [showDashboard, setShowDashboard] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const { logoutUser } = useUserContext();

  const goToSearchEmployee = () => {
    setShowDashboard(false);
    setShowSearch(true);
  };

  const goToDashboard = () => {
    setShowDashboard(true);
    setShowSearch(false);
  };

  return (
    <>
      <div className='relative w-full max-w-4xl xl:max-w-6xl' style={{ overflowX: 'hidden' }}>
        <p onClick={logoutUser} className='cursor-pointer'><img src="logout.png" height={70} width={70} className="absolute top-0 right-0 mt-4 mr-4" alt="logout-img " /></p>
        
        {showDashboard && <Dashboard goToSearchEmployee={goToSearchEmployee} />}
        {showSearch && <SearchEmployee goToDashboard={goToDashboard} />}
      </div>
      <footer className='flex items-center justify-center w-full gap-10'>
        <p onClick={goToDashboard} className='cursor-pointer mb-1.5'><img src='user.png' height={50} width={38} alt='' /></p>
        <p onClick={goToSearchEmployee} className='cursor-pointer'><img src='home.png' height={50} width={50} alt='' /></p>
      </footer>
    </>
  );
};

export default Home;
