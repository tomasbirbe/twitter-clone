import React from 'react';
import { Link } from 'react-router-dom';

// Chakra-ui

import Icon from '@chakra-ui/icon';
import { Box, Stack, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import breakpoints from '../../breakpoints';

const NavLink = ({ icon, text }: { icon: any; text: String }) => {
  const [isLg] = useMediaQuery(`(min-width: ${breakpoints.xl})`);

  return (
    <li>
      <Box
        as={Link}
        to="/"
        bg="white"
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
          spacing={5}
          align="center"
          justify="space-around"
          paddingBlock={2}
          paddingInlineStart={{ xl: 2, md: 0 }}
          paddingInlineEnd={{ xl: 6, md: 0 }}
          borderRightRadius="full"
          borderLeftRadius="full"
          transition="ease-in-out"
          transitionProperty="all"
          transitionDuration="150ms"
          minWidth="50px"
          minHeight="50px"
          _hover={{
            bg: 'gray.200',
          }}
        >
          <Icon as={icon} boxSize={7} />
          {isLg ? <Text fontSize={20}>{text}</Text> : ''}
        </Stack>
      </Box>
    </li>
  );
};

export default NavLink;
