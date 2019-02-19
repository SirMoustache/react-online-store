import {
  COLOR_TYPOGRAPHY,
  COLOR_ACTION,
  COLOR_ACTION_DARK,
  COLOR_BG,
  COLOR_BG_DARK,
} from './colors';

import { LG } from './sizes';

/**
 * Colors
 */
const colors = {
  typography: {
    main: COLOR_TYPOGRAPHY,
  },
  fill: {
    light: COLOR_BG,
    dark: COLOR_BG_DARK,
  },
  active: {
    main: COLOR_ACTION,
    dark: COLOR_ACTION_DARK,
  },
};

const sizes = {
  container: {
    sm: '98%',
    lg: `${LG}px`,
  },
};

const theme = {
  colors,
  sizes,
};

export default theme;
