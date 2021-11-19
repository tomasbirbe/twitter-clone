import React from 'react';

// Chakra-ui

import {
  Stack, Container,
} from '@chakra-ui/layout';

import { useMediaQuery } from '@chakra-ui/media-query';
import Nav from './components/Nav';
import Aside from './components/Aside';

const App = ({ children } : {children: any}) => {
  const [isMedium] = useMediaQuery('(min-width: 990px)');
  return (
    <Container maxW="container.lg" height="100%">
      <Stack direction="row" height="100%" width="100%" spacing={0}>
        <Nav width={{ lg: '70px', xs: '290px' }} />
        <Stack as="main" width="full" borderInline="1px" borderColor="gray.100">
          {children}
        </Stack>
        {
          isMedium
            ? <Aside width="400px" />
            : ''
        }
      </Stack>
    </Container>
  );
};

export default App;
