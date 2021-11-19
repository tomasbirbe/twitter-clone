import Icon from '@chakra-ui/icon';
import { Input } from '@chakra-ui/input';
import { Stack, Text } from '@chakra-ui/layout';
import { FiSearch } from 'react-icons/fi';
import React, { useState } from 'react';
import { Button } from '@chakra-ui/button';
import { RiMoreFill } from 'react-icons/ri';
import { Image } from '@chakra-ui/image';
import IconButton from '../../components/IconButton';
import ProfilePic from '../../components/ProfilePic';
import TwitterButton from '../../components/TwitterButton';

const Aside = ({ ...props }:any) => {
  const [colorOnHover, setColorOnHover] = useState('');

  return (
    <Stack
      {...props}
      as="aside"
      borderInlineStart="1px"
      borderColor="gray.100"
      paddingBlockStart={1}
      paddingInlineStart={5}
      spacing={4}
    >
      {/* Header */}
      <Stack
        width="full"
        borderRadius="full"
        direction="row"
        align="center"
        bg="gray.100"
        paddingInline={4}
        paddingBlock={0.5}
      >
        <Stack align="center" justify="center">
          <Icon as={FiSearch} boxSize={5} />
        </Stack>
        <Input placeholder="Search Twitter" borderRadius="full" border="none" _focus={{}} _hover={{}} />
      </Stack>

      {/* Content: What's happening */}
      <Stack bg="gray.50" paddingBlockStart={3} borderRadius="15px" spacing={0}>
        <Stack spacing={2}>
          <Text paddingInlineStart={4} fontSize={20} fontWeight="bold">What's happening</Text>
          <Stack>
            <Stack as="ul">
              <Stack as="li">
                <Stack
                  as="a"
                  tabIndex={0}
                  spacing={0}
                  paddingBlock={4}
                  paddingInline={4}
                  transition="200ms all ease-in-out"
                  _hover={{ bg: 'gray.100' }}
                  cursor="pointer"
                >
                  {/* Hashtag */}
                  <Stack direction="row" align="center" height="15px" justify="space-between" width="full">
                    <Text fontSize={12} color="gray.400">Trending in argentina</Text>
                    <IconButton
                      size="30px"
                      onMouseEnter={() => setColorOnHover('blue.400')}
                      onMouseLeave={() => setColorOnHover('')}
                      _hover={{ bg: 'blue.100' }}
                      transition="100ms ease-in-out all"
                    >
                      <Icon
                        as={RiMoreFill}
                        boxSize={5}
                        transitionProperty="all"
                        transitionDuration="200ms"
                        color={colorOnHover}
                      />
                    </IconButton>
                  </Stack>
                  <Text fontWeight="bold" maxWidth="185px" fontSize={16}>#LaRuedaDelTiempo</Text>
                  <Stack>
                    <Text fontSize={12} color="gray.400">4500 Retweets</Text>
                  </Stack>
                  <Stack />
                </Stack>
              </Stack>
              {/* News */}
              <Stack as="li" maxWidth="300px">
                <Stack
                  as="a"
                  tabIndex={0}
                  direction="row"
                  spacing={3}
                  paddingBlock={3}
                  paddingInline={4}
                  transition="200ms all ease-in-out"
                  _hover={{ bg: 'gray.100' }}
                  cursor="pointer"
                >
                  <Stack spacing={0} alignItems="flex-start" wrap="wrap">
                    <Text fontSize={12} color="gray.400">News - Yesterday</Text>
                    <Text fontWeight="bold" fontSize={16} textAlign="left" maxWidth="185px">Et people dead and multiple injured at Travis Scott's Astroworld Festival in Houston</Text>
                  </Stack>
                  <Stack minWidth="70px">
                    <Image
                      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIF.EmvDg4jkLfm4GdmGejuoKQ%26pid%3DApi&f=1"
                      fit="cover"
                      boxSize="70px"
                      borderRadius="15px"
                    />
                  </Stack>
                </Stack>

              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Button width="100%" bg="gray.50" borderBottomRadius="15px" paddingBlock={7}>
          <Stack direction="row" justify="flex-start" width="100%">
            <Text color="blue.300">Show more</Text>
          </Stack>
        </Button>
      </Stack>

      {/* Content: Who to follow */}
      <Stack bg="gray.50" borderRadius="15px" paddingBlockStart={3}>
        <Text paddingInlineStart={4} fontSize={20} fontWeight="bold">Who to follow</Text>
        <Stack as="ul">
          <Stack as="li">
            <Stack
              as="a"
              tabIndex={0}
              direction="row"
              transition="200ms all ease-in-out"
              cursor="pointer"
              _hover={{ bg: 'gray.100' }}
              justify="space-between"
              paddingBlock={4}
              paddingInline={4}
            >
              <Stack direction="row" spacing={3}>
                <ProfilePic boxSize={12} />
                <Stack spacing={0}>
                  <Text fontWeight="bold">Tomas Birbe</Text>
                  <Text fontSize={14} color="gray.500">@tomasbirbe</Text>
                </Stack>
              </Stack>
              <TwitterButton
                width="fit-content"
                bg="black"
                color="white"
                transition="200ms all ease-in-out"
                _hover={{ bg: 'gray.800' }}
                paddingBlock={2}
                height="fit-content"
              >
                Follow

              </TwitterButton>
            </Stack>
          </Stack>
        </Stack>
        <Button width="100%" bg="gray.50" borderBottomRadius="15px" paddingBlock={7}>
          <Stack direction="row" justify="flex-start" width="100%">
            <Text color="blue.300">Show more</Text>
          </Stack>
        </Button>
      </Stack>
    </Stack>
  );
};

export default Aside;
