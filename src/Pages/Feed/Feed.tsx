import React, { useContext, useState } from 'react';

// Chakra-ui

import { Stack } from '@chakra-ui/layout';

// Components

import TweetBox from './components/TweetBox';
import FeedHeader from './components/FeedHeader';
import Tweet from './components/Tweet';
import { useMediaQuery } from '@chakra-ui/media-query';
import breakpoints from '../../breakpoints';
import TweetsContext from '../../tweetContext';

const Feed = () => {
  const [tweets] = useContext(TweetsContext);

  const [input, setInput] = useState('');

  const [isMd] = useMediaQuery(`(min-width:${breakpoints.md})`);
  const a = 2;

  return (
    <>
      <FeedHeader />
      <Stack as="section" spacing={0} width="full">
        {isMd ? <TweetBox input={input} setInput={setInput} /> : ''}
        {tweets
          ? tweets.map((tweet: string[]) => (
              <Tweet key={Math.random() + new Date().getTime()} tweet={tweet} />
            ))
          : ''}
      </Stack>
    </>
  );
};

export default Feed;
