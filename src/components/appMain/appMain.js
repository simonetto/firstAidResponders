import React from 'react';
import PayPal from "../payPal";
import './appMain.scss';

function AppMain() {
  return (
    <main>
        <section className="images">
            <img src="patient-lifting.jpg" alt="patient lifting"/>
            <img src="CFR-Training.jpg" alt="CFR Training"/>
        </section>
        <section>
            <p><b>We work in partnership with the National Ambulance Service</b>, a group of volunteers who live or work in Bray and help by providing an early response in the provision of primary life-saving support to people who have called 999/112 and requested an ambulance.</p>
            <p><b>A Cardiac First Responder</b> is a person who has successfully completed a Pre Hospital Emergency Care Council (PHECC) approved Cardiac First Response course - Responder level, within the last two years.</p>
            <p><b>New Members are welcome</b> all year round if you can only spare a few hours a month, that is plenty!</p>
            <p><b>Full training</b> is provided twice a year in March and September. There is monthly refresher training also.</p>
            <p>If you can't be a responder but want to help, we need people to assist with fundraising and organisation.</p>
        </section>
        <section className="main-section">
            <img src="sd" alt="volunteer" />
            <h1>Learn about volunteering</h1>
            <h2>The best way to contact Bray CFR is through our messenger on our Facebook page</h2>

            <div>
                <img src="facebook" alt="facebook"/>
                <h2>https://facebook.com/BrayCardiacFirstResponders</h2>
            </div>

            <div>
                <img src="email" alt="e-mail" />
                <h2>braycfr@gmail.com</h2>
            </div>
        </section>
        <section className="main-section">
            <img src="donate" alt="donate" />
            <h1>Please Donate Today</h1>
            <h2>As a Voluntary Organisation it's the generosity of our supporters that funds our Response to life threatening emergencies.</h2>
            <h2>Any amount of money helps us do our vital work</h2>
            <h2>Donate with PayPal button</h2>
            <PayPal />
        </section>
    </main>
  );
}

export default AppMain;
