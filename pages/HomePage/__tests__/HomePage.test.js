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
  it('should match snapshot', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper).toMatchSnapshot();
  });
});
