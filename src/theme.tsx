import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      '*': {
        boxSizing: 'border-box',
      },
      'html,body,#root': {
        height: '100%',
      },
      ul: {
        listStyleType: 'none',
      },
    },
  },
});

export default theme;
