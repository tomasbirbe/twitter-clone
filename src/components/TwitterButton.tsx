import React from 'react';

// Chakra-ui

import { Button } from '@chakra-ui/button';

const TwitterButton = ({ ...props }: any) => (
  <Button
    type="button"
    width="100%"
    borderLeftRadius="full"
    borderRightRadius="full"
    {...props}
  >
    {props.children}
  </Button>
);

export default TwitterButton;
