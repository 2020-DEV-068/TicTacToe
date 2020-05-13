import React from 'react';
import '../App.css';
import StyleConstants from '../constants/StyleConstants';
import PropTypes from 'prop-types';

const Tile = (props) => {
    return (
        <li>
            <button className={StyleConstants.TILE_BUTTON}
                onClick={props.onClick}
                data-symbol-color={props.value}
                disabled={props.gameHasWinner || props.value}>
                {props.value}
            </button>
        </li>
    );
};

Tile.propTypes = {
    onClick: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    gameHasWinner: PropTypes.bool.isRequired
};
export default Tile;