import Icon from '@chakra-ui/icon';
import { Input } from '@chakra-ui/input';
import { Stack } from '@chakra-ui/layout';
import { FiSearch } from 'react-icons/fi';
import React from 'react';

const Aside = () => (
  <Stack as="aside">
    {/* Header */}
    <Stack borderRadius="full" direction="row" align="center">
      <Icon as={FiSearch} />
      <Input placeholder="Search Twitter" />
    </Stack>

    {/* Content: What's happening */}
    <Stack>
      <Stack />
    </Stack>

    {/* Content: Who to follow */}
    <Stack>
      <Stack />
    </Stack>
  </Stack>
);

export default Aside;
