import React from 'react';
import { shallow, mount } from 'enzyme';
import Status from '../component/Status';
import Constants from './constants/Constants';

describe(("<Status/> component"), () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Status currentPlayer={Constants.PLAYER_X}
            board={Constants.INPUT_EMPTY_BOARD} />);
    });

    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("should render label to display game status", () => {
        expect(wrapper.find("label")).toBeDefined();
        expect(wrapper.find("label").text()).toBe(Constants.EXPECT_CURRENT_PLAYER_X);
    });
});

describe(("<Status/> functionality"), () => {
    it("should render status on game won by player", () => {
        const wrapper = mount(<Status currentPlayer={Constants.PLAYER_O}
            board={Constants.INPUT_PLAYER_X_WINNING_BOARD} />);
        expect(wrapper.find("label").text()).toBe(Constants.EXPECT_WINNER_X);
    });
});