import React, { useState } from 'react';
import '../App.css';
import Tile from './Tile';
import StyleConstants from '../constants/StyleConstants';
import Constants from '../constants/Constants';

const Game = () => {
    const [board, setBoard] = useState(Array(Constants.MAXIMUM_NUMBER_OF_TILES).fill(Constants.EMPTY_VALUE));

    const renderBoard = () => {
        let tiles = [];
        for (let tile = Constants.INITIAL_TILE_POSITION; tile < Constants.MAXIMUM_NUMBER_OF_TILES; tile++) {
            tiles.push(
                <Tile key={tile}
                    onClick={() => handleCurrentPlayerTurn(tile)}
                    value={board[tile]}
                />
            );
        }
        return tiles;
    };

    const handleCurrentPlayerTurn = (tile) => {
        const gameBoard = board.slice();
        gameBoard[tile] = Constants.PLAYER_X;
        setBoard(gameBoard);
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