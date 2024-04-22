'use client'
import { Box, Flex, Button, ButtonGroup } from "@chakra-ui/react";
import React, { FC } from "react";
import { useRouter, usePathname} from 'next/navigation'
import { Link } from '@chakra-ui/next-js'


const Navigation: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" p={6}>
      <Box display={{ base: 'block', md: 'none' }}>
        {/* Add a hamburger menu icon or any other toggle button here */}
      </Box>

      <Box
        display={{ base: 'none', md: 'flex' }}
        width={{ base: 'auto', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
        color="primary.600"
      >
        <ButtonGroup variant='outline' spacing='4'>
          <Link href="/">
            <Button
              colorScheme={pathname === '/' ? 'primary' : 'background.light'}
              variant={pathname === '/' ? 'solid' : 'outline'}
            >
              Home
            </Button>
          </Link>
          <Link href="/flights">
            <Button
              colorScheme={pathname === '/flights' ? 'primary' : 'background.light'}
              variant={pathname === '/flights' ? 'solid' : 'outline'}
            >
              Flights
            </Button>
          </Link>
          <Link href="/flightsmanual">
            <Button
              colorScheme={pathname === '/flightsmanual' ? 'primary' : 'background.light'}
              variant={pathname === '/flightsmanual' ? 'solid' : 'outline'}
            >
              Flights Manual
            </Button>
          </Link>
        </ButtonGroup>
      </Box>
    </Flex>
  );
};

export default Navigation;
