import React from 'react';
import { mount } from 'enzyme';
import Status from '../component/Status';
import Constants from './constants/Constants';

describe(("<Status/> component"), () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<Status currentPlayer={Constants.PLAYER_X}
            board={Constants.INPUT_EMPTY_BOARD}
            onPlayerWin={jest.fn()} />);
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
            board={Constants.INPUT_PLAYER_X_WINNING_BOARD}
            onPlayerWin={jest.fn()} />);
        expect(wrapper.find("label").text()).toBe(Constants.EXPECT_WINNER_X);
    });

    it("Should not allow player to play once player has won", () => {
        const onPlayerWonMockFn = jest.fn();
        expect(onPlayerWonMockFn).toHaveBeenCalledTimes(0);

        const wrapper = mount(<Status currentPlayer={Constants.PLAYER_O}
            board={Constants.INPUT_PLAYER_X_WINNING_BOARD}
            onPlayerWin={onPlayerWonMockFn} />);
        expect(onPlayerWonMockFn).toHaveBeenCalled();
        expect(wrapper.find("label").text()).toBe(Constants.EXPECT_WINNER_X);
    });

    it("should be draw when all tiles are completely filled and no winner", () => {
        const wrapper = mount(<Status currentPlayer={Constants.PLAYER_X}
            board={Constants.INPUT_GAME_DRAW_BOARD}
            onPlayerWin={jest.fn()} />);
        expect(wrapper.find("label").text()).toBe(Constants.EXPECT_GAME_DRAW);
    });
});