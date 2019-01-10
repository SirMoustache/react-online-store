/**
 * Absolute imports
 */
import React from 'react';
import { shallow } from 'enzyme';

/**
 * Local Components
 */
import HomePage from '..';

describe('<HomePage />', () => {
  it('should render correctly', () => {
    const renderedComponent = shallow(<HomePage />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
