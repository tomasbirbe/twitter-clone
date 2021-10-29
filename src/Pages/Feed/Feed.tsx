import React from 'react';

// Chakra-ui

import { Stack } from '@chakra-ui/layout';

// Components

import TweetBox from './components/TweetBox';
import FeedHeader from './components/FeedHeader';
import Tweet from './components/Tweet';

const Feed = () => (
  <Stack
    as="main"
    width="100%"
    maxWidth="600px"
  >
    <FeedHeader />
    <Stack as="section">
      <TweetBox />
      <Tweet />
    </Stack>
  </Stack>
);

export default Feed;
