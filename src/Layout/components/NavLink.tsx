import React from 'react';
import { Link } from 'react-router-dom';

// Chakra-ui

import Icon from '@chakra-ui/icon';
import { Box, Stack, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';

const NavLink = ({ icon, text } : {icon:any, text:String}) => {
  const [isLarge] = useMediaQuery('(min-width:1280px)');

  return (
    <li>
      <Box
        as={Link}
        to="/"
        borderRightRadius="full"
        borderLeftRadius="full"
        transitionProperty="all"
        transitionDuration="500ms"
        _focus={{
          outlineColor: 'gray.500',
          outlineWidth: '1px',
        }}
      >
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
          <Icon as={icon} boxSize={8} />
          {isLarge
            ? <Text fontSize={21}>{text}</Text>
            : ''}
        </Stack>
      </Box>
    </li>
  );
};

export default NavLink;
