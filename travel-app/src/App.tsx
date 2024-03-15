import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Map from './components/Map';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
      <Route index element={<Home />} />
  
                <Route path="map" element={<Map />} />

      </Routes>
    </Router>
  );
};

export default App;
