/**
 * Absolute imports
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Theme
 */
import { SHADOW_DEFAULT } from '../../theme/shadows';

const Root = styled.div`
  padding: 16px;
  margin: 16px;
  box-shadow: ${SHADOW_DEFAULT};
`;

const ShopItemOverview = ({ title }) => (
  <Root>
    <h3>Shop Item</h3>
    Title: {title}
  </Root>
);

ShopItemOverview.propTypes = {
  title: PropTypes.string,
};

export default ShopItemOverview;
