import React from 'react';
import { shallow } from 'enzyme';

import A1c from './a1c';

describe('<A1c />', () => {
  it('Renders without crashing', () => {
    shallow(<A1c />);
  });

  it('Renders an aural status update', () => {
    let TEST_STATUS = 'You are listening to a game!';
    
    let wrapper = shallow(<A1c auralStatus={TEST_STATUS} />);
    expect(wrapper.contains(TEST_STATUS)).toEqual(true);
  });
});
