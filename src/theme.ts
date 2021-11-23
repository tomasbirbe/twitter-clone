import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import breakpoints from './breakpoints';

const newBreakpoints = createBreakpoints(breakpoints);

const theme = extendTheme({
  breakpoints: newBreakpoints,
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
  container: {
    ...breakpoints,
    md: '200px',
  },
});

export default theme;
