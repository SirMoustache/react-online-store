/**
 * Absolute imports
 */
import React, { Fragment } from 'react';

/**
 * Containers
 */
import ShopItemsContainer from '../../containers/ShopItems';
import CreateShopItemContainer from '../../containers/CreateShopItem';

/**
 * Components
 */
import ShopItemOverview from '../../components/ShopItemOverview';
import CreateShopItem from '../../components/CreateShopItem';

const HomePage = () => (
  <Fragment>
    <h1>Hello World from Home Page</h1>
    <CreateShopItemContainer
      render={({ createShopItem, data }) => {
        console.log('CreateShopItem data: ', data);
        return <CreateShopItem onSubmit={createShopItem} />;
      }}
    />
    <hr />
    <ShopItemsContainer
      render={({ data }) => {
        console.log('ShopItems data: ', data);
        return data.shopItems
          ? data.shopItems.map(shopItem => (
              <ShopItemOverview title={shopItem.title} key={shopItem.id} />
            ))
          : null;
      }}
    />
  </Fragment>
);

export default HomePage;
