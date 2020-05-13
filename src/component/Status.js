import React from 'react';
import PropTypes from 'prop-types';
import Constants from '../constants/Constants';

const Status = (props) => {
    const updateStatus = () => {
        const { currentPlayer } = props;
        return Constants.CURRENT_PLAYER + currentPlayer;
    };

    return (
        <label>{updateStatus()}</label>
    );
}

Status.propTypes = {
    currentPlayer: PropTypes.string.isRequired
};
export default Status;