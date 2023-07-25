import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Nav from './components/nav/Nav';

// import Home from './pages/Home';
// import Community from './pages/Community';
// import Swap from './pages/Swap';

function Layout() {
  const location = useLocation();
  const [page, setPage] = useState('home');

  useEffect(() => {
    const path = location.pathname.split('/')[1];
    setPage(path ? path : 'home');
  }, [location]);

  return (
    <div>
      <Nav path={page} />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/swap" element={<Swap />} />
      </Routes> */}
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
