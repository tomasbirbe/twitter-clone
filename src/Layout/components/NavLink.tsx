import React from 'react';
import { Link } from 'react-router-dom';

// Chakra-ui

import Icon from '@chakra-ui/icon';
import { Stack, Text } from '@chakra-ui/layout';

const NavLink = ({ icon, text } : {icon:any, text:String}) => (
  <li>
    <Link to="/">
      <Stack
        direction="row"
        spacing={4}
        align="center"
        justify="space-around"
        paddingBlock={2}
        paddingInlineStart={3}
        paddingInlineEnd={6}
        borderRightRadius="full"
        borderLeftRadius="full"
        transition="ease-in-out"
        transitionProperty="all"
        transitionDuration="150ms"
        _hover={{
          bg: 'gray.200',
        }}
      >
        <Icon as={icon} boxSize={7} />
        <Text fontSize={21}>{text}</Text>
      </Stack>
    </Link>
  </li>
);

export default NavLink;
