import React from 'react';
import { shallow } from 'enzyme';

import UserDashboard from './dashboard';

describe('<UserDashboard />', () => {
  it('Renders without crashing', () => {
    shallow(<UserDashboard />);
  });

  it('Renders an aural status update', () => {
    let TEST_STATUS = 'You are listening to a game!';
    
    let wrapper = shallow(<UserDashboard auralStatus={TEST_STATUS} />);
    expect(wrapper.contains(TEST_STATUS)).toEqual(true);
  });
});
