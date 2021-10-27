import { Button } from '@chakra-ui/button';
import Icon from '@chakra-ui/icon';
import React from 'react';

const IconButton = ({ width, height, ...props }: {width: number, height: number}) => (
  <Button
    padding={0}
    borderRightRadius="full"
    borderLeftRadius="full"
    transition="ease-in-out"
    transitionProperty="all"
    transitionDuration="100ms"
    minWidth={width}
    height={height}
    bg="transparent"
    _hover={{
      bg: 'gray.500',
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
