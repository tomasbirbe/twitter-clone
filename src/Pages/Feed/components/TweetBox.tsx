import React, { useState } from 'react';

// Chakra-ui

import { Stack } from '@chakra-ui/react';

// Icons

// Components

import ProfilePic from '../../../components/ProfilePic';

import TweetBoxInput from './TweetBoxInput';
import TweetBoxIcons from './TweetBoxIcons';

const TweetBox = () => {
  const [whoCanReplyButton, setWhoCanReplyButton] = useState(false);

  return (
    <Stack
      direction="row"
      paddingInline={4}
      borderBlockEnd="1px"
      borderColor="gray.100"
      spacing={0}
    >
      <Stack width="60px">
        <ProfilePic size={12} />
      </Stack>
      <Stack width="100%" spacing={whoCanReplyButton ? 3 : 1}>
        <TweetBoxInput
          whoCanReplyButton={whoCanReplyButton}
          setWhoCanReplyButton={setWhoCanReplyButton}
        />
        <TweetBoxIcons />
      </Stack>
    </Stack>
  );
};

export default TweetBox;
