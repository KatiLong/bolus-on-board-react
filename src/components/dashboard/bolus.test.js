import React from 'react';
import { shallow } from 'enzyme';

import Bolus from './bolus';

describe('<Bolus />', () => {
  it('Renders without crashing', () => {
    shallow(<Bolus />);
  });

  it('Renders an aural status update', () => {
    let TEST_STATUS = 'You are listening to a game!';
    
    let wrapper = shallow(<Bolus auralStatus={TEST_STATUS} />);
    expect(wrapper.contains(TEST_STATUS)).toEqual(true);
  });
});
