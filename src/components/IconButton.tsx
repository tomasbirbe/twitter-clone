import { Button } from '@chakra-ui/button';
import Icon from '@chakra-ui/icon';
import React from 'react';

const IconButton = ({ icon, color, size } : {icon:any, color:string, size:number}) => (
  <Button
    padding={3}
    borderRightRadius="full"
    borderLeftRadius="full"
    transition="ease-in-out"
    transitionProperty="all"
    transitionDuration="100ms"
    bg="transparent"
    _hover={{
      bg: 'gray.200',
    }}
  >
    <Icon as={icon} color={color} boxSize={size} />
  </Button>
);

export default IconButton;
