import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Constants from '../constants/Constants';

const Status = (props) => {
    const [gameStatus, setGameStatus] = useState();
    const [winner, setWinner] = useState();
    const { currentPlayer, board, onPlayerWin } = props;

    useEffect(() => { updateStatus(); });

    const updateStatus = () => {
        if (isFirstRowCompletedByAPlayer() || isSecondRowCompletedByAPlayer()) {
            setGameStatus(Constants.STATUS_WINNER + winner);
            onPlayerWin();
            return;
        }
        setGameStatus(Constants.CURRENT_PLAYER + currentPlayer);
    };

    const isFirstRowCompletedByAPlayer = () => {
        if (isTilesTakenBySamePlayer(Constants.FIRST_ROW_TILES)) {
            setWinner(board[Constants.FIRST_ROW_TILES[Constants.INITIAL_TILE_POSITION]]);
            return true;
        }
        return false;
    };

    const isSecondRowCompletedByAPlayer = () => {
        if (isTilesTakenBySamePlayer(Constants.SECOND_ROW_TILES)) {
            setWinner(board[Constants.SECOND_ROW_TILES[Constants.INITIAL_TILE_POSITION]]);
            return true;
        }
        return false;
    };

    const isTilesTakenBySamePlayer = (tiles) => {
        return tiles.map((tile) => board[tile])
            .every((value, index, arr) => value && value === arr[Constants.INITIAL_TILE_POSITION]);
    };

    return (
        <label>{gameStatus}</label>
    );
}

Status.propTypes = {
    currentPlayer: PropTypes.string.isRequired,
    board: PropTypes.array.isRequired,
    onPlayerWin: PropTypes.func.isRequired
};
export default Status;