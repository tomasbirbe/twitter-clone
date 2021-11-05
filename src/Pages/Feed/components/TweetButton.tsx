import Icon from '@chakra-ui/icon';
import { Stack, Text } from '@chakra-ui/layout';
import React, { useEffect, useRef } from 'react';
import IconButton from '../../../components/IconButton';

const TweetButton = ({
  icon, size, /* ,  bgHover, children, */
}:any) => {
  const buttonRef = useRef<any>();

  useEffect(() => {
    console.log(buttonRef);
  });

  return (
    <Stack direction="row" align="center" spacing={1}>
      <IconButton>
        <Icon as={icon} size={size} />
      </IconButton>
      <Text>1</Text>
    </Stack>
  );
};

export default TweetButton;
