/**
 * Absolute imports
 */
import React from 'react';
import { mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';

/**
 * Local Components
 */
import Container from '..';

describe('<Container />', () => {
  it('should render a <div> tag', () => {
    const container = mount(<Container />);
    const renderedComponent = enzymeFind(container, Container);
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should have a className attribute', () => {
    const container = mount(<Container />);
    const renderedComponent = enzymeFind(container, Container);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const container = mount(<Container id={id} />);
    const renderedComponent = enzymeFind(container, Container);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const container = mount(<Container attribute="test" />);
    const renderedComponent = enzymeFind(container, Container);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
