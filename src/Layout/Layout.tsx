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
      <Nav />
      {children}
      <Aside />
    </Stack>
  </Container>
);

export default App;
