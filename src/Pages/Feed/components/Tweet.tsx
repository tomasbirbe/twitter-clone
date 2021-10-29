import { Stack } from '@chakra-ui/layout';
import React from 'react';

const Tweet = () => (
  <Stack as="article">
    <Stack>Profile pic</Stack>
    <Stack>
      <Stack>Tweet</Stack>
      <Stack>Media</Stack>
    </Stack>
    <Stack>Icons</Stack>
  </Stack>
);

export default Tweet;
