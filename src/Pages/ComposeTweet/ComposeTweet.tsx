import Icon from '@chakra-ui/icon';
import { Stack } from '@chakra-ui/layout';
import React, { useContext, useState } from 'react';
import { IoArrowBackSharp } from 'react-icons/io5';
import { useHistory } from 'react-router';
import IconButton from '../../components/IconButton';
import TwitterButton from '../../components/TwitterButton';
import TweetsContext from '../../tweetContext';
import TweetBox from '../Feed/components/TweetBox';

const ComposeTweet = () => {
  const [input, setInput] = useState('');
  const [tweets, setTweets] = useContext(TweetsContext);
  const history = useHistory();

  const addTweet = () => {
    if (input.trim() !== '') {
      setTweets([...tweets, input.trim()]);
      history.push('/');
    }
    setInput('');
  };

  return (
    <Stack>
      <Stack
        as="header"
        direction="row"
        width="full"
        justify="space-between"
        align="center"
        paddingInline={4}
        paddingBlock={3}
      >
        <IconButton onClick={() => history.push('/')}>
          <Icon as={IoArrowBackSharp} boxSize={5} />
        </IconButton>
        <TwitterButton
          width="73px"
          height="32px"
          bg="blue.400"
          color="white"
          fontSize={14}
          onClick={addTweet}
        >
          Tweet
        </TwitterButton>
      </Stack>
      <TweetBox input={input} setInput={setInput} />
    </Stack>
  );
};

export default ComposeTweet;
