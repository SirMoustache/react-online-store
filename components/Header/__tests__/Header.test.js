/**
 * Absolute imports
 */
import React from 'react';
import { render, cleanup } from 'react-testing-library';

/**
 * Local Components
 */
import Header from '..';

const renderComponent = ({ ...rest } = {}) => render(<Header {...rest} />);

describe('<Header />', () => {
  afterEach(cleanup);

  it('should match snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('should render an <header> tag', () => {
    const { container } = renderComponent();
    expect(container.querySelector('header')).not.toBeNull();
  });
});
