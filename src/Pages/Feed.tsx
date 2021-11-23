import React, { useState } from 'react';

// Chakra-ui

import { Stack } from '@chakra-ui/layout';

// Components

import TweetBox from './components/TweetBox';
import FeedHeader from './components/FeedHeader';
import Tweet from './components/Tweet';
import { useMediaQuery } from '@chakra-ui/media-query';
import breakpoints from '../breakpoints';

const Feed = () => {
  const [tweets, setTweets] = useState([]);

  const [isMd] = useMediaQuery(`(min-width:${breakpoints.md})`);

  console.log(isMd);

  return (
    <>
      <FeedHeader />
      <Stack as="section" spacing={0} width="full">
        {isMd ? <TweetBox tweets={tweets} setTweets={setTweets} /> : ''}
        {tweets
          ? tweets.map((tweet) => (
              <Tweet key={Math.random() + new Date().getTime()} tweet={tweet} />
            ))
          : ''}
      </Stack>
    </>
  );
};

export default Feed;
