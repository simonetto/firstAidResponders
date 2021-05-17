import React from 'react';
import './goFundMe.scss';

function GoFundMe() {
    const onClick = () => window.open('https://www.paypal.com/donate?hosted_button_id=S8LW8NDBQZS6W', '_blank');

    return (
        <div className="go-fund-me" onClick={onClick} onKeyDown={()=> {}} role="button" tabIndex="0">PayPal</div>
    );
}

export default GoFundMe;
