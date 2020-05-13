import React from 'react';
import PropTypes from 'prop-types';
import Constants from '../constants/Constants';

const Status = (props) => {
    const updateStatus = () => {
        const { currentPlayer, board } = props;

        if (Constants.FIRST_ROW_TILES.map((tile) => board[tile])
            .every((value, index, arr) => value && value === arr[Constants.INITIAL_TILE_POSITION])) {

            return Constants.STATUS_WINNER
                + board[Constants.FIRST_ROW_TILES[Constants.INITIAL_TILE_POSITION]];
        }

        return Constants.CURRENT_PLAYER + currentPlayer;
    };

    return (
        <label>{updateStatus()}</label>
    );
}

Status.propTypes = {
    currentPlayer: PropTypes.string.isRequired,
    board: PropTypes.array.isRequired
};
export default Status;