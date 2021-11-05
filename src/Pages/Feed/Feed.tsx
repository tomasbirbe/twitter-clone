import React from 'react';

// Chakra-ui

import { Stack } from '@chakra-ui/layout';

// Components

import TweetBox from './components/TweetBox';
import FeedHeader from './components/FeedHeader';
import Tweet from './components/Tweet';

const Feed = () => (
  <>
    <FeedHeader />
    <Stack as="section" spacing={0}>
      <TweetBox />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </Stack>
  </>
);

export default Feed;
