import React from 'react'
import Header from '../components/header'
import InnerPageBanner from '../components/InnerPageBanner'
import Footer from '../components/Footer'
import RealEstateMarketValue from '../components/RealEstateMarketValue'
import FeatureSection from '../components/FeatureSection'
import PropertyList from '../components/PropertyList'

export default function About() {
    return (
        <div>
            <Header />
            <InnerPageBanner titleKey="About" />
            <RealEstateMarketValue />
            <FeatureSection />
            <PropertyList />
            <Footer />
        </div>
    )
}
