/**
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

export const CREATE_SHOP_ITEM_MUTATION = gql`
  mutation CREATE_SHOP_ITEM_MUTATION($title: String!) {
    createShopItem(title: $title) {
      id
    }
  }
`;

const CreateShopItem = ({ render, children }) => {
  const renderer = render || children;

  return (
    <Mutation mutation={CREATE_SHOP_ITEM_MUTATION}>
      {(createShopItem, { error, loading, data }) =>
        renderer({ error, loading, data, createShopItem })
      }
    </Mutation>
  );
};

CreateShopItem.propTypes = {
  render: PropTypes.func,
  children: PropTypes.func,
};

export default CreateShopItem;
