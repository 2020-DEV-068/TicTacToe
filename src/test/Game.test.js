import React from 'react';
import Game from '../component/Game';
import Constants from './constants/Constants';
import Tile from '../component/Tile';
import Status from '../component/Status';
import Tiles from './constants/Tiles';
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
        expect(wrapper.find("div").at(2).hasClass(Constants.EXPECT_STATUS)).toBeTruthy();
    });
});

describe(("<Game/> component functionality"), () => {
    let wrapper, PLAYER_X, PLAYER_O;

    beforeEach(() => {
        wrapper = mount(<Game />);

        PLAYER_X = {
            playOn: function (tile) {
                wrapper.find(Tile).at(tile).find("button").simulate('click');
            }
        }

        PLAYER_O = {
            playOn: function (tile) {
                wrapper.find(Tile).at(tile).find("button").simulate('click');
            }
        }
    });

    it("Should render 9 empty Tiles", () => {
        expect(wrapper.find(Tile).length).toBe(Constants.EXPECT_MAXIMUM_NUMBER_OF_TILES);
        wrapper.find(Tile).forEach(tile => {
            expect(tile.find("button").text()).toBe(Constants.EXPECT_EMPTY_VALUE);
        });
    });

    it("Should always assign first move to Player X", () => {
        PLAYER_X.playOn(Tiles.TOP_LEFT);

        expect(wrapper.find(Tile).at(0).find("button").text()).toBe(Constants.EXPECT_PLAYER_X);
    });

    it("Should assign the alternate move to Player O", () => {
        PLAYER_X.playOn(Tiles.TOP_LEFT);
        PLAYER_O.playOn(Tiles.TOP_MIDDLE);

        expect(wrapper.find(Tile).at(1).find("button").text()).toBe(Constants.EXPECT_PLAYER_O);
    });

    it("Should display the status of game with current player turn", () => {
        expect(wrapper.find(Status).find("label").text()).toBe(Constants.EXPECT_CURRENT_PLAYER_X);

        PLAYER_X.playOn(Tiles.TOP_LEFT);

        expect(wrapper.find(Tile).at(0).find("button").text()).toBe(Constants.EXPECT_PLAYER_X);
        expect(wrapper.find(Status).find("label").text()).toBe(Constants.EXPECT_CURRENT_PLAYER_O);

        PLAYER_O.playOn(Tiles.TOP_MIDDLE);

        expect(wrapper.find(Tile).at(1).find("button").text()).toBe(Constants.EXPECT_PLAYER_O);
        expect(wrapper.find(Status).find("label").text()).toBe(Constants.EXPECT_CURRENT_PLAYER_X);
    });

    it("Should not allow player to play on played tile", () => {
        PLAYER_X.playOn(Tiles.TOP_LEFT);

        expect(wrapper.find(Tile).at(0).find("button").text()).toBe(Constants.EXPECT_PLAYER_X);
        expect(wrapper.find(Tile).at(0).find("button").props()[Constants.DISABLED]).toBeTruthy();
    });

    it("should declare X as winner if first row is completely filled by X ", () => {
        PLAYER_X.playOn(Tiles.TOP_LEFT);
        PLAYER_O.playOn(Tiles.CENTER_LEFT);
        PLAYER_X.playOn(Tiles.TOP_MIDDLE);
        PLAYER_O.playOn(Tiles.CENTER);
        PLAYER_X.playOn(Tiles.TOP_RIGHT);

        expect(wrapper.find(Status).find("label").text()).toBe(Constants.EXPECT_WINNER_X);
    });

    it("should declare O as winner if first row is completely filled by O ", () => {
        PLAYER_X.playOn(Tiles.CENTER_LEFT);
        PLAYER_O.playOn(Tiles.TOP_LEFT);
        PLAYER_X.playOn(Tiles.CENTER);
        PLAYER_O.playOn(Tiles.TOP_MIDDLE);
        PLAYER_X.playOn(Tiles.BOTTOM_LEFT);
        PLAYER_O.playOn(Tiles.TOP_RIGHT);

        expect(wrapper.find(Status).find("label").text()).toBe(Constants.EXPECT_WINNER_O);
    });
});