import React from 'react';

// Chakra-ui

import { Stack } from '@chakra-ui/layout';

// Icons

import { AiOutlinePicture } from 'react-icons/ai';
import { BiPoll } from 'react-icons/bi';
import { BsEmojiSmile, BsCalendarDate } from 'react-icons/bs';
import { RiFileGifLine } from 'react-icons/ri';

// Components

import Icon from '@chakra-ui/icon';
import IconButton from '../../../components/IconButton';
import TwitterButton from '../../../components/TwitterButton';

const TweetBoxIcons = () => (
  <Stack direction="row" align="center" justify="space-between" paddingInlineEnd={2} paddingBlockEnd={3}>
    <Stack direction="row" paddingInlineStart={0} spacing={0} justify="flex-start" align="center">
      <IconButton>
        <Icon as={AiOutlinePicture} color="blue.500" boxSize={5} size="35px" />
      </IconButton>
      <IconButton>
        <Icon as={RiFileGifLine} color="blue.500" boxSize={5} size="35px" />
      </IconButton>
      <IconButton>
        <Icon as={BiPoll} color="blue.500" boxSize={5} size="35px" />
      </IconButton>
      <IconButton>
        <Icon as={BsEmojiSmile} color="blue.500" boxSize={5} size="35px" />
      </IconButton>
      <IconButton>
        <Icon as={BsCalendarDate} color="blue.500" boxSize={5} size="35px" />
      </IconButton>
    </Stack>
    <Stack>
      <TwitterButton color="white" bg="blue.500" height="35px" _hover={{ bg: 'blue.600' }}>Tweet</TwitterButton>
    </Stack>
  </Stack>

);

export default TweetBoxIcons;
