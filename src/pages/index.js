import React from "react"
import { Helmet } from "react-helmet"
import AppHeader from "../components/appHeader"
import AppMain from "../components/appMain"
import AppFooter from "../components/appFooter"

export default () => (
    <div className="application">
        <Helmet>
            <meta charSet="utf-8" />
            <title>Bray Cardiac First Responders</title>
            <link rel="canonical" href="http://braycfr.ie" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        </Helmet>
        <AppHeader />
        <AppMain />
        <AppFooter />
    </div>
)
