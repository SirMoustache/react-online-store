/**
 * Absolute imports
 */
import React from 'react';
import { shallow } from 'enzyme';
// import { enzymeFind } from 'styled-components/test-utils';

/**
 * Local Components
 */
import A from '..';

describe('<A />', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<A />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render children when passed in', () => {
    const child = <span className="unique" />;
    const wrapper = shallow(
      <A>
        <child />
      </A>,
    );
    expect(wrapper.contains(<child />)).toEqual(true);
  });

  it('should adopt a valid attribute', () => {
    const href = '/';
    const wrapper = shallow(<A href={href} />);
    expect(wrapper.prop('href')).toEqual(href);
  });

  it('should render as provided component', () => {
    const component = 'button';
    const wrapper = shallow(<A component={component} />);
    expect(wrapper.find(component)).toBeTruthy();
  });
});
