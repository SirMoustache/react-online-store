/**
 * Absolute imports
 */
import React, { Fragment } from 'react';
import styled from 'styled-components';

/**
 * Containers
 */
import ShopItemsContainer from '../../containers/ShopItems';
import CreateShopItemContainer from '../../containers/CreateShopItem';

/**
 * Components
 */
import Container from '../../components/Container';
import ShopItemOverview from '../../components/ShopItemOverview';
import CreateShopItem from '../../components/CreateShopItem';

const ShopItemsList = styled.div`
  display: flex;
  margin: -16px;
`;

const HomePage = () => (
  <Fragment>
    <Container>
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

          return (
            <ShopItemsList>
              {data.shopItems
                ? data.shopItems.map(shopItem => (
                    <ShopItemOverview
                      title={shopItem.title}
                      key={shopItem.id}
                    />
                  ))
                : null}
            </ShopItemsList>
          );
        }}
      />
    </Container>
  </Fragment>
);

export default HomePage;
