import React from 'react';

// Chakra-ui

import {
  Stack, Container,
} from '@chakra-ui/layout';

import Nav from './components/Nav';
import Aside from './components/Aside';

const App = ({ children } : {children: any}) => (
  <Container maxW="container.xl" height="100%">
    <Stack direction="row" height="100%" width="100%" spacing={0}>
      <Nav width="290px" />
      <Stack as="main" width="670px" borderInline="1px" borderColor="gray.100">
        {children}
      </Stack>
      <Aside width="400px" />
    </Stack>
  </Container>
);

export default App;
