import React from 'react';
import { shallow } from 'enzyme';

import IobCalculator from './iob-calculator';
import InsulinOnBoard from './insulin-on-board';

describe('<IobCalculator />', () => {
  it('Renders without crashing', () => {
    shallow(<IobCalculator />);
  });
});

describe('<InsulinOnBoard />', () => {
    it('Renders without crashing', () => {
      shallow(<InsulinOnBoard />);
    });
  });