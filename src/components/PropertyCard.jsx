import React, { useState } from "react";
import {
    FaBed,
    FaBath,
    FaRulerCombined,
    FaThumbsUp,
    FaThumbsDown,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PropertyCard = ({ property }) => {
    const {
        id,
        title,
        image,
        price,
        bedrooms,
        bathrooms,
        area,
        statusTags = [],
    } = property;

    const [likeStatus, setLikeStatus] = useState(null); // null | 'like' | 'dislike'
    const { t } = useTranslation();

    const handleLike = () => {
        setLikeStatus((prev) => (prev === "like" ? null : "like"));
    };

    const handleDislike = () => {
        setLikeStatus((prev) => (prev === "dislike" ? null : "dislike"));
    };

    return (
        <div className="bg-white rounded-md shadow hover:shadow-lg overflow-hidden transition-all duration-300">
            <div className="relative">
                <img src={image} alt={title} className="w-full h-56 object-cover" />
                <div className="absolute top-2 left-2 space-x-2 flex flex-wrap">
                    {statusTags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="text-xs bg-black/70 text-white px-2 py-1 rounded"
                        >
                            {t(`propertyCard.statusTags.${tag}`)}
                        </span>
                    ))}
                </div>
            </div>

            <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold text-gray-800">
                    {t(`propertyCard.propertyTitle.${title}`)}
                </h3>
                <p className="text-teal-700 font-bold">{price}</p>
                <div className="flex text-gray-500 text-sm items-center gap-4">
                    <span className="flex items-center gap-1">
                        <FaBed /> {bedrooms}
                    </span>
                    <span className="flex items-center gap-1">
                        <FaBath /> {bathrooms}
                    </span>
                    <span className="flex items-center gap-1">
                        <FaRulerCombined /> {area} sqft
                    </span>
                </div>

                <div className="flex justify-between items-center mt-2">
                    <Link
                        to={`/property/${id}`}
                        className="text-sm text-teal-600 hover:underline"
                    >
                        {t("propertyCard.viewDetails")}
                    </Link>
                    <div className="flex items-center gap-3 text-xl">
                        <button
                            onClick={handleLike}
                            className={`transition-all ${likeStatus === "like" ? "text-green-600" : "text-gray-400"}`}
                        >
                            <FaThumbsUp />
                        </button>
                        <button
                            onClick={handleDislike}
                            className={`transition-all ${likeStatus === "dislike" ? "text-red-600" : "text-gray-400"}`}
                        >
                            <FaThumbsDown />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;
