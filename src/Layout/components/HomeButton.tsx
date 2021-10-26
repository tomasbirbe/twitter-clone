import React from 'react';
import { Link } from 'react-router-dom';

// Chakra-ui

import Icon from '@chakra-ui/icon';
import { Box } from '@chakra-ui/layout';

// Icons

import { FaTwitter } from 'react-icons/fa';

const HomeButton = () => (
  <li>
    <Link to="/">
      <Box
        padding={3}
        borderRightRadius="full"
        borderLeftRadius="full"
        transition="ease-in-out"
        transitionProperty="all"
        transitionDuration="100ms"
        _hover={{
          bg: 'gray.200',
        }}
      >
        <Icon as={FaTwitter} color="blue.400" boxSize={7} />
      </Box>
    </Link>
  </li>
);

export default HomeButton;
