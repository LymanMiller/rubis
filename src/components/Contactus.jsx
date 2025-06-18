import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useTranslation } from "react-i18next";

const ContactUs = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen flex items-center bg-gray-50 py-0 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 bg-white shadow-lg rounded-lg overflow-hidden">

                {/* Contact Form */}
                <div className="lg:col-span-2 p-6 sm:p-10 bg-gray-100">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">{t("contactPage.title")}</h2>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-medium text-gray-700">{t("contactPage.firstName")}</label>
                                <input
                                    type="text"
                                    placeholder={t("contactPage.firstName")}
                                    className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700">{t("contactPage.lastName")}</label>
                                <input
                                    type="text"
                                    placeholder={t("contactPage.lastName")}
                                    className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-700">{t("contactPage.email")}</label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-700">{t("contactPage.message")}</label>
                            <textarea
                                rows="4"
                                placeholder={t("contactPage.messagePlaceholder")}
                                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition"
                        >
                            {t("contactPage.submit")}
                        </button>
                    </form>
                </div>

                {/* Contact Info + Map + Socials */}
                <div className="bg-gray-200 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{t("contactPage.headOffice")}</h3>
                        <p className="text-gray-700 mb-4 text-sm">
                            {t("contactPage.address")}
                        </p>

                        <div className="mb-4">
                            <p className="font-semibold text-gray-800">{t("contactPage.person1.name")}</p>
                            <p className="text-sm text-gray-600">{t("contactPage.person1.role")}</p>
                            <p className="text-sm text-gray-600">amy.miller@houzez.com</p>
                        </div>

                        <div>
                            <p className="font-semibold text-gray-800">{t("contactPage.person2.name")}</p>
                            <p className="text-sm text-gray-600">{t("contactPage.person2.role")}</p>
                            <p className="text-sm text-gray-600">kyle.parker@houzez.com</p>
                        </div>
                    </div>

                    <div className="flex space-x-4 pt-4">
                        <a href="#" className="text-gray-700 hover:text-teal-600"><FacebookIcon /></a>
                        <a href="#" className="text-gray-700 hover:text-teal-600"><TwitterIcon /></a>
                        <a href="#" className="text-gray-700 hover:text-teal-600"><LinkedInIcon /></a>
                        <a href="#" className="text-gray-700 hover:text-teal-600"><InstagramIcon /></a>
                    </div>

                    <div className="pt-4">
                        <iframe
                            title="Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.554859295242!2d-80.19365932493434!3d25.761681308135943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b69c1674cd37%3A0xc18798aa1f470bdd!2s1584%20Biscayne%20Blvd%2C%20Miami%2C%20FL%2033176%2C%20USA!5e0!3m2!1sen!2s!4v1683053946925!5m2!1sen!2s"
                            className="w-full h-48 rounded-md border-none"
                            loading="lazy"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
