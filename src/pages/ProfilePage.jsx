// src/App.js
import React from 'react';
import { ArrowUpward } from '@mui/icons-material';
import Header from '../components/header';
import Footer from '../components/Footer';

const ProfilePage = () => {
    return (
        <>
            <Header />
            <div className="max-w-md py-44  mx-auto p-6 bg-white rounded-lg shadow-md">
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">David Anderson</h1>
                    <p className="text-gray-600">New York City, NY</p>
                </div>

                <button className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md transition duration-200">
                    Edit Profile
                </button>
            </div>
            <Footer />
        </>
    );
};

export default ProfilePage;
