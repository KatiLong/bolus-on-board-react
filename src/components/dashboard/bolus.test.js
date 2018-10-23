import React from 'react';
import { shallow } from 'enzyme';

import Bolus from './bolus';

describe('<Bolus />', () => {
  it('Renders without crashing', () => {
    shallow(<Bolus />);
  });

});
