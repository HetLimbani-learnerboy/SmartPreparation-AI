import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Components/HomePage";
import SignIn from "./Components/SignIn"; 
import SignupPage from './Components/SingUp';
import GetStartedPage from './Components/GetStartedpage';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signuppage" element={<SignupPage />} />
        <Route path="/getstarted" element={<GetStartedPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
