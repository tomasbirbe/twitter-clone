import React from 'react';

// Chakra-ui

import { Stack, Container } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/react';

import breakpoints from '../breakpoints';

import Nav from './components/Nav';
import Aside from './components/Aside';
import { IoTrailSignOutline } from 'react-icons/io5';

const App = ({ children }: { children: any }) => {
  const [isMd] = useMediaQuery(`(min-width: ${breakpoints.md})`);
  const [isLg] = useMediaQuery(`(min-width: ${breakpoints.lg})`);

  return (
    <Container
      maxW={{
        sm: 'container.sm',
        md: 'container.md',
        lg: 'container.lg',
        xl: 'container.xl',
      }}
      centerContent
      height="100%"
      p={0}
    >
      <Stack
        direction="row"
        height="100%"
        width="100%"
        spacing={0}
        justify="center"
        marginInlineEnd={{ md: 7, lg: 0 }}
      >
        <Nav
          minWidth={{ md: '80px', lg: '90px', xl: '260px' }}
          paddingInlineStart={{ md: 4, lg: 0 }}
          hidden={!isMd}
        />
        <Stack
          as="main"
          minWidth="100px"
          width="100%"
          maxWidth="600px"
          borderInlineEnd={{ sm: '', md: '1px' }}
          borderColor={{ sm: '', md: 'gray.100' }}
        >
          {children}
        </Stack>
        {isLg ? <Aside width="380px" /> : ''}
      </Stack>
    </Container>
  );
};

export default App;
