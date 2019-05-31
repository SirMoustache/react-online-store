/**
 * Absolute imports
 */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MockedProvider } from 'react-apollo/test-utils';

/**
 * Local Components
 */
import HomePage from '..';

/**
 * GraphQL
 */
import { ALL_SHOP_ITEMS_QUERY } from '../../../containers/ShopItems';

const mocks = [
  {
    request: { query: ALL_SHOP_ITEMS_QUERY },
    result: {
      data: {},
    },
  },
];

const renderComponent = ({ ...rest } = {}) =>
  render(
    <MockedProvider mocks={mocks}>
      <HomePage {...rest} />
    </MockedProvider>,
  );

describe('<HomePage />', () => {
  afterEach(cleanup);

  it('should match snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
