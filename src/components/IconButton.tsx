import { Button } from '@chakra-ui/button';
import React from 'react';

const IconButton = ({ size, children, ...props }: any) => (
  <Button
    {...props}
    padding={0}
    borderRightRadius="full"
    borderLeftRadius="full"
    transition="ease-in-out"
    transitionProperty="all"
    transitionDuration="100ms"
    minWidth={size}
    height={size}
    bg="transparent"
    _focusVisible={{
      outlineWidth: '1px',
      outlineColor: 'blue.500',
      outlineOffset: '-1px',
    }}
    _focus={{ outline: 'none' }}
  >
    {children}
  </Button>
);

export default IconButton;
