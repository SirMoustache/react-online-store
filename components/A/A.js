/**
 * Absolute imports
 */
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Utils
 */
import { withDynamicComponent } from '../../utils/styledComponentUtils';

/**
 * Theme
 */
import theme from '../../theme';

/**
 * A link to a certain page, an anchor tag
 */
const A = styled.a`
  color: ${theme.colors.active.main};
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${theme.colors.active.dark};
  }
`;

A.propTypes = {
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object,
  ]),
  href: PropTypes.string,
  title: PropTypes.string,
  rel: PropTypes.string,
  target: PropTypes.string,
};

export default withDynamicComponent(A);
