import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Constants from '../constants/Constants';

const Status = (props) => {
    const [gameStatus, setGameStatus] = useState();
    const [winner, setWinner] = useState();
    const { currentPlayer, board, onPlayerWin } = props;

    useEffect(() => { updateStatus(); });

    const updateStatus = () => {
        if (hasGameWon()) {
            setGameStatus(Constants.STATUS_WINNER + winner);
            onPlayerWin();
            return;
        }
        if (isDraw()) {
            setGameStatus(Constants.STATUS_GAME_DRAW);
            return;
        }
        setGameStatus(Constants.CURRENT_PLAYER + currentPlayer);
    };

    const hasGameWon = () => {
        return isRowCompletedByAPlayer()
            || isColumnCompletedByAPlayer()
            || isDiagonalCompletedByAPlayer();
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

    const isColumnCompletedByAPlayer = () => {
        return isFirstColumnCompletedByAPlayer()
            || isSecondColumnCompletedByAPlayer()
            || isThirdColumnCompletedByAPlayer()
    };

    const isFirstColumnCompletedByAPlayer = () => {
        return isTilesTakenBySamePlayer(Constants.FIRST_COLUMN_TILES);
    };

    const isSecondColumnCompletedByAPlayer = () => {
        return isTilesTakenBySamePlayer(Constants.SECOND_COLUMN_TILES);
    };

    const isThirdColumnCompletedByAPlayer = () => {
        return isTilesTakenBySamePlayer(Constants.THIRD_COLUMN_TILES);
    };

    const isDiagonalCompletedByAPlayer = () => {
        return isLeftDiagonalCompletedByAPlayer()
            || isRightDiagonalCompletedByAPlayer();
    };

    const isLeftDiagonalCompletedByAPlayer = () => {
        return isTilesTakenBySamePlayer(Constants.LEFT_DIAGONAL_TILES);
    };

    const isRightDiagonalCompletedByAPlayer = () => {
        return isTilesTakenBySamePlayer(Constants.RIGHT_DIAGONAL_TILES);
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

    const isDraw = () => {
        return board.indexOf(Constants.EMPTY_VALUE) === Constants.INDEX_NOT_FOUND;
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