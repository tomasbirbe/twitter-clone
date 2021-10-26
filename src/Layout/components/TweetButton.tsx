import React from 'react';
import { Button } from '@chakra-ui/button';

const TweetButton = () => (
  <Button
    type="button"
    width="100%"
    borderLeftRadius="full"
    borderRightRadius="full"
    bg="blue.400"
    color="white"
    fontSize={18}
    padding={6}
    _hover={{
      bg: 'blue.500',
    }}
  >
    Tweet
  </Button>
);

export default TweetButton;
