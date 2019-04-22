import {
  COLOR_TYPOGRAPHY,
  COLOR_ACTION,
  COLOR_ACTION_DARK,
  COLOR_BG_PENUMBRA,
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
    penumbra: COLOR_BG_PENUMBRA,
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
