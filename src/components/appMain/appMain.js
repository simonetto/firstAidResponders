import React from 'react';
import GoFundMe from '../goFundMe';
import OpenMap from '../openMap';
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
                    <p><b>A Cardiac First Responder</b> is a person who has successfully completed a Pre-Hospital Emergency Care Council (PHECC) approved Cardiac First Response course - Responder level, within the last two years.</p>
                    <p><b>New Members are welcome</b> all year round if you can only spare a few hours a month, that is plenty!</p>
                    <p><b>Full training</b> is provided to volunteers who are willing to become responders.</p>
                    <p>If you can't be a responder but want to help, we need people to assist with fundraising and organisation.</p>
                    <p>We meet on the first Thursday of every month in the Taylor hall in Bray.</p>
                </div>
            </section>

            <div className="anchor" id="volunteer"></div>
            <section className="main-section volunteer">
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

            <div className="anchor" id="donate"></div>
            <section className="main-section donate">
                <div className="inner-wrapper">
                    <ReactSVG src="donate.svg" />
                </div>
                <div className="inner-wrapper">
                    <h1>Please Donate Today</h1>
                    <h2>As a Voluntary Organisation it's the generosity of our supporters that funds our Response to life threatening emergencies.</h2>
                    <h2>Any amount of money helps us do our vital work</h2>
                    <h2>Donate with PayPal</h2>
                    <GoFundMe />
                </div>
            </section>

            <section className="main-section map" id="location">
                <div className="inner-wrapper">
                    <ReactSVG src="location-sign.svg" />
                </div>
                <div className="inner-wrapper address">
                    <h1>Location</h1>
                    <h2>We meet on the first Thursday of every month in the Taylor hall in Bray.</h2>
                    <br />
                    <h2>Taylor Centre, Sunbeam House, Vevay Rd</h2>
                    <h2>A98E220 Bray, County Wicklow</h2>
                    <OpenMap />
                </div>
            </section>
        </div>
    </main>
  );
}

export default AppMain;
