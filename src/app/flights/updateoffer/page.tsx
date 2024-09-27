'use client'

import React, { Suspense } from 'react';
import Offer from '../../components/UpdateOffer';

const DisplayOffer: React.FC = () => {

return (
  <Suspense>
  <Offer/>
  </Suspense>

  )
}

export default DisplayOffer;