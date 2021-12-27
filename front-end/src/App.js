import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
