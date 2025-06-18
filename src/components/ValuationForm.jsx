import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const ValuationForm = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        salutation: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        type: "",
        zip: "",
        city: "",
        bedrooms: "",
        bathrooms: "",
        budget: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // TODO: connect with backend
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-3xl mx-auto bg-white p-8 shadow-md rounded">
                <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
                    {t("valuation.title")}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Info */}
                    <div>
                        <h3 className="font-semibold text-sm mb-2">{t("valuation.personalInfo")}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <select name="salutation" value={formData.salutation} onChange={handleChange} className="input">
                                <option value="">{t("valuation.select")}</option>
                                <option value="Mr.">{t("valuation.mr")}</option>
                                <option value="Ms.">{t("valuation.ms")}</option>
                            </select>
                            <input
                                type="text"
                                name="firstName"
                                placeholder={t("valuation.firstName")}
                                value={formData.firstName}
                                onChange={handleChange}
                                className="input"
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder={t("valuation.lastName")}
                                value={formData.lastName}
                                onChange={handleChange}
                                className="input"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder={t("valuation.email")}
                                value={formData.email}
                                onChange={handleChange}
                                className="input md:col-span-2"
                            />
                            <input
                                type="text"
                                name="phone"
                                placeholder={t("valuation.phone")}
                                value={formData.phone}
                                onChange={handleChange}
                                className="input"
                            />
                        </div>
                    </div>

                    {/* Property Info */}
                    <div>
                        <h3 className="font-semibold text-sm mb-2">{t("valuation.propertyInfo")}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <select name="type" value={formData.type} onChange={handleChange} className="input">
                                <option value="">{t("valuation.type")}</option>
                                <option value="Apartment">{t("valuation.apartment")}</option>
                                <option value="Villa">{t("valuation.villa")}</option>
                                <option value="House">{t("valuation.house")}</option>
                            </select>
                            <input
                                type="text"
                                name="zip"
                                placeholder={t("valuation.zip")}
                                value={formData.zip}
                                onChange={handleChange}
                                className="input"
                            />
                            <input
                                type="text"
                                name="city"
                                placeholder={t("valuation.city")}
                                value={formData.city}
                                onChange={handleChange}
                                className="input"
                            />
                            <input
                                type="number"
                                name="bedrooms"
                                placeholder={t("valuation.bedrooms")}
                                value={formData.bedrooms}
                                onChange={handleChange}
                                className="input"
                            />
                            <input
                                type="number"
                                name="bathrooms"
                                placeholder={t("valuation.bathrooms")}
                                value={formData.bathrooms}
                                onChange={handleChange}
                                className="input"
                            />
                            <input
                                type="text"
                                name="budget"
                                placeholder={t("valuation.budget")}
                                value={formData.budget}
                                onChange={handleChange}
                                className="input"
                            />
                        </div>
                    </div>

                    {/* Submit */}
                    <div className="pt-2">
                        <button
                            type="submit"
                            className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition"
                        >
                            {t("valuation.submit")}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ValuationForm;
