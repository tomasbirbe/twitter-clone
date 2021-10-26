import React from 'react';

import {
  Stack, Grid, GridItem, Text,
} from '@chakra-ui/layout';
import { HiOutlineSparkles } from 'react-icons/hi';
import ProfilePic from '../components/ProfilePic';
import IconButton from '../components/IconButton';

const Feed = () => (
  <Stack
    as="main"
    width="100%"
    maxWidth="600px"
  >
    <Stack
      as="header"
      direction="row"
      align="center"
      borderBlockEnd="1px"
      borderColor="gray.100"
      justify="space-between"
      width="100%"
    >
      <Text fontWeight="bold" fontSize={20}>Home</Text>
      <IconButton icon={HiOutlineSparkles} color="black" size={5} />
    </Stack>
    <Grid
      as="section"
      templateRows="repeat(3,1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={0}
      height="100px"
    >
      <GridItem colSpan={1} rowSpan={3}>
        <ProfilePic size={14} />
      </GridItem>
      <GridItem colSpan={4} />
      <GridItem colSpan={4} />
    </Grid>
    {/* <Stack bg="purple.500" height="485px" mt="15px" /> */}
  </Stack>
);

export default Feed;
