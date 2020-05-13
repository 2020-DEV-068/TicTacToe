import React from 'react';
import '../App.css';
import StyleConstants from '../constants/StyleConstants';

const Tile = () => {
    return (
        <li>
            <button className={StyleConstants.TILE_BUTTON} />
        </li>
    );
}
export default Tile;