import React, { useState } from 'react';

// Chakra-ui

import { Stack, Icon } from '@chakra-ui/react';

// Icons
import { AiOutlinePicture } from 'react-icons/ai';
import { RiFileGifLine } from 'react-icons/ri';
import { BiPoll } from 'react-icons/bi';
import { BsCalendarDate, BsEmojiSmile } from 'react-icons/bs';

// Components

import TweetBoxInput from './TweetBoxInput';
import ProfilePic from '../../components/ProfilePic';
import IconButton from '../../components/IconButton';
import TwitterButton from '../../components/TwitterButton';

const TweetBox = ({ tweets, setTweets }: any) => {
  const [whoCanReplyButton, setWhoCanReplyButton] = useState(false);
  const [input, setInput] = useState('');

  const addTweet = () => {
    if (input.trim() !== '') {
      setTweets([...tweets, input.trim()]);
    }
    setInput('');
  };

  return (
    <Stack
      direction="row"
      paddingInline={4}
      borderBlockEnd="1px"
      borderColor="gray.100"
      spacing={0}
    >
      <Stack width="60px">
        <ProfilePic boxSize={12} />
      </Stack>
      <Stack width="100%" spacing={whoCanReplyButton ? 3 : 1}>
        <TweetBoxInput
          whoCanReplyButton={whoCanReplyButton}
          setWhoCanReplyButton={setWhoCanReplyButton}
          input={input}
          setInput={setInput}
        />

        {/* Tweet icons */}
        <Stack
          direction="row"
          align="center"
          justify="space-between"
          paddingInlineEnd={2}
          paddingBlockEnd={3}
        >
          <Stack
            as="form"
            direction="row"
            paddingInlineStart={0}
            spacing={0}
            justify="flex-start"
            align="center"
          >
            <IconButton>
              <Icon
                as={AiOutlinePicture}
                color="blue.500"
                boxSize={5}
                size="35px"
              />
            </IconButton>
            <IconButton>
              <Icon
                as={RiFileGifLine}
                color="blue.500"
                boxSize={5}
                size="35px"
              />
            </IconButton>
            <IconButton>
              <Icon as={BiPoll} color="blue.500" boxSize={5} size="35px" />
            </IconButton>
            <IconButton>
              <Icon
                as={BsEmojiSmile}
                color="blue.500"
                boxSize={5}
                size="35px"
              />
            </IconButton>
            <IconButton>
              <Icon
                as={BsCalendarDate}
                color="blue.500"
                boxSize={5}
                size="35px"
              />
            </IconButton>
          </Stack>
          <Stack>
            <TwitterButton
              onClick={addTweet}
              type="submit"
              color="white"
              bg="blue.500"
              height="35px"
              _hover={{ bg: 'blue.600' }}
            >
              Tweet
            </TwitterButton>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TweetBox;
