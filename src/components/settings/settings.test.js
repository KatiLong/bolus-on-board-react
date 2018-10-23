import React from 'react';
import { shallow } from 'enzyme';

import Settings from './settings';
import SettingForm from './settingForm';

describe('<Settings />', () => {
  it('Renders without crashing', () => {
    shallow(<Settings />);
  });

  it('Should render the add form when editing', () => {
    const wrapper = shallow(<Settings />);
    wrapper.instance().setEditing(true);
    wrapper.update();
    expect(wrapper.hasClass('add-form')).toEqual(true);
    });
});
