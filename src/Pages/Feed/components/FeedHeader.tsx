import React from 'react';

// Chakra-ui

import { Stack, Text } from '@chakra-ui/layout';

// Icons

import { HiOutlineSparkles } from 'react-icons/hi';

// Components

import Icon from '@chakra-ui/icon';
import IconButton from '../../../components/IconButton';
import ProfilePic from '../../../components/ProfilePic';
import { useMediaQuery } from '@chakra-ui/media-query';
import breakpoints from '../../../breakpoints';

const FeedHeader = () => {
  const [isMd] = useMediaQuery(`(min-width: ${breakpoints.md})`);

  return (
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
      <Stack direction="row" justify="flex-start" align="center">
        {!isMd ? (
          <IconButton width="32px">
            <ProfilePic minWidth="32px" boxSize={8} />
          </IconButton>
        ) : (
          ''
        )}
        <Text fontWeight="bold" fontSize={20}>
          Home
        </Text>
      </Stack>
      <IconButton>
        <Icon as={HiOutlineSparkles} color="black" boxSize={5} />
      </IconButton>
    </Stack>
  );
};

export default FeedHeader;
