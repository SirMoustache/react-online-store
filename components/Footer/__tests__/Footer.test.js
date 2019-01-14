/**
 * Absolute imports
 */
import React from 'react';
import { shallow } from 'enzyme';

/**
 * Local Components
 */
import Footer from '..';

describe('<Footer />', () => {
  it('should render correctly', () => {
    const renderedComponent = shallow(<Footer />);
    expect(renderedComponent).toMatchSnapshot();
    // expect(renderedComponent.find('footer').node).toBeDefined();
  });
});
