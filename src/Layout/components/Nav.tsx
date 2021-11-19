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

import { RiQuillPenFill } from 'react-icons/ri';

// Chakra-ui

import { Stack, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import Icon from '@chakra-ui/icon';
import { useMediaQuery } from '@chakra-ui/media-query';
import NavLink from './NavLink';
import TwitterButton from '../../components/TwitterButton';
import HomeButton from './HomeButton';
import ProfilePic from '../../components/ProfilePic';
import IconButton from '../../components/IconButton';

const Nav = ({ ...props }: any) => {
  const [isLarge] = useMediaQuery('(min-width:1280px)');
  const [isLargeHeight] = useMediaQuery('(min-height:705px)');
  return (
    <Stack
      {...props}
      as="nav"
      height="full"
      justifyContent="space-between"
      paddingBlock={1}
    >
      <Stack
        as="ul"
        paddingInlineEnd={8}
        justify="space-between"
        alignItems="flex-start"
        spacing={isLargeHeight ? 3 : 1}
      >
        <HomeButton />
        <NavLink icon={HiOutlineHome} text="Home" />
        <NavLink icon={HiOutlineHashtag} text="Explore" />
        <NavLink icon={HiOutlineBell} text="Notifications" />
        <NavLink icon={HiOutlineMail} text="Messages" />
        {
          isLargeHeight
            ? <NavLink icon={HiOutlineBookmark} text="Bookmarks" />
            : ''
        }
        <NavLink icon={HiOutlineMenuAlt2} text="Lists" />
        <NavLink icon={HiOutlineUser} text="Profile" />
        <NavLink icon={HiOutlineDotsCircleHorizontal} text="More" />
        <Stack width="100%" paddingBlockStart={2}>
          {
            isLarge
              ? (
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
              )
              : <IconButton as={RiQuillPenFill} />

          }

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
          width="full"
        >
          <Stack
            direction="row"
            align="center"
            justify="flex-start"
            width="100%"
          >
            <Stack minWidth="40px">
              <ProfilePic boxSize={10} />
            </Stack>
            {
              isLarge
                ? (
                  <Stack direction="row" justify="space-between" width="full">
                    <Stack
                      justify="space-around"
                      align="flex-start"
                      spacing={1}
                    >
                      <Text>Kitten</Text>
                      <Text fontSize={14} color="gray.500">@CatLover</Text>
                    </Stack>
                    <Stack>
                      <Icon as={HiDotsHorizontal} boxSize={4} />
                    </Stack>
                  </Stack>
                )
                : ''
            }

          </Stack>

        </Button>
      </Stack>
    </Stack>

  );
};

export default Nav;
