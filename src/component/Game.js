import React from 'react';
import '../App.css';
import Tile from './Tile';
import StyleConstants from '../constants/StyleConstants';
import Constants from '../constants/Constants';

const Game = () => {
    const renderBoard = () => {
        let tiles = [];
        for (let tile = Constants.INITIAL_TILE_POSITION; tile < Constants.MAXIMUM_NUMBER_OF_TILES; tile++) {
            tiles.push(
                <Tile key={tile} />
            );
        }
        return tiles;
    };

    return (
        <div className={StyleConstants.APP}>
            <header className={StyleConstants.APP_HEADER}>
                {Constants.APP_TITLE}
            </header>
            <div>
                <ul className={StyleConstants.BOARD}>
                    {renderBoard()}
                </ul>
            </div>
        </div>
    );
}
export default Game;