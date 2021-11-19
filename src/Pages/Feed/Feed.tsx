import React, { useState } from 'react';

// Chakra-ui

import { Stack } from '@chakra-ui/layout';

// Components

import TweetBox from './components/TweetBox';
import FeedHeader from './components/FeedHeader';
import Tweet from './components/Tweet';

const Feed = () => {
  const [tweets, setTweets] = useState([]);

  return (
    <>
      <FeedHeader />
      <Stack as="section" spacing={0} width="full">
        <TweetBox tweets={tweets} setTweets={setTweets} />
        {
          tweets ? tweets.map((tweet) => <Tweet key={Math.random() * 10000} tweet={tweet} />) : ''
        }
      </Stack>
    </>
  );
};

export default Feed;
