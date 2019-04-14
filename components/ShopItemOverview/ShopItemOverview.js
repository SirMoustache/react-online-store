/**
 * Absolute imports
 */
import React from 'react';
import PropTypes from 'prop-types';

const ShopItemOverview = ({ title }) => (
  <div>
    <h3>Shop Item</h3>
    Title: {title}
  </div>
);

ShopItemOverview.propTypes = {
  title: PropTypes.string,
};

export default ShopItemOverview;
