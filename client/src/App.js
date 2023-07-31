import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Main from './pages/Main';
// import Community from './pages/Community';
import Signup from './pages/Signup';
import JoinGroup from './pages/JoinGroup';
import GroupDetail from './pages/GroupDetail';
// import Swap from './pages/Swap';

function Layout() {
  const location = useLocation();
  const [page, setPage] = useState('main');

  useEffect(() => {
    const path = location.pathname.split('/')[1];
    setPage(path ? path : 'main');
  }, [location]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/community" element={<Community />} /> */}
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/swap" element={<Swap />} /> */}
        <Route path="/group/join" element={<JoinGroup />} />
        <Route path="/group/detail" element={<GroupDetail />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
