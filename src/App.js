import HomePage from "./pages/HomePage";
import RoomsPage from "./pages/RoomsPage";
import RoomDetail from "./pages/RoomDetail";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/AdminDeshBoard";

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/rooms" element={<RoomsPage />} />
      <Route path="/rooms/:id" element={<RoomDetail />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
