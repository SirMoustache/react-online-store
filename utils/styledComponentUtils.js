/**
 * Absolute imports
 */
import { css } from 'styled-components';

const sizes = {
  xl: 1920,
  lg: 1280,
  md: 960,
  sm: 600,
  xs: 376,
};

/**
 * Iterate through the sizes and create a media template
 *
 * @example
 * const Content = styled.div`
 * height: 3em;
 * width: 3em;
 * background: papayawhip;
 * // Now we have our methods on cssMedia and can use them instead of raw queries
 * ${cssMedia.xl`background: dodgerblue;`};
 * ${cssMedia.lg`background: mediumseagreen;`};
 * ${cssMedia.md`background: palevioletred;`};
 * `;
 */
export const cssMedia = Object.keys(sizes).reduce((acc, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;
  const accumulator = { ...acc };
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});
