import React from 'react'
import Header from '../components/header'
import ContactUs from '../components/Contactus'
import Footer from '../components/Footer'
import InnerPageBanner from '../components/InnerPageBanner'

export default function Contact() {
    return (
        <>
            <Header />
            <InnerPageBanner titleKey="contact" />
            <ContactUs />
            <Footer />
        </>
    )
}
