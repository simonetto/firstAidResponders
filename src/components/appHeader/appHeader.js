import React from 'react';
import AppNav from "../appNav"
import './appHeader.scss';

function AppHeader() {
  return (
    <header className="blue floating">
        <div className="wrapper">
            <div className="main-header">
                <img src="logo.jpg" alt="BRAY CARDIAC FIRST RESPONDERS"></img>
                <div className="title">
                    <h1>BRAY CARDIAC FIRST RESPONDERS</h1>
                    <h2>Charities Regulator number 20157623</h2>
                </div>
            </div>
            <AppNav />
        </div>
    </header>
  );
}

export default AppHeader;
