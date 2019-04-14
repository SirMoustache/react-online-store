/**
 * Absolute imports
 */
import React from 'react';
import { render, cleanup } from 'react-testing-library';

/**
 * Local Components
 */
import Footer from '..';

const renderComponent = ({ ...rest } = {}) => render(<Footer {...rest} />);

describe('<Footer />', () => {
  afterEach(cleanup);

  it('should match snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('should render an <footer> tag', () => {
    const { container } = renderComponent();
    expect(container.querySelector('footer')).not.toBeNull();
  });
});
