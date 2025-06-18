import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header";

const PropertyDetail = () => {
    const { id } = useParams();
    // TODO: fetch actual property data from backend or state using `id`

    return (
        <>
            <Header />
            <div className="max-w-5xl pt-[120px] mx-auto p-6">
                <h1 className="text-3xl font-bold mb-4">Property #{id}</h1>
                <img
                    src={`/images/property${id}.jpg`}
                    alt=""
                    className="w-full h-[400px] object-cover rounded mb-6"
                />
                <p className="text-gray-700 leading-relaxed">
                    This is the property detail page. You can dynamically fetch and display
                    full info about the property based on this ID.
                </p>
            </div>
        </>
    );
};

export default PropertyDetail;
