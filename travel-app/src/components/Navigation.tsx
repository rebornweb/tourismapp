import { Box, Flex, Text } from "@chakra-ui/react";
import React, {FC} from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navigation: FC = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" p={6} bg="teal.500">
      <Box display={{ base: "block", md: "none" }}>
        {/* Add a hamburger menu icon or any other toggle button here */}
      </Box>

      <Box
        display={{ base: "none", md: "flex" }}
        width={{ base: "auto", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <Link to="/">
          <Text color="white" mr={4}>
            Home
          </Text>
        </Link>
        <Link to="/map">
          <Text color="white" mr={4}>
            Map
          </Text>
        </Link>
        <Link to="/about">
          <Text color="white" mr={4}>
            About
          </Text>
        </Link>
        <Link to="/contact">
          <Text color="white" mr={4}>
            Contact
          </Text>
        </Link>
      </Box>
    </Flex>
  );
};

export default Navigation;
