/**
 * Absolute imports
 */
import React, { Fragment } from 'react';

/**
 * Containers
 */
import ShopItemsContainer from '../../containers/ShopItems';

const HomePage = () => (
  <Fragment>
    <h1>Hello World from Home Page</h1>
    <ShopItemsContainer
      render={data => {
        console.log('Apollo data: ', data);
        return <span>sp</span>;
      }}
    />
  </Fragment>
);

export default HomePage;
