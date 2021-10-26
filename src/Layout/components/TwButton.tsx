import React from 'react';
import { Button } from '@chakra-ui/button';

const TwButton = (props: any) => (
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

export default TwButton;
