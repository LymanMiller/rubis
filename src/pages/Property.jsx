import React from 'react'
import Header from '../components/header'
import InnerPageBanner from '../components/InnerPageBanner'
import PropertyList from '../components/PropertyList'
import Footer from '../components/Footer'

export default function Property() {
  return (
    <>
      <Header />
      <InnerPageBanner title="Properties" />
      <PropertyList />
      <Footer />
    </>

  )
}
