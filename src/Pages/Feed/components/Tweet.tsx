import { Stack, Text } from '@chakra-ui/layout';
import React from 'react';
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

const Tweet = () => (
  <Stack
    paddingInline={4}
    as="article"
    borderBlockEnd="1px"
    borderColor="gray.100"
    paddingBlock={2}
    cursor="pointer"
    _hover={{ bg: 'gray.50' }}
  >
    <Stack direction="row" paddingInlineStart={8}>
      <Icon as={AiOutlineRetweet} color="gray.500" />
      <Text fontSize={14} color="gray.500">FrontendCafé Retweeted</Text>
    </Stack>
    <Stack direction="row">
      <Stack minWidth="50px">
        <ProfilePic size={12} />
      </Stack>
      <Stack>
        {/* Tweet */}
        <Stack justify="center" aling="flex-start" spacing={-2}>
          {/* Author and config */}
          <Stack direction="row" justify="space-between" align="flex-start">
            <Stack direction="row" paddingBlockEnd={2}>
              <Text fontWeight="bold">Kitten</Text>
              <Text fontWeight="light">@CatLover - 25m</Text>
            </Stack>
            <IconButton>
              <Icon as={RiMoreFill} size={7} />
            </IconButton>

          </Stack>
          {/* Tweet */}
          <Stack>
            <Text lineHeight="20px">
              Incluso si existiera un lobby
              gay internacional que impone el arco iris,
              ¿por qué debería molestarle eso a un liberal?
              El Estado no está para decidir qué lobbys ganan
              en el libre mercado de las ideas.
            </Text>
          </Stack>
        </Stack>
        <Stack>Media</Stack>
      </Stack>
    </Stack>
    <Stack direction="row" justify="space-evenly" align="center">

      <TweetButton size={8} icon={FaRegComment} bgHover="red.700">7</TweetButton>
      <TweetButton size={8} icon={AiOutlineRetweet}>147</TweetButton>
      <TweetButton size={8} icon={IoHeartOutline}>70</TweetButton>
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

export default Tweet;
