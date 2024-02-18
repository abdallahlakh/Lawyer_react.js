import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AdvancedSearch from './AdvancedSearch';
import Images from './Images';
import Navbar from './Navbar';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <div className="relative">
      <AdvancedSearch />
  
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
