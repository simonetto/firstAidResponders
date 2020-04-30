import React from 'react';
import GoFundMe from "../goFundMe";
import { ReactSVG } from 'react-svg';
import './appMain.scss';

function AppMain() {
  const onMailClick = () => window.open('mailto:braycfr@gmail.com');
  const onFbClick = () => window.open('https://facebook.com/BrayCardiacFirstResponders', '_blank');

  return (
    <main id="home">
        <div className="wrapper">
            <section className="about-us">
                <div className="images inner-wrapper">
                    <img src="patient-lifting.jpg" alt="patient lifting"/>
                    <img src="CFR-Training.jpg" alt="CFR Training"/>
                </div>
                <div className="inner-wrapper">
                    <p><b>We work in partnership with the National Ambulance Service</b>, a group of volunteers who live or work in Bray and help by providing an early response in the provision of primary life-saving support to people who have called 999/112 and requested an ambulance.</p>
                    <p><b>A Cardiac First Responder</b> is a person who has successfully completed a Pre Hospital Emergency Care Council (PHECC) approved Cardiac First Response course - Responder level, within the last two years.</p>
                    <p><b>New Members are welcome</b> all year round if you can only spare a few hours a month, that is plenty!</p>
                    <p id="volunteer"><b>Full training</b> is provided twice a year in March and September. There is monthly refresher training also.</p>
                    <p>If you can't be a responder but want to help, we need people to assist with fundraising and organisation.</p>
                </div>
            </section>

            <section className="main-section">
                <div className="inner-wrapper">
                    <ReactSVG src="contact.svg" />
                </div>
                <div className="inner-wrapper">
                    <h1>Learn about volunteering</h1>
                    <h2>The best way to contact Bray CFR is through our messenger on our Facebook page</h2>

                    <div className="contact" onClick={onFbClick} onKeyDown={()=> {}} role="button" tabIndex="0">
                        <img src="F_icon.svg" alt="facebook"/>
                        <h2>facebook.com/BrayCardiacFirstResponders</h2>
                    </div>

                    <div className="contact" onClick={onMailClick} onKeyDown={()=> {}} role="button" tabIndex="0">
                        <ReactSVG src="mail.svg" />
                        <h2>braycfr2@gmail.com</h2>
                    </div>
                </div>
            </section>

            <section className="main-section" id="donate">
                <div className="inner-wrapper">
                    <ReactSVG src="donate.svg" />
                </div>
                <div className="inner-wrapper">
                    <h1>Please Donate Today</h1>
                    <h2>As a Voluntary Organisation it's the generosity of our supporters that funds our Response to life threatening emergencies.</h2>
                    <h2>Any amount of money helps us do our vital work</h2>
                    <h2>Donate with GoFundMe button</h2>
                    <GoFundMe />
                </div>
            </section>
        </div>
    </main>
  );
}

export default AppMain;
