/**
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export const ALL_SHOP_ITEMS_QUERY = gql`
  query ALL_SHOP_ITEMS_QUERY {
    shopItems {
      id
      title
    }
  }
`;

const ShopItemsContainer = ({ render, children }) => {
  const renderer = render || children;

  return (
    <Query query={ALL_SHOP_ITEMS_QUERY}>
      {({ error, loading, data }) => renderer({ error, loading, data })}
    </Query>
  );
};

ShopItemsContainer.propTypes = {
  render: PropTypes.func,
  children: PropTypes.func,
};

export default ShopItemsContainer;
