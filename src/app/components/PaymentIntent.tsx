//https://duffel.com/docs/guides/collecting-customer-card-payments

import React, { useState } from 'react';

const PaymentIntentComponent = () => {
  const [response, setResponse] = useState('');

  const handleClick = async () => {
    try {
      const postData = {
        data: {
          currency: 'GBP',
          amount: '30.20'
        }
      };

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData)
      };
      const localApiUrl = `${process.env.NEXT_PUBLIC_HOST_DOMAIN_API}` 

      const response = await fetch(localApiUrl, requestOptions);
      const responseData = await response.json();
      setResponse(JSON.stringify(responseData));
    } catch (error) {
      console.error('Error:', error);
      setResponse('Error occurred, check console for details.');
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Send Payment Intent</button>
      <div>{response}</div>
    </div>
  );
};

export default PaymentIntentComponent;
