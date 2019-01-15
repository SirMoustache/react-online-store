/**
 * Absolute imports
 */
import React from 'react';
import { shallow } from 'enzyme';

/**
 * Local Components
 */
import AboutPage from '..';

describe('<AboutPage />', () => {
  it('should match snapshot', () => {
    const renderedComponent = shallow(<AboutPage />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
