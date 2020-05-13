import React from 'react';
import Tile from '../component/Tile';
import { shallow } from 'enzyme';
import Constants from './constants/Constants';

describe(("<Tile/> component"), () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Tile value={Constants.PLAYER_X}
            onClick={jest.fn()}
            gameHasWinner={false} />);
    });

    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("should render the button with styles", () => {
        expect(wrapper.find("button").hasClass(Constants.EXPECT_TILE_BUTTON)).toBeTruthy();
    });
});

describe(("<Tile/> component functionality"), () => {
    let wrapper_x, wrapper_o;

    beforeEach(() => {
        wrapper_x = shallow(<Tile value={Constants.PLAYER_X}
            onClick={jest.fn()}
            gameHasWinner={false} />);
        wrapper_o = shallow(<Tile value={Constants.PLAYER_O}
            onClick={jest.fn()}
            gameHasWinner={false} />);
    });

    it("should display symbol X when player X clicks on tile", () => {
        expect(wrapper_x.find("button").props()[Constants.DATA_SYMBOL_COLOR]).toBe(Constants.EXPECT_PLAYER_X);
        expect(wrapper_x.find("button").text()).toEqual(Constants.EXPECT_PLAYER_X);
    });

    it("should display symbol O when player O clicks on tile", () => {
        expect(wrapper_o.find("button").props()[Constants.DATA_SYMBOL_COLOR]).toBe(Constants.EXPECT_PLAYER_O);
        expect(wrapper_o.find("button").text()).toEqual(Constants.EXPECT_PLAYER_O);
    });

    it("should not allow player to play on played tile", () => {
        expect(wrapper_x.find("button").props()[Constants.DISABLED]).toBeTruthy();
    });

    it("Should disable tile once player won the game", () => {
        wrapper_x = shallow(<Tile value={Constants.PLAYER_X} onClick={jest.fn()} gameHasWinner={true} />);
        expect(wrapper_x.find("button").props()[Constants.DISABLED]).toBeTruthy();
    });
});