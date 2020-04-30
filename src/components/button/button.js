import React from 'react';
import './button.scss';
import { ReactSVG } from 'react-svg';

/**
Parameters:
    label: buttons text
    logo: buttons logo
    handler: what to do on onClick
**/
class Button extends React.Component {
    render() {
        return (
            <div className="button" onClick={this.props.handler} onKeyDown={()=> {}} role="button" tabIndex="0">
                <ReactSVG src={this.props.logo} />
                <span>{this.props.label}</span>
            </div>);
    }
};

export default Button;
