/**
 * Absolute imports
 */
import React, { Fragment } from 'react';

/**
 * Containers
 */
import ShopItemsContainer from '../../containers/ShopItems';

/**
 * Components
 */
import ShopItemOverview from '../../components/ShopItemOverview';

const HomePage = () => (
  <Fragment>
    <h1>Hello World from Home Page</h1>
    <ShopItemsContainer
      render={data => {
        console.log('Apollo data: ', data);
        return <ShopItemOverview />;
      }}
    />
  </Fragment>
);

export default HomePage;
