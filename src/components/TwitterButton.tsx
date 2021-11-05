import React from 'react';

// Chakra-ui

import { Button } from '@chakra-ui/button';

const TwitterButton = ({ ...props }: any) => (
  <Button
    {...props}
    type="button"
    width="100%"
    borderLeftRadius="full"
    borderRightRadius="full"
  >
    {props.children}
  </Button>
);

export default TwitterButton;
