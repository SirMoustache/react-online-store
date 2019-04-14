/**
 * Absolute imports
 */
import React from 'react';
import { render, cleanup } from 'react-testing-library';

/**
 * Local Components
 */
import HeaderNavigation from '..';

const renderComponent = ({ ...rest } = {}) =>
  render(<HeaderNavigation {...rest} />);

describe('<HeaderNavigation />', () => {
  afterEach(cleanup);

  it('should match snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('should render an <nav> tag', () => {
    const { container } = renderComponent();
    expect(container.querySelector('nav')).not.toBeNull();
  });
});
