'use client'
import { Box, Flex, Button, ButtonGroup, IconButton, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import React, { FC } from "react";
import { useRouter, usePathname } from 'next/navigation'
import { Link } from '@chakra-ui/next-js'

const Navigation: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" p={6}>
      <Box display={{ base: 'block', md: 'none' }}>
        <IconButton
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={onToggle}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          variant="ghost"
        />
      </Box>

      <Box
        display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
      >
        <ButtonGroup variant='outline' spacing='4'>
          <Link href="/">
            <Button
              colorScheme={pathname === '/' ? 'secondary' : 'background.light'}
              variant={pathname === '/' ? 'baseGold' : 'defaultOutline'}
            >
              Home
            </Button>
          </Link>
          <Link href="/flights">
            <Button
              colorScheme={pathname === '/flights' ? 'primary' : 'background.light'}
              variant={pathname === '/flights' ? 'baseGold' : 'defaultOutline'}
            >
              Flights
            </Button>
          </Link>

        </ButtonGroup>
      </Box>
    </Flex>
  );
};

export default Navigation;
