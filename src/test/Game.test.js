import React from 'react';
import Game from '../component/Game';
import Constants from './constants/Constants';
import Tile from '../component/Tile';
import { shallow, mount } from 'enzyme';

describe(("<Game/> component"), () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Game />);
    });

    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("should render title correctly", () => {
        expect(wrapper.find("header").text()).toEqual(Constants.EXPECT_TIC_TAC_TOE);
    });

    it("should render styles correctly", () => {
        expect(wrapper.find("div").at(0).hasClass(Constants.EXPECT_APP)).toBeTruthy();
        expect(wrapper.find("header").hasClass(Constants.EXPECT_APP_HEADER)).toBeTruthy();
        expect(wrapper.find("ul").hasClass(Constants.EXPECT_BOARD)).toBeTruthy();
    });
});

describe(("<Game/> component functionality"), () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<Game />);
    });

    it("Should render 9 empty Tiles", () => {
        expect(wrapper.find(Tile).length).toBe(Constants.EXPECT_MAXIMUM_NUMBER_OF_TILES);
        wrapper.find(Tile).forEach(tile => {
            expect(tile.find("button").text()).toBe(Constants.EXPECT_EMPTY_VALUE);
        });
    });

    it("Should always assign first move to Player X", () => {
        wrapper.find(Tile).at(0).find("button").simulate('click');
        expect(wrapper.find(Tile).at(0).find("button").text()).toBe(Constants.EXPECT_PLAYER_X);
    });

    it("Should assign the alternate move to Player O", () => {
        wrapper.find(Tile).at(0).find("button").simulate('click');
        wrapper.find(Tile).at(1).find("button").simulate('click');
        expect(wrapper.find(Tile).at(1).find("button").text()).toBe(Constants.EXPECT_PLAYER_O);
    });
});