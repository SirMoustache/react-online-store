/**
 * Absolute imports
 */
import React from 'react';
import { shallow } from 'enzyme';

/**
 * Local Components
 */
import HeaderNavigation from '..';

describe('<HeaderNavigation />', () => {
  it('should match snapshot', () => {
    const renderedComponent = shallow(<HeaderNavigation />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
