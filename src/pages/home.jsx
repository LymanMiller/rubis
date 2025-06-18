import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header';
import { EmblaCarousel } from '../components/EmblaCarousel';
import PropertySearchBar from '../components/searchBar';
import PropertyList from '../components/PropertyList';
import RealEstateMarketValue from '../components/RealEstateMarketValue';
import ValuationForm from '../components/ValuationForm';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import ServiceProvider from '../components/ServiceProvider';

export default function Home() {
    const navigate = useNavigate();

    const handleSend = () => {
        console.log("Sending...");
        navigate('/telSignin');
    };

    return (
        <div className=''>
            <Header />
            <EmblaCarousel />
            <PropertySearchBar />
            <PropertyList />
            <RealEstateMarketValue />
            <ValuationForm />
            <ServiceProvider />
            <Testimonials />
            <Footer />
        </div>
    );
}
