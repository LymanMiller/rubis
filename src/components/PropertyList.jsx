import React from "react";
import PropertyCard from "./PropertyCard";
import { useTranslation } from "react-i18next";

const demoProperties = [
    {
        id: 1,
        title: "Historic Villa",
        image: "/images/property1.jpg",
        price: "$990,000",
        bedrooms: 4,
        bathrooms: 2,
        area: 1200,
        statusTags: ["FEATURED", "FOR SALE", "HOT OFFER"],
    },
    {
        id: 2,
        title: "Luxury Home For Sale",
        image: "/images/property2.jpg",
        price: "$1,459,000",
        bedrooms: 4,
        bathrooms: 2,
        area: 1200,
        statusTags: ["FEATURED", "FOR SALE"],
    },
    {
        id: 3,
        title: "Amazing Villa for Sale",
        image: "/images/property3.jpg",
        price: "$1,459,000",
        bedrooms: 4,
        bathrooms: 2,
        area: 1200,
        statusTags: ["FEATURED", "FOR SALE"],
    },
    {
        id: 4,
        title: "Historic Villa",
        image: "/images/property1.jpg",
        price: "$990,000",
        bedrooms: 4,
        bathrooms: 2,
        area: 1200,
        statusTags: ["FEATURED", "FOR SALE", "HOT OFFER"],
    },
    {
        id: 5,
        title: "Luxury Home For Sale",
        image: "/images/property2.jpg",
        price: "$1,459,000",
        bedrooms: 4,
        bathrooms: 2,
        area: 1200,
        statusTags: ["FEATURED", "FOR SALE"],
    },
    {
        id: 6,
        title: "Amazing Villa for Sale",
        image: "/images/property3.jpg",
        price: "$1,459,000",
        bedrooms: 4,
        bathrooms: 2,
        area: 1200,
        statusTags: ["FEATURED", "FOR SALE"],
    },
];

const PropertyList = () => {
    const { t } = useTranslation();

    return (
        <div className="py-20 px-4 max-w-screen-xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-2">
                {t("propertyList.title")}
            </h2>
            <p className="text-center text-gray-500 mb-8">
                {t("propertyList.subtitle")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {demoProperties.map((property) => (
                    <PropertyCard key={property.id + Math.random()} property={property} />
                ))}
            </div>
        </div>
    );
};

export default PropertyList;
