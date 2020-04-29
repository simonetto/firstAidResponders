import React from 'react';
import './button.scss';

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
                <img src={this.props.logo} alt={this.props.label} />
                {this.props.label}
            </div>);
    }
};

export default Button;
