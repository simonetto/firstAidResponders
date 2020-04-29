import React from 'react';
import './goFundMe.scss';

function GoFundMe() {
    const onClick = () => window.open('https://www.gofundme.com/f/public-access-defibrillators-replacement-parts', '_blank');

    return (
        <div className="go-fund-me" onClick={onClick} onKeyDown={()=> {}} role="button" tabIndex="0">GoFundMe</div>
    );
}

export default GoFundMe;
