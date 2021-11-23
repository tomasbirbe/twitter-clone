import React from 'react';

// Icons

import {
  HiOutlineHome,
  HiOutlineHashtag,
  HiOutlineBell,
  HiOutlineMail,
  HiOutlineBookmark,
  HiOutlineMenuAlt2,
  HiOutlineUser,
  HiOutlineDotsCircleHorizontal,
  HiDotsHorizontal,
} from 'react-icons/hi';

import { FiSearch } from 'react-icons/fi';

import { RiQuillPenFill } from 'react-icons/ri';

import breakpoints from '../../breakpoints';

// Chakra-ui

import { Stack, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import Icon from '@chakra-ui/icon';
import NavLink from './NavLink';
import TwitterButton from '../../components/TwitterButton';
import HomeButton from './HomeButton';
import ProfilePic from '../../components/ProfilePic';
import { useMediaQuery } from '@chakra-ui/media-query';
import IconButton from '../../components/IconButton';

const Nav = ({ ...props }: any) => {
  const [isXl] = useMediaQuery(`(min-width: ${breakpoints.xl})`);
  const [isLg] = useMediaQuery(`(min-width: ${breakpoints.lg})`);
  const [isMd] = useMediaQuery(`(min-width: ${breakpoints.md})`);
  const [isShort] = useMediaQuery(`(min-height: 700px)`);

  return (
    <Stack
      {...props}
      as="nav"
      height="full"
      justifyContent="space-between"
      paddingBlock={1}
      borderInlineEnd="1px"
      borderColor="gray.100"
    >
      <Stack
        as="ul"
        paddingInlineStart={0}
        justify="space-between"
        align={isXl ? 'flex-start' : 'center'}
        spacing={0}
      >
        <HomeButton />
        <NavLink icon={HiOutlineHome} text="Home" />
        {!isLg ? (
          <NavLink icon={FiSearch} text="" />
        ) : (
          <NavLink icon={HiOutlineHashtag} text="Explore" />
        )}
        <NavLink icon={HiOutlineBell} text="Notifications" />
        <NavLink icon={HiOutlineMail} text="Messages" />
        {isShort ? <NavLink icon={HiOutlineBookmark} text="Bookmarks" /> : ''}
        <NavLink icon={HiOutlineMenuAlt2} text="Lists" />
        <NavLink icon={HiOutlineUser} text="Profile" />
        <NavLink icon={HiOutlineDotsCircleHorizontal} text="More" />
        <Stack width="100%" paddingBlockStart={2} align="center">
          {isXl ? (
            <TwitterButton
              fontSize={18}
              color="white"
              bg="blue.500"
              paddingBlock={7}
              _hover={{
                bg: 'blue.600',
              }}
            >
              Tweet
            </TwitterButton>
          ) : (
            <IconButton bg="blue.400" size="50px">
              <Icon as={RiQuillPenFill} color="white" boxSize={5} />
            </IconButton>
          )}
        </Stack>
      </Stack>

      <Stack align="center" justify="center" paddingBlockEnd={{ md: 4, xl: 2 }}>
        {isXl ? (
          <Button
            borderRadius="full"
            bg="transparent"
            paddingInline={2}
            paddingBlock={8}
            _hover={{
              bg: 'gray.200',
            }}
            width="full"
          >
            <Stack
              direction="row"
              align="center"
              justify="flex-start"
              width="100%"
              paddingInlineEnd={2}
            >
              <ProfilePic minWidth="40px" boxSize={10} />
              <Stack direction="row" justify="space-between" width="full">
                <Stack justify="space-around" align="flex-start" spacing={1}>
                  <Text>Kitten</Text>
                  <Text fontSize={14} color="gray.500">
                    @CatLover
                  </Text>
                </Stack>
                <Stack justify="center">
                  <Icon as={HiDotsHorizontal} boxSize={4} />
                </Stack>
              </Stack>
            </Stack>
          </Button>
        ) : (
          <IconButton width="40px">
            <ProfilePic minWidth="40px" boxSize={10} />
          </IconButton>
        )}
      </Stack>
    </Stack>
  );
};

export default Nav;
