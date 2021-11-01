import { Stack, Text } from '@chakra-ui/layout';
import { Textarea, Icon } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { IoEarth } from 'react-icons/io5';
import TwButton from '../../../components/TwButton';

const TweetInput = ({ whoCanReplyButton, setWhoCanReplyButton }:any) => {
  const textAreaRef = useRef<any>();

  const showButton = () => {
    setWhoCanReplyButton(true);
  };

  const autoGrow = () => {
    textAreaRef.current.style.height = '0px';
    textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
  };

  return (
    <Stack
      spacing={1}
      borderBlockEnd={whoCanReplyButton ? '1px' : 'none'}
      borderColor="gray.100"
      paddingBlockEnd={3}
    >
      <Stack direction="row" align="center" justify="center">
        <Textarea
          border={0}
          paddingInline={2}
          paddingBlockStart={3}
          paddingBlockEnd={0}
          _focus={{ outline: 0 }}
          resize="none"
          placeholder="What's happening?"
          onInput={autoGrow}
          fontSize={20}
          ref={textAreaRef}
          minHeight="50px"
          autoFocus
          onClick={showButton}
        />
      </Stack>
      {whoCanReplyButton
        ? (
          <Stack
            direction="row"
            align="center"
            justify="center"
            width="fit-content"
          >
            <TwButton
              bg="transparent"
              height="fit-content"
              paddingBlock={1}
              paddingInline={3}
              color="blue.500"
              fontSize={14}
              _hover={{
                bg: 'gray.100',
              }}
            >
              <Stack direction="row" justify="flex-start" align="center" width="100%" spacing={1}>
                <Icon as={IoEarth} boxSize={4} />
                <Text>Everyone can reply</Text>
              </Stack>
            </TwButton>
          </Stack>
        )
        : ''}
    </Stack>
  );
};

export default TweetInput;
