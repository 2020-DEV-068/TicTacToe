import React from 'react';
import { shallow } from 'enzyme';
import Status from '../component/Status';
import Constants from './constants/Constants';

describe(("<Status/> component"), () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Status currentPlayer={Constants.PLAYER_X} />);
    });

    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("should render label to display game status", () => {
        expect(wrapper.find("label")).toBeDefined();
        expect(wrapper.find("label").text()).toBe(Constants.EXPECT_CURRENT_PLAYER_X);
    });
});