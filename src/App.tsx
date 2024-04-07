import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
//import FlightInfo from './components/FlightInfo';

import OfferRequest from './components/Flights';
import Flightsmanual from './components/Flightsdefaultmanual';
const App: React.FC = () => {
  return (
    <Router>
      <Layout>
      <Routes>
      <Route index element={<Home />} />
      <Route path='/flights' element={<OfferRequest />} />
      <Route path='/flightsmanual' element={<Flightsmanual />} />
      

      </Routes>
      </Layout>
    </Router>
  );
};

export default App;
