import { Box, Flex, Text, Button, ButtonGroup } from "@chakra-ui/react";
import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation from react-router-dom

const Navigation: FC = () => {
  const location = useLocation();

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
          <Link to="/">
            <Button
              colorScheme={location.pathname === '/' ? 'primary' : 'background.light'}
              variant={location.pathname === '/' ? 'solid' : 'outline'}
            >
              Home
            </Button>
          </Link>
          <Link to="/flights">
            <Button
              colorScheme={location.pathname === '/flights' ? 'primary' : 'background.light'}
              variant={location.pathname === '/flights' ? 'solid' : 'outline'}
            >
              Flights
            </Button>
          </Link>
          <Link to="/flightsmanual">
            <Button
              colorScheme={location.pathname === '/flightsmanual' ? 'primary' : 'background.light'}
              variant={location.pathname === '/flightsmanual' ? 'solid' : 'outline'}
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
