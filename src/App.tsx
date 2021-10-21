import React from 'react';
import {
  Stack, Box, Grid, GridItem, Container,
} from '@chakra-ui/layout';

const App = () => (
  <Container maxW="container.xl">
    <Stack direction="row" bg="yellow.300" height="50px" />
    <Grid
      gap={6}
      templateColumns="repeat(10,1fr)"
    >
      {/* Nav */}
      <GridItem as="nav" colSpan={2}>
        <Stack as="ul" align="center" bg="green.500" height="600px">
          {/* <li>Home</li>
          <li>Explore</li>
          <li>Notifications</li>
          <li>Messages</li>
          <li>Bookmarks</li>
          <li>Lists</li>
          <li>Profile</li>
          <li>More</li> */}
        </Stack>
      </GridItem>

      {/* Feed */}
      <GridItem colSpan={5}>
        <Grid
          templateRows="repeat(3,1fr)"
          templateColumns="repeat(7, 1fr)"
          gap={0}
          height="100px"
        >
          <GridItem bg="tomato" colSpan={1} rowSpan={3} />
          <GridItem bg="tomato" colSpan={6} rowSpan={2} />
          <GridItem bg="tomato" colSpan={6} />
        </Grid>
        <Stack bg="purple.500" height="485px" mt="15px" />
      </GridItem>

      <GridItem colSpan={3}>
        <Stack align="center" height="600px" bg="blue.700" />
      </GridItem>
    </Grid>
  </Container>
);

export default App;
