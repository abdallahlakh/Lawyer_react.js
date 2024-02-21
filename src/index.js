import React from 'react';
import { createRoot } from 'react-dom/client'; // Importing createRoot from react-dom/client
import AdvancedSearch from './AdvancedSearch';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ViewDetails from './ViewDetails';

import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
                <Routes>
                    <Route exact path="/advanced-search" element={<AdvancedSearch />} />
                    <Route path="/advanced-search/view-details/:id" element={<ViewDetails />} />
                </Routes>
    </Router>
    
  </React.StrictMode>
);
