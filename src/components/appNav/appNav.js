import React from 'react';
import Button from "../button";
import './appNav.scss';

class AppNav extends React.Component {
    constructor(props) {
        super(props);

        this.handleNext = this.handleNext.bind(this);
    }

    handleNext() {
        console.log("pressed")
    }

    render() {
        return (
            <nav className="blue">
                <Button label="Home" logo="logo" handler={this.handleNext} />
                <Button label="Volunteer" logo="logo" handler={this.handleNext} />
                <Button label="Donate" logo="logo" handler={this.handleNext} />
            </nav>
        );
    }
}

export default AppNav;
