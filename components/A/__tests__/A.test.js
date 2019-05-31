/**
 * Absolute imports
 */
import React from 'react';
import { render, cleanup } from '@testing-library/react';

/**
 * Local Components
 */
import A from '..';

const child = <span className="unique">Test</span>;

const renderComponent = ({ ...rest } = {}) => render(<A {...rest}>{child}</A>);

describe('<A />', () => {
  afterEach(cleanup);

  it('should match snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('should render an <a> tag', () => {
    const { container } = renderComponent();
    expect(container.querySelector('a')).not.toBeNull();
  });

  it('should render children when passed in', () => {
    const { container } = renderComponent();
    expect(container.querySelector('.unique')).not.toBeNull();
  });

  it('should adopt a valid attribute', () => {
    const href = '/test';
    const { container } = renderComponent({ href });
    expect(container.querySelector('a').href).toContain(href);
  });

  it('should render as provided component', () => {
    const component = 'button';
    const { container } = renderComponent({ component });
    expect(container.querySelector('button')).not.toBeNull();
  });
});
