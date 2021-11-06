import Icon from '@chakra-ui/icon';
import { Input } from '@chakra-ui/input';
import { Stack, Text } from '@chakra-ui/layout';
import { FiSearch } from 'react-icons/fi';
import React from 'react';
import { Button } from '@chakra-ui/button';
import { RiMoreFill } from 'react-icons/ri';
import IconButton from '../../components/IconButton';

const Aside = ({ ...props }:any) => (
  <Stack
    {...props}
    as="aside"
    borderInlineStart="1px"
    borderColor="gray.100"
    paddingBlockStart={1}
    paddingInlineStart={5}
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
    <Stack bg="gray.50" borderRadius="15px">
      <Stack paddingBlockStart={3} paddingInline={4}>
        <h1>Whats happening</h1>
        <Stack>
          <ul>
            <li>
              <Stack spacing={0} paddingBlock={3}>
                {/* Hashtag */}
                <Stack direction="row" align="center" height="15px" justify="space-between">
                  <Text fontSize={12} color="gray.400">Trending in argentina</Text>
                  <IconButton size="30px" _hover={{ bg: 'blue.100' }} transition="100ms ease-in-out all">
                    <Icon as={RiMoreFill} boxSize={5} transitionProperty="all" transitionDuration="1000ms" _hover={{ color: 'blue.400' }} _active={{ color: 'blue.400' }} />
                  </IconButton>
                </Stack>
                <Stack>
                  <Text>#RicardoFortSigueVivo</Text>
                </Stack>
                <Stack>
                  <Text fontSize={12} color="gray.400">4500 Retweets</Text>
                </Stack>

                {/* News */}
                <Stack />
              </Stack>
            </li>
          </ul>
        </Stack>
      </Stack>
      <Stack>
        <Button bg="gray.50" borderBottomRadius="15px">Show more</Button>
      </Stack>
    </Stack>

    {/* Content: Who to follow */}
    <Stack>
      <Stack />
    </Stack>
  </Stack>
);

export default Aside;
