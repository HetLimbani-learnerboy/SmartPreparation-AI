import React, { useEffect, useRef } from 'react';
import { Routes, Route } from "react-router-dom";
import Homepage from "./HomePage"
import SignIn from "./SignIn"; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}
export default App;
