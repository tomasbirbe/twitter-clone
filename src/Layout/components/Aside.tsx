import Icon from '@chakra-ui/icon';
import { Input } from '@chakra-ui/input';
import { Stack } from '@chakra-ui/layout';
import { FiSearch } from 'react-icons/fi';
import React from 'react';

const Aside = ({ ...props }:any) => (
  <Stack as="aside" width="full" {...props}>
    {/* Header */}
    <Stack
      borderRadius="full"
      direction="row"
      align="center"
      justify="center"
      bg="gray.100"
      paddingInline={4}
    >
      <Icon as={FiSearch} />
      <Input placeholder="Search Twitter" borderRadius="full" border="none" _focus={{}} _hover={{}} />
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
