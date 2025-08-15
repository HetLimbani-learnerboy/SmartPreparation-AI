import React, { useEffect, useRef } from 'react';
import { Routes, Route } from "react-router-dom";
import Homepage from "./Components/HomePage"
import SignIn from "./Components/SignIn"; 
import SignupPage from './Components/SingUp';
import GetStartedPage from './Components/GetStartedpage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path='/signuppage' element={<SignupPage/>}/>
      <Route path='/getstarted' element={<GetStartedPage/>}/>
    </Routes>
  );
}
export default App;
