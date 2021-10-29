import { Button } from '@chakra-ui/button';
import Icon from '@chakra-ui/icon';
import React from 'react';

const IconButton = ({ size, ...props }: any) => (
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
      bg: 'gray.100',
    }}
    _focus={{
      outlineWidth: '1px',
      outlineColor: 'blue.500',
      outlineOffset: '-1px',
    }}
  >
    <Icon {...props} />
    {/* <Icon as={icon} color={color} boxSize={size} /> */}
  </Button>
);

export default IconButton;
