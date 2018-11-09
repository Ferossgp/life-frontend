import React from 'react';
import { shallow } from 'enzyme';

import Profile from '../index';
import Form from '../form';

describe('<Profile />', () => {
  it('should render layout', () => {
    const renderedComponent = shallow(<Profile />);
    expect(renderedComponent.contains('h1')).toBe(true);
  });
});

describe('<Form />', () => {
  it('should render layout', () => {
    const dummyFn = () => null;
    const renderedComponent = shallow(<Form onSubmit={dummyFn} />);
    expect(renderedComponent.prop('onSubmit')).toEqual(dummyFn);
  });
});
