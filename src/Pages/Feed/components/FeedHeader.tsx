import React from 'react';

// Chakra-ui

import { Stack, Text } from '@chakra-ui/layout';

// Icons

import { HiOutlineSparkles } from 'react-icons/hi';

// Components

import Icon from '@chakra-ui/icon';
import IconButton from '../../../components/IconButton';

const FeedHeader = () => (
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
    <IconButton>
      <Icon as={HiOutlineSparkles} color="black" boxSize={5} />
    </IconButton>
  </Stack>
);

export default FeedHeader;
