import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      '*': {
        'box-sizing': 'border-box',
      },
      'html,body,#root': {
        height: '100%',
      },
      ul: {
        'list-style-type': 'none',
      },
    },
  },
});

export default theme;
