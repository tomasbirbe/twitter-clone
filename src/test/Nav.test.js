import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { describe, it, expect } from 'jest';
import Nav from '../Layout/components/Nav';

configure({ adapter: new Adapter() });

describe('Testing the first app', () => {
  it('should test the first component', () => {
    const component = shallow(<Nav />);
    expect(component).toMatchSnapshot();
  });
});
