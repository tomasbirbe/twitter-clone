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

// Chakra-ui

import { Stack, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import Icon from '@chakra-ui/icon';
import NavLink from './NavLink';
import TwitterButton from '../../components/TwitterButton';
import HomeButton from './HomeButton';
import ProfilePic from '../../components/ProfilePic';

const Nav = ({ ...props }: any) => (
  <Stack
    {...props}
    as="nav"
    height="100%"
    justifyContent="space-between"
    paddingBlock={1}
  >
    <Stack
      as="ul"
      paddingInlineEnd={8}
      justify="space-between"
      alignItems="flex-start"
      spacing={3}
    >
      <HomeButton />
      <NavLink icon={HiOutlineHome} text="Home" />
      <NavLink icon={HiOutlineHashtag} text="Explore" />
      <NavLink icon={HiOutlineBell} text="Notifications" />
      <NavLink icon={HiOutlineMail} text="Messages" />
      <NavLink icon={HiOutlineBookmark} text="Bookmarks" />
      <NavLink icon={HiOutlineMenuAlt2} text="Lists" />
      <NavLink icon={HiOutlineUser} text="Profile" />
      <NavLink icon={HiOutlineDotsCircleHorizontal} text="More" />
      <Stack width="100%" paddingBlockStart={2}>
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
      </Stack>

    </Stack>

    <Stack
      paddingInlineEnd={3}
    >
      <Button
        borderRadius="full"
        bg="transparent"
        paddingInline={2}
        paddingBlock={8}
        _hover={{
          bg: 'gray.200',
        }}
      >
        <Stack
          direction="row"
          align="center"
          justify="flex-start"
          width="100%"
        >
          <Stack>
            <ProfilePic size={10} />
          </Stack>
          <Stack
            justify="space-around"
            align="flex-start"
            spacing={1}
          >
            <Text>Kitten</Text>
            <Text fontSize={14} color="gray.500">@CatLover</Text>
          </Stack>
        </Stack>
        <Stack>
          <Icon as={HiDotsHorizontal} boxSize={4} />
        </Stack>
      </Button>
    </Stack>
  </Stack>

);

export default Nav;
