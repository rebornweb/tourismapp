'use client'

import React, { Suspense } from 'react';

import FlightsBookingForm from '../../components/FlightsBookingForm';

const DisplayFlightsBooking: React.FC = () => {

return (
  <Suspense>
  <FlightsBookingForm/>
  </Suspense>

)

}

export default DisplayFlightsBooking;