import React, { useEffect, useRef } from 'react';
import { Routes, Route } from "react-router-dom";
import Homepage from "./Components/HomePage"
import SignIn from "./Components/SignIn"; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}
export default App;
