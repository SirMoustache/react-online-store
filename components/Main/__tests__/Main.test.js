/**
 * Absolute imports
 */
import React from 'react';
import { render, cleanup } from '@testing-library/react';

/**
 * Local Components
 */
import Main from '..';

const child = <span className="unique">Test</span>;

const renderComponent = ({ ...rest } = {}) =>
  render(<Main {...rest}>{child}</Main>);

describe('<Main />', () => {
  afterEach(cleanup);

  it('should match snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('should render a <main> tag', () => {
    const { container } = renderComponent();
    expect(container.querySelector('main')).not.toBeNull();
  });

  it('should have a className attribute', () => {
    const className = 'test';
    const { container } = renderComponent({ className });
    expect(container.querySelector('main').classList).toContain(className);
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const { container } = renderComponent({ id });
    expect(container.querySelector('main').id).toContain(id);
  });

  it('should not adopt an invalid attribute', () => {
    const attribute = 'test';
    const { container } = renderComponent({ attribute });
    expect(
      container.querySelector('main').getAttribute('attribute'),
    ).toBeNull();
  });
});
