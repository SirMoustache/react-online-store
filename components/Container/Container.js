/**
 * Absolute imports
 */
import styled from 'styled-components';

/**
 * Theme
 */
import theme from '../../theme';

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${theme.sizes.container.sm};

  @media (min-width: 1200px) {
    max-width: ${theme.sizes.container.lg};
  }
`;

export default Container;
