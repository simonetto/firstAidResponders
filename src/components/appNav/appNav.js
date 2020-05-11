import React from 'react';
import Button from "../button";
import './appNav.scss';

class AppNav extends React.Component {
    constructor(props) {
        super(props);

        this.scrollTo = this.scrollTo.bind(this);
    }

    scrollTo(hash) {
        const element = document.getElementById(hash);
        element.scrollIntoView({behavior: 'smooth'});
    }

    render() {
        return (
            <nav>
                <Button label="Home" logo="home.svg" handler={() => this.scrollTo('home')} />
                <Button label="Volunteer" logo="contact.svg" handler={() => this.scrollTo('volunteer')} />
                <Button label="Donate" logo="donate.svg" handler={() => this.scrollTo('donate')} />
                <Button label="Where We Meet" logo="location-sign.svg" handler={() => this.scrollTo('location')} />
            </nav>
        );
    }
}

export default AppNav;
