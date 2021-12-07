import React from 'react';

// Chakra-ui

import { Stack, Container, Box } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/react';
import { RiQuillPenFill } from 'react-icons/ri';
import { Icon } from '@chakra-ui/icon';

import breakpoints from '../breakpoints';

import { FiSearch } from 'react-icons/fi';
import { HiOutlineHome, HiOutlineBell, HiOutlineMail } from 'react-icons/hi';

import Nav from './components/Nav';
import Aside from './components/Aside';
import { IoTrailSignOutline } from 'react-icons/io5';
import IconButton from '../components/IconButton';
import NavLink from './components/NavLink';
import { useHistory, useLocation } from 'react-router';

const App = ({ page }: { page: any }) => {
  const [isMd] = useMediaQuery(`(min-width: ${breakpoints.md})`);
  const [isLg] = useMediaQuery(`(min-width: ${breakpoints.lg})`);

  const history = useHistory();
  const location = useLocation();

  return (
    <Container
      maxW={{
        sm: 'container.sm',
        md: 'container.md',
        lg: 'container.lg',
        xl: 'container.xl',
      }}
      centerContent
      height="100%"
      p={0}
    >
      <Stack
        direction="row"
        height="100%"
        width="100%"
        spacing={0}
        justify="center"
        marginInlineEnd={{ md: 7, lg: 0 }}
      >
        {isMd ? (
          <Nav
            minWidth={{ md: '80px', lg: '90px', xl: '260px' }}
            paddingInlineStart={{ md: 4, lg: 0 }}
          />
        ) : (
          <Box
            position="fixed"
            width="full"
            height="53px"
            bottom="0px"
            bg="white"
            zIndex={1}
            hidden={location.pathname === '/tweet'}
          >
            <Stack direction="row" as="ul" justify="space-around">
              <NavLink icon={HiOutlineHome} text="" />
              <NavLink icon={FiSearch} text="" />
              <NavLink icon={HiOutlineBell} text="" />
              <NavLink icon={HiOutlineMail} text="" />
            </Stack>
          </Box>
        )}
        <Stack
          as="main"
          minWidth="100px"
          width="100%"
          maxWidth="600px"
          borderInlineEnd={{ sm: '', md: '1px' }}
          borderColor={{ sm: '', md: 'gray.100' }}
        >
          {page}
        </Stack>
        {isLg ? <Aside width="380px" /> : ''}
      </Stack>
      {!isMd ? (
        <Box
          position="fixed"
          bottom="70px"
          right="20px"
          hidden={location.pathname === '/tweet'}
        >
          <IconButton
            bg="blue.400"
            size="60px"
            onClick={() => history.push('/tweet')}
          >
            <Icon as={RiQuillPenFill} color="white" boxSize={6} />
          </IconButton>
        </Box>
      ) : (
        ''
      )}
    </Container>
  );
};

export default App;
