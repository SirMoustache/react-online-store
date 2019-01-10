/**
 * Absolute imports
 */
import React from 'react';
import { mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';

/**
 * Local Components
 */
import Main from '..';

describe('<Main />', () => {
  it('should render a <main> tag', () => {
    const container = mount(<Main />);
    const renderedComponent = enzymeFind(container, Main);
    expect(renderedComponent.type()).toEqual('main');
  });

  it('should have a className attribute', () => {
    const container = mount(<Main />);
    const renderedComponent = enzymeFind(container, Main);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const container = mount(<Main id={id} />);
    const renderedComponent = enzymeFind(container, Main);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const container = mount(<Main attribute="test" />);
    const renderedComponent = enzymeFind(container, Main);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
