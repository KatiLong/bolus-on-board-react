import React from 'react';
import { shallow } from 'enzyme';

import Disclaimer from './disclaimer';

describe('<Disclaimer />', () => {
  it('Renders without crashing', () => {
    shallow(<Disclaimer />);
  });
});
