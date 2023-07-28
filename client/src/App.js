import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Main from './pages/Main';
// import Community from './pages/Community';
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
        {/* <Route path="/swap" element={<Swap />} /> */}
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
