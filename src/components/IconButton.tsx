import { Button } from '@chakra-ui/button';
import Icon from '@chakra-ui/icon';
import React from 'react';

const IconButton = ({ size, bgHover, ...props }: any) => (
  <Button
    padding={0}
    borderRightRadius="full"
    borderLeftRadius="full"
    transition="ease-in-out"
    transitionProperty="all"
    transitionDuration="100ms"
    minWidth={size}
    height={size}
    bg="transparent"
    _hover={{
      bg: bgHover || 'gray.100',
    }}
    _focusVisible={{
      outlineWidth: '1px',
      outlineColor: 'blue.500',
      outlineOffset: '-1px',
    }}
    _focus={{ outline: 'none' }}
  >
    <Icon {...props} />
  </Button>
);

export default IconButton;
