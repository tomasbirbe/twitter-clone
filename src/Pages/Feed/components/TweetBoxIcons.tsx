import React from 'react';

// Chakra-ui

import { Stack } from '@chakra-ui/layout';

// Icons

import { AiOutlinePicture } from 'react-icons/ai';
import { BiPoll } from 'react-icons/bi';
import { BsEmojiSmile, BsCalendarDate } from 'react-icons/bs';
import { RiFileGifLine } from 'react-icons/ri';

// Components

import IconButton from '../../../components/IconButton';
import TwButton from '../../../components/TwButton';

const TweetBoxIcons = () => (
  <Stack direction="row" align="center" justify="space-between" paddingInlineEnd={2} paddingBlockEnd={3}>
    <Stack direction="row" paddingInlineStart={0} spacing={0} justify="flex-start" align="center">
      <IconButton as={AiOutlinePicture} color="blue.500" boxSize={5} size="35px" />
      <IconButton as={RiFileGifLine} color="blue.500" boxSize={5} size="35px" />
      <IconButton as={BiPoll} color="blue.500" boxSize={5} size="35px" />
      <IconButton as={BsEmojiSmile} color="blue.500" boxSize={5} size="35px" />
      <IconButton as={BsCalendarDate} color="blue.500" boxSize={5} size="35px" />
    </Stack>
    <Stack>
      <TwButton color="white" bg="blue.500" height="35px" _hover={{ bg: 'blue.600' }}>Tweet</TwButton>
    </Stack>
  </Stack>

);

export default TweetBoxIcons;
