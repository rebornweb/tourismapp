import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
//import FlightInfo from './components/FlightInfo';
import Flights from './components/Flights';
const App: React.FC = () => {
  return (
    <Router>
      <Layout>
      <Routes>
      <Route index element={<Home />} />
      <Route path='/flights' element={<Flights />} />


      </Routes>
      </Layout>
    </Router>
  );
};

export default App;
