import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Constants from '../constants/Constants';

const Status = (props) => {
    const [gameStatus, setGameStatus] = useState();
    const [winner, setWinner] = useState();
    const { currentPlayer, board, onPlayerWin } = props;

    useEffect(() => { updateStatus(); });

    const updateStatus = () => {
        if (isRowCompletedByAPlayer()) {
            setGameStatus(Constants.STATUS_WINNER + winner);
            onPlayerWin();
            return;
        }
        setGameStatus(Constants.CURRENT_PLAYER + currentPlayer);
    };

    const isRowCompletedByAPlayer = () => {
        return isFirstRowCompletedByAPlayer()
            || isSecondRowCompletedByAPlayer()
            || isThirdRowCompletedByAPlayer();
    };

    const isFirstRowCompletedByAPlayer = () => {
        return isTilesTakenBySamePlayer(Constants.FIRST_ROW_TILES);
    };

    const isSecondRowCompletedByAPlayer = () => {
        return isTilesTakenBySamePlayer(Constants.SECOND_ROW_TILES);
    };

    const isThirdRowCompletedByAPlayer = () => {
        return isTilesTakenBySamePlayer(Constants.THIRD_ROW_TILES);
    };

    const isTilesTakenBySamePlayer = (tiles) => {
        if (hasWinner(tiles)) {
            setWinner(board[tiles[Constants.INITIAL_TILE_POSITION]]);
            return true;
        }
        return false;
    };

    const hasWinner = (tiles) => {
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