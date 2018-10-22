import React from 'react';
import { shallow } from 'enzyme';

import Basal from './basal';

describe('<Basal />', () => {
  it('Renders without crashing', () => {
    shallow(<Basal />);
  });

  it('Renders an aural status update', () => {
    let TEST_STATUS = 'You are listening to a game!';
    
    let wrapper = shallow(<Basal auralStatus={TEST_STATUS} />);
    expect(wrapper.contains(TEST_STATUS)).toEqual(true);
  });
});
