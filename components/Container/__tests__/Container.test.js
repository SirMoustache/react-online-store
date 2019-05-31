/**
 * Absolute imports
 */
import React from 'react';
import { render, cleanup } from '@testing-library/react';

/**
 * Local Components
 */
import Container from '..';

const child = <span className="unique">Test</span>;

const renderComponent = ({ ...rest } = {}) =>
  render(<Container {...rest}>{child}</Container>);

describe('<Container />', () => {
  afterEach(cleanup);

  it('should match snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('should render a <div> tag', () => {
    const { container } = renderComponent();
    expect(container.querySelector('div')).not.toBeNull();
  });

  it('should have a className attribute', () => {
    const className = 'test';
    const { container } = renderComponent({ className });
    expect(container.querySelector('div').classList).toContain(className);
  });

  it('should render children when passed in', () => {
    const { container } = renderComponent();
    expect(container.querySelector('.unique')).not.toBeNull();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const { container } = renderComponent({ id });
    expect(container.querySelector('div').id).toContain(id);
  });

  it('should not adopt an invalid attribute', () => {
    const attribute = 'test';
    const { container } = renderComponent({ attribute });
    expect(container.querySelector('div').getAttribute('attribute')).toBeNull();
  });
});
