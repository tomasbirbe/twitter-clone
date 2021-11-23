import Icon from '@chakra-ui/icon';
import { Stack, Text } from '@chakra-ui/layout';
import React, { useContext } from 'react';
import { GiMoebiusTriangle } from 'react-icons/gi';
import TweetsContext from '../tweetContext';
import TwitterButton from './TwitterButton';

const addTweetButton = () => {
  const [tweets, setTweets] = useContext(TweetsContext);

  return (
    <Stack direction="row">
      <Icon as={GiMoebiusTriangle} color="inherit" />
      <TwitterButton
        bg="transparent"
        padding={0}
        height="fit-content"
        outline="none"
        border="none"
        color="gray.500"
        _focus={{
          outline: 'none',
          bg: 'transparent',
        }}
        _hover={{
          bg: 'transparent',
          color: 'blue.500',
        }}
        _active={{
          bg: 'transparent',
        }}
      >
        <Text color="inherit">Propina</Text>
      </TwitterButton>
    </Stack>
  );
};

export default addTweetButton;
