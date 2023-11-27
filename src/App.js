import './App.css';
import React from 'react';
import Registration from './components/Registration';
import HomePage from './components/HomePage';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Set the default route to the Login page */}
           <Route path="/registration" element={<Registration />} />
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/HomePage" element={<HomePage />} />
        </Routes>
      </BrowserRouter> 
    
    </div>
  );
}

export default App;