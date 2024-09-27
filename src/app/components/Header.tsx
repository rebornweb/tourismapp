'use client'

import React, {useEffect, useState} from 'react';
import { Box, Heading, Text, Image, Stack, Button } from '@chakra-ui/react';
import UserProfile from '../components/UserProfile';
import { Link } from '@chakra-ui/next-js'
import { useRouter, usePathname } from 'next/navigation'



//Import images with direct file name when put images in public folder




const Header: React.FC = () => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const pathname = usePathname();

  const baseURL = process.env.NEXT_PUBLIC_AUTH0_BASE_URL;
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch(`${baseURL}/api/auth/me`, {
          credentials: 'include', // Include cookies
        });
        if (res.ok) {
          const data = await res.json();
          setUser(data);
        } else {
          throw new Error('Failed to fetch profile');
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
      } finally {
        setLoading(false);
      }
    };
    
    

    fetchProfile();
  }, []);


  return (
    <header>
      <Stack direction='row' alignItems='center'>
        <Box flex='1' color='header.100'>
          <Heading data-test='main-heading' as='h1'>Welcome to SkySetters</Heading>
          <Text>Explore the world with our amazing travel recommendations!</Text>
        </Box>
        <Box>
        
          <h1>User Profile</h1>
          
          {loading ? (
            <div>Loading...</div>
          ) : user ? (
            <div>
            <UserProfile user={user} />
            
            <Link href="/api/auth/logout">
            <Button
              colorScheme='background.light'
              variant='baseBlue' 
            >
            Logout
          </Button>
        </Link>
        </div>
          ) : (
            <Link href="/api/auth/login">
            <Button
              colorScheme='background.light'
              variant='baseBlue' 
            >
            Login
          </Button>
          </Link>
          )}
      


        </Box>
        <Box  m={[6, 7]}>
          <Image
            borderRadius='full'
            boxSize='200px'
            src="airport-coffee.jpg"
            alt='Airport Coffee'
          />
        </Box>
      </Stack>
    </header>
  );
};

export default Header;
