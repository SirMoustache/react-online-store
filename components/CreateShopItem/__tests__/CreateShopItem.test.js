/**
 * Absolute imports
 */
import React from 'react';
import { render, cleanup } from 'react-testing-library';

/**
 * Local Components
 */
import CreateShopItem from '..';

const renderComponent = ({ ...rest } = {}) =>
  render(<CreateShopItem {...rest} />);

describe('<CreateShopItem/>', () => {
  afterEach(cleanup);

  it('should match snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
