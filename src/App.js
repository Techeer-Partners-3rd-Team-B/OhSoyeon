import React, { Component } from 'react';
import './App.css';
import Infomation from './component/Infomation';
import Detail from './component/Detail';
import Link from './component/Link';

function App() {
  return (
      <div className="container">
        <div className="item">
        <Infomation></Infomation>
        </div>
        <div className="item2">
        <Detail></Detail>
        </div>
        <div className="item3">
        <Link></Link>
        </div>
      </div>
  );
  }

export default App;
