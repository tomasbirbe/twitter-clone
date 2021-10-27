import React, { useRef, useState } from 'react';

// Chakra-ui

import {
  Stack, Text,
} from '@chakra-ui/layout';

// Icons

import { HiOutlineSparkles } from 'react-icons/hi';
import { IoEarth } from 'react-icons/io5';
import { AiOutlinePicture } from 'react-icons/ai';
import { RiFileGifLine } from 'react-icons/ri';
import { BiPoll } from 'react-icons/bi';
import { BsEmojiSmile, BsCalendarDate } from 'react-icons/bs';

// Components

import { Textarea } from '@chakra-ui/textarea';
import Icon from '@chakra-ui/icon';
import ProfilePic from '../components/ProfilePic';
import IconButton from '../components/IconButton';
import TweetButton from '../Layout/components/TwButton';

const Feed = () => {
  const [whoCanReplyButton, setWhoCanReplyButton] = useState(false);

  const textAreaRef = useRef<any>();

  const showButton = () => {
    setWhoCanReplyButton(true);
  };

  const autoGrow = () => {
    textAreaRef.current.style.height = '0px';
    textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
  };

  return (
    <Stack
      as="main"
      width="100%"
      maxWidth="600px"
    >
      <Stack
        as="header"
        direction="row"
        align="center"
        borderBlockEnd="1px"
        borderColor="gray.100"
        justify="space-between"
        width="100%"
        paddingInline={3}
        paddingBlock={2}

      >
        <Text fontWeight="bold" fontSize={20}>Home</Text>
        <IconButton as={HiOutlineSparkles} color="black" boxSize={5} />
      </Stack>
      <Stack
        as="section"
        direction="row"
        paddingInline={4}
        borderBlockEnd="1px"
        borderColor="gray.100"
        spacing={0}
      >
        <Stack width="60px">
          <ProfilePic size={12} />
        </Stack>
        <Stack width="100%" spacing={whoCanReplyButton ? 5 : 3}>
          <Stack
            spacing={1}
          >
            <Stack
              direction="row"
              align="center"
              justify="center"
            >

              <Textarea
                border={0}
                paddingInline={2}
                paddingBlockStart={3}
                paddingBlockEnd={0}
                _focus={{ outline: 0 }}
                resize="none"
                placeholder="What's happening?"
                onInput={autoGrow}
                fontSize={20}
                ref={textAreaRef}
                minHeight="50px"
                autoFocus
                onClick={showButton}
              />
            </Stack>
            {
              whoCanReplyButton
                ? (
                  <Stack
                    direction="row"
                    align="center"
                    justify="center"
                    width="fit-content"
                  >
                    <TweetButton
                      bg="transparent"
                      height="fit-content"
                      paddingBlock={1}
                      paddingInline={3}
                      color="blue.500"
                      fontSize={14}
                      _hover={{
                        bg: 'gray.100',
                      }}
                    >
                      <Stack direction="row" justify="flex-start" align="center" width="100%" spacing={1}>
                        <Icon as={IoEarth} boxSize={4} />
                        <Text>Everyone can reply</Text>
                      </Stack>
                    </TweetButton>
                  </Stack>
                )
                : ''
            }
          </Stack>
          <Stack direction="row" paddingInlineStart={0} spacing={0} justify="flex-start" align="center">
            <IconButton as={AiOutlinePicture} color="blue.500" boxSize={5} />
            <IconButton as={RiFileGifLine} color="blue.500" boxSize={5} />
            <IconButton as={BiPoll} color="blue.500" boxSize={5} />
            <IconButton as={BsEmojiSmile} color="blue.500" boxSize={5} />
            <IconButton as={BsCalendarDate} color="blue.500" boxSize={5} />
          </Stack>
          <Stack colSpan={4} />
        </Stack>
      </Stack>
      {/* <Stack bg="purple.500" height="485px" mt="15px" /> */}
    </Stack>
  );
};

export default Feed;
