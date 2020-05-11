import React from 'react';
import './openMap.scss';

function OpenMap() {
    const onClick = () => window.open('https://goo.gl/maps/jr39saM8BsfpUBSz7', '_blank');

    return (
        <div className="open-map" onClick={onClick} onKeyDown={()=> {}} role="button" tabIndex="0">Open Map</div>
    );
}

export default OpenMap;
