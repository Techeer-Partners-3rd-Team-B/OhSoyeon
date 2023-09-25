import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Infomation from './component/Infomation';
import Detail from './component/Detail';
import Connect from './component/Connect';
import Header from './component/Header';
import Main from './component/Main';


function App() {
  return (
   <>
    <BrowserRouter>
      <nav>
      <ul>
        <li><Link to={'/Header'}>About</Link>
        </li>
        </ul>
      </nav>
    
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path="/Header" element={<Header />} />
    </Routes>
    </BrowserRouter>

    <div className="container">
    <Infomation/>
    <Detail/>
    <Connect/>
    </div>
    </>
  );
  }

export default App;
