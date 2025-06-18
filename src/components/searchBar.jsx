import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useTranslation } from "react-i18next";

export default function PropertySearchBar() {
    const [loading, setLoading] = useState(false);
    const { t } = useTranslation();

    const [filters, setFilters] = useState({
        query: "",
        city: "",
        status: "",
        type: "",
        bedrooms: "",
        minArea: "",
        maxArea: "",
        minPrice: "",
        maxPrice: "",
    });

    const handleChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const handleSearch = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            console.log("Filters applied:", filters);
        }, 2000);
    };

    return (
        <div className="bg-white px-6 py-6 shadow-md rounded-lg w-full max-w-full mx-auto space-y-4 text-sm font-light">
            {/* Row 1 */}
            <div className="flex flex-wrap gap-4 items-center justify-center">
                <div className="flex items-center border rounded-md px-4 py-2 w-full md:w-[350px]">
                    <FiSearch className="text-gray-400 mr-2" />
                    <input
                        name="query"
                        placeholder={t('searchbar.placeholder')}
                        onChange={handleChange}
                        className="w-full outline-none text-gray-600 placeholder-gray-400"
                    />
                </div>

                <select name="city" onChange={handleChange} className="select-wide">
                    <option>{t('searchbar.allCities')}</option>
                    <option>New York</option>
                    <option>Chicago</option>
                </select>

                <select name="status" onChange={handleChange} className="select-wide">
                    <option>{t('searchbar.status')}</option>
                    <option>{t('searchbar.forSale')}</option>
                    <option>{t('searchbar.forRent')}</option>
                </select>

                <select name="type" onChange={handleChange} className="select-wide">
                    <option>{t('searchbar.type')}</option>
                    <option>{t('searchbar.villa')}</option>
                    <option>{t('searchbar.house')}</option>
                </select>

                <button
                    onClick={handleSearch}
                    className="bg-teal-600 text-white px-6 py-2 rounded-md min-w-[100px] flex items-center justify-center"
                >
                    {loading ? (
                        <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                        t('searchbar.search')
                    )}
                </button>
            </div>

            {/* Row 2 */}
            <div className="flex flex-wrap gap-4 items-center justify-center">
                <select name="bedrooms" onChange={handleChange} className="select-wide-r2">
                    <option>{t('searchbar.bedrooms')}</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3+</option>
                </select>

                <input
                    type="number"
                    name="minArea"
                    placeholder={t('searchbar.minArea')}
                    onChange={handleChange}
                    className="input-wide-r2"
                />

                <input
                    type="number"
                    name="maxArea"
                    placeholder={t('searchbar.maxArea')}
                    onChange={handleChange}
                    className="input-wide-r2"
                />

                <select name="minPrice" onChange={handleChange} className="select-wide-r2">
                    <option>{t('searchbar.minPrice')}</option>
                    <option>100000</option>
                    <option>200000</option>
                </select>

                <select name="maxPrice" onChange={handleChange} className="input-wide-r2">
                    <option>{t('searchbar.maxPrice')}</option>
                    <option>300000</option>
                    <option>500000</option>
                </select>
            </div>
        </div>
    );
}
