import { Stack, Text } from '@chakra-ui/layout';
import React, { useState } from 'react';
import { AiOutlineRetweet } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { IoHeartOutline } from 'react-icons/io5';
import { RiMoreFill } from 'react-icons/ri';
import { FiShare } from 'react-icons/fi';
import { GiMoebiusTriangle } from 'react-icons/gi';
import Icon from '@chakra-ui/icon';
import IconButton from '../../../components/IconButton';
import ProfilePic from '../../../components/ProfilePic';
import TwitterButton from '../../../components/TwitterButton';
import TweetButton from './TweetButton';

interface impressions {
  likes: number,
  comments: number,
  retweets: number,
}

const Tweet = ({ tweet }: any) => {
  const [impressions, setImpressions] = useState<impressions>({
    likes: 1,
    comments: 1,
    retweets: 1,
  });

  const addLike = () => {
    setImpressions({ ...impressions, likes: impressions.likes + 1 });
  };
  const addComment = () => {
    setImpressions({ ...impressions, comments: impressions.comments + 1 });
  };
  const addRetweet = () => {
    setImpressions({ ...impressions, retweets: impressions.retweets + 1 });
  };

  return (
    <Stack
      paddingInline={4}
      as="article"
      borderBlockEnd="1px"
      borderColor="gray.100"
      paddingBlock={2}
      cursor="pointer"
      _hover={{ bg: 'gray.50' }}
      transition="200ms all ease-in-out"
    >
      <Stack direction="row">
        <Stack minWidth="50px">
          <ProfilePic size={12} />
        </Stack>
        <Stack width="full">
          {/* Tweet */}
          <Stack justify="center" aling="flex-start" spacing={-2}>
            {/* Author and config */}
            <Stack direction="row" justify="space-between" align="flex-start" width="full">
              <Stack direction="row" paddingBlockEnd={2}>
                <Text fontWeight="bold">Kitten</Text>
                <Text fontWeight="light">@CatLover - 25m</Text>
              </Stack>
              <IconButton size="25px">
                <Icon as={RiMoreFill} />
              </IconButton>

            </Stack>
            {/* Tweet */}
            <Stack>
              <Text lineHeight="20px">
                {tweet}
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack direction="row" justify="space-evenly" align="center">

        <TweetButton onClick={addComment} size={8} icon={FaRegComment}>
          {impressions.comments}
        </TweetButton>

        <TweetButton onClick={addRetweet} size={8} icon={AiOutlineRetweet}>
          {impressions.retweets}
        </TweetButton>

        <TweetButton onClick={addLike} size={8} icon={IoHeartOutline}>
          {impressions.likes}
        </TweetButton>

        <TweetButton icon={FiShare} />

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
      </Stack>
    </Stack>
  );
};

export default Tweet;
