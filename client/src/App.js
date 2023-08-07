import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import Main from "./pages/Main";
import Community from "./pages/Community";
import Signup from "./pages/Signup";
import JoinGroup from "./pages/JoinGroup";
import GroupDetail from "./pages/GroupDetail";
import CreateGroup from "./pages/CreateGroup";
import ManageGroup from "./pages/ManageGroup";
import Swap from "./pages/Swap";

function Layout() {
  const location = useLocation();
  const [page, setPage] = useState("main");

  useEffect(() => {
    const path = location.pathname.split("/")[1];
    setPage(path ? path : "main");
  }, [location]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/community" element={<Community />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/group/join" element={<JoinGroup />} />
        <Route path="/group/:id" element={<GroupDetail />} />
        <Route path="/group/create" element={<CreateGroup />} />
        <Route path="/group/manage" element={<ManageGroup />} />
        <Route path="/swap" element={<Swap />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
