/**
 *@jest-environment jsdom
 */

import React from 'React';
import Enzyme from "enzyme";
import { Dropdown } from "../Dropdown";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe('Dropdown', () => {
  test('should render', () => {
    const wrapper = Enzyme.shallow(<Dropdown children={<div />} button={<button />}/>)
    expect(wrapper).toBeDefined();
    console.log(window);
    expect(wrapper.find('div.container').isEmptyRender()).toBeFalsy();
  });

  test('should render (snapshot)', () => {
    const wrapper = Enzyme.shallow(<Dropdown children={<div />} button={<button />}/>)
    expect(wrapper).toMatchSnapshot();
  });
});
