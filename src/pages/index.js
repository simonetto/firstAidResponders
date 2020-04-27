import React from "react"
import { Helmet } from "react-helmet"
import AppHeader from "../components/appHeader"
import AppNav from "../components/appNav"
import AppMain from "../components/appMain"
import AppFooter from "../components/appFooter"

export default () => (
    <div className="application">
        <Helmet>
            <meta charSet="utf-8" />
            <title>First Aid Responders</title>
            <link rel="canonical" href="http://braycfr.ie" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        </Helmet>
        <AppHeader />
        <AppNav />
        <AppMain />
        <AppFooter />
    </div>
)
