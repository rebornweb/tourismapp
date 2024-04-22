import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import DetailsMore from './components/sub/DetailsMore';
import FlightChoice from './components/Flights';
import Flightsmanual from './components/Flightsdefaultmanual';
import Offer from './components/OfferUpdate';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/flights' element={<FlightChoice />} />
          <Route path='/flightsmanual' element={<Flightsmanual />} />
          <Route path="/details/:locationId" element={<DetailsMore locationId={''} />} />
          <Route path="/flights/updateoffer/:offerId/:offerPassengerId" element={<Offer offerId={''} offerPassengerId={''}  />} />
        </Routes>
      </Layout>
    </Router>
  );
};
export default App;
