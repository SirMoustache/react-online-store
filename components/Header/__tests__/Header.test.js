/**
 * Absolute imports
 */
import React from 'react';
import { shallow } from 'enzyme';

/**
 * Local Components
 */
import Header from '..';

describe('<Header />', () => {
  it('should match snapshot', () => {
    const renderedComponent = shallow(<Header />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
