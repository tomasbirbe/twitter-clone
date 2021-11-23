import Icon from '@chakra-ui/icon';
import { Stack, Text } from '@chakra-ui/layout';
import React from 'react';
import IconButton from '../../components/IconButton';

const TweetButton = ({ icon, size, children, ...props }: any) => (
  <Stack direction="row" align="center" spacing={1}>
    <IconButton {...props}>
      <Icon as={icon} size={size} />
    </IconButton>
    <Text>{children}</Text>
  </Stack>
);

export default TweetButton;
