import React from 'react';
import { shallow } from 'enzyme';

import Basal from './basal';

describe('<Basal />', () => {
  it('Renders without crashing', () => {
    shallow(<Basal />);
  });
});
