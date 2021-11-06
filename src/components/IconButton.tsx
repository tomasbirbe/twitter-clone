import { Button } from '@chakra-ui/button';
import React from 'react';

const IconButton = ({ size, children, ...props }: any) => (
  <Button
    padding={0}
    borderRightRadius="full"
    borderLeftRadius="full"
    transition="100ms ease-in-out all"
    minWidth={size}
    height={size}
    bg="transparent"
    _focusVisible={{
      outlineWidth: '1px',
      outlineColor: 'blue.500',
      outlineOffset: '-1px',
    }}
    _focus={{ outline: 'none' }}
    {...props}
  >
    {children}
  </Button>
);

export default IconButton;
