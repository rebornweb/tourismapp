import { Box, Flex, Text } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" p={6} bg="teal.500">
      <Box>
        <Text fontSize="lg" fontWeight="bold" color="white">
          My App
        </Text>
      </Box>

      <Box display={{ base: "block", md: "none" }}>
        {/* Add a hamburger menu icon or any other toggle button here */}
      </Box>

      <Box
        display={{ base: "none", md: "flex" }}
        width={{ base: "auto", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <Text color="white" mr={4}>
          Home
        </Text>
        <Text color="white" mr={4}>
          About
        </Text>
        <Text color="white" mr={4}>
          Contact
        </Text>
      </Box>
    </Flex>
  );
};

export default Navigation;