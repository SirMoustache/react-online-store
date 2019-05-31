/**
 * Absolute imports
 */
import React from 'react';
import { render, cleanup } from '@testing-library/react';

/**
 * Local Components
 */
import AboutPage from '..';

const renderComponent = ({ ...rest } = {}) => render(<AboutPage {...rest} />);

describe('<AboutPage />', () => {
  afterEach(cleanup);

  it('should match snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
