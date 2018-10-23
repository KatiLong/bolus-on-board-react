import React from 'react';
import { shallow } from 'enzyme';

import A1c from './a1c';

describe('<A1c />', () => {
  it('Renders without crashing', () => {
    shallow(<A1c />);
  });

});
