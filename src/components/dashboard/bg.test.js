import React from 'react';
import { shallow } from 'enzyme';

import BloodGlucose from './bg';

describe('<BloodGlucose />', () => {
  it('Renders without crashing', () => {
    shallow(<BloodGlucose />);
  });

  it('Renders an aural status update', () => {
    let TEST_STATUS = 'You are listening to a game!';
    
    let wrapper = shallow(<BloodGlucose auralStatus={TEST_STATUS} />);
    expect(wrapper.contains(TEST_STATUS)).toEqual(true);
  });
});
