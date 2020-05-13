import React from 'react';
import Tile from '../component/Tile';
import { shallow } from 'enzyme';
import Constants from './constants/Constants';

describe(("<Tile/> component"), () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Tile />);
    });

    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("should render the button with styles", () => {
        expect(wrapper.find("button").hasClass(Constants.EXPECT_TILE_BUTTON)).toBeTruthy();
    });
});