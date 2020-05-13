import React, { useState } from 'react';
import '../App.css';
import Tile from './Tile';
import Status from './Status';
import StyleConstants from '../constants/StyleConstants';
import Constants from '../constants/Constants';

const Game = () => {
    const [board, setBoard] = useState(Array(Constants.MAXIMUM_NUMBER_OF_TILES).fill(Constants.EMPTY_VALUE));
    const [currentPlayer, setCurrentPlayer] = useState(Constants.PLAYER_X);
    const [gameHasWinner, setGameHasWinner] = useState(false);

    const renderBoard = () => {
        let tiles = [];
        for (let tile = Constants.INITIAL_TILE_POSITION; tile < Constants.MAXIMUM_NUMBER_OF_TILES; tile++) {
            tiles.push(
                <Tile key={tile}
                    onClick={() => handleCurrentPlayerTurn(tile)}
                    value={board[tile]}
                    gameHasWinner={gameHasWinner}
                />
            );
        }
        return tiles;
    };

    const handleCurrentPlayerTurn = (tile) => {
        const gameBoard = board.slice();
        gameBoard[tile] = currentPlayer;
        setBoard(gameBoard);
        togglePlayer();
    };

    const togglePlayer = () => {
        setCurrentPlayer(currentPlayer === Constants.PLAYER_X ? Constants.PLAYER_O : Constants.PLAYER_X);
    };

    const handlePlayerWon = () => {
        setGameHasWinner(true);
    };

    return (
        <div className={StyleConstants.APP}>
            <header className={StyleConstants.APP_HEADER}>
                {Constants.APP_TITLE}
            </header>
            <div>
                <div className={StyleConstants.STATUS}>
                    <Status currentPlayer={currentPlayer}
                        board={board}
                        onPlayerWin={() => handlePlayerWon()} />
                </div>
                <ul className={StyleConstants.BOARD}>
                    {renderBoard()}
                </ul>
            </div>
        </div>
    );
}
export default Game;