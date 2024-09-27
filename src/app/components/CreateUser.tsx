'use client'

import React, { useState } from 'react';
import { Heading, Input, Button } from '@chakra-ui/react'

interface CreateUserProps{

}

const CreateUserForm: React.FC<CreateUserProps> = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [givenName, setGivenName] = useState('');
  const [familyName, setFamilyName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const localApiUrl = `${process.env.NEXT_PUBLIC_HOST_DOMAIN_API}`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior
  
    setLoading(true);
    try {
      console.log("localApiUrl:", localApiUrl);
  
      const postData = {
        data: {
          phone_number: "+442080160509",
          given_name: givenName,
          family_name: familyName,
          email: email,
        }
      };
  
      const requestOptions: RequestInit = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      };
  
      const response = await fetch(`${localApiUrl}/create_user`, requestOptions);
      if (!response.ok) {
        const errorData = await response.json(); // Read error response body if available
        const errorMessage = errorData?.message || 'Unknown error occurred';
        throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorMessage}`);
      }
      
      const responseData = await response.json();
  
      console.log('Create user Response data:', responseData);
      setSuccess(true); // Set success state
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError('Error posting flight data: ' + error.message);
      } else {
        setError('Unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };
  


  /*
    <label>
          Phone Number:
          <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
        </label>
  */
  return (
    <div>
      <Heading as='h5' size='md' >New Create User</Heading>
     <br/>
      {success && <p>User created successfully!</p>}
      {error && <p>Error: {error}</p>}
      <form onSubmit={handleSubmit}>
      
        <label>
          Given Name:
          <Input type="text" value={givenName} onChange={(e) => setGivenName(e.target.value)} required />
        </label>
        <label>
          Family Name:
          <Input type="text" value={familyName} onChange={(e) => setFamilyName(e.target.value)} required />
        </label>
        <label>
          Email:
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <Button type="submit" disabled={loading} variant='outline'>Create User</Button>
      </form>
    </div>
  );
};


export default CreateUserForm;
