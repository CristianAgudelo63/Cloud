import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/home.js';
import SignIn from './Pages/signIn.js';
import SignUp from './Pages/signUp.js';
import NotFound from './Pages/404.js';
import './style.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Cloud-Client/' element={<SignIn />} />
        <Route path='/Cloud-Client/signup' element={<SignUp />} />
        <Route path='/Cloud-Client/home' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
